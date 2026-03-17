(function() {

  // Initialize viewer
  var viewer = new Marzipano.Viewer(document.getElementById('pano'));

  // Build scenes from data.js
  var scenes = APP_DATA.scenes.map(function(data) {
    var source = Marzipano.ImageUrlSource.fromString(
      "tiles/" + data.id + "/{z}/{f}/{y}/{x}.jpg"
    );
    var geometry = new Marzipano.CubeGeometry(data.levels);
    var limiter = Marzipano.util.compose(
      Marzipano.RectilinearView.limit.traditional(data.faceSize, 120*Math.PI/180),
      Marzipano.RectilinearView.limit.vfov(0*Math.PI/180, 100*Math.PI/180)
    );
    var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);
    var scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });
    // Link hotspots
    data.linkHotspots.forEach(function(hs) {
      var element = createLinkHotspotElement(hs);
      scene.hotspotContainer().createHotspot(element, { yaw: hs.yaw, pitch: hs.pitch });
    });
    // Info hotspots
    data.infoHotspots.forEach(function(hs) {
      var element = createInfoHotspotElement(hs);
      scene.hotspotContainer().createHotspot(element, { yaw: hs.yaw, pitch: hs.pitch });
    });
    return { data: data, scene: scene, view: view };
  });

  // Global accessors for menu script
  window.findSceneById = function(id) {
    return scenes.find(function(s) { return s.data.id === id; });
  };

  window.switchScene = function(sceneObj) {
    if (!sceneObj) return;
    sceneObj.scene.switchTo();
    document.querySelector('.sceneName').textContent = sceneObj.data.name;
  };

  // Initial scene
  if (scenes.length > 0) {
    switchScene(scenes[0]);
  }

  // --- Hotspot elements ---
  function createLinkHotspotElement(hotspot) {
    var wrapper = document.createElement('div');
    wrapper.classList.add('link-hotspot');

    var icon = document.createElement('img');
    icon.src = 'img/link.png';
    icon.classList.add('link-hotspot-icon');
    wrapper.appendChild(icon);

    var tooltip = document.createElement('div');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = hotspot.text || '';
    wrapper.appendChild(tooltip);

    wrapper.addEventListener('click', function() {
      var dest = findSceneById(hotspot.target);
      if (dest) switchScene(dest);
    });

    return wrapper;
  }

  function createInfoHotspotElement(hotspot) {
    var wrapper = document.createElement('div');
    wrapper.classList.add('info-hotspot');
    wrapper.classList.add('visible');

    var header = document.createElement('div');
    header.classList.add('info-hotspot-header');
    wrapper.appendChild(header);

    var iconWrapper = document.createElement('div');
    iconWrapper.classList.add('info-hotspot-icon-wrapper');
    header.appendChild(iconWrapper);

    var icon = document.createElement('img');
    icon.src = 'img/info.png';
    icon.classList.add('info-hotspot-icon');
    iconWrapper.appendChild(icon);

    var titleWrapper = document.createElement('div');
    titleWrapper.classList.add('info-hotspot-title-wrapper');
    header.appendChild(titleWrapper);

    var title = document.createElement('div');
    title.classList.add('info-hotspot-title');
    title.innerHTML = hotspot.title;
    titleWrapper.appendChild(title);

    var text = document.createElement('div');
    text.classList.add('info-hotspot-text');
    text.innerHTML = hotspot.text;
    wrapper.appendChild(text);

    return wrapper;
  }

  // --- Touch event stop helper ---
  function stopTouchAndScrollEventPropagation(element) {
    ['touchstart', 'touchmove', 'touchend', 'touchcancel', 'wheel', 'mousewheel']
      .forEach(evt => element.addEventListener(evt, e => e.stopPropagation()));
  }

  // --- Autorotate, fullscreen, controls ---
  var autorotate = Marzipano.autorotate({ yawSpeed: 0.03, targetPitch: 0, targetFov: Math.PI/2 });
  var autorotateToggleElement = document.getElementById('autorotateToggle');
  autorotateToggleElement.addEventListener('click', function() {
    if (autorotateToggleElement.classList.contains('enabled')) {
      autorotateToggleElement.classList.remove('enabled');
      viewer.stopMovement();
      viewer.setIdleMovement(Infinity);
    } else {
      autorotateToggleElement.classList.add('enabled');
      viewer.setIdleMovement(3000, autorotate);
    }
  });

  if (screenfull.enabled) {
    var fsToggle = document.getElementById('fullscreenToggle');
    fsToggle.style.display = 'block';
    fsToggle.addEventListener('click', function() {
      screenfull.toggle();
    });
  }

  // --- ✅ MENU TOGGLE WITH ARROW DIRECTION FIX ---
  const menu = document.getElementById('sceneList');
  const menuToggle = document.getElementById('sceneListToggle');
  const toggleIconOff = menuToggle.querySelector('.icon.off');
  const toggleIconOn = menuToggle.querySelector('.icon.on');

  menuToggle.addEventListener('click', () => {
    const isHidden = menu.classList.toggle('hide');
    // toggle arrow icon direction
    if (isHidden) {
      toggleIconOff.style.transform = 'rotate(0deg)';   // ► pointing right when hidden
      toggleIconOn.style.transform = 'rotate(0deg)';
    } else {
      toggleIconOff.style.transform = 'rotate(180deg)'; // ◄ pointing left when visible
      toggleIconOn.style.transform = 'rotate(180deg)';
    }
  });

})();



