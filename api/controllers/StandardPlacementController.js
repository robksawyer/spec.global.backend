/**
 * InventoryController
 *
 * @description :: Server-side logic for managing inventories
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
	/**
	*
	* Handles showing the new placement form.
	*
	**/
	'new': function(req, res) {
		res.view();
	},

	/**
	*
	* Handles viewing placmeents
	*
	**/
	show: function(req, res, next){
		StandardPlacement.findOne( { id: req.params['id'] })
		.exec(function ( error, placement){
			if(error) return next(error);
			if(!placement) return next();

			res.view({
				placement: placement
			});
		});
	}

};	

