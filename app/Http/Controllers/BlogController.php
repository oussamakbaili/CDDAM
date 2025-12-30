<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
        $posts = [
            [
                'title' => 'Best of du 5ème anniversaire du Club des Dirigeants des Associations Maroc',
                'date' => '14 Juil 2023',
                'author' => 'clubdesdirigeants',
                'slug' => 'best-of-5eme-anniversaire',
                'excerpt' => 'Best of du 5ème anniversaire du Club des Dirigeants des Associations Maroc'
            ],
            [
                'title' => 'ils ont parlé de nous "5ème anniversaire du Club des Dirigeants des Associations Maroc"',
                'date' => '14 Juil 2023',
                'author' => 'clubdesdirigeants',
                'slug' => 'ils-ont-parle-de-nous-5eme-anniversaire',
                'excerpt' => '5ème anniversaire du Club des Dirigeants des Associations Maroc'
            ],
            [
                'title' => 'La 14ème édition du forum international Medays',
                'date' => '05 Mai 2021',
                'author' => 'clubdesdirigeants',
                'slug' => '14eme-edition-forum-medays',
                'excerpt' => 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate...'
            ],
        ];

        return view('blog.index', compact('posts'));
    }

    public function show($slug)
    {
        return view('blog.show', compact('slug'));
    }
}

