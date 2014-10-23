![SpecGlobal_Logo.png](http://s23.postimg.org/4f0itpwtn/spec_global.png)

> Spec (http://spec.global) is filling a niche in the [display advertising technology landscape](http://prezi.com/katuvp2rkyk_/the-display-advertising-technology-landscape/) by providing media planning and creative agencies a platform that connects them to site and publisher inventory specifications.

# Before you dive in

In order to get a better understanding of how Sails config variables are passed around. Check out this [StackOverflow post](https://stackoverflow.com/questions/18267706/create-config-variables-in-sails-js). You should also check out the document [ONBOARDING.md](ONBOARDING.md) as it has on-boarding information.

## Used components and development tools
The Spec backend application uses following 3rd party libraries to make all this magic happen. To see all of the components used, check the `package.json` file in the root directory.

### Components 

* sails-postgresql (https://github.com/balderdashy/sails-postgresql)
* sails-generate-auth (https://www.npmjs.org/package/sails-generate-auth)
* PassportJS (http://passportjs.org/)

### Development Tools
* SailsJS - MVC Framework for NodeJS (http://sailsjs.org)
* Mocha - Javascript test framework for node.js & the browser (https://github.com/mochajs/mocha)
* Protractor - End to end (E2E) test runner (http://angular.github.io/protractor)
* PhantomJS  - Headless WebKit scriptable with a JavaScript API (http://phantomjs.org)
* Homebrew (http://brew.sh)
* Git - Version control (http://git-scm.com)
* Heroku Toolbelt (https://toolbelt.heroku.com/)
* NodeJS - Server backend technology (http://nodejs.org)

Note that this list may change at any time and may not be complete.

# Run the app

If you just want to see the app in action run the following:

1. `npm install`
2. `sails lift`
3. Navigate to `http://localhost:1337` in your browser.
4. Start up [spec.global.frontend](https://github.com/robksawyer/spec.global.frontend).


## Installation
First of all you have to install `npm` to your box. Also you need `node.js` installed to your box. Or, if you're serving the app via Heroku, just make sure that you have it installed locally. See [ONBOARDING.md](ONBOARDING.md) for more.
<pre>
npm install slush -g (TODO: Figure out if this is actually needed.)
npm install sails -g
</pre>

---

# Technology Stack

## Frontend

Information about the apps frontend can be found in [spec.global.frontend/README.md](https://github.com/robksawyer/spec.global.frontend/blob/master/README.md).


## Backend

Spec is built on the [SailsJS](http://sailsjs.org) framework. Data storage is provided by [PostgreSQL](http://www.postgresql.org/). The app has also been configured for testing with [Mocha](http://visionmedia.github.io/mocha/) via Grunt.

- [LoDash](http://devdocs.io/lodash/) - SailsJS is built on this, so it's imperative that you atleast know a little about it.
- [PostgreSQL](http://www.postgresql.org/)
- [Mocha](http://visionmedia.github.io/mocha/) - Mocha is a feature-rich JavaScript test framework running on node.js and the browser, making asynchronous testing simple and fun.
- [PhantomJS](http://phantomjs.org) - Headless browser testing.


## Development

For development and task management, we're using [Gulp](http://www.gulpjs.com) and the Node Package Manager (NPM). In order to install dependencies you must run `npm install` in the app directoy. If you don't have npm, that means you don't have NodeJS installed (Refer to the top of this README). Check out [Homebrew](http://brew.sh) – it'll help you get the programs you need quickly.

### Starting the backend

In order to get the backend running, all you need to run is:

`sails lift`

### Starting the frontend

After you've started the backend, you'll need to get the frontend running. You can see how to do this at [spec.global.frontend/README.md](https://github.com/robksawyer/spec.global.frontend/blob/master/README.md).

# Testing

To run tests run:

```bash
gulp test
```

**Or** first inject all test files into `karma.conf.js` with:

```bash
gulp karma-conf
```

Then you're able to run Karma directly. Example:

```bash
karma start --single-run
```

---

# The App
The current app is running at <http://spec-global-backend.herokuapp.com>.

# Staging 

Coming soon...
~~The current staging site is located at <http://spec-global-backend-stage.herokuapp.com>.~~


# Deployment 

## Environment Variables

These can be tricky if you've never worked with them. Basically, our strategy is similar to what's mentioned in the post <http://stackoverflow.com/questions/21291111/sails-js-accessing-local-js-environment-settings-in-controllers>. The idea here is to add environment variables needed locally by Sails to the `config/local.js` file. All of the others are added using `heroku config:set MYVAR=''` and then used in the production code via `process.env.MYVAR`.

## General Info

There are a couple of things to note about deployment. First, check the `package.json` file to ensure that the scripts section is set to your liking. In order to start the production version of Sails, you'd want something like the following.

```
...
"scripts": {
    "start": "gulp production",
    "debug": "node debug app.js"
 },
 ...
 ```

`git push heroku master`

## Logging 

We are currently using [Papertrail](https://papertrailapp.com/) for all of our logging purposes.