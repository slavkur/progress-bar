'use strict';
define([
    "jquery",
    "underscore",
    "backbone",
    "hbs!views/templates/example"
], function($, _, Backbone, exampleTemplate) {
    return Backbone.View.extend({ 
    	initialize: function() {
    		this.message = "I am example View";
    	},

    	render: function() {
    		this.$el.html(exampleTemplate({
    			message: this.message
    		}));
    	}
    });
});
