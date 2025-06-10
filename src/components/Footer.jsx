import { footerData } from "../data/FooterData";

const Footer = () => {
    return (
        <footer 
            className="footer-section position-relative"
            style={{
                background: footerData.style.backgroundColor,
                color: footerData.style.textColor,
                padding: '60px 0 20px'
            }}
        >
            <div className="container">
                <div className="row g-4">
                    {/* Brand Section */}
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-brand" data-aos="fade-up" data-aos-duration="1000">
                            <h3 className="fw-bold mb-2" style={{ color: '#ffd700' }}>
                                {footerData.brand.name}
                            </h3>
                            <p className="small mb-2">{footerData.brand.tagline}</p>
                            <p className="small mb-0 opacity-75">{footerData.brand.description}</p>
                        </div>
                    </div>

                    {/* Main Links */}
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-links" data-aos="fade-up" data-aos-delay="100">
                            <h4 className="fw-bold mb-3 text-warning">Navigasi</h4>
                            <ul className="list-unstyled">
                                {footerData.mainLinks.map((link, index) => (
                                    <li key={index} className="mb-2">
                                        <a 
                                            href={link.href}
                                            className="text-decoration-none"
                                            style={{ color: footerData.style.textColor, transition: 'color 0.3s ease' }}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-contact" data-aos="fade-up" data-aos-delay="200">
                            <h4 className="fw-bold mb-3 text-warning">Kontak</h4>
                            {footerData.contactInfo.map((contact, index) => (
                                <div key={index} className="d-flex align-items-start mb-3">
                                    <i className={`${contact.icon} text-warning me-3 fs-5`}></i>
                                    <div>
                                        <a 
                                            href={contact.href}
                                            className="text-decoration-none small"
                                            style={{ color: footerData.style.textColor }}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {contact.value}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-social" data-aos="fade-up" data-aos-delay="300">
                            <h4 className="fw-bold mb-3 text-warning">Ikuti Saya</h4>
                            <div className="d-flex flex-wrap gap-2">
                                {footerData.socialLinks.map((social, index) => (
                                    <a 
                                        key={index}
                                        href={social.href}
                                        className="social-icon d-flex align-items-center justify-content-center rounded-circle"
                                        style={{
                                            background: 'rgba(255,215,0,0.1)',
                                            color: '#ffd700',
                                            width: '40px',
                                            height: '40px',
                                            textDecoration: 'none'
                                        }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className={`${social.icon} fs-5`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="400">
                    <a 
                        href={footerData.callToAction.href}
                        className="btn btn-warning btn-lg px-5 py-3 rounded-pill fw-bold text-dark"
                        style={{ minWidth: '200px' }}
                    >
                        {footerData.callToAction.text}
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-center mt-4 pt-4 border-top border-warning border-opacity-25">
                    <p className="small mb-2 opacity-75">{footerData.copyright.text}</p>
                    <p className="small mb-0 opacity-75">{footerData.copyright.madeWith}</p>
                </div>
            </div>

            <style jsx>{`
                .footer-section a:hover {
                    color: ${footerData.style.linkColor} !important;
                    transition: color 0.3s ease;
                }

                .social-icon:hover {
                    background: #ffd700 !important;
                    color: #1e3c72 !important;
                    transform: translateY(-2px);
                    transition: all 0.3s ease;
                }

                @media (max-width: 768px) {
                    .footer-section {
                        padding: 40px 15px 20px !important;
                    }

                    .footer-brand h3 {
                        font-size: 1.5rem !important;
                    }

                    .footer-links h4,
                    .footer-contact h4,
                    .footer-social h4 {
                        font-size: 1.25rem !important;
                    }

                    .footer-section .btn {
                        font-size: 0.9rem;
                        padding: 0.75rem 1.5rem !important;
                    }
                }

                @media (max-width: 576px) {
                    .footer-brand h3 {
                        font-size: 1.25rem !important;
                    }

                    .footer-section p,
                    .footer-section a {
                        font-size: 0.85rem !important;
                    }

                    .social-icon {
                        width: 35px !important;
                        height: 35px !important;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;