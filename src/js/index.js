import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'tether';
import 'bootstrap/dist/js/bootstrap.min';
import '../scss/main.scss';

// function fetchCookie(name) {
//    if (document.cookie.indexOf(name + "=") < 0) {
//      return null;
//    }
//    return document.cookie.split(';')
//     .map(f => f.trim())
//     .filter(f => f.split('=')[0] === name)[0]
//     .split('=')[1];
//  }
//
// !function () {
//   const analytics = window.analytics = window.analytics || [];
//   analytics.invoked = !0;
//   analytics.methods = [
//     "trackSubmit",
//     "trackClick",
//     "trackLink",
//     "trackForm",
//     "pageview",
//     "identify",
//     "reset",
//     "group",
//     "track",
//     "ready",
//     "alias",
//     "debug",
//     "page",
//     "once",
//     "off",
//     "on"
//   ];
//   analytics.factory = function (t) {
//     return function () {
//       const e = Array.prototype.slice.call(arguments);
//       e.unshift(t);
//       analytics.push(e);
//       return analytics;
//     };
//   };
//   for (let t = 0; t < analytics.methods.length; t++) {
//     const e = analytics.methods[t];
//     analytics[e] = analytics.factory(e);
//   }
//   analytics.load = function (t) {
    {/*const e = document.createElement("script");*/}
    {/*e.type = "text/javascript";*/}
    {/*e.async = !0;*/}
    {/*e.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";*/}
    {/*const n = document.getElementsByTagName("script")[0];*/}
    {/*n.parentNode.insertBefore(e, n);*/}
  {/*};*/}
  {/*analytics.SNIPPET_VERSION = "4.0.0";*/}
  {/*analytics.load(fetchCookie('segmentKey'));*/}
//   analytics.page();
//   analytics.identify('', {}, {
//     Intercom: { hideDefaultLauncher: true }
//   });
// }();

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
)
