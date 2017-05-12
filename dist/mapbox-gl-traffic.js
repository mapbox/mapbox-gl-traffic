(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.MapboxTraffic = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function MapboxTraffic(options) {
  if (!(this instanceof MapboxTraffic)) {
    throw new Error('MapboxTraffic needs to be called with the new keyword');
  }

  this.options = Object.assign({
    showTraffic: false,
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
    if (layer['source'] === source) {
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
    if (layer['source'] === source) {
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

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImZ1bmN0aW9uIE1hcGJveFRyYWZmaWMob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWFwYm94VHJhZmZpYykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01hcGJveFRyYWZmaWMgbmVlZHMgdG8gYmUgY2FsbGVkIHdpdGggdGhlIG5ldyBrZXl3b3JkJyk7XG4gIH1cblxuICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBzaG93VHJhZmZpYzogZmFsc2UsXG4gICAgc2hvd1RyYWZmaWNCdXR0b246IHRydWUsXG4gICAgdHJhZmZpY1NvdXJjZTogJ21hcGJveDovL21hcGJveC5tYXBib3gtdHJhZmZpYy12MSdcbiAgfSwgb3B0aW9ucyk7XG5cbiAgdGhpcy5yZW5kZXIgPSB0aGlzLnJlbmRlci5iaW5kKHRoaXMpO1xuICB0aGlzLnRvZ2dsZVRyYWZmaWMgPSB0aGlzLnRvZ2dsZVRyYWZmaWMuYmluZCh0aGlzKTtcbiAgdGhpcy5faGlkZVRyYWZmaWMgPSB0aGlzLl9oaWRlVHJhZmZpYy5iaW5kKHRoaXMpO1xuICB0aGlzLl9zaG93VHJhZmZpYyA9IHRoaXMuX3Nob3dUcmFmZmljLmJpbmQodGhpcyk7XG4gIHRoaXMuX3RvZ2dsZSA9IG5ldyBUcmFmZmljQnV0dG9uKHtcbiAgICBzaG93OiB0aGlzLm9wdGlvbnMuc2hvd1RyYWZmaWNCdXR0b24sXG4gICAgb25Ub2dnbGU6IHRoaXMudG9nZ2xlVHJhZmZpYy5iaW5kKHRoaXMpXG4gIH0pO1xufVxuXG5NYXBib3hUcmFmZmljLnByb3RvdHlwZS50b2dnbGVUcmFmZmljID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLm9wdGlvbnMuc2hvd1RyYWZmaWMgPSAhdGhpcy5vcHRpb25zLnNob3dUcmFmZmljO1xuICB0aGlzLnJlbmRlcigpO1xufTtcblxuTWFwYm94VHJhZmZpYy5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5vcHRpb25zLnNob3dUcmFmZmljKSB7XG4gICAgdGhpcy5fc2hvd1RyYWZmaWMoKTtcbiAgICB0aGlzLl90b2dnbGUuc2V0TWFwSWNvbigpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX2hpZGVUcmFmZmljKCk7XG4gICAgdGhpcy5fdG9nZ2xlLnNldFRyYWZmaWNJY29uKCk7XG4gIH1cbn07XG5cbk1hcGJveFRyYWZmaWMucHJvdG90eXBlLl9oaWRlVHJhZmZpYyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0eWxlID0gdGhpcy5fbWFwLmdldFN0eWxlKCk7XG4gIHZhciBzb3VyY2UgPSB0aGlzLm9wdGlvbnMudHJhZmZpY1NvdXJjZTtcbiAgc3R5bGUubGF5ZXJzLmZvckVhY2goZnVuY3Rpb24gKGxheWVyKSB7XG4gICAgaWYgKGxheWVyWydzb3VyY2UnXSA9PT0gc291cmNlKSB7XG4gICAgICBsYXllclsnbGF5b3V0J10gPSBsYXllclsnbGF5b3V0J10gfHwge307XG4gICAgICBsYXllclsnbGF5b3V0J11bJ3Zpc2liaWxpdHknXSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xuICB0aGlzLl9tYXAuc2V0U3R5bGUoc3R5bGUpO1xufTtcblxuTWFwYm94VHJhZmZpYy5wcm90b3R5cGUuX3Nob3dUcmFmZmljID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3R5bGUgPSB0aGlzLl9tYXAuZ2V0U3R5bGUoKTtcbiAgdmFyIHNvdXJjZSA9IHRoaXMub3B0aW9ucy50cmFmZmljU291cmNlO1xuICBzdHlsZS5sYXllcnMuZm9yRWFjaChmdW5jdGlvbiAobGF5ZXIpIHtcbiAgICBpZiAobGF5ZXJbJ3NvdXJjZSddID09PSBzb3VyY2UpIHtcbiAgICAgIGxheWVyWydsYXlvdXQnXSA9IGxheWVyWydsYXlvdXQnXSB8fCB7fTtcbiAgICAgIGxheWVyWydsYXlvdXQnXVsndmlzaWJpbGl0eSddID0gJ3Zpc2libGUnO1xuICAgIH1cbiAgfSk7XG4gIHRoaXMuX21hcC5zZXRTdHlsZShzdHlsZSk7XG59O1xuXG5NYXBib3hUcmFmZmljLnByb3RvdHlwZS5vbkFkZCA9IGZ1bmN0aW9uIChtYXApIHtcbiAgdGhpcy5fbWFwID0gbWFwO1xuICBtYXAub24oJ2xvYWQnLCB0aGlzLnJlbmRlcik7XG4gIHJldHVybiB0aGlzLl90b2dnbGUuZWxlbTtcbn07XG5cbk1hcGJveFRyYWZmaWMucHJvdG90eXBlLm9uUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9tYXAub2ZmKCdsb2FkJywgdGhpcy5yZW5kZXIpO1xuXG4gIHZhciBlbGVtID0gdGhpcy5fdG9nZ2xlLmVsZW07XG4gIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKTtcbiAgdGhpcy5fbWFwID0gdW5kZWZpbmVkO1xufTtcblxuZnVuY3Rpb24gY29udGFpbmVyKGNoaWxkLCBzaG93KSB7XG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdtYXBib3hnbC1jdHJsIG1hcGJveGdsLWN0cmwtZ3JvdXAnO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICBpZiAoIXNob3cpIHtcbiAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBidXR0b24oKSB7XG4gIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLmNsYXNzTmFtZSA9ICdtYXBib3hnbC1jdHJsLWljb24gbWFwYm94Z2wtY3RybC10cmFmZmljJztcbiAgYnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgYnRuWydhcmlhLWxhYmVsJ10gPSAnSW5zcGVjdCc7XG4gIHJldHVybiBidG47XG59XG5cbmZ1bmN0aW9uIFRyYWZmaWNCdXR0b24ob3B0aW9ucykge1xuICBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgc2hvdzogdHJ1ZSxcbiAgICBvblRvZ2dsZTogZnVuY3Rpb24gKCkge31cbiAgfSwgb3B0aW9ucyk7XG5cbiAgdGhpcy5fYnRuID0gYnV0dG9uKCk7XG4gIHRoaXMuX2J0bi5vbmNsaWNrID0gb3B0aW9ucy5vblRvZ2dsZTtcbiAgdGhpcy5lbGVtID0gY29udGFpbmVyKHRoaXMuX2J0biwgb3B0aW9ucy5zaG93KTtcbn1cblxuVHJhZmZpY0J1dHRvbi5wcm90b3R5cGUuc2V0VHJhZmZpY0ljb24gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX2J0bi5jbGFzc05hbWUgPSAnbWFwYm94Z2wtY3RybC1pY29uIG1hcGJveGdsLWN0cmwtdHJhZmZpYyc7XG59O1xuXG5UcmFmZmljQnV0dG9uLnByb3RvdHlwZS5zZXRNYXBJY29uID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLl9idG4uY2xhc3NOYW1lID0gJ21hcGJveGdsLWN0cmwtaWNvbiBtYXBib3hnbC1jdHJsLW1hcCc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcGJveFRyYWZmaWM7XG4iXX0=
