# Mapbox GL Traffic [![Build Status](https://travis-ci.org/lukasmartinelli/mapbox-gl-traffic.svg?branch=master)](https://travis-ci.org/lukasmartinelli/mapbox-gl-traffic)

Add a traffic toggle control to [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js).

![demo](https://raw.githubusercontent.com/lukasmartinelli/mapbox-gl-traffic/master/demo.gif)  

## Usage

**mapbox-gl-traffic** is a [Mapbox GL JS plugin](https://www.mapbox.com/blog/build-mapbox-gl-js-plugins/) that you can easily add on top of your map. Check `index.html` for a complete example.

Make sure to include the CSS and JS files.

**When using a CDN**

```html
<script src='http://mapbox-gl-traffic.lukasmartinelli.ch/dist/mapbox-gl-traffic.min.js'></script>
<link href='http://mapbox-gl-traffic.lukasmartinelli.ch/dist/mapbox-gl-traffic.css' rel='stylesheet' />
```

### Add a Toggle

Add the traffic toggle control to your map.

```javascript
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
