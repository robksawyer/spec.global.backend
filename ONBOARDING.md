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

# Used libraries and other stuff

## Backend

* [sails.js](http://sailsjs.org/) Sails makes it easy to build custom, enterprise-grade Node.js apps. It is designed to emulate the familiar MVC pattern of frameworks like Ruby on Rails, but with support for the requirements of modern apps: data-driven APIs with a scalable, service-oriented architecture.
* [Passport](http://passportjs.org/) Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.
[Local](https://github.com/jaredhanson/passport-local)  [Twitter](https://github.com/jaredhanson/passport-twitter)  [GitHub](https://github.com/jaredhanson/passport-github)  [Facebook](https://github.com/jaredhanson/passport-facebook)  [Google](https://github.com/jaredhanson/passport-google)
* [JsonWebToken](https://github.com/auth0/node-jsonwebtoken) JSON Web Token implementation (symmetric and asymmetric)
* [barrels](https://github.com/bredikhin/barrels) Simple DB Fixtures for Sails.js (^0.10.x)
* [ua-parser](https://github.com/tobie/ua-parser) A multi-language port of Browserscope's user agent parser.

## Frontend
* [slush-angular](https://github.com/slushjs/slush-angular) A slush generator for AngularJS using the Google Angular App Structure Recommendations
* [jQuery](http://jquery.com/) jQuery is a fast, small, and feature-rich JavaScript library.
* [Bootstrap](http://getbootstrap.com/) Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.
* [Font Awesome](http://fontawesome.io/) Font Awesome gives you scalable vector icons that can instantly be customized — size, color, drop shadow, and anything that can be done with the power of CSS.
* [AngularJS](https://angularjs.org/) AngularJS lets you write client-side web applications as if you had a smarter browser. It lets you use good old HTML (or HAML, Jade and friends!) as your template language and lets you extend HTML’s syntax to express your application’s components clearly and succinctly.
* [AngularUI Router](https://github.com/angular-ui/ui-router) The de-facto solution to flexible routing with nested views
* [UI Bootstrap](http://angular-ui.github.io/bootstrap/) Bootstrap components written in pure AngularJS by the AngularUI Team
* [angular-moment](https://github.com/urish/angular-moment) Moment.JS directives for Angular.JS (timeago and more)
* [angular-bootstrap-show-errors](https://github.com/paulyoder/angular-bootstrap-show-errors) An Angular directive for Bootstrap to intelligently show form validation errors
* [angular-linkify](https://github.com/scottcorgan/angular-linkify) Angular filter, directive, and service to linkify text.
* [angular-toastr](http://foxandxss.github.io/angular-toastr/) Angular port of CodeSeven/toastr.
* [textAngular](https://github.com/fraywing/textAngular) A radically powerful Text-Editor/Wysiwyg editor for Angular.js.
* [sails.io.js](https://github.com/balderdashy/sails.io.js) Browser SDK for communicating w/ Sails via sockets
* [angularSails](https://github.com/balderdashy/angularSails) AngularJS bindings for Sails.

## Common stuff 
> Libraries that are used on both sides
* [Lo-Dash](http://lodash.com/) A utility library delivering consistency, customization, performance, & extras.
* [Moment.js](http://momentjs.com/) + [Moment Timezone Parse](http://momentjs.com/timezone/), validate, manipulate, and display dates in javascript.

## Tutorials

* [Bulding Realtime Web Application With Sails and Angular](http://maangalabs.com/blog/2014/07/25/bulding-realtime-application-with-sails-and-angular-part-1/)
* [Generating REST API With Sails JS](http://maangalabs.com/blog/2014/07/26/generating-rest-api-with-sails-js-part-2/)
* [Using Angular JS with Sails Js REST APIs](http://maangalabs.com/blog/2014/07/26/generating-rest-api-with-sails-js-part-2/)
* [Angular routes communicating with Sails JS - Part 4](http://maangalabs.com/blog/2014/08/04/angular-routes-communicating-with-sails-js-part-4/)
* [SailsCasts](http://irlnathan.github.io/sailscasts/) - *Warning:* Some of the code mentioned isn't compatible with the latest version of Sails.
* [Introduction to AngularJS](https://docs.angularjs.org/tutorial/step_00)
* [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)

### Resources, guides, etc.

* [Frontend & Backend: Gotta Keep’em Separated](http://lostechies.com/bradcarleton/2014/03/25/frontend-backend-gotta-keepem-separated/)
* [Is it common to separate back-end and front-end into two positions on web development projects?](http://programmers.stackexchange.com/questions/107503/is-it-common-to-separate-back-end-and-front-end-into-two-positions-on-web-develo)
* [Concerns about separating front-end and back-end with a NodeJS UI server](http://stackoverflow.com/questions/23871853/concerns-about-separating-front-end-and-back-end-with-a-nodejs-ui-server)
* [Is the development industry moving to separate Back-end and Front-end developers?](http://www.linkedin.com/groups/Is-development-industry-moving-separate-40949.S.5808929533427990532)
* [Techniques for authentication in AngularJS applications](https://medium.com/opinionated-angularjs/techniques-for-authentication-in-angularjs-applications-7bbf0346acec)
* [Json Web Tokens: Introduction](http://angular-tips.com/blog/2014/05/json-web-tokens-introduction/)
* [Json Web Tokens: Examples](http://angular-tips.com/blog/2014/05/json-web-tokens-examples/)