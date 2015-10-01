<?php

Route::get('', [
    'as' => 'index', 
    'uses' => 'PagesController@index'
]);