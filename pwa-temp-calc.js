/* eslint-disable no-unused-vars */
var GHPATH = 'temp-calc';
var APP_PREFIX = 'pwa_temp_calc_';

// every time any of the files change, need to update the version (version_01, version_02…)
var VERSION = 'version_06';
// every new deployment, need to update the prefix depending on new bundle filename
var JS_PREFIX = '3b37ebd9';
// every new deployment, need to update the prefix depending on new bundle filename
var CSS_PREFIX = '77388d6b';

var URLS = [
  // root scope
  '/',
  `/${GHPATH}/index.html`,
  `/${GHPATH}/ade-logo-white.png`,

  // current scope
  `/${GHPATH}/`,
  `/${GHPATH}/pwa-${GHPATH}-ico.png`,
  `/${GHPATH}/index.js`,
  `/${GHPATH}/assets/index.${CSS_PREFIX}.css`,
];
