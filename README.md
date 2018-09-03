# Neighborhood map Project [FEND 8th project]

## Project Overview

A single page application featuring a map  of eight musuems in Alexandria,Egypt
by using the Google maps api for loading the and the locations data by Four square api.

## TL;DR

To get started right away:

* Download it from [Here](https://github.com/Mohamed-ElHadidy/Neighborhood-map-react/archive/master.zip) *OR* Clone it from 

```
https://github.com/Mohamed-ElHadidy/Neighborhood-map-react.git
 ```

* install all project dependencies with `npm install`
* start the development server with `npm start`
Open http://localhost:3000 to view it in the browser.


## Deployment

`npm run build` creates a `build` directory with a production build of the app. Set up your favorite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.
The service worker works only in production build.

### Static Server

For environments using [Node](https://nodejs.org/), the easiest way to handle this would be to install [serve](https://github.com/zeit/serve) and let it handle the rest:

```sh
npm install -g serve
serve -s build
```


## What You're Getting
```bash
├── README.md - This file.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon.
│   └── index.html # DO NOT MODIFY
│   └── manifest.json # react app json file
└── src
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of  the app. Contains the state , methods that manage the app functionality.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── Header.js # The first component which holdes the header bar. 
    ├── MapComponent.js # The map page which consists of the map data, markers, infoWindow.
    ├── Menu.js # This component holdes search input form to filter the places list.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── places.json # A json file which holdes the hard coded places (it's not used now)
    └── registerServiceWorker.js # SW file provided by create-react-app to serve assets from local cache.
```

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Resourse

* Google Maps API
* Four Square API
* Create-React-App
* google-maps-react
* Dependencies: 
```
    "escape-string-regexp": "^1.0.5",
    "google-maps-react": "^2.0.2",
    "react": "^16.4.1",
    "react-dom": "^16.4.1",
    "react-scripts": "1.1.4",
    "sort-by": "^1.2.0"
  ```
