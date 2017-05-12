(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.MapboxTraffic = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Create a new [Mapbox GL JS plugin](https://www.mapbox.com/blog/build-mapbox-gl-js-plugins/) that allows you to hide and show
 * traffic layers in your map and an optional toggle button.
 * @constructor
 * @param {object} options - Options to configure the plugin.
 * @param {bool} [options.showTraffic=false] - Show or hide traffic overlay by default.
 * @param {bool} [options.showTrafficButton=true] - Show a toggle button to turn traffic on and off.
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

},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy93YXRjaGlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQ3JlYXRlIGEgbmV3IFtNYXBib3ggR0wgSlMgcGx1Z2luXShodHRwczovL3d3dy5tYXBib3guY29tL2Jsb2cvYnVpbGQtbWFwYm94LWdsLWpzLXBsdWdpbnMvKSB0aGF0IGFsbG93cyB5b3UgdG8gaGlkZSBhbmQgc2hvd1xuICogdHJhZmZpYyBsYXllcnMgaW4geW91ciBtYXAgYW5kIGFuIG9wdGlvbmFsIHRvZ2dsZSBidXR0b24uXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gT3B0aW9ucyB0byBjb25maWd1cmUgdGhlIHBsdWdpbi5cbiAqIEBwYXJhbSB7Ym9vbH0gW29wdGlvbnMuc2hvd1RyYWZmaWM9ZmFsc2VdIC0gU2hvdyBvciBoaWRlIHRyYWZmaWMgb3ZlcmxheSBieSBkZWZhdWx0LlxuICogQHBhcmFtIHtib29sfSBbb3B0aW9ucy5zaG93VHJhZmZpY0J1dHRvbj10cnVlXSAtIFNob3cgYSB0b2dnbGUgYnV0dG9uIHRvIHR1cm4gdHJhZmZpYyBvbiBhbmQgb2ZmLlxuICogQHBhcmFtIHtSZWdFeHB9IFtvcHRpb25zLnRyYWZmaWNTb3VyY2U9L21hcGJveC10cmFmZmljLXZcXGQvXSAtIFRoZSB0cmFmZmljIHNvdXJjZSByZWdleCB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIGEgbGF5ZXIgZGlzcGxheXMgdHJhZmZpYyBvciBub3QuXG4gKi9cbmZ1bmN0aW9uIE1hcGJveFRyYWZmaWMob3B0aW9ucykge1xuICBpZiAoISh0aGlzIGluc3RhbmNlb2YgTWFwYm94VHJhZmZpYykpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01hcGJveFRyYWZmaWMgbmVlZHMgdG8gYmUgY2FsbGVkIHdpdGggdGhlIG5ldyBrZXl3b3JkJyk7XG4gIH1cblxuICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBzaG93VHJhZmZpYzogZmFsc2UsXG4gICAgc2hvd1RyYWZmaWNCdXR0b246IHRydWUsXG4gICAgdHJhZmZpY1NvdXJjZTogL21hcGJveC10cmFmZmljLXZcXGQvXG4gIH0sIG9wdGlvbnMpO1xuXG4gIHRoaXMucmVuZGVyID0gdGhpcy5yZW5kZXIuYmluZCh0aGlzKTtcbiAgdGhpcy50b2dnbGVUcmFmZmljID0gdGhpcy50b2dnbGVUcmFmZmljLmJpbmQodGhpcyk7XG4gIHRoaXMuX2hpZGVUcmFmZmljID0gdGhpcy5faGlkZVRyYWZmaWMuYmluZCh0aGlzKTtcbiAgdGhpcy5fc2hvd1RyYWZmaWMgPSB0aGlzLl9zaG93VHJhZmZpYy5iaW5kKHRoaXMpO1xuICB0aGlzLl90b2dnbGUgPSBuZXcgVHJhZmZpY0J1dHRvbih7XG4gICAgc2hvdzogdGhpcy5vcHRpb25zLnNob3dUcmFmZmljQnV0dG9uLFxuICAgIG9uVG9nZ2xlOiB0aGlzLnRvZ2dsZVRyYWZmaWMuYmluZCh0aGlzKVxuICB9KTtcbn1cblxuTWFwYm94VHJhZmZpYy5wcm90b3R5cGUudG9nZ2xlVHJhZmZpYyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5vcHRpb25zLnNob3dUcmFmZmljID0gIXRoaXMub3B0aW9ucy5zaG93VHJhZmZpYztcbiAgdGhpcy5yZW5kZXIoKTtcbn07XG5cbk1hcGJveFRyYWZmaWMucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMub3B0aW9ucy5zaG93VHJhZmZpYykge1xuICAgIHRoaXMuX3Nob3dUcmFmZmljKCk7XG4gICAgdGhpcy5fdG9nZ2xlLnNldE1hcEljb24oKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9oaWRlVHJhZmZpYygpO1xuICAgIHRoaXMuX3RvZ2dsZS5zZXRUcmFmZmljSWNvbigpO1xuICB9XG59O1xuXG5NYXBib3hUcmFmZmljLnByb3RvdHlwZS5faGlkZVRyYWZmaWMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdHlsZSA9IHRoaXMuX21hcC5nZXRTdHlsZSgpO1xuICB2YXIgc291cmNlID0gdGhpcy5vcHRpb25zLnRyYWZmaWNTb3VyY2U7XG4gIHN0eWxlLmxheWVycy5mb3JFYWNoKGZ1bmN0aW9uIChsYXllcikge1xuICAgIGlmIChzb3VyY2UudGVzdChsYXllclsnc291cmNlJ10pKSB7XG4gICAgICBsYXllclsnbGF5b3V0J10gPSBsYXllclsnbGF5b3V0J10gfHwge307XG4gICAgICBsYXllclsnbGF5b3V0J11bJ3Zpc2liaWxpdHknXSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xuICB0aGlzLl9tYXAuc2V0U3R5bGUoc3R5bGUpO1xufTtcblxuTWFwYm94VHJhZmZpYy5wcm90b3R5cGUuX3Nob3dUcmFmZmljID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc3R5bGUgPSB0aGlzLl9tYXAuZ2V0U3R5bGUoKTtcbiAgdmFyIHNvdXJjZSA9IHRoaXMub3B0aW9ucy50cmFmZmljU291cmNlO1xuICBzdHlsZS5sYXllcnMuZm9yRWFjaChmdW5jdGlvbiAobGF5ZXIpIHtcbiAgICBpZiAoc291cmNlLnRlc3QobGF5ZXJbJ3NvdXJjZSddKSkge1xuICAgICAgbGF5ZXJbJ2xheW91dCddID0gbGF5ZXJbJ2xheW91dCddIHx8IHt9O1xuICAgICAgbGF5ZXJbJ2xheW91dCddWyd2aXNpYmlsaXR5J10gPSAndmlzaWJsZSc7XG4gICAgfVxuICB9KTtcbiAgdGhpcy5fbWFwLnNldFN0eWxlKHN0eWxlKTtcbn07XG5cbk1hcGJveFRyYWZmaWMucHJvdG90eXBlLm9uQWRkID0gZnVuY3Rpb24gKG1hcCkge1xuICB0aGlzLl9tYXAgPSBtYXA7XG4gIG1hcC5vbignbG9hZCcsIHRoaXMucmVuZGVyKTtcbiAgcmV0dXJuIHRoaXMuX3RvZ2dsZS5lbGVtO1xufTtcblxuTWFwYm94VHJhZmZpYy5wcm90b3R5cGUub25SZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX21hcC5vZmYoJ2xvYWQnLCB0aGlzLnJlbmRlcik7XG5cbiAgdmFyIGVsZW0gPSB0aGlzLl90b2dnbGUuZWxlbTtcbiAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xuICB0aGlzLl9tYXAgPSB1bmRlZmluZWQ7XG59O1xuXG5mdW5jdGlvbiBjb250YWluZXIoY2hpbGQsIHNob3cpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NOYW1lID0gJ21hcGJveGdsLWN0cmwgbWFwYm94Z2wtY3RybC1ncm91cCc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZCk7XG4gIGlmICghc2hvdykge1xuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGJ1dHRvbigpIHtcbiAgdmFyIGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4uY2xhc3NOYW1lID0gJ21hcGJveGdsLWN0cmwtaWNvbiBtYXBib3hnbC1jdHJsLXRyYWZmaWMnO1xuICBidG4udHlwZSA9ICdidXR0b24nO1xuICBidG5bJ2FyaWEtbGFiZWwnXSA9ICdJbnNwZWN0JztcbiAgcmV0dXJuIGJ0bjtcbn1cblxuZnVuY3Rpb24gVHJhZmZpY0J1dHRvbihvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBzaG93OiB0cnVlLFxuICAgIG9uVG9nZ2xlOiBmdW5jdGlvbiAoKSB7fVxuICB9LCBvcHRpb25zKTtcblxuICB0aGlzLl9idG4gPSBidXR0b24oKTtcbiAgdGhpcy5fYnRuLm9uY2xpY2sgPSBvcHRpb25zLm9uVG9nZ2xlO1xuICB0aGlzLmVsZW0gPSBjb250YWluZXIodGhpcy5fYnRuLCBvcHRpb25zLnNob3cpO1xufVxuXG5UcmFmZmljQnV0dG9uLnByb3RvdHlwZS5zZXRUcmFmZmljSWNvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fYnRuLmNsYXNzTmFtZSA9ICdtYXBib3hnbC1jdHJsLWljb24gbWFwYm94Z2wtY3RybC10cmFmZmljJztcbn07XG5cblRyYWZmaWNCdXR0b24ucHJvdG90eXBlLnNldE1hcEljb24gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuX2J0bi5jbGFzc05hbWUgPSAnbWFwYm94Z2wtY3RybC1pY29uIG1hcGJveGdsLWN0cmwtbWFwJztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwYm94VHJhZmZpYztcbiJdfQ==
