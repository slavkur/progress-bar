requirejs.config({
    "baseUrl": "js/",
    "paths": {
      "underscore": "http://underscorejs.org/underscore-min",
      "backbone": "http://backbonejs.org/backbone-min",
      "jquery": "http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
    }
});

requirejs(['main']);
