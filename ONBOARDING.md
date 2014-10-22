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

## Tutorials

* [Bulding Realtime Web Application With Sails and Angular](http://maangalabs.com/blog/2014/07/25/bulding-realtime-application-with-sails-and-angular-part-1/)
* [Generating REST API With Sails JS](http://maangalabs.com/blog/2014/07/26/generating-rest-api-with-sails-js-part-2/)
* [Using Angular JS with Sails Js REST APIs](http://maangalabs.com/blog/2014/07/26/generating-rest-api-with-sails-js-part-2/)
* [Angular routes communicating with Sails JS - Part 4](http://maangalabs.com/blog/2014/08/04/angular-routes-communicating-with-sails-js-part-4/)
* [SailsCasts](http://irlnathan.github.io/sailscasts/) - *Warning:* Some of the code mentioned isn't compatible with the latest version of Sails.
* [Introduction to AngularJS](https://docs.angularjs.org/tutorial/step_00)
* [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)