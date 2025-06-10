import { contactData } from "../data/contactData";

const Contact = () => {
    return (
        <section 
            className="contact-section position-relative overflow-hidden"
            id="contact"
            style={{
                background: 'linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)',
                minHeight: '100vh',
                color: '#ffffff',
                padding: '80px 0'
            }}
        >
            <div 
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1
                }}
            ></div>

            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 2 }}>
                <div className="particles">
                    <div className="particle position-absolute" 
                         style={{ 
                             top: '15%', 
                             left: '12%', 
                             width: '8px', 
                             height: '8px', 
                             background: '#ffd700', 
                             borderRadius: '50%',
                             animation: 'float 8s ease-in-out infinite'
                         }}>
                    </div>
                    <div className="particle position-absolute" 
                         style={{ 
                             top: '65%', 
                             right: '18%', 
                             width: '6px', 
                             height: '6px', 
                             background: 'rgba(255,255,255,0.6)', 
                             borderRadius: '50%',
                             animation: 'float 6s ease-in-out infinite reverse'
                         }}>
                    </div>
                    <div className="particle position-absolute" 
                         style={{ 
                             top: '35%', 
                             right: '10%', 
                             width: '10px', 
                             height: '10px', 
                             background: 'rgba(255,215,0,0.4)', 
                             borderRadius: '50%',
                             animation: 'float 12s ease-in-out infinite'
                         }}>
                    </div>
                </div>
            </div>

            <div className="container position-relative" style={{ zIndex: 3 }}>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 text-center">
                        <h1 
                            className="display-4 fw-bold mb-4 text-warning"
                            data-aos="fade-down"
                            data-aos-duration="1000"
                        >
                            {contactData.headline}
                        </h1>
                        <p 
                            className="lead mb-5 text-light"
                            style={{ lineHeight: '1.6', fontSize: '1.1rem' }}
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            {contactData.description}
                        </p>

                        <div className="contact-list mb-5">
                            {contactData.contacts.map((contact, index) => (
                                <div 
                                    key={index}
                                    className="contact-item bg-dark bg-opacity-50 p-3 rounded-4 backdrop-blur border border-warning border-opacity-30 mb-3"
                                    data-aos="fade-up"
                                    data-aos-delay={200 + (index * 100)}
                                >
                                    <a 
                                        href={contact.link}
                                        className="d-flex align-items-center text-decoration-none text-light"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className={`${contact.icon} text-warning me-3 fs-3`}></i>
                                        <div>
                                            <h5 className="fw-bold mb-1">{contact.type}</h5>
                                            <p className="mb-0 small">{contact.value}</p>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>

                        <a 
                            href={contactData.cta.link}
                            className="btn btn-warning btn-lg px-5 py-3 rounded-pill shadow-lg fw-bold text-dark"
                            target={contactData.cta.target}
                            rel={contactData.cta.rel}
                            data-aos="fade-up"
                            data-aos-delay="600"
                            style={{ minWidth: '200px' }}
                        >
                            <i className={`${contactData.cta.icon} me-2`}></i>
                            {contactData.cta.text}
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.2); }
                }

                .backdrop-blur {
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                }

                .contact-item {
                    transition: all 0.3s ease;
                }

                .contact-item:hover {
                    transform: translateY(-5px);
                    background: rgba(255,215,0,0.1) !important;
                    border-color: #ffd700 !important;
                }

                .contact-section .btn:hover {
                    transform: translateY(-2px);
                    transition: all 0.3s ease;
                }

                .particles .particle {
                    pointer-events: none;
                }

                @media (max-width: 768px) {
                    .contact-section {
                        padding: 60px 15px !important;
                    }

                    .display-4 {
                        font-size: 2.5rem !important;
                    }

                    .contact-item {
                        padding: 1rem !important;
                    }

                    .contact-item h5 {
                        font-size: 1.1rem !important;
                    }

                    .contact-item p {
                        font-size: 0.9rem !important;
                    }
                }

                @media (max-width: 576px) {
                    .display-4 {
                        font-size: 2rem !important;
                    }

                    .lead {
                        font-size: 1rem !important;
                    }

                    .contact-section .btn {
                        font-size: 0.9rem;
                        padding: 0.75rem 1.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Contact;