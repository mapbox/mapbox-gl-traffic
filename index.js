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
  this._toggle = new TrafficButton({
    show: this.options.showTrafficButton,
    onToggle: this.toggleTraffic.bind(this)
  });
}

MapboxTraffic.prototype.toggleTraffic = function () {
  this.options.showTraffic = !this.options.showTraffic;
  this.render();
};

MapboxTraffic.prototype.render = function () {
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

module.exports = MapboxTraffic;
