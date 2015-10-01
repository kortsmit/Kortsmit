var elixir = require('laravel-elixir');

elixir.config.sourcemaps = false;

elixir(function(mix) {

    mix.sass('all.scss');

    //mix.browserify('main.js');

    mix.scripts([
    	'jquery.js',
    	'main.js'
    	]);

    mix.version([
    	'css/all.css',
    	'js/all.js'
    	]);

});
