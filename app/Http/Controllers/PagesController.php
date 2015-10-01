<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class PagesController extends Controller
{
    /**
     * Display the one and only page. For now.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('index');
    }

}
