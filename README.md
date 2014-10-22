![SpecGlobal_Logo.png](http://s23.postimg.org/4f0itpwtn/spec_global.png)

> Spec (http://spec.global) is filling a niche in the [display advertising technology landscape](http://prezi.com/katuvp2rkyk_/the-display-advertising-technology-landscape/) by providing media planning and creative agencies a platform that connects them to site and publisher inventory specifications.


## Used components and development tools
The Spec backend application uses following 3rd party libraries to make all this magic happen. To see all of the components used, check the `package.json` file in the root directory.

### Components 

* sails-postgresql (https://github.com/balderdashy/sails-postgresql)
* sails-generate-auth (https://www.npmjs.org/package/sails-generate-auth)
* PassportJS (http://passportjs.org/)

### Development Tools
* GulpJS (http://www.gulpjs.com)
* SailsJS (http://sailsjs.org) - `npm install -g sails`
* Karma (https://github.com/karma-runner/karma) - Unit test runner
* Protractor (http://angular.github.io/protractor) - End to end (E2E) test runner
* PhantomJS (http://phantomjs.org) - Headless WebKit scriptable with a JavaScript API
* Homebrew (http://brew.sh)
* Git (http://git-scm.com)
* Heroku Toolbelt](https://toolbelt.heroku.com/)
* NPM (http://nodejs.org)

Note that this list may change at any time and may not be complete.


# Getting started

I'm not going to reinvent the wheel here. In order to get started, a good basic guide is [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction). **Note:**Instead of `foreman start web` we'll be using `sails lift`. Don't let this confuse you.

In order to get a better understanding of how Sails config variables are passed around. Check out this [StackOverflow post](https://stackoverflow.com/questions/18267706/create-config-variables-in-sails-js).

Note: In order to get around some Heroku issue. We ended up renaming app.js to .app.js. Heroku doesn't like some of the syntax in the Sails default app.js file.

## Tutorials

- [Bulding Realtime Web Application With Sails and Angular](http://maangalabs.com/blog/2014/07/25/bulding-realtime-application-with-sails-and-angular-part-1/)
- [Generating REST API With Sails JS](http://maangalabs.com/blog/2014/07/26/generating-rest-api-with-sails-js-part-2/)
- [Using Angular JS with Sails Js REST APIs](http://maangalabs.com/blog/2014/07/26/generating-rest-api-with-sails-js-part-2/)
- [Angular routes communicating with Sails JS - Part 4](http://maangalabs.com/blog/2014/08/04/angular-routes-communicating-with-sails-js-part-4/)
- [SailsCasts](http://irlnathan.github.io/sailscasts/) - *Warning:* Some of the code mentioned isn't compatible with the latest version of Sails.
- [Introduction to AngularJS](https://docs.angularjs.org/tutorial/step_00)

# On-boarding

New to all of this? Maybe the following will help. You don't need to follow all of these steps in order to update the app, this is just basically how the app was spawned/born.

1. Generate a new app `sails new my-app` and `cd my-app` into the folder generated.
2. Follow the post [Sails.js, sick of restarting your server?](https://coderwall.com/p/njcr7w) to keep Sails running so that you don't have to keep lifting the sails.
3. Update your package.json with packages that you need.
```
"pg": "3.x",
"sails-postgresql": "^0.10.9",
"forever": "^0.11.1",
```
4. Run `git init` and add code to an existing [Github](http://github.com) project that you previously created using `git remote add origin https://github.com/myusername/myproject.git`
5. Set up Heroku with the command `heroku apps:create my-app-name` and possibly a staging app `heroku apps:create example-staging --remote staging`
6. Check to ensure Git remote was added with `git remote -v`
7. ~~Rename the `app.js` file to `.app.js`. Heroku doesn't like the syntax in the app file for some reason and throws errors. I think this cancels out some Heroku test.~~ This isn't needed anymore.
8. Get Bower components linked up properly. See this [Stackoverflow post](http://stackoverflow.com/a/22456574/67524).
9. Run `npm install` in the root directory to install Sails dependencies and any later items added to `package.json`. Note: If you later add items to `package.json`, you'll need to run this again. A better method for adding new node modules to the project is using `npm install --save some_module`. Using this method will automatically update `package.json`.
9. Add the initial code with `git add .`
10. Commit the initial code with `git commit -am "My intial code"`.
11. Push the code to the repo. `git push`
12. Push code to Heroku. `git push heroku master`
13. Boot up Forever. `forever -w app.js`
14. Your app should be running locally at `http://localhost:1337`.
15. Provision some addons. First we'll add a logging one via `heroku addons:add papertrail`
16. Provision the database. Run `heroku addons:add heroku-postgresql:dev`.
17. Update your `config/connections.js` and add PostgreSQL db/user/pass info.
18. Run `heroku config` to see your heroku envionment variables. These can be accessed within nodejs via `process.env.MYVAR`. Note: This doesn't work locally though. So, you'll need to add these variables to your config/local.js file for local production. See the information regarding [Environment Variables](#Environment Variables) below.
Because we're using the `sails-postgresql` adapter, we'll be using the following syntax to connect to our databse. The following can be added to `config/connections.js`.
```
herokuPostgresqlServer: {
	adapter: 'sails-postgresql',
	url: process.env.DATABASE_URL,
	ssl: true,
	schema: true
},
```

If you're running a local instance of PostgreSQL, you'll want to add something like the following to `config/local.js`. It's worth noting that this file will not be submited to your public Github repo, as it has been added to the `.gitignore` file.

```
connections: {
	localPostgresqlServer: {
		adapter: 'sails-postgresql',
		host: 'localhost',
		user: 'MY-LOCAL-USER',
		password: 'MY-LOCAL-PASS',
		database: 'MY-LOCAL-DB',
		schema: true
	}
} 
```
19. Commit your changed via `git commit -am "Made some updates"`.
20. Push the changes to the public repo `git push`. If it's your first time, you may have to use `git push -u origin master`.
21. Push the changes to your live Heroku site via `git push heroku`. This reads the git remote url associated with the name `heroku`.
22. Learn some AngularJS. The best tutorial is from [their website](https://docs.angularjs.org/tutorial/step_00).

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

For development and task management, we're using [Gulp](http://www.gulpjs.com) and the Node Package Manager (NPM). In order to install dependencies you must run `npm install` in the app directoy. If you don't have npm, that means you don't have NodeJS installed. Check out [Homebrew](http://brew.sh) – it'll help you get the programs you need quickly.

```bash
gulp serve
```

Then head to `http://localhost:3001` in your browser.

The `serve` tasks starts a static file server, which serves the AngularJS application, and a watch task which watches
all files for changes and lints, builds and injects them into the index.html accordingly.

## Tests

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

## Production ready build - a.k.a. dist

To make the app ready for deploy to production run:

```bash
gulp dist
```

Now there's a `./dist` folder with all scripts and stylesheets concatenated and minified, also third party libraries
installed with bower will be concatenated and minified into `vendors.min.js` and `vendors.min.css` respectively.

To run your deployment code run:

```bash
gulp production
```

Then head to `http://localhost:3000` in your browser.

# Testing

## Running Unit Tests

The backend of the app is currently set up to use Protractor for e2e (End to End) and Mocha for unit testing. And to make it a bit more confusing, we're using Protractor, Karma and Jasmine for the frontend testing (See [`assets/README.md`](assets/README.md). If you're curious to learn more about testing with Mocha in Sails, check out the post [Unit Testing Sails.js Applications With Mocha](http://www.tysoncadenhead.com/blog/unit-testing-sails-js-applications-with-mocha#.VEJS3L5fhhw). You should also see this [Stackoverflow post](http://stackoverflow.com/a/26439686/67524) as well.

But as mentioned, the app has already been configured. All you need to do is run:

`grunt test`

*Note: This should run all of the frontend Karma Jasmine unit tests and the Mocha unit tests for the backend. For end to end (e2e) tests, we're using Protractor. You'll need to run this via another command. Read more about e2e tests at [`assets/README.md`](assets/README.md).*

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
    "start": "sails lift --prod",
    "debug": "node debug app.js"
 },
 ...
 ```

`git push heroku master`

## Logging 

We are currently using [Papertrail](https://papertrailapp.com/) for all of our logging purposes.