import { educationData } from "../data/educationData.jsx";

const Education = () => {
    const getIconClass = (institution) => {
        const iconMap = {
            'Universitas Teknologi Digital Indonesia': 'bx-building',
            'Hacktiv8': 'bx-code',
            'Amazon Web Services (AWS)': 'bxl-aws'
        };
        return iconMap[institution] || 'bx-book';
    };

    return (
        <section 
            className="education-section position-relative overflow-hidden"
            id="education"
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
                <h1 
                    className="display-4 fw-bold mb-5 text-center" 
                    style={{ color: '#ffd700' }}
                    data-aos="fade-down"
                    data-aos-duration="1000"
                >
                    Pendidikan
                </h1>

                <div className="row justify-content-center">
                    <div className="col-lg-10 col-md-12">
                        <div className="education-timeline">
                            {educationData.map((edu, index) => (
                                <div 
                                    key={edu.id}
                                    className="education-item mb-5 position-relative"
                                    data-aos="fade-up"
                                    data-aos-delay={100 + (index * 200)}
                                >
                                    <div className="education-content bg-dark bg-opacity-50 p-4 rounded-4 backdrop-blur border border-warning border-opacity-30">
                                        <div className="d-flex align-items-center mb-3">
                                            <i className={`bx ${getIconClass(edu.institution)} text-warning me-3 fs-3`}></i>
                                            <div>
                                                <h3 className="h4 fw-bold text-warning mb-1">{edu.degree}</h3>
                                                <h5 className="text-light fw-medium mb-0">{edu.institution}</h5>
                                            </div>
                                        </div>
                                        <p className="text-light small mb-2"><i className="bx bx-calendar me-2"></i>{edu.period}</p>
                                        <p className="text-light mb-0" style={{ lineHeight: '1.6' }}>{edu.description}</p>
                                    </div>
                                    <div 
                                        className="timeline-dot position-absolute bg-warning rounded-circle"
                                        style={{
                                            width: '16px',
                                            height: '16px',
                                            left: '-8px',
                                            top: '20px',
                                            zIndex: 4
                                        }}
                                    ></div>
                                </div>
                            ))}
                        </div>
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

                .education-timeline {
                    position: relative;
                }

                .education-timeline::before {
                    content: '';
                    position: absolute;
                    width: 4px;
                    background: #ffd700;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    margin-left: -2px;
                    z-index: 3;
                }

                .education-item {
                    margin-left: 30px;
                    transition: all 0.3s ease;
                }

                .education-item:hover {
                    transform: translateY(-5px);
                }

                .education-item:hover .education-content {
                    background: rgba(255,215,0,0.1) !important;
                    border-color: #ffd700 !important;
                }

                .timeline-dot {
                    animation: pulse 2s infinite;
                }

                .particles .particle {
                    pointer-events: none;
                }

                @media (max-width: 768px) {
                    .education-section {
                        padding: 60px 15px !important;
                    }

                    .display-4 {
                        font-size: 2.5rem !important;
                    }

                    .education-item {
                        margin-left: 20px;
                    }

                    .education-content {
                        padding: 1rem !important;
                    }
                }

                @media (max-width: 576px) {
                    .display-4 {
                        font-size: 2rem !important;
                    }

                    .education-content h3 {
                        font-size: 1.25rem !important;
                    }

                    .education-content h5 {
                        font-size: 1rem !important;
                    }

                    .education-content p {
                        font-size: 0.9rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Education;