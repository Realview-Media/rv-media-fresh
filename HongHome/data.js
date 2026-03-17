var APP_DATA = {
  "scenes": [
   {
      "id": "0-lobby",
      "name": "Lobby",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043,
      "initialViewParameters": {
        "yaw": 1.7181760118483744,   /* <--- CHANGED: Matches hotspot location */
        "pitch": 0.046407348313234564, /* <--- CHANGED: Centers vertically too */
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.7181760118483744,
          "pitch": 0.046407348313234564,
          "rotation": 0,
          "target": "7-1st-floor-elevator"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2044,
      "initialViewParameters": {
        "yaw": 2.0267794064322757,
        "pitch": 0.02130026235689897,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.4040494222029416,
          "pitch": 0.1687067585591464,
          "rotation": 0,
          "target": "2-img_1696-panorama"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-img_1696-panorama",
      "name": "IMG_1696 Panorama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2044.5,
      "initialViewParameters": {
        "yaw": -2.1048469948405515,
        "pitch": 0.004695047560442589,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.2269838829053796,
          "pitch": 0.10317380635764195,
          "rotation": 0,
          "target": "3-bedroom"
        },
        {
          "yaw": -2.789887807865311,
          "pitch": 0.16074388338600798,
          "rotation": 0,
          "target": "1-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2045.5,
      "initialViewParameters": {
        "yaw": 0.8646092602187245,
        "pitch": -0.022263561892831518,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.4570854586421769,
          "pitch": 0.09775236041378932,
          "rotation": 0,
          "target": "2-img_1696-panorama"
        },
        {
          "yaw": 3.0229573645058405,
          "pitch": 0.1478091232636629,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2044.5,
      "initialViewParameters": {
        "yaw": -0.8082216997696801,
        "pitch": -0.007421069095610022,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.639097937913629,
          "pitch": 0.1261459330484911,
          "rotation": 0,
          "target": "3-bedroom"
        },
        {
          "yaw": 2.353765073066307,
          "pitch": 0.1472425462010527,
          "rotation": 0,
          "target": "5-room-303"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-room-303",
      "name": "Room 303",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2042.5,
      "initialViewParameters": {
        "yaw": 2.804736401325636,
        "pitch": 0.03188929773263993,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.935714860186862,
          "pitch": 0.15639183857252625,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 0.13952501629239755,
          "pitch": 0.06615735998601835,
          "rotation": 0,
          "target": "6-level-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-level-3",
      "name": "Level 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2043,
      "initialViewParameters": {
        "yaw": 1.703135498082406,
        "pitch": 0.009938320777251874,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.3969577817521763,
          "pitch": 0.06776394551678067,
          "rotation": 0,
          "target": "5-room-303"
        },
        {
          "yaw": 3.021635202342928,
          "pitch": 0.11456141482894111,
          "rotation": 0,
          "target": "7-1st-floor-elevator"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-1st-floor-elevator",
      "name": "1st Floor Elevator",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2040.5,
      "initialViewParameters": {
        "yaw": 2.9850012248968785,
        "pitch": 0.016528744803853357,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.328697128494108,
          "pitch": 0.07043280297542864,
          "rotation": 0,
          "target": "6-level-3"
        },
        {
          "yaw": -2.4279558667116437,
          "pitch": 0.09466815317212962,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
