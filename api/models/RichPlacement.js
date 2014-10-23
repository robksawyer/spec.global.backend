/**
* RichPlacement.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: {
  		type: 'string',
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
  	max_video_animation_framerate: {
  		type: 'integer'
  	},
  	max_animation_length: {
  		type: 'integer'
  	},
  	max_video_length: {
  		type: 'integer'
  	},
  	audio_initiation: {
  		type: 'string'
  	},
  	hotspot_specification: {
  		type: 'string'
  	},
  	z_index_range: {
  		type: 'string'
  	},
  	minimum_required_controls: {
  		type: 'string'
  	},
  	max_percentage_cpu_usage: {
  		type: 'float'
  	},
  	max_expansion_width: {
  		type: 'integer'
  	},
  	max_expansion_height: {
  		type: 'integer'
  	},
  	max_initial_load_filesize: {
  		type: 'integer'
  	},
  	max_sub_load_filesize: {
  		type: 'integer'
  	},
  	max_user_sub_load_filesize: {
  		type: 'integer'
  	},
  	max_sub_loads: {
  		type: 'integer'
  	},
  	max_total_load_filesize: {
  		type: 'integer'
  	},
  	expansion_direction: {
  		type: 'string'
  	},
  	expansion_method: {
  		type: 'string'
  	},
 	  expansion_direction: {
  		type: 'string'
  	},
   	video_allowed: {
   		type: 'boolean'
   	},
   	audio_allowed: {
   		type: 'boolean'
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
    // Publisher of the Rich Media placement
    publisher: {
      collection: 'publisher',
      via: 'richinventory'
    },
  },

  validation_messages: {
  	width: {
  		required: 'You must supply a width value in pixels.'
  	},
  	height: {
  		required: 'You must supply a height value in pixels.'
  	},
  }

};

