/**
* Contact.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: {
  		type: 'string',
  		required: true
  	},
  	email: {
  		type: 'email',
  		unique: true
  	},
  	phone: {
  		type: 'string'
  	},
  	employer: {
  		model: 'Publisher'
  	}
  },

  validation_messages: {
  	name: {
  		required: 'You must supply a valid name.'
  	},
  }
};

