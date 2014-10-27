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
    description: {
      type: 'text',
    },
  	url: {
  		type: 'string'
  	},
  	contacts: {
  		collection: 'contact',
  		via: 'employer'
  	},

    // 
    // Below is all specification for relations to another models
    // 
    // Standard Media inventory of the publisher
  	standard_inventory: {
  		model: 'StandardPlacement'
  	},

    // Rich Media inventory of the publisher
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

