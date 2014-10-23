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

    // 
    // Below is all specification for relations to another models
    // 
    // Standard Media inventory of the publisher
  	standardplacement: {
  		model: 'standardplacement'
  	},

    // Rich Media inventory of the publisher
  	richplacement: {
  		model: 'richplacement'
  	}
  },

  validation_messages: {
  	name: {
  		required: 'You must enter a valid name.'
  	}
  }
};

