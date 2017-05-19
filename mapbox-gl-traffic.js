var trafficLayers = [
  {
    'id': 'traffic-street-link-bg',
    'type': 'line',
    'metadata': {
      'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
    },
    'source': 'mapbox://mapbox.mapbox-traffic-v1',
    'source-layer': 'traffic',
    'minzoom': 15,
    'filter': [
      'all',
      [
        '==',
        '$type',
        'LineString'
      ],
      [
        'all',
        [
          'has',
          'congestion'
        ],
        [
          'in',
          'class',
          'link',
          'motorway_link',
          'service',
          'street'
        ]
      ]
    ],
    'layout': {
      'visibility': 'visible',
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-width': {
        'base': 1.5,
        'stops': [
          [
            14,
            2.5
          ],
          [
            20,
            15.5
          ]
        ]
      },
      'line-color': {
        'base': 1,
        'type': 'categorical',
        'property': 'congestion',
        'stops': [
          [
            'low',
            'hsl(145, 95%, 30%)'
          ],
          [
            'moderate',
            'hsl(30, 100%, 42%)'
          ],
          [
            'heavy',
            'hsl(355, 100%, 37%)'
          ],
          [
            'severe',
            'hsl(355, 70%, 22%)'
          ]
        ]
      },
      'line-offset': {
        'base': 1.5,
        'stops': [
          [
            14,
            2
          ],
          [
            20,
            18
          ]
        ]
      },
      'line-opacity': {
        'base': 1,
        'stops': [
          [
            15,
            0
          ],
          [
            16,
            1
          ]
        ]
      }
    }
  },
  {
    'id': 'traffic-secondary-tertiary-bg',
    'type': 'line',
    'metadata': {
      'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
    },
    'source': 'mapbox://mapbox.mapbox-traffic-v1',
    'source-layer': 'traffic',
    'minzoom': 6,
    'filter': [
      'all',
      [
        '==',
        '$type',
        'LineString'
      ],
      [
        'all',
        [
          'has',
          'congestion'
        ],
        [
          'in',
          'class',
          'secondary',
          'tertiary'
        ]
      ]
    ],
    'layout': {
      'visibility': 'visible',
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-width': {
        'base': 1.5,
        'stops': [
          [
            9,
            1.5
          ],
          [
            18,
            11
          ],
          [
            20,
            16.5
          ]
        ]
      },
      'line-color': {
        'base': 1,
        'type': 'categorical',
        'property': 'congestion',
        'stops': [
          [
            'low',
            'hsl(145, 95%, 30%)'
          ],
          [
            'moderate',
            'hsl(30, 100%, 42%)'
          ],
          [
            'heavy',
            'hsl(355, 100%, 37%)'
          ],
          [
            'severe',
            'hsl(355, 70%, 22%)'
          ]
        ]
      },
      'line-offset': {
        'base': 1.5,
        'stops': [
          [
            10,
            0.5
          ],
          [
            15,
            5
          ],
          [
            18,
            11
          ],
          [
            20,
            14.5
          ]
        ]
      },
      'line-opacity': {
        'base': 1,
        'stops': [
          [
            13,
            0
          ],
          [
            14,
            1
          ]
        ]
      }
    }
  },
  {
    'id': 'traffic-primary-bg',
    'type': 'line',
    'metadata': {
      'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
    },
    'source': 'mapbox://mapbox.mapbox-traffic-v1',
    'source-layer': 'traffic',
    'minzoom': 6,
    'filter': [
      'all',
      [
        '==',
        '$type',
        'LineString'
      ],
      [
        'all',
        [
          '==',
          'class',
          'primary'
        ],
        [
          'has',
          'congestion'
        ]
      ]
    ],
    'layout': {
      'visibility': 'visible',
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-width': {
        'base': 1.5,
        'stops': [
          [
            10,
            0.75
          ],
          [
            15,
            6
          ],
          [
            20,
            18
          ]
        ]
      },
      'line-color': {
        'base': 1,
        'type': 'categorical',
        'property': 'congestion',
        'stops': [
          [
            'low',
            'hsl(145, 95%, 30%)'
          ],
          [
            'moderate',
            'hsl(30, 100%, 42%)'
          ],
          [
            'heavy',
            'hsl(355, 100%, 37%)'
          ],
          [
            'severe',
            'hsl(355, 70%, 22%)'
          ]
        ]
      },
      'line-offset': {
        'base': 1.2,
        'stops': [
          [
            10,
            0
          ],
          [
            12,
            1.5
          ],
          [
            18,
            13
          ],
          [
            20,
            16
          ]
        ]
      },
      'line-opacity': {
        'base': 1,
        'stops': [
          [
            11,
            0
          ],
          [
            12,
            1
          ]
        ]
      }
    }
  },
  {
    'id': 'traffic-trunk-bg',
    'type': 'line',
    'metadata': {
      'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
    },
    'source': 'mapbox://mapbox.mapbox-traffic-v1',
    'source-layer': 'traffic',
    'minzoom': 6,
    'filter': [
      'all',
      [
        '==',
        '$type',
        'LineString'
      ],
      [
        'all',
        [
          '==',
          'class',
          'trunk'
        ],
        [
          'has',
          'congestion'
        ]
      ]
    ],
    'layout': {
      'visibility': 'visible',
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-width': {
        'base': 1.5,
        'stops': [
          [
            8,
            0.5
          ],
          [
            9,
            2.25
          ],
          [
            18,
            13
          ],
          [
            20,
            17.5
          ]
        ]
      },
      'line-color': {
        'base': 1,
        'type': 'categorical',
        'property': 'congestion',
        'stops': [
          [
            'low',
            'hsl(145, 95%, 30%)'
          ],
          [
            'moderate',
            'hsl(30, 100%, 42%)'
          ],
          [
            'heavy',
            'hsl(355, 100%, 37%)'
          ],
          [
            'severe',
            'hsl(355, 70%, 22%)'
          ]
        ]
      },
      'line-offset': {
        'base': 1.5,
        'stops': [
          [
            7,
            0
          ],
          [
            9,
            1
          ],
          [
            18,
            13
          ],
          [
            20,
            18
          ]
        ]
      },
      'line-opacity': 1
    }
  },
  {
    'id': 'traffic-motorway-bg',
    'type': 'line',
    'metadata': {
      'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
    },
    'source': 'mapbox://mapbox.mapbox-traffic-v1',
    'source-layer': 'traffic',
    'minzoom': 6,
    'filter': [
      'all',
      [
        '==',
        '$type',
        'LineString'
      ],
      [
        'all',
        [
          '==',
          'class',
          'motorway'
        ],
        [
          'has',
          'congestion'
        ]
      ]
    ],
    'layout': {
      'visibility': 'visible',
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-width': {
        'base': 1.5,
        'stops': [
          [
            6,
            0.5
          ],
          [
            9,
            3
          ],
          [
            18,
            16
          ],
          [
            20,
            20
          ]
        ]
      },
      'line-color': {
        'base': 1,
        'type': 'categorical',
        'property': 'congestion',
        'stops': [
          [
            'low',
            'hsl(145, 95%, 30%)'
          ],
          [
            'moderate',
            'hsl(30, 100%, 42%)'
          ],
          [
            'heavy',
            'hsl(355, 100%, 37%)'
          ],
          [
            'severe',
            'hsl(355, 70%, 22%)'
          ]
        ]
      },
      'line-opacity': 1,
      'line-offset': {
        'base': 1.5,
        'stops': [
          [
            7,
            0
          ],
          [
            9,
            1.2
          ],
          [
            11,
            1.2
          ],
          [
            18,
            10
          ],
          [
            20,
            15.5
          ]
        ]
      }
    }
  },
  {
    'id': 'traffic-primary',
    'metadata': {
      'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
    },
    'ref': 'traffic-primary-bg',
    'paint': {
      'line-width': {
        'base': 1.5,
        'stops': [
          [
            10,
            1
          ],
          [
            15,
            4
          ],
          [
            20,
            16
          ]
        ]
      },
      'line-color': {
        'base': 1,
        'type': 'categorical',
        'property': 'congestion',
        'stops': [
          [
            'low',
            'hsl(142, 55%, 50%)'
          ],
          [
            'moderate',
            'hsl(30, 100%, 55%)'
          ],
          [
            'heavy',
            'hsl(355, 100%, 50%)'
          ],
          [
            'severe',
            'hsl(355, 70%, 35%)'
          ]
        ]
      },
      'line-offset': {
        'base': 1.2,
        'stops': [
          [
            10,
            0
          ],
          [
            12,
            1.5
          ],
          [
            18,
            13
          ],
          [
            20,
            16
          ]
        ]
      },
      'line-opacity': 1
    }
  },
  {
    'id': 'traffic-secondary-tertiary',
    'metadata': {
      'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
    },
    'ref': 'traffic-secondary-tertiary-bg',
    'paint': {
      'line-width': {
        'base': 1.5,
        'stops': [
          [
            9,
            0.5
          ],
          [
            18,
            9
          ],
          [
            20,
            14
          ]
        ]
      },
      'line-color': {
        'base': 1,
        'type': 'categorical',
        'property': 'congestion',
        'stops': [
          [
            'low',
            'hsl(142, 55%, 50%)'
          ],
          [
            'moderate',
            'hsl(30, 100%, 55%)'
          ],
          [
            'heavy',
            'hsl(355, 100%, 50%)'
          ],
          [
            'severe',
            'hsl(355, 70%, 35%)'
          ]
        ]
      },
      'line-offset': {
        'base': 1.5,
        'stops': [
          [
            10,
            0.5
          ],
          [
            15,
            5
          ],
          [
            18,
            11
          ],
          [
            20,
            14.5
          ]
        ]
      },
      'line-opacity': 1
    }
  },
  {
    'id': 'traffic-street-link',
    'metadata': {
      'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
    },
    'ref': 'traffic-street-link-bg',
    'paint': {
      'line-width': {
        'base': 1.5,
        'stops': [
          [
            14,
            1.5
          ],
          [
            20,
            13.5
          ]
        ]
      },
      'line-color': {
        'base': 1,
        'type': 'categorical',
        'property': 'congestion',
        'stops': [
          [
            'low',
            'hsl(142, 55%, 50%)'
          ],
          [
            'moderate',
            'hsl(30, 100%, 55%)'
          ],
          [
            'heavy',
            'hsl(355, 100%, 50%)'
          ],
          [
            'severe',
            'hsl(355, 70%, 35%)'
          ]
        ]
      },
      'line-offset': {
        'base': 1.5,
        'stops': [
          [
            14,
            2
          ],
          [
            20,
            18
          ]
        ]
      },
      'line-opacity': 1
    }
  },
  {
    'id': 'traffic-trunk',
    'metadata': {
      'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
    },
    'ref': 'traffic-trunk-bg',
    'paint': {
      'line-width': {
        'base': 1.5,
        'stops': [
          [
            8,
            0.75
          ],
          [
            18,
            11
          ],
          [
            20,
            15
          ]
        ]
      },
      'line-color': {
        'base': 1,
        'type': 'categorical',
        'property': 'congestion',
        'stops': [
          [
            'low',
            'hsl(142, 55%, 50%)'
          ],
          [
            'moderate',
            'hsl(30, 100%, 55%)'
          ],
          [
            'heavy',
            'hsl(355, 100%, 50%)'
          ],
          [
            'severe',
            'hsl(355, 70%, 35%)'
          ]
        ]
      },
      'line-offset': {
        'base': 1.5,
        'stops': [
          [
            7,
            0
          ],
          [
            9,
            1
          ],
          [
            18,
            13
          ],
          [
            20,
            18
          ]
        ]
      },
      'line-opacity': 1
    }
  },
  {
    'id': 'traffic-motorway',
    'metadata': {
      'mapbox:group': '4053de47c16e55481b10fd748eaa994c'
    },
    'ref': 'traffic-motorway-bg',
    'paint': {
      'line-width': {
        'base': 1.5,
        'stops': [
          [
            6,
            0.5
          ],
          [
            9,
            1.5
          ],
          [
            18,
            14
          ],
          [
            20,
            18
          ]
        ]
      },
      'line-color': {
        'base': 1,
        'type': 'categorical',
        'property': 'congestion',
        'stops': [
          [
            'low',
            'hsl(142, 55%, 50%)'
          ],
          [
            'moderate',
            'hsl(30, 100%, 55%)'
          ],
          [
            'heavy',
            'hsl(355, 100%, 50%)'
          ],
          [
            'severe',
            'hsl(355, 70%, 35%)'
          ]
        ]
      },
      'line-opacity': 1,
      'line-offset': {
        'base': 1.5,
        'stops': [
          [
            7,
            0
          ],
          [
            9,
            1.2
          ],
          [
            11,
            1.2
          ],
          [
            18,
            10
          ],
          [
            20,
            15.5
          ]
        ]
      }
    }
  }
];

function addLayers(style, layers, before) {
  for (var i = 0; i < style.layers.length; i++) {
    var layer = style.layers[i];
    if (before === layer.id) {
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
  return Object.keys(style.sources).filter(function (sourceName) {
    return trafficSource.test(sourceName);
  }).length > 0;
};

/**
 * Toggle visibility of traffic layer.
 */
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

    var roadLayers = this._map.getStyle().layers.filter(function (layer) {
      return layer['source-layer'] === 'road';
    });
    var topRoadLayer = roadLayers[roadLayers.length - 1].id;
    var style = this._map.getStyle();
    var trafficStyle = addLayers(style, trafficLayers, topRoadLayer);
    this._map.setStyle(trafficStyle);
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
