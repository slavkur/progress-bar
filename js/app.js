requirejs.config({
    "baseUrl": "js/",
    "paths": {
      "less": "http://cdnjs.cloudflare.com/ajax/libs/less.js/1.7.3/less.min",
      "underscore": "http://underscorejs.org/underscore-min",
      "backbone": "http://backbonejs.org/backbone-min",
      "jquery": "http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
    }
});

requirejs(['main', 'less']);
