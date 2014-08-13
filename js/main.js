'use strict';
define([
    "jquery",
    "underscore",
    "backbone",
    "views/example"
], function($, _, Backbone, ExampleView) {
    console.log("refer for help", "https://github.com/requirejs/example-jquery-cdn");
    console.log($);
    console.log(_);
    console.log(Backbone);

    new ExampleView({
    	el: $('body#content')
    }).render();
});
