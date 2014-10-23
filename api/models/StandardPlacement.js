/**
* StandardPlacement.js
*
* @description :: This represents standard media placements.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: {
  		type: 'string',
      minLength: 2,
      required: true
  	},
  	width: {
  		type: 'integer',
  		required: true
  	},
  	height: {
  		type: 'integer',
  		required: true
  	},
  	file_type: {
  		type: 'string'
  	},
  	max_animation_framerate: {
  		type: 'integer'
  	},
  	max_animation_length: {
  		type: 'integer'
  	},
  	audio_initiation: {
  		type: 'string'
  	},
  	max_audio_length: {
  		type: 'integer'
  	},
  	hotspot_specification: {
  		type: 'string'
  	},
  	z_index_range: {
  		type: 'string'
  	},
 	  location_on_page: {
   		type: 'string'
   	},
  	labeling_requirements: {
  		type: 'string'
  	},
  	submission_lead_time: {
  		type: 'string'
  	},
  	implmentation_notes: {
  		type: 'string'
  	},
  	best_practice_document_url: {
  		type: 'string'
  	},
  	more_information_url: {
  		type: 'string'
  	},

    //
    // Below is all specification for relations to another models
    //  
    // Publisher of the Standard Media placement
    publisher: {
      collection: 'publisher',
      via: 'standardinventory'
    },

  },

  validation_messages: {
    name: {
      required: 'You must supply a valid name for the placement. If you do not have a specific name, make up one.',
      minLength: 'The name must be more than one character long.'
    },
  	width: {
  		required: 'You must supply a width value in pixels.'
  	},
  	height: {
  		required: 'You must supply a height value in pixels.'
  	},
  }

};

