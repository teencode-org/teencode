/*global SEGMENT_KEY:true*/

import React, { PropTypes } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'

class App extends React.Component {
   render () {
     return (
       <div>
        <Header />
        {this.props.children}
        <Footer />
       </div>
     )
   }
 }

App.propTypes = {
  children: PropTypes.object.isRequired
}

 
!function() {
  let analytics = window.analytics = window.analytics || [];
  if (!analytics.initialize) {
    analytics.invoked = !0;
    analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on"];
    analytics.factory = function(t) {
      return function() {
        let e = Array.prototype.slice.call(arguments);
        e.unshift(t);
        analytics.push(e);
        return analytics
      }
      };
      for (let t = 0; t < analytics.methods.length; t++) {
        let e = analytics.methods[t];
        analytics[e] = analytics.factory(e)
      }
      analytics.load = function(t) {
        let e = document.createElement("script");
        e.type = "text/javascript";
        e.async = !0;
        e.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js";
        let n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(e, n)
      };
      analytics.SNIPPET_VERSION = "4.0.0";
      analytics.load(SEGMENT_KEY);
      analytics.page();
    }
}();


export default App;
