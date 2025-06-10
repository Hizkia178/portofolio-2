import { aboutData } from "../data/aboutData.jsx";
const About = () => {
    const getIconClass = (iconName) => {
        const iconMap = {
            'devicon-react': 'bxl-react',
            'devicon-nextjs': 'bxl-nextjs',
            'devicon-vuejs': 'bxl-vuejs',
            'devicon-tailwindcss': 'bxl-tailwindcss',
            'devicon-nodejs': 'bxl-nodejs',
            'devicon-python': 'bxl-python',
            'devicon-graphql': 'bxl-graphql',
            'devicon-postgresql': 'bxl-postgresql',
            'devicon-mongodb': 'bxl-mongodb',
            'devicon-amazonwebservices': 'bxl-aws',
            'devicon-docker': 'bxl-docker',
            'devicon-githubactions': 'bxl-github',
            'devicon-javascript': 'bxl-javascript',
            'devicon-go': 'bxl-go-lang',
            'arrow-right': 'bx-right-arrow-alt'
        };
        return iconMap[iconName] || 'bx-code-alt';
    };

    return (
        <section 
            className="about-section position-relative overflow-hidden"
            id="about"
            style={{
                background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
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
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
                        <div className="about-content" data-aos="fade-right" data-aos-duration="1000">
                            <h1 className="display-4 fw-bold mb-4 text-center text-lg-start" 
                                style={{ color: '#ffd700' }}>
                                {aboutData.headline}
                            </h1>
                            
                            <p className="lead mb-4 text-center text-lg-start text-light" 
                               style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
                                {aboutData.summary}
                            </p>

                            <div className="philosophy mb-5">
                                {aboutData.philosophy.map((point, index) => (
                                    <div 
                                        key={index}
                                        className="d-flex align-items-start mb-3"
                                        data-aos="fade-up"
                                        data-aos-delay={100 + (index * 100)}
                                    >
                                        <i className="bx bx-check-circle text-warning me-3 fs-4"></i>
                                        <p className="text-light mb-0" dangerouslySetInnerHTML={{ __html: point }}></p>
                                    </div>
                                ))}
                            </div>

                            <a 
                                href={aboutData.cta.link}
                                className="btn btn-warning btn-lg px-5 py-3 rounded-pill shadow-lg fw-bold text-dark"
                                target={aboutData.cta.target}
                                rel={aboutData.cta.rel}
                                data-aos="fade-up"
                                data-aos-delay="400"
                                style={{ minWidth: '200px' }}
                            >
                                <i className={`bx ${getIconClass('arrow-right')} me-2`}></i>
                                {aboutData.cta.text}
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-image-section text-center" data-aos="fade-left" data-aos-duration="1000">
                            <div className="profile-container mb-4 position-relative d-inline-block">
                                <div className="profile-wrapper position-relative">
                                    <img 
                                        src={aboutData.profileImage.src}
                                        alt={aboutData.profileImage.alt}
                                        className="profile-img img-fluid rounded-circle shadow-lg"
                                        style={{
                                            width: '280px',
                                            height: '280px',
                                            objectFit: 'cover',
                                            border: '4px solid #ffd700',
                                            filter: 'drop-shadow(0 10px 30px rgba(255,215,0,0.3))'
                                        }}
                                    />
                                    <div className="profile-ring position-absolute top-0 start-0 w-100 h-100 rounded-circle border border-2 border-warning border-opacity-50"
                                         style={{
                                             animation: 'spin 20s linear infinite',
                                             transform: 'scale(1.1)'
                                         }}>
                                    </div>
                                </div>
                            </div>

                            <div className="skills-grid" data-aos="fade-up" data-aos-delay="200">
                                <h4 className="text-warning fw-bold mb-3 text-center">
                                    <i className="bx bx-star me-2"></i>
                                    Tech Stack
                                </h4>
                                <div className="d-flex flex-wrap gap-2 justify-content-center">
                                    {Object.values(aboutData.technicalSkills).flat().map((skill, index) => (
                                        <div 
                                            key={index}
                                            className="skill-badge bg-dark bg-opacity-50 px-3 py-2 rounded-pill backdrop-blur border border-warning border-opacity-30"
                                            data-aos="zoom-in"
                                            data-aos-delay={300 + (index * 50)}
                                        >
                                            <i className={`bx ${getIconClass(skill.icon)} me-2 text-warning`}></i>
                                            <span className="small fw-medium">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-15px); }
                }

                @keyframes spin {
                    from { transform: scale(1.1) rotate(0deg); }
                    to { transform: scale(1.1) rotate(360deg); }
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.2); }
                }

                .backdrop-blur {
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                }

                .about-section .btn:hover {
                    transform: translateY(-2px);
                    transition: all 0.3s ease;
                }

                .skill-badge {
                    transition: all 0.3s ease;
                    cursor: default;
                }

                .skill-badge:hover {
                    transform: translateY(-2px);
                    background: rgba(255,215,0,0.1) !important;
                    border-color: #ffd700 !important;
                }

                .profile-wrapper:hover .profile-img {
                    transform: scale(1.05);
                    transition: all 0.3s ease;
                }

                .particles .particle {
                    pointer-events: none;
                }

                @media (max-width: 768px) {
                    .about-section {
                        padding: 60px 15px !important;
                    }

                    .profile-img {
                        width: 220px !important;
                        height: 220px !important;
                    }

                    .display-4 {
                        font-size: 2.5rem !important;
                    }

                    .skill-badge {
                        font-size: 0.85rem;
                    }
                }

                @media (max-width: 576px) {
                    .profile-img {
                        width: 180px !important;
                        height: 180px !important;
                    }

                    .lead {
                        font-size: 1rem !important;
                    }

                    .experience-summary {
                        padding: 1.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;