(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.MapboxTraffic = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var MapboxTraffic = require('./lib/MapboxTraffic');
module.exports = MapboxTraffic;

},{"./lib/MapboxTraffic":2}],2:[function(require,module,exports){
var TrafficButton = require('./TrafficButton');

function fixRasterSource(source) {
  if (source.type === 'raster' && source.tileSize && source.tiles) {
    return {
      type: source.type,
      tileSize: source.tileSize,
      tiles: source.tiles
    };
  }
  if (source.type === 'raster' && source.url) {
    return {
      type: source.type,
      url: source.url
    };
  }
  return source;
}

//TODO: We can remove this at some point in the future
function fixStyle(style) {
  Object.keys(style.sources).forEach(function (sourceId) {
    style.sources[sourceId] = fixRasterSource(style.sources[sourceId]);
  });
  return style;
}

function MapboxInspect(options) {
  if (!(this instanceof MapboxInspect)) {
    throw new Error('MapboxInspect needs to be called with the new keyword');
  }

  this.options = Object.assign({
    showTraffic: true,
    showTrafficButton: true,
    trafficSource: 'mapbox://mapbox.mapbox-traffic-v1',
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

MapboxInspect.prototype._hideTraffic = function() {
  var style = this._map.getStyle();
  var source = this.options.trafficSource;
  style.layers.forEach(function (layer) {
    if (layer['source'] === source) {
      layer['layout'] = layer['layout'] || {};
      layer['layout']['visibility'] = 'none';
    }
  });
  this._map.setStyle(style);
}

MapboxInspect.prototype._showTraffic = function(style) {
  var style = this._map.getStyle();
  var source = this.options.trafficSource;
  style.layers.forEach(function (layer) {
    if (layer['source'] === source) {
      layer['layout'] = layer['layout'] || {};
      layer['layout']['visibility'] = 'visible';
    }
  });
  this._map.setStyle(style);
}

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

},{"./TrafficButton":3}],3:[function(require,module,exports){
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
  btn.className = 'mapboxgl-ctrl-icon mapboxgl-ctrl-inspect';
  btn.type = 'button';
  btn['aria-label'] = 'Inspect';
  return btn;
}

function InspectButton(options) {
  options = Object.assign({
    show: true,
    onToggle: function () {}
  }, options);

  this._btn = button();
  this._btn.onclick = options.onToggle;
  this.elem = container(this._btn, options.show);
}

InspectButton.prototype.setInspectIcon = function () {
  this._btn.className = 'mapboxgl-ctrl-icon mapboxgl-ctrl-inspect';
};

InspectButton.prototype.setMapIcon = function () {
  this._btn.className = 'mapboxgl-ctrl-icon mapboxgl-ctrl-map';
};

module.exports = InspectButton;

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiaW5kZXguanMiLCJsaWIvTWFwYm94VHJhZmZpYy5qcyIsImxpYi9UcmFmZmljQnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBOztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgTWFwYm94VHJhZmZpYyA9IHJlcXVpcmUoJy4vbGliL01hcGJveFRyYWZmaWMnKTtcbm1vZHVsZS5leHBvcnRzID0gTWFwYm94VHJhZmZpYztcbiIsInZhciBUcmFmZmljQnV0dG9uID0gcmVxdWlyZSgnLi9UcmFmZmljQnV0dG9uJyk7XG5cbmZ1bmN0aW9uIGZpeFJhc3RlclNvdXJjZShzb3VyY2UpIHtcbiAgaWYgKHNvdXJjZS50eXBlID09PSAncmFzdGVyJyAmJiBzb3VyY2UudGlsZVNpemUgJiYgc291cmNlLnRpbGVzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHNvdXJjZS50eXBlLFxuICAgICAgdGlsZVNpemU6IHNvdXJjZS50aWxlU2l6ZSxcbiAgICAgIHRpbGVzOiBzb3VyY2UudGlsZXNcbiAgICB9O1xuICB9XG4gIGlmIChzb3VyY2UudHlwZSA9PT0gJ3Jhc3RlcicgJiYgc291cmNlLnVybCkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBzb3VyY2UudHlwZSxcbiAgICAgIHVybDogc291cmNlLnVybFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHNvdXJjZTtcbn1cblxuLy9UT0RPOiBXZSBjYW4gcmVtb3ZlIHRoaXMgYXQgc29tZSBwb2ludCBpbiB0aGUgZnV0dXJlXG5mdW5jdGlvbiBmaXhTdHlsZShzdHlsZSkge1xuICBPYmplY3Qua2V5cyhzdHlsZS5zb3VyY2VzKS5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2VJZCkge1xuICAgIHN0eWxlLnNvdXJjZXNbc291cmNlSWRdID0gZml4UmFzdGVyU291cmNlKHN0eWxlLnNvdXJjZXNbc291cmNlSWRdKTtcbiAgfSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gTWFwYm94SW5zcGVjdChvcHRpb25zKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNYXBib3hJbnNwZWN0KSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTWFwYm94SW5zcGVjdCBuZWVkcyB0byBiZSBjYWxsZWQgd2l0aCB0aGUgbmV3IGtleXdvcmQnKTtcbiAgfVxuXG4gIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHNob3dUcmFmZmljOiB0cnVlLFxuICAgIHNob3dUcmFmZmljQnV0dG9uOiB0cnVlLFxuICAgIHRyYWZmaWNTb3VyY2U6ICdtYXBib3g6Ly9tYXBib3gubWFwYm94LXRyYWZmaWMtdjEnLFxuICB9LCBvcHRpb25zKTtcblxuICB0aGlzLnJlbmRlciA9IHRoaXMucmVuZGVyLmJpbmQodGhpcyk7XG4gIHRoaXMudG9nZ2xlVHJhZmZpYyA9IHRoaXMudG9nZ2xlVHJhZmZpYy5iaW5kKHRoaXMpO1xuICB0aGlzLl9oaWRlVHJhZmZpYyA9IHRoaXMuX2hpZGVUcmFmZmljLmJpbmQodGhpcyk7XG4gIHRoaXMuX3Nob3dUcmFmZmljID0gdGhpcy5fc2hvd1RyYWZmaWMuYmluZCh0aGlzKTtcbiAgdGhpcy5fdG9nZ2xlID0gbmV3IFRyYWZmaWNCdXR0b24oe1xuICAgIHNob3c6IHRoaXMub3B0aW9ucy5zaG93VHJhZmZpY0J1dHRvbixcbiAgICBvblRvZ2dsZTogdGhpcy50b2dnbGVUcmFmZmljLmJpbmQodGhpcylcbiAgfSk7XG59XG5cbk1hcGJveEluc3BlY3QucHJvdG90eXBlLnRvZ2dsZVRyYWZmaWMgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMub3B0aW9ucy5zaG93VHJhZmZpYyA9ICF0aGlzLm9wdGlvbnMuc2hvd1RyYWZmaWM7XG4gIHRoaXMucmVuZGVyKCk7XG59O1xuXG5NYXBib3hJbnNwZWN0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuc2hvd1RyYWZmaWMpIHtcbiAgICB0aGlzLl9zaG93VHJhZmZpYygpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2hpZGVUcmFmZmljKCk7XG4gIH1cbn07XG5cbk1hcGJveEluc3BlY3QucHJvdG90eXBlLl9oaWRlVHJhZmZpYyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc3R5bGUgPSB0aGlzLl9tYXAuZ2V0U3R5bGUoKTtcbiAgdmFyIHNvdXJjZSA9IHRoaXMub3B0aW9ucy50cmFmZmljU291cmNlO1xuICBzdHlsZS5sYXllcnMuZm9yRWFjaChmdW5jdGlvbiAobGF5ZXIpIHtcbiAgICBpZiAobGF5ZXJbJ3NvdXJjZSddID09PSBzb3VyY2UpIHtcbiAgICAgIGxheWVyWydsYXlvdXQnXSA9IGxheWVyWydsYXlvdXQnXSB8fCB7fTtcbiAgICAgIGxheWVyWydsYXlvdXQnXVsndmlzaWJpbGl0eSddID0gJ25vbmUnO1xuICAgIH1cbiAgfSk7XG4gIHRoaXMuX21hcC5zZXRTdHlsZShzdHlsZSk7XG59XG5cbk1hcGJveEluc3BlY3QucHJvdG90eXBlLl9zaG93VHJhZmZpYyA9IGZ1bmN0aW9uKHN0eWxlKSB7XG4gIHZhciBzdHlsZSA9IHRoaXMuX21hcC5nZXRTdHlsZSgpO1xuICB2YXIgc291cmNlID0gdGhpcy5vcHRpb25zLnRyYWZmaWNTb3VyY2U7XG4gIHN0eWxlLmxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChsYXllcikge1xuICAgIGlmIChsYXllclsnc291cmNlJ10gPT09IHNvdXJjZSkge1xuICAgICAgbGF5ZXJbJ2xheW91dCddID0gbGF5ZXJbJ2xheW91dCddIHx8IHt9O1xuICAgICAgbGF5ZXJbJ2xheW91dCddWyd2aXNpYmlsaXR5J10gPSAndmlzaWJsZSc7XG4gICAgfVxuICB9KTtcbiAgdGhpcy5fbWFwLnNldFN0eWxlKHN0eWxlKTtcbn1cblxuTWFwYm94SW5zcGVjdC5wcm90b3R5cGUub25BZGQgPSBmdW5jdGlvbiAobWFwKSB7XG4gIHRoaXMuX21hcCA9IG1hcDtcbiAgbWFwLm9uKCdsb2FkJywgdGhpcy5yZW5kZXIpO1xuICByZXR1cm4gdGhpcy5fdG9nZ2xlLmVsZW07XG59O1xuXG5NYXBib3hJbnNwZWN0LnByb3RvdHlwZS5vblJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fbWFwLm9mZignbG9hZCcsIHRoaXMucmVuZGVyKTtcblxuICB2YXIgZWxlbSA9IHRoaXMuX3RvZ2dsZS5lbGVtO1xuICBlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbSk7XG4gIHRoaXMuX21hcCA9IHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwYm94SW5zcGVjdDtcbiIsImZ1bmN0aW9uIGNvbnRhaW5lcihjaGlsZCwgc2hvdykge1xuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnbWFwYm94Z2wtY3RybCBtYXBib3hnbC1jdHJsLWdyb3VwJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgaWYgKCFzaG93KSB7XG4gICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gYnV0dG9uKCkge1xuICB2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi5jbGFzc05hbWUgPSAnbWFwYm94Z2wtY3RybC1pY29uIG1hcGJveGdsLWN0cmwtaW5zcGVjdCc7XG4gIGJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIGJ0blsnYXJpYS1sYWJlbCddID0gJ0luc3BlY3QnO1xuICByZXR1cm4gYnRuO1xufVxuXG5mdW5jdGlvbiBJbnNwZWN0QnV0dG9uKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIHNob3c6IHRydWUsXG4gICAgb25Ub2dnbGU6IGZ1bmN0aW9uICgpIHt9XG4gIH0sIG9wdGlvbnMpO1xuXG4gIHRoaXMuX2J0biA9IGJ1dHRvbigpO1xuICB0aGlzLl9idG4ub25jbGljayA9IG9wdGlvbnMub25Ub2dnbGU7XG4gIHRoaXMuZWxlbSA9IGNvbnRhaW5lcih0aGlzLl9idG4sIG9wdGlvbnMuc2hvdyk7XG59XG5cbkluc3BlY3RCdXR0b24ucHJvdG90eXBlLnNldEluc3BlY3RJY29uID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9idG4uY2xhc3NOYW1lID0gJ21hcGJveGdsLWN0cmwtaWNvbiBtYXBib3hnbC1jdHJsLWluc3BlY3QnO1xufTtcblxuSW5zcGVjdEJ1dHRvbi5wcm90b3R5cGUuc2V0TWFwSWNvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fYnRuLmNsYXNzTmFtZSA9ICdtYXBib3hnbC1jdHJsLWljb24gbWFwYm94Z2wtY3RybC1tYXAnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnNwZWN0QnV0dG9uO1xuIl19
