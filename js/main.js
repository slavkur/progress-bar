'use strict';
define([
    "jquery",
    "underscore",
    "backbone"
], function($, _, Backbone) {
    console.log("refer for help", "https://github.com/requirejs/example-jquery-cdn");
    console.log($);
    console.log(_);
    console.log(Backbone);

    var CustomView = Backbone.View.extend({
       initialize: function(){
           console.log('I am custom view');
       } 
    });

    new CustomView();
});
