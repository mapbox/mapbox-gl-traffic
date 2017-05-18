var trafficTemplate = {};
trafficTemplate.tunnel = [
  {
    "id": "traffic-tnl-minor-case",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 15,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "link",
          "service",
          "street"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            11,
            0.5
          ],
          [
            18,
            3
          ],
          [
            22,
            6
          ]
        ]
      },
      "line-color": "hsl(230, 14%, 97%)",
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            15,
            1
          ],
          [
            18,
            3.375
          ],
          [
            22,
            62.5
          ]
        ]
      },
      "line-gap-width": {
        "base": 1.5,
        "stops": [
          [
            15,
            1
          ],
          [
            18,
            2.75
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-dasharray": [
        2,
        2
      ]
    }
  },
  {
    "id": "traffic-tnl-major-case",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 5,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "primary_link",
          "secondary",
          "tertiary"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            11,
            0.5
          ],
          [
            18,
            3
          ],
          [
            22,
            6
          ]
        ]
      },
      "line-color": "hsl(230, 14%, 97%)",
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.325
          ],
          [
            15,
            1.875
          ],
          [
            18,
            5.5
          ],
          [
            22,
            62.5
          ]
        ]
      },
      "line-gap-width": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.6
          ],
          [
            15,
            2.75
          ],
          [
            18,
            7
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-dasharray": [
        2,
        2
      ]
    }
  },
  {
    "id": "traffic-tnl-primary-case",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 5,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "has",
          "congestion"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            5,
            1
          ],
          [
            18,
            3
          ],
          [
            22,
            6
          ]
        ]
      },
      "line-color": "hsl(230, 14%, 97%)",
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.5
          ],
          [
            18,
            8
          ],
          [
            22,
            62.5
          ]
        ]
      },
      "line-gap-width": {
        "base": 1.5,
        "stops": [
          [
            10,
            1
          ],
          [
            18,
            12
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-dasharray": [
        2,
        2
      ]
    }
  },
  {
    "id": "traffic-tnl-major-link-case",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 5,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "motorway_link",
          "trunk_link"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            11,
            0.5
          ],
          [
            18,
            3
          ],
          [
            22,
            6
          ]
        ]
      },
      "line-color": "hsl(60, 50%, 86%)",
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.325
          ],
          [
            15,
            1.875
          ],
          [
            18,
            5.5
          ],
          [
            22,
            62.5
          ]
        ]
      },
      "line-gap-width": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.6
          ],
          [
            15,
            2.75
          ],
          [
            18,
            7
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-dasharray": [
        2,
        2
      ]
    }
  },
  {
    "id": "traffic-tnl-motorway-trunk-case",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 6,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "motorway",
          "trunk"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            5,
            1
          ],
          [
            18,
            3
          ],
          [
            22,
            6
          ]
        ]
      },
      "line-color": "hsl(60, 50%, 86%)",
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            5,
            0.25
          ],
          [
            10,
            1
          ],
          [
            15,
            4.25
          ],
          [
            18,
            10
          ],
          [
            22,
            62.5
          ]
        ]
      },
      "line-gap-width": {
        "base": 1.5,
        "stops": [
          [
            5,
            0.5
          ],
          [
            10,
            1.5
          ],
          [
            15,
            8
          ],
          [
            18,
            16
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-dasharray": [
        2,
        2
      ]
    }
  },
  {
    "id": "traffic-tnl-major-link",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 5,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "motorway_link",
          "trunk_link"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.6
          ],
          [
            15,
            2.75
          ],
          [
            18,
            7
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "type": "categorical",
        "property": "congestion",
        "stops": [
          [
            "low",
            "hsl(145, 53%, 68%)"
          ],
          [
            "moderate",
            "hsl(26, 81%, 74%)"
          ],
          [
            "heavy",
            "hsl(0, 53%, 68%)"
          ],
          [
            "severe",
            "hsl(350, 29%, 50%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            12,
            0.625
          ],
          [
            15,
            1.875
          ],
          [
            18,
            5.5
          ],
          [
            22,
            62.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-tnl-minor",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 15,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "link",
          "service",
          "street"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            15,
            1.5
          ],
          [
            18,
            2.75
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "type": "categorical",
        "property": "congestion",
        "stops": [
          [
            "low",
            "hsl(145, 53%, 68%)"
          ],
          [
            "moderate",
            "hsl(26, 81%, 74%)"
          ],
          [
            "heavy",
            "hsl(0, 53%, 68%)"
          ],
          [
            "severe",
            "hsl(350, 29%, 50%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            15,
            1
          ],
          [
            18,
            3.375
          ],
          [
            22,
            62.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-tnl-major",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 5,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "primary_link",
          "secondary",
          "tertiary"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.6
          ],
          [
            15,
            2.75
          ],
          [
            18,
            7
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "type": "categorical",
        "property": "congestion",
        "stops": [
          [
            "low",
            "hsl(145, 53%, 68%)"
          ],
          [
            "moderate",
            "hsl(26, 81%, 74%)"
          ],
          [
            "heavy",
            "hsl(0, 53%, 68%)"
          ],
          [
            "severe",
            "hsl(350, 29%, 50%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            12,
            0.625
          ],
          [
            15,
            1.875
          ],
          [
            18,
            5.5
          ],
          [
            22,
            62.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-tnl-primary",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 5,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "has",
          "congestion"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            10,
            1
          ],
          [
            18,
            12
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "type": "categorical",
        "property": "congestion",
        "stops": [
          [
            "low",
            "hsl(145, 53%, 68%)"
          ],
          [
            "moderate",
            "hsl(26, 81%, 74%)"
          ],
          [
            "heavy",
            "hsl(0, 53%, 68%)"
          ],
          [
            "severe",
            "hsl(350, 29%, 50%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.5
          ],
          [
            18,
            8
          ],
          [
            22,
            62.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-tnl-motorway-trunk",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 6,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "structure",
          "tunnel"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "motorway",
          "trunk"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            5,
            0.5
          ],
          [
            10,
            1.5
          ],
          [
            15,
            8
          ],
          [
            18,
            16
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "type": "categorical",
        "property": "congestion",
        "stops": [
          [
            "low",
            "hsl(145, 53%, 68%)"
          ],
          [
            "moderate",
            "hsl(26, 81%, 74%)"
          ],
          [
            "heavy",
            "hsl(0, 53%, 68%)"
          ],
          [
            "severe",
            "hsl(350, 29%, 50%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            5,
            0.25
          ],
          [
            10,
            1
          ],
          [
            15,
            4.25
          ],
          [
            18,
            10
          ],
          [
            22,
            62.5
          ]
        ]
      }
    }
  }
]

trafficTemplate.road = [
  {
    "id": "traffic-rd-minor-case",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 15,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "!has",
          "structure"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "link",
          "service",
          "street"
        ]
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            11,
            0.5
          ],
          [
            18,
            3
          ],
          [
            22,
            6
          ]
        ]
      },
      "line-color": "hsl(0, 0%, 100%)",
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            15,
            1
          ],
          [
            18,
            3.375
          ],
          [
            22,
            62.5
          ]
        ]
      },
      "line-gap-width": {
        "base": 1.5,
        "stops": [
          [
            15,
            1
          ],
          [
            18,
            2.75
          ],
          [
            22,
            37.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-rd-major-case",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 5,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "!has",
          "structure"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "primary_link",
          "secondary",
          "tertiary"
        ]
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            11,
            0.5
          ],
          [
            18,
            3
          ],
          [
            22,
            6
          ]
        ]
      },
      "line-color": "hsl(0, 0%, 100%)",
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.325
          ],
          [
            15,
            1.875
          ],
          [
            18,
            5.5
          ],
          [
            22,
            62.5
          ]
        ]
      },
      "line-gap-width": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.6
          ],
          [
            15,
            2.75
          ],
          [
            18,
            7
          ],
          [
            22,
            37.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-rd-primary-case",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 5,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "!has",
          "structure"
        ],
        [
          "==",
          "class",
          "primary"
        ],
        [
          "has",
          "congestion"
        ]
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            5,
            1
          ],
          [
            18,
            3
          ],
          [
            22,
            6
          ]
        ]
      },
      "line-color": "hsl(0, 0%, 100%)",
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.5
          ],
          [
            18,
            8
          ],
          [
            22,
            62.5
          ]
        ]
      },
      "line-gap-width": {
        "base": 1.5,
        "stops": [
          [
            10,
            1
          ],
          [
            18,
            12
          ],
          [
            22,
            37.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-rd-major-link-case",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 5,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "!has",
          "structure"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "motorway_link",
          "trunk_link"
        ]
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            11,
            0.5
          ],
          [
            18,
            3
          ],
          [
            22,
            6
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "stops": [
          [
            8,
            "hsl(60, 100%, 98%)"
          ],
          [
            13,
            "hsl(60, 100%, 88%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.325
          ],
          [
            15,
            1.875
          ],
          [
            18,
            5.5
          ],
          [
            22,
            62.5
          ]
        ]
      },
      "line-gap-width": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.6
          ],
          [
            15,
            2.75
          ],
          [
            18,
            7
          ],
          [
            22,
            37.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-rd-motorway-trunk-case",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 6,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "!has",
          "structure"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "motorway",
          "trunk"
        ]
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            5,
            1
          ],
          [
            18,
            3
          ],
          [
            22,
            6
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "stops": [
          [
            8,
            "hsl(60, 100%, 98%)"
          ],
          [
            13,
            "hsl(60, 100%, 88%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": {
        "base": 1,
        "stops": [
          [
            12.99,
            0
          ],
          [
            13,
            1
          ]
        ]
      },
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            5,
            0.25
          ],
          [
            10,
            1
          ],
          [
            15,
            4.25
          ],
          [
            18,
            10
          ],
          [
            22,
            62.5
          ]
        ]
      },
      "line-gap-width": {
        "base": 1.5,
        "stops": [
          [
            5,
            0.5
          ],
          [
            10,
            1.5
          ],
          [
            15,
            8
          ],
          [
            18,
            16
          ],
          [
            22,
            37.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-rd-major-link",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 5,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "!has",
          "structure"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "motorway_link",
          "trunk_link"
        ]
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.6
          ],
          [
            15,
            2.75
          ],
          [
            18,
            7
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "type": "categorical",
        "property": "congestion",
        "stops": [
          [
            "low",
            "hsl(145, 55%, 55%)"
          ],
          [
            "moderate",
            "hsl(29, 100%, 65%)"
          ],
          [
            "heavy",
            "hsl(0, 76%, 59%)"
          ],
          [
            "severe",
            "hsl(350, 100%, 30%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            12,
            0.625
          ],
          [
            15,
            1.875
          ],
          [
            18,
            5.5
          ],
          [
            22,
            62.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-rd-minor",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 15,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "!has",
          "structure"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "link",
          "service",
          "street"
        ]
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            15,
            1.5
          ],
          [
            18,
            2.75
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "type": "categorical",
        "property": "congestion",
        "stops": [
          [
            "low",
            "hsl(145, 55%, 55%)"
          ],
          [
            "moderate",
            "hsl(29, 100%, 65%)"
          ],
          [
            "heavy",
            "hsl(0, 76%, 59%)"
          ],
          [
            "severe",
            "hsl(350, 100%, 30%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            15,
            1
          ],
          [
            18,
            3.375
          ],
          [
            22,
            62.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-rd-major",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 5,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "!has",
          "structure"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "primary_link",
          "secondary",
          "tertiary"
        ]
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.6
          ],
          [
            15,
            2.75
          ],
          [
            18,
            7
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "type": "categorical",
        "property": "congestion",
        "stops": [
          [
            "low",
            "hsl(145, 55%, 55%)"
          ],
          [
            "moderate",
            "hsl(29, 100%, 65%)"
          ],
          [
            "heavy",
            "hsl(0, 76%, 59%)"
          ],
          [
            "severe",
            "hsl(350, 100%, 30%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            12,
            0.625
          ],
          [
            15,
            1.875
          ],
          [
            18,
            5.5
          ],
          [
            22,
            62.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-rd-primary",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 5,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "!has",
          "structure"
        ],
        [
          "==",
          "class",
          "primary"
        ],
        [
          "has",
          "congestion"
        ]
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            10,
            1
          ],
          [
            18,
            12
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "type": "categorical",
        "property": "congestion",
        "stops": [
          [
            "low",
            "hsl(145, 55%, 55%)"
          ],
          [
            "moderate",
            "hsl(29, 100%, 65%)"
          ],
          [
            "heavy",
            "hsl(0, 76%, 59%)"
          ],
          [
            "severe",
            "hsl(350, 100%, 30%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.5
          ],
          [
            18,
            8
          ],
          [
            22,
            62.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-rd-motorway-trunk-case-low",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 6,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "!has",
          "structure"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "motorway",
          "trunk"
        ]
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            5,
            1
          ],
          [
            18,
            3
          ],
          [
            22,
            6
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "stops": [
          [
            8,
            "hsl(60, 100%, 98%)"
          ],
          [
            13,
            "hsl(60, 100%, 88%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": {
        "base": 1,
        "stops": [
          [
            13,
            1
          ],
          [
            13.01,
            0
          ]
        ]
      },
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            5,
            0.25
          ],
          [
            10,
            1
          ],
          [
            15,
            4.25
          ],
          [
            18,
            10
          ],
          [
            22,
            62.5
          ]
        ]
      },
      "line-gap-width": {
        "base": 1.5,
        "stops": [
          [
            5,
            0.5
          ],
          [
            10,
            1.5
          ],
          [
            15,
            8
          ],
          [
            18,
            16
          ],
          [
            22,
            37.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-rd-motorway-trunk",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 6,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "!has",
          "structure"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "motorway",
          "trunk"
        ]
      ]
    ],
    "layout": {
      "line-cap": "round",
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            5,
            0.5
          ],
          [
            10,
            1.5
          ],
          [
            15,
            8
          ],
          [
            18,
            16
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "type": "categorical",
        "property": "congestion",
        "stops": [
          [
            "low",
            "hsl(145, 55%, 55%)"
          ],
          [
            "moderate",
            "hsl(29, 100%, 65%)"
          ],
          [
            "heavy",
            "hsl(0, 76%, 59%)"
          ],
          [
            "severe",
            "hsl(350, 100%, 30%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            5,
            0.25
          ],
          [
            10,
            1
          ],
          [
            15,
            4.25
          ],
          [
            18,
            10
          ],
          [
            22,
            62.5
          ]
        ]
      }
    }
  }
];

trafficTemplate.bridge = [
  {
    "id": "traffic-brg-minor-case",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 15,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "link",
          "service",
          "street"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            11,
            0.5
          ],
          [
            18,
            3
          ],
          [
            22,
            6
          ]
        ]
      },
      "line-color": "hsl(0, 0%, 100%)",
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            15,
            1
          ],
          [
            18,
            3.375
          ],
          [
            22,
            62.5
          ]
        ]
      },
      "line-gap-width": {
        "base": 1.5,
        "stops": [
          [
            15,
            1
          ],
          [
            18,
            2.75
          ],
          [
            22,
            37.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-brg-major-case",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 5,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "primary_link",
          "secondary",
          "tertiary"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            11,
            0.5
          ],
          [
            18,
            3
          ],
          [
            22,
            6
          ]
        ]
      },
      "line-color": "hsl(0, 0%, 100%)",
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.325
          ],
          [
            15,
            1.875
          ],
          [
            18,
            5.5
          ],
          [
            22,
            62.5
          ]
        ]
      },
      "line-gap-width": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.6
          ],
          [
            15,
            2.75
          ],
          [
            18,
            7
          ],
          [
            22,
            37.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-brg-primary-case",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 5,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "has",
          "congestion"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            5,
            1
          ],
          [
            18,
            3
          ],
          [
            22,
            6
          ]
        ]
      },
      "line-color": "hsl(0, 0%, 100%)",
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.5
          ],
          [
            18,
            8
          ],
          [
            22,
            62.5
          ]
        ]
      },
      "line-gap-width": {
        "base": 1.5,
        "stops": [
          [
            10,
            1
          ],
          [
            18,
            12
          ],
          [
            22,
            37.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-brg-major-link-case",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 5,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "motorway_link",
          "trunk_link"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            11,
            0.5
          ],
          [
            18,
            3
          ],
          [
            22,
            6
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "stops": [
          [
            8,
            "hsl(60, 100%, 98%)"
          ],
          [
            13,
            "hsl(60, 100%, 88%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.325
          ],
          [
            15,
            1.875
          ],
          [
            18,
            5.5
          ],
          [
            22,
            62.5
          ]
        ]
      },
      "line-gap-width": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.6
          ],
          [
            15,
            2.75
          ],
          [
            18,
            7
          ],
          [
            22,
            37.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-brg-motorway-trunk-case",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 6,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "motorway",
          "trunk"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            5,
            1
          ],
          [
            18,
            3
          ],
          [
            22,
            6
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "stops": [
          [
            8,
            "hsl(60, 100%, 98%)"
          ],
          [
            13,
            "hsl(60, 100%, 88%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            5,
            0.25
          ],
          [
            10,
            1
          ],
          [
            15,
            4.25
          ],
          [
            18,
            10
          ],
          [
            22,
            62.5
          ]
        ]
      },
      "line-gap-width": {
        "base": 1.5,
        "stops": [
          [
            5,
            0.5
          ],
          [
            10,
            1.5
          ],
          [
            15,
            8
          ],
          [
            18,
            16
          ],
          [
            22,
            37.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-brg-major-link",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 5,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "motorway_link",
          "trunk_link"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.6
          ],
          [
            15,
            2.75
          ],
          [
            18,
            7
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "type": "categorical",
        "property": "congestion",
        "stops": [
          [
            "low",
            "hsl(145, 55%, 55%)"
          ],
          [
            "moderate",
            "hsl(29, 100%, 65%)"
          ],
          [
            "heavy",
            "hsl(0, 76%, 59%)"
          ],
          [
            "severe",
            "hsl(350, 100%, 30%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            12,
            0.625
          ],
          [
            15,
            1.875
          ],
          [
            18,
            5.5
          ],
          [
            22,
            62.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-brg-minor",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 15,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "link",
          "service",
          "street"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            15,
            1.5
          ],
          [
            18,
            2.75
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "type": "categorical",
        "property": "congestion",
        "stops": [
          [
            "low",
            "hsl(145, 55%, 55%)"
          ],
          [
            "moderate",
            "hsl(29, 100%, 65%)"
          ],
          [
            "heavy",
            "hsl(0, 76%, 59%)"
          ],
          [
            "severe",
            "hsl(350, 100%, 30%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            15,
            1
          ],
          [
            18,
            3.375
          ],
          [
            22,
            62.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-brg-major",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 5,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "primary_link",
          "secondary",
          "tertiary"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.6
          ],
          [
            15,
            2.75
          ],
          [
            18,
            7
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "type": "categorical",
        "property": "congestion",
        "stops": [
          [
            "low",
            "hsl(145, 55%, 55%)"
          ],
          [
            "moderate",
            "hsl(29, 100%, 65%)"
          ],
          [
            "heavy",
            "hsl(0, 76%, 59%)"
          ],
          [
            "severe",
            "hsl(350, 100%, 30%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            12,
            0.625
          ],
          [
            15,
            1.875
          ],
          [
            18,
            5.5
          ],
          [
            22,
            62.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-brg-primary",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 5,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "class",
          "primary"
        ],
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "has",
          "congestion"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            10,
            1
          ],
          [
            18,
            12
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "type": "categorical",
        "property": "congestion",
        "stops": [
          [
            "low",
            "hsl(145, 55%, 55%)"
          ],
          [
            "moderate",
            "hsl(29, 100%, 65%)"
          ],
          [
            "heavy",
            "hsl(0, 76%, 59%)"
          ],
          [
            "severe",
            "hsl(350, 100%, 30%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            10,
            0.5
          ],
          [
            18,
            8
          ],
          [
            22,
            62.5
          ]
        ]
      }
    }
  },
  {
    "id": "traffic-brg-motorway-trunk",
    "type": "line",
    "source": "mapbox://mapbox.mapbox-traffic-v1",
    "source-layer": "traffic",
    "metadata": {
      "mapbox:group": "7e7a330500e013ce0394bc813f1bdea5"
    },
    "minzoom": 6,
    "filter": [
      "all",
      [
        "==",
        "$type",
        "LineString"
      ],
      [
        "all",
        [
          "==",
          "structure",
          "bridge"
        ],
        [
          "has",
          "congestion"
        ],
        [
          "in",
          "class",
          "motorway",
          "trunk"
        ]
      ]
    ],
    "layout": {
      "line-join": "round",
      "line-cap": "round",
      "visibility": "visible"
    },
    "paint": {
      "line-width": {
        "base": 1.5,
        "stops": [
          [
            5,
            0.5
          ],
          [
            10,
            1.5
          ],
          [
            15,
            8
          ],
          [
            18,
            16
          ],
          [
            22,
            37.5
          ]
        ]
      },
      "line-color": {
        "base": 1,
        "type": "categorical",
        "property": "congestion",
        "stops": [
          [
            "low",
            "hsl(145, 55%, 55%)"
          ],
          [
            "moderate",
            "hsl(29, 100%, 65%)"
          ],
          [
            "heavy",
            "hsl(0, 76%, 59%)"
          ],
          [
            "severe",
            "hsl(350, 100%, 30%)"
          ]
        ]
      },
      "line-blur": 0,
      "line-opacity": 1,
      "line-translate": [
        0,
        0
      ],
      "line-offset": {
        "base": 1.5,
        "stops": [
          [
            5,
            0.25
          ],
          [
            10,
            1
          ],
          [
            15,
            4.25
          ],
          [
            18,
            10
          ],
          [
            22,
            62.5
          ]
        ]
      }
    }
  }
]


function addLayers(style, layers, before) {
  for(var i = 0; i < style.layers.length; i++) {
    var layer = style.layers[i];
    if (before.indexOf(layer.id) > -1) {
      var newLayers = style.layers.slice(0, i).concat(layers).concat(style.layers.slice(i));
      return Object.assign({ }, style, {
        layers: newLayers
      });
    }
  }
  return style;
}

/**
 * Create a new [Mapbox GL JS plugin](https://www.mapbox.com/blog/build-mapbox-gl-js-plugins/) that allows you to hide and show
 * traffic layers in your map and an optional toggle button.
 * @constructor
 * @param {object} options - Options to configure the plugin.
 * @param {boolean} [options.showTraffic=false] - Show or hide traffic overlay by default.
 * @param {boolean} [options.showTrafficButton=true] - Show a toggle button to turn traffic on and off.
 * @param {RegExp} [options.trafficSource=/mapbox-traffic-v\d/] - The traffic source regex used to determine whether a layer displays traffic or not.
 */
function MapboxTraffic(options) {
  if (!(this instanceof MapboxTraffic)) {
    throw new Error('MapboxTraffic needs to be called with the new keyword');
  }

  this.options = Object.assign({
    showTraffic: false,
    showTrafficButton: true,
    trafficSource: /mapbox-traffic-v\d/
  }, options);

  this.render = this.render.bind(this);
  this.toggleTraffic = this.toggleTraffic.bind(this);
  this._hideTraffic = this._hideTraffic.bind(this);
  this._showTraffic = this._showTraffic.bind(this);
  this._hasTraffic = this._hasTraffic.bind(this);
  this._toggle = new TrafficButton({
    show: this.options.showTrafficButton,
    onToggle: this.toggleTraffic.bind(this)
  });
}

MapboxTraffic.prototype._hasTraffic = function () {
  var style = this._map.getStyle();
  var trafficSource = this.options.trafficSource;
  return style.layers.filter(function(layer) {
    return trafficSource.test(layer.source);
  }).length > 0;
}

MapboxTraffic.prototype.toggleTraffic = function () {
  this.options.showTraffic = !this.options.showTraffic;
  this.render();
};

MapboxTraffic.prototype.render = function () {
  if (!this._hasTraffic()) {
    this._map.addSource('mapbox://mapbox.mapbox-traffic-v1', {
      type: 'vector',
      url: 'mapbox://mapbox.mapbox-traffic-v1'
    });
    var style = this._map.getStyle();
    style = addLayers(style, trafficTemplate.bridge, ['waterway-label', 'ferry']);
    style = addLayers(style, trafficTemplate.road, ['tunnel-oneway-arrows-minor', 'bridge-path-bg']);
    style = addLayers(style, trafficTemplate.tunnel, ['road-level-crossings', 'aerialway']);
    this._map.setStyle(style);
  }

  if (this.options.showTraffic) {
    this._showTraffic();
    this._toggle.setMapIcon();
  } else {
    this._hideTraffic();
    this._toggle.setTrafficIcon();
  }
};

MapboxTraffic.prototype._hideTraffic = function () {
  var style = this._map.getStyle();
  var source = this.options.trafficSource;
  style.layers.forEach(function (layer) {
    if (source.test(layer['source'])) {
      layer['layout'] = layer['layout'] || {};
      layer['layout']['visibility'] = 'none';
    }
  });
  this._map.setStyle(style);
};

MapboxTraffic.prototype._showTraffic = function () {
  var style = this._map.getStyle();
  var source = this.options.trafficSource;
  style.layers.forEach(function (layer) {
    if (source.test(layer['source'])) {
      layer['layout'] = layer['layout'] || {};
      layer['layout']['visibility'] = 'visible';
    }
  });
  this._map.setStyle(style);
};

MapboxTraffic.prototype.onAdd = function (map) {
  this._map = map;
  map.on('load', this.render);
  return this._toggle.elem;
};

MapboxTraffic.prototype.onRemove = function () {
  this._map.off('load', this.render);

  var elem = this._toggle.elem;
  elem.parentNode.removeChild(elem);
  this._map = undefined;
};

function container(child, show) {
  var container = document.createElement('div');
  container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
  container.appendChild(child);
  if (!show) {
    container.style.display = 'none';
  }
  return container;
}

function button() {
  var btn = document.createElement('button');
  btn.className = 'mapboxgl-ctrl-icon mapboxgl-ctrl-traffic';
  btn.type = 'button';
  btn['aria-label'] = 'Inspect';
  return btn;
}

function TrafficButton(options) {
  options = Object.assign({
    show: true,
    onToggle: function () {}
  }, options);

  this._btn = button();
  this._btn.onclick = options.onToggle;
  this.elem = container(this._btn, options.show);
}

TrafficButton.prototype.setTrafficIcon = function () {
  this._btn.className = 'mapboxgl-ctrl-icon mapboxgl-ctrl-traffic';
};

TrafficButton.prototype.setMapIcon = function () {
  this._btn.className = 'mapboxgl-ctrl-icon mapboxgl-ctrl-map';
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = MapboxTraffic;
} else {
  window.MapboxTraffic = MapboxTraffic;
}
