var APP_DATA = {
  "scenes": [
    {
      "id": "1-lobby",
      "name": "Lobby",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2048,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 1.41, "pitch": 0.07, "rotation": 0, "target": "75-lobby-3" },
        { "yaw": -0.21876816017535994, "pitch": 0.04010236400281997, "rotation": 0, "target": "74-lobby-2" },
        { "yaw": -1.9704175616808222, "pitch": 0.08282052680663554, "rotation": 0, "target": "0-entrance" }
      ],
      "infoHotspots": []
    },
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2038,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": -0.25105890009457, "pitch": -0.014842138191218268, "rotation": 0, "target": "1-lobby" }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-saigon-5",
      "name": "Saigon 5",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2040.5,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 1.592789816802524, "pitch": 0.1239267046413346, "rotation": 0, "target": "6-saigon-4-entrance" }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-hallway-to-conference",
      "name": "Hallway To Conference",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": -1.5741429142836552, "pitch": 0.07109420789383236, "rotation": 0, "target": "68-hallway-to-conference-2" },
        { "yaw": 0.01997099037885519, "pitch": 0.04741819235176159, "rotation": 0, "target": "4-saigon-3-entrance" }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-saigon-3-entrance",
      "name": "Saigon 3 Entrance",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2039.5,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 0.08969073366979075, "pitch": 0.03362592946623266, "rotation": 0, "target": "3-hallway-to-conference" },
        { "yaw": -2.978968979672885, "pitch": 0.15902472133627832, "rotation": 0, "target": "5-saigon-3" },
        { "yaw": -1.5444235850595973, "pitch": 0.053484963479821346, "rotation": 0, "target": "6-saigon-4-entrance" }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-saigon-3",
      "name": "Saigon 3",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2044,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 1.6447931149696569, "pitch": 0.16814742920485592, "rotation": 0, "target": "4-saigon-3-entrance" }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-saigon-4-entrance",
      "name": "Saigon 4 Entrance",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2046,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": -1.517988424665198, "pitch": 0.04877367260477783, "rotation": 0, "target": "4-saigon-3-entrance" },
        { "yaw": 0.03773200343466954, "pitch": 0.12799816002651276, "rotation": 0, "target": "7-saigon-4" },
        { "yaw": 1.6255015598567777, "pitch": 0.13727257840412932, "rotation": 0, "target": "2-saigon-5" }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-saigon-4",
      "name": "Saigon 4",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2048,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 0.945824198070623, "pitch": 0.08449672366633365, "rotation": 0, "target": "6-saigon-4-entrance" }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-mai-suite-1",
      "name": "Mai Suite 1",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2042.5,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 0.11188816444230376, "pitch": 0.12259504759231632, "rotation": 0, "target": "23-mai-suite-3" },
        { "yaw": -1.5586314453866557, "pitch": 0.16124168165884356, "rotation": 0, "target": "9-mai-suite-2" }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-mai-suite-2",
      "name": "Mai suite 2",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043.5,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": -2.9095835968054686, "pitch": 0.1075036356994179, "rotation": 0, "target": "8-mai-suite-1" },
        { "yaw": 1.7222537369671516, "pitch": 0.10500374006713464, "rotation": 0, "target": "22-mai-suite-" }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-pool-entrance",
      "name": "Pool Entrance",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2042,
      "initialViewParameters": { "yaw": -2.416816281371087, "pitch": 0.00927633636951164, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": -2.2711063538431873, "pitch": 0.07062347632914268, "rotation": 0, "target": "11-pool-1" },
        { "yaw": -1.5593315690290943, "pitch": 0.10751191380660785, "rotation": 0, "target": "55-spa" },
        { "yaw": 3.0236273137508256, "pitch": 0.06588267954397509, "rotation": 0, "target": "12-gym" }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-pool-1",
      "name": "Pool 1",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2041,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 2.3406788981534667, "pitch": 0.10444669111097582, "rotation": 0, "target": "10-pool-entrance" },
        { "yaw": 0.4893714266249969, "pitch": -0.09131466182086356, "rotation": 0, "target": "54-pool-" }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-gym",
      "name": "Gym",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2040,
      "initialViewParameters": { "yaw": -2.4782585489894533, "pitch": 0.0037105345478014584, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 2.9722467843142972, "pitch": 0.08340961723854079, "rotation": 0, "target": "10-pool-entrance" }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-rooftop-entrance",
      "name": "Rooftop Entrance",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2044,
      "initialViewParameters": { "yaw": 3.1268431401240377, "pitch": -0.01113467352955766, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": -3.09997132112305, "pitch": 0.12222211761335267, "rotation": 0, "target": "14-mai-sky-rooftop-bar" },
        { "yaw": -1.7036912050110367, "pitch": 0.45268214494600656, "rotation": 0, "target": "48-executive-lounge-2" }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-mai-sky-rooftop-bar",
      "name": "Mai Sky Rooftop Bar",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043.5,
      "initialViewParameters": { "yaw": -2.443005255759335, "pitch": -0.025753683775111114, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 1.523880603967986, "pitch": 0.08510633852905869, "rotation": 0, "target": "13-rooftop-entrance" },
        { "yaw": 3.127089666491539, "pitch": 0.04819812879776819, "rotation": 0, "target": "15-rooftop-2" }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-rooftop-2",
      "name": "Rooftop 2",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2042.5,
      "initialViewParameters": { "yaw": -0.3651779144096672, "pitch": 0.003710534547805011, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 0.2789843687942213, "pitch": 0.055445802430238444, "rotation": 0, "target": "14-mai-sky-rooftop-bar" }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-1-bedroom-50m-1",
      "name": "1 Bedroom (50m²) 1",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043.5,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": -1.5212759026033318, "pitch": 0.17711602044795605, "rotation": 0, "target": "17-1-bedroom-50m" }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-1-bedroom-50m",
      "name": "1 Bedroom (50m²)",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2048,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 1.8007267382819814, "pitch": 0.24722186491945308, "rotation": 0, "target": "16-1-bedroom-50m-1" }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-premium-twin",
      "name": "Premium Twin",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2041.5,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "19-1-bedroom-75m-2",
      "name": "1 Bedroom (75m²) 2",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 0.8447106362721595, "pitch": 0.11711717511036923, "rotation": 0, "target": "20-1-bedroom-75m-1" }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-1-bedroom-75m-1",
      "name": "1 Bedroom (75m²) 1",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2041,
      "initialViewParameters": { "yaw": -0.9777862708602214, "pitch": -0.012992934447016324, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": -3.047385252585908, "pitch": 0.14533395917256087, "rotation": 0, "target": "19-1-bedroom-75m-2" },
        { "yaw": -1.215119007138032, "pitch": 0.15369423384511194, "rotation": 0, "target": "21-1-bedrooms-75m" }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-1-bedrooms-75m",
      "name": "1 Bedrooms (75m)",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": -2.9513461064393702, "pitch": 0.16037755688536137, "rotation": 0, "target": "20-1-bedroom-75m-1" }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-mai-suite-",
      "name": "Mai Suite ",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2045.5,
      "initialViewParameters": { "yaw": -2.1110702346940506, "pitch": 0.01818033342726011, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 1.6479197239481342, "pitch": 0.12843463504772146, "rotation": 0, "target": "23-mai-suite-3" },
        { "yaw": -3.084832662860027, "pitch": 0.09583180691080884, "rotation": 0, "target": "9-mai-suite-2" }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-mai-suite-3",
      "name": "Mai Suite 3",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2042,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 0.24490803418687435, "pitch": 0.10814205737661808, "rotation": 0, "target": "22-mai-suite-" },
        { "yaw": -1.3048021856281338, "pitch": 0.0766849893837751, "rotation": 0, "target": "8-mai-suite-1" }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-2-bedrooms",
      "name": "2 Bedrooms",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043,
      "initialViewParameters": { "yaw": -1.4821873032321093, "pitch": -0.018552672739021503, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": -1.6315981911709478, "pitch": 0.1207862561445463, "rotation": 0, "target": "25-2-bedrooms-1" }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-2-bedrooms-1",
      "name": "2 Bedrooms 1",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2044,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": -1.586885393186062, "pitch": 0.0726051472365139, "rotation": 0, "target": "24-2-bedrooms" },
        { "yaw": 2.0605782995489186, "pitch": 0.15675222532752464, "rotation": 0, "target": "26-2-bedrooms-2" },
        { "yaw": 0.5372467614202847, "pitch": 0.18340347755573738, "rotation": 0, "target": "29-2-bedrooms-5" },
        { "yaw": 0.03527320291361846, "pitch": 0.15725257263186343, "rotation": 0, "target": "28-2-bedrooms-4" }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-2-bedrooms-2",
      "name": "2 Bedrooms 2",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2041,
      "initialViewParameters": { "yaw": -1.3304779144049057, "pitch": 0.0037105345478067875, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 2.3422627927266753, "pitch": 0.18102519002092166, "rotation": 0, "target": "25-2-bedrooms-1" }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-2-bedrooms-3",
      "name": "2 Bedrooms 3",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2041,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 2.5116177503838877, "pitch": 0.23069018408124897, "rotation": 0, "target": "28-2-bedrooms-4" }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-2-bedrooms-4",
      "name": "2 Bedrooms 4",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2041,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 1.4963687157619772, "pitch": 0.12593021114182434, "rotation": 0, "target": "25-2-bedrooms-1" },
        { "yaw": -0.4398574719000621, "pitch": 0.1245708407816064, "rotation": 0, "target": "27-2-bedrooms-3" }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-2-bedrooms-5",
      "name": "2 Bedrooms 5",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043.5,
      "initialViewParameters": { "yaw": 0.49406243441071673, "pitch": -0.02597374183462442, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": -2.9449954261416416, "pitch": 0.21169911078582082, "rotation": 0, "target": "25-2-bedrooms-1" }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-junior-suite",
      "name": "Junior Suite",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2042,
      "initialViewParameters": { "yaw": 0.7410936516160493, "pitch": -0.001855267273899841, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 1.3539737703621935, "pitch": 0.1689046871180082, "rotation": 0, "target": "31-junior-suite-1" },
        { "yaw": -0.10428135128840488, "pitch": 0.06788927001502287, "rotation": 0, "target": "32-junior-suite-2" }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-junior-suite-1",
      "name": "Junior Suite 1",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043,
      "initialViewParameters": { "yaw": -2.447798457441987, "pitch": -0.02226320728682829, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 2.1082604496422412, "pitch": 0.1762980300356105, "rotation": 0, "target": "30-junior-suite" },
        { "yaw": -2.6475166632694833, "pitch": 0.11445858691738842, "rotation": 0, "target": "33-junior-suite-3" }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-junior-suite-2",
      "name": "Junior Suite 2",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2042.5,
      "initialViewParameters": { "yaw": 0.9633231144113434, "pitch": -0.009351522343829188, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 1.707958542186006, "pitch": 0.08899486011104862, "rotation": 0, "target": "30-junior-suite" },
        { "yaw": 0.1806800100027388, "pitch": 0.16990670903527416, "rotation": 0, "target": "33-junior-suite-3" }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-junior-suite-3",
      "name": "Junior Suite 3",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043,
      "initialViewParameters": { "yaw": -0.3001523193743161, "pitch": 0.01290657000965112, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 0.10678346407167716, "pitch": 0.11478730590053132, "rotation": 0, "target": "31-junior-suite-1" },
        { "yaw": 1.9439015385816871, "pitch": 0.18441123544377014, "rotation": 0, "target": "32-junior-suite-2" }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-premium-king",
      "name": "Premium King",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2041,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "35-presidential-suite-entrance",
      "name": "Presidential Suite Entrance",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2041.5,
      "initialViewParameters": { "yaw": 2.034915185619651, "pitch": 0.00344988463352891, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 1.692103890514094, "pitch": 0.1062373553510838, "rotation": 0, "target": "39-presidential-suite-" },
        { "yaw": -3.097519598039467, "pitch": 0.03970594853501197, "rotation": 0, "target": "56-executive-hallway-" }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-presidential-suite-2",
      "name": "Presidential Suite 2",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2042,
      "initialViewParameters": { "yaw": -1.175862830957728, "pitch": -0.009276336369513416, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": -1.662857749078169, "pitch": 0.060607712153558424, "rotation": 0, "target": "39-presidential-suite-" },
        { "yaw": 1.5037223341647934, "pitch": 0.08645243442191486, "rotation": 0, "target": "37-presidential-suite-3" }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-presidential-suite-3",
      "name": "Presidential Suite 3",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043.5,
      "initialViewParameters": { "yaw": 1.7184643413958796, "pitch": 0.010694673544866973, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": -2.9812018966051, "pitch": 0.06211008968747578, "rotation": 0, "target": "36-presidential-suite-2" },
        { "yaw": 1.6165834130903045, "pitch": 0.08560751544998091, "rotation": 0, "target": "38-presidential-suite-4" }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-presidential-suite-4",
      "name": "Presidential Suite 4",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": -0.11070350370134463, "pitch": 0.11870268234141079, "rotation": 0, "target": "37-presidential-suite-3" }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-presidential-suite-",
      "name": "Presidential Suite ",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2041.5,
      "initialViewParameters": { "yaw": -0.9770753789903992, "pitch": -0.006781126476729682, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": -3.1091206842868537, "pitch": 0.11461854306575248, "rotation": 0, "target": "35-presidential-suite-entrance" },
        { "yaw": -1.6189520694824004, "pitch": 0.05378973727145997, "rotation": 0, "target": "40-presidential-suite-6" },
        { "yaw": 1.4961702697651837, "pitch": 0.0427308519329479, "rotation": 0, "target": "36-presidential-suite-2" }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-presidential-suite-6",
      "name": "Presidential Suite 6",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2042,
      "initialViewParameters": { "yaw": 1.0149760880828609, "pitch": 0.012986870917313098, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 1.5565398095381138, "pitch": 0.06730234449289618, "rotation": 0, "target": "39-presidential-suite-" }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-gia-nh-entrance",
      "name": "Gia Định Entrance",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2041.5,
      "initialViewParameters": { "yaw": -1.5229376556956282, "pitch": 0.01150795171145802, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": -1.5868798483342381, "pitch": 0.09859512765587652, "rotation": 0, "target": "43-gia-nh-" }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-gia-nh-1",
      "name": "Gia Định 1",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2042,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 2.9275716048505327, "pitch": 0.16883972693989513, "rotation": 0, "target": "43-gia-nh-" }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-gia-nh-",
      "name": "Gia Định ",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2040,
      "initialViewParameters": { "yaw": -1.8396183411701266, "pitch": 0.01997980141125666, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": -0.09938776067607691, "pitch": 0.09017342899689851, "rotation": 0, "target": "41-gia-nh-entrance" },
        { "yaw": 1.5599255314306557, "pitch": 0.14185559915294021, "rotation": 0, "target": "42-gia-nh-1" },
        { "yaw": -2.0478001774476535, "pitch": 0.07814323739071227, "rotation": 0, "target": "44-gia-nh-3" }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-gia-nh-3",
      "name": "Gia Định 3",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2044,
      "initialViewParameters": { "yaw": 1.5913822615620052, "pitch": 0.01113160364341681, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 2.6936306570499333, "pitch": 0.06571343618242409, "rotation": 0, "target": "43-gia-nh-" }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-executive-lounge-entrance",
      "name": "Executive Lounge Entrance",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2042.5,
      "initialViewParameters": { "yaw": -2.08708560381646, "pitch": 0.001855267273930039, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": -3.1360689355564766, "pitch": 0.06166703305918553, "rotation": 0, "target": "46-executive-lounge-" },
        { "yaw": -1.5865909200093018, "pitch": 0.09709232142797397, "rotation": 0, "target": "48-executive-lounge-2" },
        { "yaw": 0.04004594459009425, "pitch": 0.046842777722234885, "rotation": 0, "target": "56-executive-hallway-" }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-executive-lounge-",
      "name": "Executive Lounge ",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2041,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 1.5696597741361984, "pitch": 0.08313862723646537, "rotation": 0, "target": "45-executive-lounge-entrance" },
        { "yaw": 0.017762979946425617, "pitch": 0.062087257798197015, "rotation": 0, "target": "47-executive-lounge-1" },
        { "yaw": -3.107922633444746, "pitch": 0.14072048284969263, "rotation": 0, "target": "53-executive-lounge-6" }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-executive-lounge-1",
      "name": "Executive Lounge 1",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2041.5,
      "initialViewParameters": { "yaw": 1.7010281730549162, "pitch": 0.02597374183462975, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 1.6241930701711702, "pitch": 0.08202371277715592, "rotation": 0, "target": "46-executive-lounge-" },
        { "yaw": 0.6004453771722496, "pitch": 0.06064571777484851, "rotation": 0, "target": "48-executive-lounge-2" },
        { "yaw": -3.109175012114637, "pitch": 0.049912961920075105, "rotation": 0, "target": "52-executive-lounge-5" }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-executive-lounge-2",
      "name": "Executive Lounge 2",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2041.5,
      "initialViewParameters": { "yaw": -2.8371618533803407, "pitch": 0.0389606127519464, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 1.8230631151745484, "pitch": 0.11260345834236851, "rotation": 0, "target": "45-executive-lounge-entrance" },
        { "yaw": -1.789788669857085, "pitch": -0.2958695993310094, "rotation": 0, "target": "13-rooftop-entrance" },
        { "yaw": -2.565538451936833, "pitch": 0.06268410620681308, "rotation": 0, "target": "47-executive-lounge-1" }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-restaurant-entrance",
      "name": "Restaurant Entrance",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2044.5,
      "initialViewParameters": { "yaw": 1.6285261356299259, "pitch": 0.05009221639536854, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": -1.4922352958941865, "pitch": 0.41884629939043627, "rotation": 0, "target": "50-restaurant-entrance-1" },
        { "yaw": 1.58, "pitch": 0.08, "rotation": 0, "target": "62-restaurant-" }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-restaurant-entrance-1",
      "name": "Restaurant Entrance 1",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2041,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": -2.1844529690691488, "pitch": 0.5379262643301495, "rotation": 0, "target": "75-lobby-3" },
        { 
          "yaw": 0.010327392023626203, 
          "pitch": 0.05, // Moved up from 0.095
          "rotation": 0, 
          "target": "49-restaurant-entrance" 
        },
        { "yaw": 2.2965731797575932, "pitch": -0.2617835865381757, "rotation": 0, "target": "73-foyer-" }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-executive-lounge-4",
      "name": "Executive Lounge 4",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2040.5,
      "initialViewParameters": { "yaw": -3.117128209373801, "pitch": 0.002473689698542003, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 1.6313881911387957, "pitch": 0.062058506019440074, "rotation": 0, "target": "52-executive-lounge-5" },
        { "yaw": -3.134997979490972, "pitch": 0.08089995615845602, "rotation": 0, "target": "53-executive-lounge-6" }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-executive-lounge-5",
      "name": "Executive Lounge 5",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043,
      "initialViewParameters": { "yaw": -1.4548168163768125, "pitch": -0.02597980536432054, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": -3.069899630674051, "pitch": 0.040936276062934596, "rotation": 0, "target": "47-executive-lounge-1" },
        { "yaw": -1.5166749858153796, "pitch": 0.06022397397419077, "rotation": 0, "target": "51-executive-lounge-4" }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-executive-lounge-6",
      "name": "Executive Lounge 6",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2042,
      "initialViewParameters": { "yaw": 1.2007643597511208, "pitch": -0.0006701753722992976, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 1.4673779117995718, "pitch": 0.08057471978176878, "rotation": 0, "target": "51-executive-lounge-4" },
        { "yaw": -3.0843945019367034, "pitch": 0.1115022844386182, "rotation": 0, "target": "46-executive-lounge-" }
      ],
      "infoHotspots": []
    },
    {
      "id": "54-pool-",
      "name": "Pool ",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2041.5,
      "initialViewParameters": { "yaw": -3.1347373060663486, "pitch": 0.030714980423494964, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 1.8077235933656919, "pitch": 0.07828082733102626, "rotation": 0, "target": "11-pool-1" }
      ],
      "infoHotspots": []
    },
    {
      "id": "55-spa",
      "name": "Spa",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043.5,
      "initialViewParameters": { "yaw": 0.6505936788585434, "pitch": 0.0150603213183782, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": -2.928389025057541, "pitch": 0.14431777739264007, "rotation": 0, "target": "10-pool-entrance" }
      ],
      "infoHotspots": []
    },
    {
      "id": "56-executive-hallway-",
      "name": "Executive Hallway ",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2041.5,
      "initialViewParameters": { "yaw": 2.4223348838793353, "pitch": 0.011131603643423915, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 1.5603018945497578, "pitch": 0.04230161528170484, "rotation": 0, "target": "45-executive-lounge-entrance" },
        { "yaw": 3.1050700125478663, "pitch": 0.02499058297342316, "rotation": 0, "target": "35-presidential-suite-entrance" }
      ],
      "infoHotspots": []
    },
    {
      "id": "57-restaurant",
      "name": "Restaurant",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 0.20368289210049895, "pitch": 0.1557406289402543, "rotation": 0, "target": "58-restaurant-1" },
        { "yaw": 1.8457770005016796, "pitch": 0.04, "rotation": 0, "target": "61-cest-la-vie-restaurant" }
      ],
      "infoHotspots": []
    },
    {
      "id": "58-restaurant-1",
      "name": "Restaurant 1",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2042.5,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 1.5815507205201174, "pitch": 0.08801721483220959, "rotation": 0, "target": "59-restaurant-2" },
        { "yaw": 3.0745902886189187, "pitch": 0.15294614408684915, "rotation": 0, "target": "57-restaurant" }
      ],
      "infoHotspots": []
    },
    {
      "id": "59-restaurant-2",
      "name": "Restaurant 2",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043.5,
      "initialViewParameters": { "yaw": -1.4956129128628355, "pitch": -0.029684276382432984, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 1.5075367220532874, "pitch": 0.1690629877903067, "rotation": 0, "target": "61-cest-la-vie-restaurant" },
        { "yaw": 3.131279574214725, "pitch": 0.07720729903068246, "rotation": 0, "target": "58-restaurant-1" },
        { "yaw": -0.04070318577861798, "pitch": 0.07205279103813211, "rotation": 0, "target": "60-private-restaurant" }
      ],
      "infoHotspots": []
    },
    {
      "id": "60-private-restaurant",
      "name": "Private Restaurant",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2044,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 3.12643995210483, "pitch": 0.09454652773599115, "rotation": 0, "target": "59-restaurant-2" }
      ],
      "infoHotspots": []
    },
    {
      "id": "61-cest-la-vie-restaurant",
      "name": "C'est La Vie Restaurant",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2044,
      "initialViewParameters": { "yaw": -0.7486533383643632, "pitch": -0.003710534547805011, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 3.1404610265415425, "pitch": 0.05, "rotation": 0, "target": "62-restaurant-" },
        { "yaw": -0.11737504645674157, "pitch": 0.05, "rotation": 0, "target": "59-restaurant-2" },
        { "yaw": -1.5767331335745745, "pitch": 0.05, "rotation": 0, "target": "57-restaurant" }
      ],
      "infoHotspots": []
    },
    {
      "id": "62-restaurant-",
      "name": "Restaurant ",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043,
      "initialViewParameters": { "yaw": -1.5977718355612751, "pitch": -0.009276336369515192, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": -3.089427484642382, "pitch": 0.14426813555160756, "rotation": 0, "target": "49-restaurant-entrance" },
        { "yaw": 1.5047393032461382, "pitch": 0.1462556956662624, "rotation": 0, "target": "61-cest-la-vie-restaurant" }
      ],
      "infoHotspots": []
    },
    {
      "id": "63-saigon-1-entrance",
      "name": "Saigon 1 Entrance",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 0.046368219541591316, "pitch": 0.03328816980688387, "rotation": 0, "target": "73-foyer-" },
        { "yaw": -3.0400845134659065, "pitch": 0.13411707301761666, "rotation": 0, "target": "69-saigon-1" },
        { "yaw": -1.4845621725962506, "pitch": 0.05378396711965827, "rotation": 0, "target": "70-saigon-2-entrance" }
      ],
      "infoHotspots": []
    },
    {
      "id": "64-bn-thnh-entrance",
      "name": "Bến Thành Entrance",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043.5,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 1.6747401494380014, "pitch": 0.09122160897084797, "rotation": 0, "target": "72-foyer-3" },
        { "yaw": 0.07535673258995601, "pitch": 0.12554981019279587, "rotation": 0, "target": "65-bn-thnh" }
      ],
      "infoHotspots": []
    },
    {
      "id": "65-bn-thnh",
      "name": "Bến Thành",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2044.5,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 3.1283162084514125, "pitch": 0.11306713908447996, "rotation": 0, "target": "64-bn-thnh-entrance" }
      ],
      "infoHotspots": []
    },
    {
      "id": "66-foyer-2",
      "name": "Foyer 2",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2045,
      "initialViewParameters": { "yaw": -3.1274299599562454, "pitch": -0.0018595942125205767, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": -1.6074312394407073, "pitch": 0.07889352655391768, "rotation": 0, "target": "73-foyer-" },
        { "yaw": 3.1357848963875217, "pitch": 0.14523479797624894, "rotation": 0, "target": "67-hallway-to-conference-1" }
      ],
      "infoHotspots": []
    },
    {
      "id": "67-hallway-to-conference-1",
      "name": "Hallway to Conference 1",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2044.5,
      "initialViewParameters": { "yaw": -1.5358897417549962, "pitch": -0.0032982529313905218, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 3.0431479916487953, "pitch": 0.1730281780650884, "rotation": 0, "target": "66-foyer-2" },
        { "yaw": -1.5791317246156336, "pitch": 0.07196148599049224, "rotation": 0, "target": "68-hallway-to-conference-2" }
      ],
      "infoHotspots": []
    },
    {
      "id": "68-hallway-to-conference-2",
      "name": "Hallway To Conference 2",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2044,
      "initialViewParameters": { "yaw": 1.459429623609342, "pitch": -0.003710534547794353, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": -1.6170695869764682, "pitch": 0.06096647451692583, "rotation": 0, "target": "67-hallway-to-conference-1" },
        { "yaw": 1.5330099886808872, "pitch": 0.06024503948925641, "rotation": 0, "target": "3-hallway-to-conference" }
      ],
      "infoHotspots": []
    },
    {
      "id": "69-saigon-1",
      "name": "Saigon 1",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2048,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": 3.0699812205103107, "pitch": 0.13390501761147178, "rotation": 0, "target": "63-saigon-1-entrance" }
      ],
      "infoHotspots": []
    },
    {
      "id": "70-saigon-2-entrance",
      "name": "Saigon 2 Entrance",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2042.5,
      "initialViewParameters": { "yaw": -3.011803204374317, "pitch": 0.027829009108527814, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": 1.723159370042394, "pitch": 0.06197574263063643, "rotation": 0, "target": "63-saigon-1-entrance" },
        { "yaw": -2.964858083963801, "pitch": 0.1093294495792776, "rotation": 0, "target": "71-saigon-2" },
        { "yaw": 0.1861419704784808, "pitch": 0.04533852223656254, "rotation": 0, "target": "72-foyer-3" }
      ],
      "infoHotspots": []
    },
    {
      "id": "71-saigon-2",
      "name": "Saigon 2",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2048,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": -3.0675415132587105, "pitch": 0.1178315280075779, "rotation": 0, "target": "70-saigon-2-entrance" }
      ],
      "infoHotspots": []
    },
    {
      "id": "72-foyer-3",
      "name": "Foyer 3",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2042.5,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": -0.19434715077560938, "pitch": 0.05671777272032408, "rotation": 0, "target": "73-foyer-" },
        { "yaw": 1.582018075404223, "pitch": 0.05076387299738805, "rotation": 0, "target": "70-saigon-2-entrance" },
        { "yaw": -3.1329500223697906, "pitch": 0.09542567447360106, "rotation": 0, "target": "64-bn-thnh-entrance" }
      ],
      "infoHotspots": []
    },
    {
      "id": "73-foyer-",
      "name": "Foyer ",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2043,
      "initialViewParameters": { "yaw": -1.4892936224516706, "pitch": 0.03339481093023977, "fov": 1.38217411905719 },
      "linkHotspots": [
        { "yaw": -2.3001665232335196, "pitch": 0.17777542559372606, "rotation": 0, "target": "50-restaurant-entrance-1" },
        { "yaw": -1.7426034639917791, "pitch": 0.057218644805161034, "rotation": 0, "target": "72-foyer-3" },
        { "yaw": 1.5848438241537144, "pitch": 0.07511338624643926, "rotation": 0, "target": "66-foyer-2" },
        { "yaw": -3.0656344285419728, "pitch": 0.057563031139267196, "rotation": 0, "target": "63-saigon-1-entrance" }
      ],
      "infoHotspots": []
    },
    {
      "id": "74-lobby-2",
      "name": "Lobby 2",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2048,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": -0.3802517006083228, "pitch": 0.04533210399504206, "rotation": 0, "target": "75-lobby-3" },
        { "yaw": 0.028891263083508534, "pitch": 0.044363925188605435, "rotation": 0, "target": "1-lobby" }
      ],
      "infoHotspots": []
    },
    {
      "id": "75-lobby-3",
      "name": "Lobby 3",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2048,
      "initialViewParameters": { "pitch": 0, "yaw": 0, "fov": 1.5707963267948966 },
      "linkHotspots": [
        { "yaw": -2.670904285145699, "pitch": 0.014, "rotation": 0, "target": "1-lobby" },
        { "yaw": -1.8994591213596248, "pitch": 0.014097664980065261, "rotation": 0, "target": "74-lobby-2" },
        { "yaw": -0.32678284585808015, "pitch": -0.3203854731813234, "rotation": 0, "target": "50-restaurant-entrance-1" }
      ],
      "infoHotspots": []
    },
    {
      "id": "76-grand-ballroom",
      "name": "Grand Ballroom",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2048,
      "initialViewParameters": { "yaw": 1.9396999029469075, "pitch": 0.011131603643409704, "fov": 1.38217411905719 },
      "linkHotspots": [ { "yaw": 1.693491093977987, "pitch": 0.08277397854028123, "rotation": 0, "target": "77-grand-ballroom" } ],
      "infoHotspots": []
    },
    {
      "id": "77-grand-ballroom",
      "name": "Grand Ballroom",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 2048 }
      ],
      "faceSize": 2048,
      "initialViewParameters": { "yaw": 0.15841226727575375, "pitch": -0.02226320728682829, "fov": 1.38217411905719 },
      "linkHotspots": [ { "yaw": -3.0371025913884466, "pitch": 0.10759495978201272, "rotation": 0, "target": "76-grand-ballroom" } ],
      "infoHotspots": []
    }
  ],
  "name": "Mai House Saigon Hotel",
  "settings": { "mouseViewMode": "drag", "autorotateEnabled": true, "fullscreenButton": true, "viewControlButtons": false }
};