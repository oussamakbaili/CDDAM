import React from 'react';
import { useTranslation } from 'react-i18next';

function Testimonials() {
    const { t } = useTranslation();
    const testimonials = [
        {
            author: 'Abdelhak KASSABI',
            position: 'DIRECTEUR CHEZ URBAMENA',
            content: 'Cooperation, partenariat et solidarité sont l\'essentiel de toute réussite, d\'où l\'importance de se constituer en groupe et s\'ouvrir individuellement vers les membres du groupe et de façon solidaire vers l\'extérieur du groupe. En toute sincérité depuis ma présence au sein du club des dirigeants je retrouve mes forces et je me retrouve moi même. Je fais bcp de progrès. Merci beaucoup Ssi Driss pour avoir pense a créer ce club, et merci au club qui nous réuni.',
            rating: 5
        },
        {
            author: 'Ahmed BOUTRIG',
            position: 'DEPUTY DIRECTOR GENERAL CHEZ SGI TEELCOM',
            content: 'Il ne m\'étais jamais venu a l\'esprit qu\'un jour je serai parmi un groupe CDD un groupe inédit. Bon continuation Ssi Driss.',
            rating: 5
        },
        {
            author: 'Mohammed Achraf ALAOUI TAHIRI',
            position: 'DIRECTEUR DES OPERATIONS CHEZ SCASCO ASSURANCES',
            content: 'Merci d\'avoir mis au point ce concept au Maroc Ssi Driss, vous y avez crû et vous y êtes engagé. Seuls les vrais leaders connaissent Ia valeur du réseau. Tous ceux qui ont réussi témoignent de l\'importance du réseautage. Un sage a dit un jour que chacun d\'entre nous est Ia moyenne des 5 personnes qui l\'entourent, je rajouterai autant bien les choisir, et ce qui se fait au Club des dirigeants.',
            rating: 5
        },
    ];

    return (
        <>
            <section className="page-header py-5" style={{background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)', color: 'white'}}>
                <div className="container text-center">
                    <h1 className="display-4">{t('testimonials.title')}</h1>
                </div>
            </section>

            <section className="testimonials-section py-5">
                <div className="container">
                    <div className="row">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="testimonial-card">
                                    <div className="testimonial-rating">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <i key={i} className="fas fa-star"></i>
                                        ))}
                                    </div>
                                    <p className="testimonial-content">"{testimonial.content}"</p>
                                    <div className="testimonial-author">
                                        <strong>{testimonial.author}</strong>
                                        <p>{testimonial.position}</p>
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

export default Testimonials;

