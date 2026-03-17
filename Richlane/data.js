var APP_DATA = {
  "scenes": [
    {
      "id": "0-pool-1",
      "name": "Pool 1",
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
      "faceSize": 2039.5,
      "initialViewParameters": {
        "yaw": -0.9680756732649929,
        "pitch": -0.0352500782041254,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.3610183910446647,
          "pitch": 0.030929516970140014,
          "rotation": 0,
          "target": "1-pool"
        },
        {
          "yaw": 3.0678945156034843,
          "pitch": 0.0812247414518179,
          "rotation": 0,
          "target": "2-ground-elevator"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pool",
      "name": "Pool",
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
        "yaw": -1.9396907698791406,
        "pitch": 0.008420059166159177,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.6808701420682164,
          "pitch": 0.050935694508492446,
          "rotation": 0,
          "target": "0-pool-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-ground-elevator",
      "name": "Ground Elevator",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.987923689495198,
          "pitch": 0.029604301726351423,
          "rotation": 0,
          "target": "3-ground-elevator-1"
        },
        {
          "yaw": -1.6038844942409085,
          "pitch": 0.1465103251028932,
          "rotation": 0,
          "target": "1-pool"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ground-elevator-1",
      "name": "Ground Elevator 1",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.12371737585720943,
          "pitch": 0.00661072055669365,
          "rotation": 0,
          "target": "2-ground-elevator"
        },
        {
          "yaw": -2.4500132713501994,
          "pitch": 0.07969876054400515,
          "rotation": 0,
          "target": "4-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-lobby",
      "name": "Lobby",
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
      "faceSize": 2041.5,
      "initialViewParameters": {
        "yaw": 0.26716963165144136,
        "pitch": -0.022263207286830067,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -3.1098722808652024,
          "pitch": 0.09997424844777392,
          "rotation": 0,
          "target": "5-entrance"
        },
        {
          "yaw": 0.9051256371585126,
          "pitch": 0.038088466077294214,
          "rotation": 0,
          "target": "3-ground-elevator-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-entrance",
      "name": "Entrance",
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
        "yaw": -1.7472707450384277,
        "pitch": -0.016697405465114556,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.770608154663254,
          "pitch": -0.028617858280846065,
          "rotation": 0,
          "target": "4-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-2-bedroom-2",
      "name": "2 Bedroom 2",
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
      "faceSize": 2045,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5817607846018014,
          "pitch": 0.15226373457955056,
          "rotation": 0,
          "target": "7-2-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-2-bedroom",
      "name": "2 Bedroom",
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
        "yaw": -2.9242026175242426,
        "pitch": 0.0032823959461474317,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.491915315649498,
          "pitch": 0.10831425599849531,
          "rotation": 0,
          "target": "8-2-bedroom-1"
        },
        {
          "yaw": -2.3347600019001007,
          "pitch": 0.13487764952659553,
          "rotation": 0,
          "target": "6-2-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-2-bedroom-1",
      "name": "2 Bedroom 1",
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
      "faceSize": 2043.5,
      "initialViewParameters": {
        "yaw": 1.7173538924168916,
        "pitch": -0.020481348177526115,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.980200752361613,
          "pitch": 0.20362271691380052,
          "rotation": 0,
          "target": "7-2-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-studio-1",
      "name": "Studio 1",
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
        "yaw": 0.2429988700341248,
        "pitch": -0.0074210690956064695,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.32709533982243144,
          "pitch": 0.13328336582492106,
          "rotation": 0,
          "target": "10-studio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-studio",
      "name": "Studio",
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
        "yaw": 0.35117593784086054,
        "pitch": 0.01133774445162139,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.9243463574238646,
          "pitch": 0.11697305187102813,
          "rotation": 0,
          "target": "9-studio-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-1-bedroom",
      "name": "1 Bedroom",
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
        "yaw": 0.10606231608273653,
        "pitch": 0.03710534547805011,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.06421141585802737,
          "pitch": 0.16500096647201268,
          "rotation": 0,
          "target": "12-1-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-1-bedroom-1",
      "name": "1 Bedroom 1",
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
        "yaw": -0.867294382144868,
        "pitch": -0.005565801821692418,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.5582721348923503,
          "pitch": 0.15787829733820935,
          "rotation": 0,
          "target": "13-1-bedroom-2"
        },
        {
          "yaw": 2.973070705996207,
          "pitch": 0.11319183033837987,
          "rotation": 0,
          "target": "11-1-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-1-bedroom-2",
      "name": "1 Bedroom 2",
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
      "faceSize": 2047,
      "initialViewParameters": {
        "yaw": 0.3218492351356641,
        "pitch": -0.023331411013694847,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 2.959656452010041,
          "pitch": 0.13454817667507335,
          "rotation": 0,
          "target": "12-1-bedroom-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Richlane Residences",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
