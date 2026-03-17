// Robust index.js — defensive, waits for load, dynamic screenfull load, better logging
(function () {
  "use strict";

  function log(...args) { console.log("[tour] ", ...args); }
  function warn(...args) { console.warn("[tour] ", ...args); }
  function err(...args) { console.error("[tour] ", ...args); }

  window.addEventListener("load", function () {
    try {
      if (typeof Marzipano === "undefined") {
        err("Marzipano is not loaded (marzipano.js).");
        return;
      }
      if (typeof APP_DATA === "undefined") {
        err("APP_DATA (data.js) not found.");
        return;
      }

      function ensureScreenfull(cb) {
        if (window.screenfull && window.screenfull.isEnabled !== undefined) {
          return cb();
        }
        var s = document.createElement("script");
        s.src = "https://cdn.jsdelivr.net/npm/screenfull@6.2.0/dist/screenfull.min.js";
        s.onload = function () { setTimeout(cb, 50); };
        s.onerror = function () { warn("Failed to load screenfull"); cb(); };
        document.head.appendChild(s);
      }

      ensureScreenfull(initTour);
    } catch (e) {
      err("Initialization error:", e);
    }
  });

  function initTour() {
    try {
      var panoEl = document.getElementById("pano");
      if (!panoEl) return err("No #pano element found.");
      var viewer = new Marzipano.Viewer(panoEl);
      var data = APP_DATA;
      var scenes = [];

      (data.scenes || []).forEach(function (sceneData) {
        try {
          var source = Marzipano.ImageUrlSource.fromString(
            "tiles/" + sceneData.id + "/{z}/{f}/{y}/{x}.jpg"
          );
          var geometry = new Marzipano.CubeGeometry(sceneData.levels);
          var limiter = Marzipano.RectilinearView.limit.traditional(
            sceneData.faceSize,
            (100 * Math.PI) / 180
          );
          var view = new Marzipano.RectilinearView(sceneData.initialViewParameters, limiter);
          var scene = viewer.createScene({
            source: source,
            geometry: geometry,
            view: view,
            pinFirstLevel: true
          });

          (sceneData.linkHotspots || []).forEach(function (hotspot) {
            var element = createLinkHotspotElement(hotspot);
            scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
          });

          (sceneData.infoHotspots || []).forEach(function (hotspot) {
            var element = createInfoHotspotElement(hotspot);
            scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
          });

          scenes.push({ id: sceneData.id, name: sceneData.name, scene: scene, data: sceneData });
        } catch (e) {
          warn("Failed to create scene:", sceneData.id, e);
        }
      });

      if (!scenes.length) return err("No scenes created.");

      function findSceneById(id) {
        var found = scenes.find((s) => s.id === id);
        return found ? found.scene : null;
      }

      var menuIds = [
        "5-entrance", "4-lobby", "1-pool", "10-studio", "11-1-bedroom", "7-2-bedroom"
      ];

      var titleEl = document.querySelector(".sceneName");
      if (!titleEl) {
        var titleBar = document.getElementById("titleBar") || document.body;
        titleEl = document.createElement("div");
        titleEl.className = "sceneName";
        titleBar.appendChild(titleEl);
      }
      titleEl.style.display = "block";

      function switchScene(sceneObj) {
        if (!sceneObj) return;
        sceneObj.switchTo();
        var sceneEntry = scenes.find((s) => s.scene === sceneObj);
        if (!sceneEntry && sceneObj._data?.id) {
          sceneEntry = scenes.find((s) => s.id === sceneObj._data.id);
        }
        var sceneId = sceneEntry ? sceneEntry.id : sceneObj._data?.id || "unknown";
        var sceneName = sceneEntry ? sceneEntry.name : "";
        if (menuIds.indexOf(sceneId) !== -1) titleEl.textContent = sceneName;
        else titleEl.textContent = "";
      }

      window.findSceneById = (id) => findSceneById(id);
      window.switchScene = (sceneObj) => switchScene(sceneObj);

      var startScene = findSceneById("5-entrance") || scenes[0].scene;
      if (startScene) switchScene(startScene);

      // --- Autorotate (uses .enabled CSS toggle) ---
      var autorotate = Marzipano.autorotate({
        yawSpeed: 0.03,
        targetPitch: 0,
        targetFov: Math.PI / 2
      });
      var autorotateToggle = document.getElementById("autorotateToggle");
      if (!autorotateToggle) warn("#autorotateToggle not found");
      else {
        autorotateToggle.addEventListener("click", function () {
          if (autorotateToggle.classList.contains("enabled")) {
            autorotateToggle.classList.remove("enabled");
            viewer.stopMovement();
            viewer.stopAutorotate();
            log("Autorotate stopped");
          } else {
            autorotateToggle.classList.add("enabled");
            viewer.startMovement(autorotate);
            viewer.setIdleMovement(3000, autorotate);
            log("Autorotate started");
          }
        });
      }

      // --- Fullscreen (fixed with native fallback) ---
      var fullscreenToggle = document.getElementById("fullscreenToggle");
      if (!fullscreenToggle) warn("#fullscreenToggle not found");
      else {
        fullscreenToggle.addEventListener("click", function () {
          // Prefer screenfull if available
          if (window.screenfull && screenfull.isEnabled) {
            screenfull.toggle(document.documentElement);
          } 
          // Fallback to native fullscreen API
          else {
            try {
              if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen()
                  .then(() => log("Entered native fullscreen"))
                  .catch(err => warn("Native fullscreen failed:", err));
              } else {
                document.exitFullscreen()
                  .then(() => log("Exited native fullscreen"))
                  .catch(err => warn("Exit native fullscreen failed:", err));
              }
            } catch (e) {
              warn("Fullscreen not supported in this environment.", e);
            }
          }
        });

        // Update icons on fullscreen change
        function updateFullscreenIcons(isFull) {
          if (isFull) fullscreenToggle.classList.add("enabled");
          else fullscreenToggle.classList.remove("enabled");
        }

        // Handle both APIs
        document.addEventListener("fullscreenchange", () => updateFullscreenIcons(!!document.fullscreenElement));
        if (window.screenfull && screenfull.isEnabled) {
          screenfull.on("change", () => updateFullscreenIcons(screenfull.isFullscreen));
        }
      }

      // --- Sidebar ---
      var sceneList = document.getElementById("sceneList");
      var sceneListToggle = document.getElementById("sceneListToggle");
      if (!sceneListToggle) warn("#sceneListToggle not found");
      else {
        var iconOff = sceneListToggle.querySelector(".icon.off");
        var iconOn = sceneListToggle.querySelector(".icon.on");
        sceneListToggle.addEventListener("click", function () {
          if (!sceneList) return;
          var hidden = sceneList.classList.toggle("hidden");
          sceneListToggle.classList.toggle("enabled", !hidden);
          if (hidden) {
            if (iconOff) iconOff.style.display = "block";
            if (iconOn) iconOn.style.display = "none";
          } else {
            if (iconOff) iconOff.style.display = "none";
            if (iconOn) iconOn.style.display = "block";
          }
        });
      }

      // --- Menu links ---
      var links = document.querySelectorAll(".scene-link");
      if (!links.length) warn("No .scene-link found.");
      links.forEach(function (link) {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          var id = link.getAttribute("data-id");
          var s = findSceneById(id);
          if (s) switchScene(s);
          document.querySelectorAll(".scene-link").forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
        });
      });

      // --- Hide view control buttons ---
      document.querySelectorAll(".viewControlButton").forEach((btn) => (btn.style.display = "none"));

      // --- Hotspot helpers ---
      function createLinkHotspotElement(hotspot) {
        var wrapper = document.createElement("div");
        wrapper.classList.add("link-hotspot");
        var icon = document.createElement("img");
        icon.src = "img/link.png";
        icon.classList.add("link-hotspot-icon");
        wrapper.appendChild(icon);
        if (hotspot?.target) {
          wrapper.addEventListener("click", function () {
            var target = findSceneById(hotspot.target);
            if (target) switchScene(target);
          });
        }
        return wrapper;
      }

      function createInfoHotspotElement(hotspot) {
        var wrapper = document.createElement("div");
        wrapper.classList.add("info-hotspot");
        var header = document.createElement("div");
        header.classList.add("info-hotspot-header");
        wrapper.appendChild(header);
        var icon = document.createElement("img");
        icon.src = "img/info.png";
        icon.classList.add("info-hotspot-icon");
        header.appendChild(icon);
        var title = document.createElement("div");
        title.classList.add("info-hotspot-title");
        title.textContent = hotspot?.title || "";
        header.appendChild(title);
        var text = document.createElement("div");
        text.classList.add("info-hotspot-text");
        text.innerHTML = hotspot?.text || "";
        wrapper.appendChild(text);
        header.addEventListener("click", function () { wrapper.classList.toggle("visible"); });
        stopTouchAndScrollEventPropagation(wrapper);
        return wrapper;
      }

      function stopTouchAndScrollEventPropagation(element) {
        ["touchstart", "touchmove", "touchend", "touchcancel", "wheel", "mousewheel"]
          .forEach((evt) => element.addEventListener(evt, (e) => e.stopPropagation()));
      }

      log("Tour initialized successfully. Scenes:", scenes.length);
    } catch (e) {
      err("Error in initTour:", e);
    }
  }
})();


