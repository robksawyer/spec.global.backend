'use strict';

/**
 * Passport Middleware
 *
 * Policy for Sails that initializes Passport.js and as well as its built-in
 * session support.
 *
 * In a typical web application, the credentials used to authenticate a user
 * will only be transmitted during the login request. If authentication
 * succeeds, a session will be established and maintained via a cookie set in
 * the user's browser.
 *
 * Each subsequent request will not contain credentials, but rather the unique
 * cookie that identifies the session. In order to support login sessions,
 * Passport will serialize and deserialize user instances to and from the
 * session.
 *
 * For more information on the Passport.js middleware, check out:
 * http://passportjs.org/guide/configure/
 *
 * @param   {Request}   request     Request object
 * @param   {Response}  response    Response object
 * @param   {Function}  next        Callback function
 */
var passport = require('passport');

module.exports = function(request, response, next) {
    sails.log.verbose(__filename + ':' + __line + ' [Policy.Passport() called]');

    // Initialize Passport
    passport.initialize()(request, response, function() {
        // Use the built-in sessions
        passport.session()(request, response, function() {
            // Make the user available throughout the frontend
            response.locals.user = request.user;

            next();
        });
    });
};
