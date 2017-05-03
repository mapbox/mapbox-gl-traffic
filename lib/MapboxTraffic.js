var TrafficButton = require('./TrafficButton');

function MapboxInspect(options) {
  if (!(this instanceof MapboxInspect)) {
    throw new Error('MapboxInspect needs to be called with the new keyword');
  }

  this.options = Object.assign({
    showTraffic: true,
    showTrafficButton: true,
    trafficSource: 'mapbox://mapbox.mapbox-traffic-v1'
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

MapboxInspect.prototype.toggleTraffic = function () {
  this.options.showTraffic = !this.options.showTraffic;
  this.render();
};

MapboxInspect.prototype.render = function () {
  if (this.options.showTraffic) {
    this._showTraffic();
  } else {
    this._hideTraffic();
  }
};

MapboxInspect.prototype._hideTraffic = function () {
  var style = this._map.getStyle();
  var source = this.options.trafficSource;
  style.layers.forEach(function (layer) {
    if (layer['source'] === source) {
      layer['layout'] = layer['layout'] || {};
      layer['layout']['visibility'] = 'none';
    }
  });
  this._map.setStyle(style);
};

MapboxInspect.prototype._showTraffic = function () {
  var style = this._map.getStyle();
  var source = this.options.trafficSource;
  style.layers.forEach(function (layer) {
    if (layer['source'] === source) {
      layer['layout'] = layer['layout'] || {};
      layer['layout']['visibility'] = 'visible';
    }
  });
  this._map.setStyle(style);
};

MapboxInspect.prototype.onAdd = function (map) {
  this._map = map;
  map.on('load', this.render);
  return this._toggle.elem;
};

MapboxInspect.prototype.onRemove = function () {
  this._map.off('load', this.render);

  var elem = this._toggle.elem;
  elem.parentNode.removeChild(elem);
  this._map = undefined;
};

module.exports = MapboxInspect;
