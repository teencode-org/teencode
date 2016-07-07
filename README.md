# react-bootstrap-test-boilerplate
react-bootstrap-test-boilerplate is a minimalistic, comprehensive starter kit for quick application development with React and bootstrap

**Why this boilerplate?**

1. **One command to launch** - Fire up your console and type `npm start`. The app automatically opens in your default browser
2. **Error highlighting and hot reload** - Every time you save, changes hot reload and linting and automated tests run.
4. **Reduce dev setup stress** - Build on existing powerful libraries instead of figuring out how to piece your together from scratch.
5. **Included Working example** - If you're wondering how get started, an included working example might just give you some pointers :)


## Get Started
1. **Initial Machine Setup**. I explained most of this project in [this blog post](http://blog.cent.tech/learn-react-series-iii-dev-environment-like-you-mean-business) to quickly bring you up to speed.
2. **Clone the project**. `git clone https://github.com/andela-iamadi/react-bootstrap-test-boilerplate.git`.
3. **Install dependencies**. `npm install`
4. **Run the example app**. `npm start -s`
The start command will run the build command, start up a webserver and launch the application in your default browser. Most of your files are however, going to be constantly watched for changes. So whenever you hit save, your code is rebuilt, checked against linting rules and tests are run. The -s flag is optional. It enables silent mode which suppresses unnecessary messages during the build.
5. **Go through the sample app.** Notice how code is placed in the `src` folder, React components placed within the `components` folder, tests within the `tests` folder, etc. These exist to give you a bearing on how you could continue to structure your app as favored by the React community.
6. **Delete the sample app files.** Once you're comfortable with how the example app works, you can delete every folder in `src/components` if you want a completely empty starter kit

##Initial Machine Setup
1. **Install [Node 4.0.0 or greater](https://nodejs.org)** - (5.0 or greater is recommended for optimal build performance). Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm).
2. **Install [Git](https://git-scm.com/downloads)**.
3. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)** in Chrome. (Optional, but extremely helpful.)
4. On a Mac? You're all set. If you're on Linux or Windows, complete the steps for your OS below.  

**On Linux:**  

 * Run this to [increase the limit](http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc) on the number of files Linux will watch.   
`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

**On Windows:**

Thanks to Cory House who brought this to my attention. Found it extremely useful.
* **Install [Python 2.7](https://www.python.org/downloads/)**. Some node modules may rely on node-gyp, which requires Python on Windows.
* **Install C++ Compiler**. Browser-sync requires a C++ compiler on Windows. [Visual Studio Express](https://www.visualstudio.com/en-US/products/visual-studio-express-vs) comes bundled with a free C++ compiler. Or, if you already have Visual Studio installed: Open Visual Studio and go to File -> New -> Project -> Visual C++ -> Install Visual C++ Tools for Windows Desktop. The C++ compiler is used to compile browser-sync (and perhaps other Node modules).

##Technologies
react-bootstrap-test-boilerplate comes with minimal markup to get you started, but a robust foundation of dev technologies to keep you going. Feel free to add to these available technologies either through `npm install` or directly to the `package.json` file.

This is mostly culled from Cory House's [React Slingshot](https://github.com/coryhouse/react-slingshot). You should totally check out his course on Pluralsight. They're just amazing!

| **Tech** | **Description** |**Learn More**|
|----------|-------|---|
|  [React](https://facebook.github.io/react/)  |   Awesome library for building fast, composable client-side components.    | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications)  |
|  [React Router](https://github.com/reactjs/react-router) | A complete routing library for React | [Pluralsight Course](https://www.pluralsight.com/courses/react-flux-building-applications) |
|  [Babel](http://babeljs.io) |  Compiles ES6 to ES5. Enjoy the new version of JavaScript today.     | [ES6 REPL](https://babeljs.io/repl/), [ES6 vs ES5](http://es6-features.org), [ES6 Katas](http://es6katas.org), [Pluralsight course](https://www.pluralsight.com/courses/javascript-fundamentals-es6)    |
| [Webpack](http://webpack.github.io) | Bundles npm packages and our JS into a single file. Includes hot reloading via [react-transform-hmr](https://www.npmjs.com/package/react-transform-hmr). | [Quick Webpack How-to](https://github.com/petehunt/webpack-howto) [Pluralsight Course](https://www.pluralsight.com/courses/webpack-fundamentals)|
| [Browsersync](https://www.browsersync.io/) | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices. | [Intro vid](https://www.youtube.com/watch?time_continue=1&v=heNWfzc7ufQ)|
| [Mocha](http://mochajs.org) | Automated tests with [Chai](http://chaijs.com/) for assertions and [Enzyme](https://github.com/airbnb/enzyme) for DOM testing without a browser using Node. | [Pluralsight Course](https://www.pluralsight.com/courses/testing-javascript) |
| [Isparta](https://github.com/douglasduteil/isparta) | Code coverage tool for ES6 code transpiled by Babel. |
| [TrackJS](https://trackjs.com/) | JavaScript error tracking. | [Free trial](https://my.trackjs.com/signup)|  
| [ESLint](http://eslint.org/)| Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React specific linting rules. | |
| [Editor Config](http://editorconfig.org) | Enforce consistent editor settings (spaces vs tabs, etc). | [IDE Plugins](http://editorconfig.org/#download) |
| [npm Scripts](https://docs.npmjs.com/misc/scripts)| Glues all this together in a handy automated build. | [Pluralsight course](https://www.pluralsight.com/courses/npm-build-tool-introduction), [Why not Gulp?](https://medium.com/@housecor/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8#.vtaziro8n)  |
