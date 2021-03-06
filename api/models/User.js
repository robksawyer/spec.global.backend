'use strict';

/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {
    schema: true,

    attributes: {
        username: {
            type: 'string',
            unique: true
        },
        email: {
            type: 'email',
            unique: true
        },
        firstName: {
            type: 'string',
            required: true
        },
        lastName: {
            type: 'string',
            required: true
        },
        admin: {
            type: 'boolean',
            defaultsTo: false
        },

        // Below is all specification for relations to another models

        // Passport configurations
        passports: {
            collection: 'Passport',
            via: 'user'
        },
        // Message objects that user has sent
        /*messages: {
            collection: 'message',
            via: 'user'
        },*/
        // Login objects that are attached to user
        logins: {
            collection: 'UserLogin',
            via:        'user'
        }
    }
};
