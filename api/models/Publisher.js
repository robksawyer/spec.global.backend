/**
* Publisher.js
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
  	url: {
  		type: 'string'
  	},
  	contacts: {
  		collection: 'Contact',
  		via: 'employer'
  	},
  	standard_inventory: {
  		model: 'StandardPlacement'
  	},
  	rich_inventory: {
  		model: 'RichPlacement'
  	}
  },

  validation_messages: {
  	name: {
  		required: 'You must enter a valid name.'
  	}
  }
};

