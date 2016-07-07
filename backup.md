When you're done with this tutorial, you should be able to setup your react application to transpile JSX, hot-reload, work with es6, react-router, bootstrap and write tests while you're at it.

Coming from a Rails background, I'm still finding it difficult adjusting to the speed things change in the Javascript world! Less than two months ago, I made a post on <a href="http://blog.cent.tech/learn-react-series-1-setting-up-your-development-environment/">setting up react dev environment</a>. Fast-forward to date, I've picked up a few tricks. There's no better place to share them than where it all began . . .


### Jumping right in . . .

Yeah, we've already gone over the basics before, so I'd assume you know how to use npm (or you can at least type `npm install` in your console).

>NB: To avoid errors that kept coming up across different platforms from last tutorials, I'd try to use bash commands only when I must. This is experimental though. I totally love bash. If there are less issues this time, then we'd know where the problem lies

### Basic application file structure

For this tutorial, I'll name the main application folder 'react-setup'. Next I'd go ahead to create four files: `package.json`, `server.js`, `webpack.config.dev.js` and `.babelrc`

#### package.json

This file is usually created by npm when you run `npm init` in the console (yep, still avoiding bash). Copy and paste these dependencies from the package.json below.

[javascript]
{
  "name": "react-bootstrap-starter",
  "version": "1.0.0",
  "description": "A react bootstrap starter kit by Innocent Amadi",
  "scripts": {

  },
  "author": "Innocent Amadi",
  "license": "MIT",
  "dependencies": {
    "babel-polyfill": "6.8.0",
    "bootstrap": "3.3.6",
    "jquery": "2.2.3",
    "react": "15.0.2",
    "react-dom": "15.0.2",
    "react-redux": "4.4.5",
    "react-router": "2.4.0"
  },
  "devDependencies": {
    "babel-cli": "6.8.0",
    "babel-core": "6.8.0",
    "babel-loader": "6.2.4",
    "babel-plugin-react-display-name": "2.0.0",
    "babel-preset-es2015": "6.6.0",
    "babel-preset-react": "6.5.0",
    "babel-preset-react-hmre": "1.1.1",
    "babel-register": "6.8.0",
    "colors": "1.1.2",
    "compression": "1.6.1",
    "cross-env": "1.0.7",
    "css-loader": "0.23.1",
    "enzyme": "2.2.0",
    "eslint": "2.9.0",
    "eslint-plugin-import": "1.6.1",
    "eslint-plugin-react": "5.0.1",
    "eslint-watch": "2.1.11",
    "eventsource-polyfill": "0.9.6",
    "expect": "1.19.0",
    "express": "4.13.4",
    "extract-text-webpack-plugin": "1.0.1",
    "file-loader": "0.8.5",
    "jsdom": "8.5.0",
    "mocha": "2.4.5",
    "nock": "8.0.0",
    "npm-run-all": "1.8.0",
    "open": "0.0.5",
    "react-addons-test-utils": "15.0.2",
    "rimraf": "2.5.2",
    "style-loader": "0.13.1",
    "url-loader": "0.5.7",
    "webpack": "1.13.0",
    "webpack-dev-middleware": "1.6.1",
    "webpack-hot-middleware": "2.10.0"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/andela-iamadi/react-bootstrap-starter"
  }
}
[/javascript]

To find out what each dependency does, head over to the repository. I'm trying to keep this post as short as I can :)

#### server.js

This file will serve as the main entry point of our application. If you've worked with node then this is no new concept to you. I'd like to use express to handle routing, webpack to run tasks and bundle our multiple javascript files into a single file (similar to gulp and grunt, just preferred by the React community) and webpack-hot-middleware to help with hot-reloading. When hot-reloading is enabled, any changes to certain watched files will cause webpack to rebundle the javascript. The alternative would we doing that manually (nah!).

Okay, let's go ahead and configure the server:

[javascript]
import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from './webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 8080; // Or your other favorite port
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
[/javascript]

##### Huh? What have we done here?

Okay, we required the libraries we wanted to use, then instructed express to work with `webpack-dev-middleware`. This middleware allows webpack to get injected in-between express and node (super-helpful since we would like to handle our own routing).

Next, we told express to also use webpack-hot-middleware, but not before passing `webpack-hot-middleware` our configuration (contained in `webpack.config.dev.js`, we'll create it in a moment).

Following this, we asked express to serve `index.html` contained in the `src` folder (chill, none have been created yet) for requests coming into every route. So no matter what route is visited, `index.html` is served. This is important since our react/javascript code will be mounted in `index.html`.

Finally, we started our server! (Phew. . .)

#### Setting up webpack.config.dev.js

One of the biggest advantages of webpack is the ease of its setup (at least when compared to gulp and grunt. The `dev` in the file name only serves to differentiate the development mode config from production config. The dev mode config creates a mapping in memory, not an actual file. So we'd need a different production config file that actually creates a javascript file.

Here's what my `webpack.config.dev.js` file contains:

[javascript]
import webpack from 'webpack';
import path from 'path';

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill', //important for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  target: 'web', // bundle app the way web browsers can understand
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};
[/javascript]

We specified the `cheap-module-eval-source-map` as our dev tool since it allows us see the exact file that could've caused errors. The advantage of this particular dev-tool is it only maps lines (no column mappings) and are thus much faster.

We then informed webpack that the entry file of our app will be named `index.js` and located in a `src` folder. We've also specified our output file to be named `bundle.js` (well, other javascript files are bundled into this one file).

Since we'd like to also handle css and fonts that come with bootstrap, we've configured loaders to help us compile these file types.

To better understand webpack's configuration, I'd encourage you to visit <a href="https://webpack.github.io">their website</a> and glance through their very detailed documentation.

#### .babelrc

This file is not compulsory. Many react projects do not have it. I'm using it in this project for two reasons:
<ul>
  <li>I'm using es6 (or es2015) syntax in `srcServer.js`
  <li>I want to explicitly require babel's `stage-2` preset that enables support for the spread operator
</ul>

Open up `.babelrc` and paste the following code

[javascript]
{
  "presets": [
      "es2015",
      "react",
      "stage-2"
    ],
  "env": {
    "development": {
      "presets": ["react-hmre"]
    }
  }
}

[/javascript]

#### Summarizing the first part

We just created three important files in the root folder of our application: `package.json`, `srcServer.js`, and `webpack.config.dev.js`. These files form the foundation of our react application. To see how these files look like, you could have a look at the github repo.

Now we can go ahead with the rest of the app with a clear conscience :)

### React Componenets

Create a new folder in the root folder of your app and name it `src`. Within this folder, create three files: `index.html`, `index.js` and `routes.js`. Let's work on each of them individually.

#### Index.html

This is the html file that our react code will be mounted on. Most times, this file requires only the regular boilerplate code with a major addition being the element where react is mounted.

You could just copy and paste the following:

[html]
<html>
  <head>
    <meta charset="UTF-8">
    <title>React + Bootstrap Starter app</title>
  </head>
  <body>
    <div id="app"> </div>
    <script src="/bundle.js"></script>
  </body>
</html>
[/html]

What we've done here is quite simple. In addition to the regular html code, we added a div with id `app` to the body and also linked the `bundle.js` file to our html. Recall that we expect webpack to create this bundle.js. It doesn't exist yet, but it will. Believe me. It will.

#### Index.js

This file will serve as the parent file for subsequent react javascript files. For now, just add the following:

[javascript]
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
)
[/javascript]

Chill, chill, chill. A lot of foreign codes right? Not really. Let's go over them real quick.

We just imported react because we need it (what else are we doing? Lol). To render react on the dom, we need the render function in the react-dom library (react-dom was moved into a separate library since we call the render function just once in a React application).

Next stop is `react-router`. Hold up... a router for react? Yep! A special library that helps us handle routing within react apps. React router offers two kind of routes - the slash (browserHistory) and hash (hashHistory). You may have guessed why I prefer to use browserHistory. I'd rather have regular forward-slashed links than have hashes in my links!

We could decide to define our routes inline inside the render function. I personally prefer to use a separate routes file and import it into `index.js`

Did we just import css files? Yep! Webpack's amazing! We can treat our css files like javascript! Taking advantage of this, we are importing our custom styles in styles.css (we'd create shortly) and bootstrap from the node_modules folder.

Lastly, we call our render function. This function takes in the Router object and the element where react is to be mounted.

Before going further, let's just create our custom css file now. Create a new folder in the `src` folder and name it `styles`. Within this folder, create a new `styles.scss` file. This file has already been required in `Index.js`. We'd see if it works when we run the app.

#### routes.js

Okay, we've spoken too much about it. Let's create our routes. Open up routes.js and paste the following in it:

[javascript]
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
  </Route>
)
[/javascript]

I'm sure you have a pretty good idea what's going on here. Most of the other files we are importing are our main react components which have not yet been created. By specifying the component prop of a `Route` we tell react-router to serve that component whenever a route is visited.

Still not very clear? Let's wipe off any confusion by creating the components folder and its contents so we know exactly what they contain.

### React components

It's common practice to keep react components within a components folder. So create a new folder within `src` and name it `components`.

Within this folder, create a file and name it `app.js`. Open app.js and paste the following code:

[javascript]
import React, { PropTypes } from 'react'

class App extends React.Component {
   render () {
     return (
       <div className="container-fluid">
        {"A super cool header will be here"}
        {this.props.children}
       </div>
     )
   }
 }

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App;
[/javascript]

Again, no need to panic. You're coming across our very first react component. React components can be created using es6 classes (as we've done above). Other ways include using React.createClass() as es5 accepts, or using regular functions (more about this later). For now though, we'd stick to classes.

The render() function is used by React classes to return JSX objects containing markup code. JSX (Javascript XML) is a way of writing html markup within Javascript. If you've never come across this, don't cringe yet. Once you get used to it, JSX is awesome!

Basically, a react component can have data passed down to it from a parent. This data will be accessible within the component as a prop. By rendering `this.props.children`, we allow our app component to be a parent for other components.

React allows us hook between when a component is instantiated and when it is rendered so we can perform various logic. Glance through this page to learn more about these lifecycle methods.

The next nice thing we did is to check if this component have the expected children prop that we are rendering.

Finally, we export the App component so we can use it in other files.

See? Quite simple! (hopefully. . .)


Having come this far, there's just two more files we need. One component to render the Home page and one to render the About page as we've earlier hinted in `routes.js`. Let's go ahead and create these.

Within the `components` folder, create two folders: `home` and `about`. Within these folders, create `Homepage.js` and `AboutPage.js` respectively.

At this point, your total application directory structure should look like this:

>react-bootstrap-starter
>  |----node-modules
>  |----src
>       |----components
>            |----about
>                 |----AboutPage.js
>            |----home
>                 |----HomePage.js
>       |----styles
>            |----styles.css
>       |----index.html
>       |----index.js
>       |----routes.js
>  |---- .babelrc
>  |----package.json
>  |----webpack.config.dev.js

Open `HomePage.js` and paste the following code in:

[javascript]
import React from 'react'
import { Link } from 'react-router'

class HomePage extends React.Component {
   render () {
     return (
       <div className="jumbotron">
        <h1>React + Bootstrap + Test tutorial by Cent</h1>
        <p>Setting up development environment, routing and tests</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
       </div>
     )
   }
 }
 export default HomePage
[/javascript]

Once again we create a react component. We're using bootstrap to liven up the view a bit this time. :)
One more new object however - Link! Okay, a `Link` is a helper method from react-router that helps us create anchor tags that doesn't reload the entire page. In fact, React has the single page application (SPA) feel because of these guys.

Let's finish up. Open `AboutPage.js` and paste the following code:

[javascript]
import React from 'react'
class ABoutPage extends React.Component {
   render () {
     return (
       <div>
        <h1>About page</h1>
        <p>We have absolutely nothing new to talk about. You will know about us soon enough</p>
       </div>
     )
   }
 }

export default ABoutPage;
[/javascript]

Nothing new here. Yeah. Nothing at all!

### Reward ==> Fire up the server!

Alright! The moment you've been waiting for! When you get to see all your hardwork displayed beautifully on the browser (or an error message on the console, depending on which direction your luck swings, haha)

Go prayerfully to the console, and type `npm start`
