import React from 'react';

function Blog() {
    const posts = [
        {
            title: 'Best of du 5ème anniversaire du Club des Dirigeants',
            date: '14 Juil 2023',
            author: 'clubdesdirigeants',
            slug: 'best-of-5eme-anniversaire',
            excerpt: 'Best of du 5ème anniversaire du Club des Dirigeants'
        },
        {
            title: 'ils ont parlé de nous "5ème anniversaire du Club des Dirigeants"',
            date: '14 Juil 2023',
            author: 'clubdesdirigeants',
            slug: 'ils-ont-parle-de-nous-5eme-anniversaire',
            excerpt: '5ème anniversaire du Club des Dirigeants'
        },
        {
            title: 'La 14ème édition du forum international Medays',
            date: '05 Mai 2021',
            author: 'clubdesdirigeants',
            slug: '14eme-edition-forum-medays',
            excerpt: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate...'
        },
    ];

    return (
        <>
            <section className="page-header py-5" style={{background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)', color: 'white'}}>
                <div className="container text-center">
                    <h1 className="display-4">Actualités</h1>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row">
                        {posts.map((post, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">{post.excerpt}</p>
                                        <p className="text-muted small">
                                            <i className="fas fa-user"></i> {post.author} | 
                                            <i className="fas fa-calendar"></i> {post.date}
                                        </p>
                                        <a href={`/blog/${post.slug}`} className="btn btn-primary">Lire la suite</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog;

