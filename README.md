# Mapbox GL Traffic [![Build Status](https://travis-ci.org/lukasmartinelli/mapbox-gl-traffic.svg?branch=master)](https://travis-ci.org/lukasmartinelli/mapbox-gl-traffic)

Add a traffic toggle control to [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js).

[**:globe_with_meridians: Check the demo**](http://lukasmartinelli.ch/mapbox-gl-traffic/)

![demo](https://raw.githubusercontent.com/lukasmartinelli/mapbox-gl-traffic/master/demo.gif)

## Usage

**mapbox-gl-traffic** is a [Mapbox GL JS plugin](https://www.mapbox.com/blog/build-mapbox-gl-js-plugins/) that you can easily add on top of your map. Check `index.html` for a complete example.

Make sure to include the CSS and JS files.

**When using a CDN**

```html
<script src='http://lukasmartinelli.ch/mapbox-gl-traffic/dist/mapbox-gl-traffic.min.js'></script>
<link href='http://lukasmartinelli.ch/mapbox-gl-traffic/dist/mapbox-gl-traffic.css' rel='stylesheet' />
```

### Add a Toggle

```javascript
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/traffic-night-v2',
    center: [-77.0259, 38.9010],
    zoom: 9,
    hash: true
});
map.addControl(new MapboxTraffic());
```

## Develop

Run the linter and watch for changes to rebuild with browserify.

```
npm install
npm run test
npm run watch
```

Create a minified standalone build.

```
npm install
npm run build
```
