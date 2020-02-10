var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "icons/marker_home.png",
            "spawnMarker2x": "icons/marker_home_2x.png",
            "queryMarker": "icons/marker_location.png",
            "queryMarker2x": "icons/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "main - overworld"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1581334416",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Daytime",
            "zoomLevels": 7,
            "defaultZoom": 7,
            "maxZoom": 7,
            "path": "mainday",
            "base": "",
            "bgcolor": "#2c3e50",
            "world": "main - overworld",
            "last_rendertime": 1581334134,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -256,
                80,
                16
            ],
            "minZoom": 0,
            "spawn": [
                -256,
                80,
                16
            ],
            "north_direction": 0
        },
        {
            "name": "Nighttime",
            "zoomLevels": 7,
            "defaultZoom": 7,
            "maxZoom": 7,
            "path": "mainnight",
            "base": "",
            "bgcolor": "#2c3e50",
            "world": "main - overworld",
            "last_rendertime": 1581334134,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -256,
                80,
                16
            ],
            "minZoom": 0,
            "spawn": [
                -256,
                80,
                16
            ],
            "north_direction": 0
        }
    ]
};
