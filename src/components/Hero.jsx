import { useState, useEffect } from 'react';
import { heroSectionData } from '../data/heroData.jsx';
import '../style/App.css';

const Hero = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(true);


    useEffect(() => {
        if (!heroSectionData.animatedText || heroSectionData.animatedText.length === 0) return;

        const currentFullText = heroSectionData.animatedText[currentTextIndex];
        
        if (isTyping) {
            if (displayText.length < currentFullText.length) {
                const timeout = setTimeout(() => {
                    setDisplayText(currentFullText.slice(0, displayText.length + 1));
                }, heroSectionData.animatedTextSpeed);
                return () => clearTimeout(timeout);
            } else {
                setTimeout(() => setIsTyping(false), 1800);
            }
        } else {
            if (displayText.length > 0) {
                const timeout = setTimeout(() => {
                    setDisplayText(displayText.slice(0, -1));
                }, heroSectionData.animatedTextSpeed / 2);
                return () => clearTimeout(timeout);
            } else {
                setCurrentTextIndex((prev) => 
                    heroSectionData.animatedTextLoop 
                        ? (prev + 1) % heroSectionData.animatedText.length 
                        : Math.min(prev + 1, heroSectionData.animatedText.length - 1)
                );
                setIsTyping(true);
            }
        }
    }, [displayText, isTyping, currentTextIndex]);

    const getIconClass = (iconName) => {
        const iconMap = {
            'arrow-right': 'bx-right-arrow-alt',
            'message-circle': 'bx-message-rounded-dots',
            'check-circle': 'bx-check-circle',
            'award': 'bx-award',
            'smile': 'bx-smile',
            'devicon-react': 'bxl-react',
            'devicon-nodejs': 'bxl-nodejs',
            'devicon-typescript': 'bxl-typescript',
            'devicon-amazonwebservices': 'bxl-aws',
            'devicon-postgresql': 'bxl-postgresql'
        };
        return iconMap[iconName] || 'bx-code-alt';
    };

    return (
        <section 
            className="hero-section position-relative overflow-hidden"
            id="hero"
            style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                marginTop: "30px",
                minHeight: '100vh',
                color: heroSectionData.textColor,
                padding: heroSectionData.padding
            }}
        >
           
            <div 
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    background: `rgba(0, 0, 0, ${heroSectionData.overlayOpacity})`,
                    zIndex: 1
                }}
            ></div>

            
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 2 }}>
                <div className="particles">
                    <div className="particle position-absolute" 
                         style={{ 
                             top: '20%', 
                             left: '10%', 
                             width: '8px', 
                             height: '8px', 
                             background: '#ffd700', 
                             borderRadius: '50%',
                             animation: 'float 8s ease-in-out infinite'
                         }}>
                    </div>
                    <div className="particle position-absolute" 
                         style={{ 
                             top: '70%', 
                             right: '15%', 
                             width: '6px', 
                             height: '6px', 
                             background: 'rgba(255,255,255,0.6)', 
                             borderRadius: '50%',
                             animation: 'float 6s ease-in-out infinite reverse'
                         }}>
                    </div>
                    <div className="particle position-absolute" 
                         style={{ 
                             top: '40%', 
                             right: '8%', 
                             width: '10px', 
                             height: '10px', 
                             background: 'rgba(255,215,0,0.4)', 
                             borderRadius: '50%',
                             animation: 'float 12s ease-in-out infinite'
                         }}>
                    </div>
                    <div className="particle position-absolute" 
                         style={{ 
                             bottom: '30%', 
                             left: '20%', 
                             width: '5px', 
                             height: '5px', 
                             background: 'rgba(255,255,255,0.8)', 
                             borderRadius: '50%',
                             animation: 'float 10s ease-in-out infinite reverse'
                         }}>
                    </div>
                </div>
            </div>

            <div className="container position-relative" style={{ zIndex: 3 }}>
                <div className="row align-items-center min-vh-100">
                    
                    <div className="col-lg-6 col-md-12 order-2 order-lg-1">
                        <div className="hero-content" data-aos="fade-right" data-aos-duration="1000">
                        
                            <h1 className="display-3 fw-bold mb-3 text-center text-lg-start" 
                                style={{ color: '#ffd700' }}>
                                {heroSectionData.title}
                            </h1>

                          
                            <h2 className="fs-3 mb-4 text-center text-lg-start fw-semibold">
                                {heroSectionData.subtitle}
                            </h2>

                            
                            <div className="animated-text-container mb-4 p-3 bg-dark bg-opacity-25 rounded-4 backdrop-blur">
                                <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                                    <i className="bx bx-code-alt text-warning me-2 fs-4"></i>
                                    <span className="fs-5 fw-medium">
                                        {displayText}
                                        <span className="typing-cursor text-warning">|</span>
                                    </span>
                                </div>
                            </div>

                           
                            <p className="lead mb-5 text-center text-lg-start text-light" 
                               style={{ lineHeight: '1.5', fontSize: '1.1rem' }}>
                                {heroSectionData.description}
                            </p>

                          
                            <div className="hero-buttons mb-5 d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start align-items-center">
                                <a 
                                    href={heroSectionData.ctaButton.link}
                                    className="btn btn-warning btn-lg px-5 py-3 rounded-pill shadow-lg fw-bold text-dark"
                                    aria-label={heroSectionData.ctaButton.ariaLabel}
                                    data-aos="fade-up" 
                                    data-aos-delay="200"
                                    style={{ minWidth: '200px' }}
                                >
                                    <i className={`bx ${getIconClass(heroSectionData.ctaButton.icon)} me-2`}></i>
                                    {heroSectionData.ctaButton.text}
                                </a>
                                
                                <a 
                                    href={heroSectionData.secondaryCtaButton.link}
                                    className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill fw-bold"
                                    target={heroSectionData.secondaryCtaButton.target}
                                    rel={heroSectionData.secondaryCtaButton.rel}
                                    data-aos="fade-up" 
                                    data-aos-delay="300"
                                    style={{ minWidth: '200px' }}
                                >
                                    <i className={`bx ${getIconClass(heroSectionData.secondaryCtaButton.icon)} me-2`}></i>
                                    {heroSectionData.secondaryCtaButton.text}
                                </a>
                            </div>

                          
                            <div className="key-skills" data-aos="fade-up" data-aos-delay="400">
                                <h6 className="text-warning mb-3 text-center text-lg-start fw-bold">
                                    <i className="bx bx-star me-2"></i>
                                    Tech Stack:
                                </h6>
                                <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-lg-start">
                                    {heroSectionData.keySkills.map((skill, index) => (
                                        <div 
                                            key={index}
                                            className="skill-badge bg-dark bg-opacity-50 px-3 py-2 rounded-pill backdrop-blur border border-warning border-opacity-30"
                                            data-aos="zoom-in" 
                                            data-aos-delay={500 + (index * 100)}
                                        >
                                            <i className={`bx ${getIconClass(skill.icon)} me-2 text-warning`}></i>
                                            <span className="small fw-medium">{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                 
                    <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                        <div className="hero-image-section text-center mb-4 mb-lg-0" data-aos="fade-left" data-aos-duration="1000">
                         
                            <div className="profile-container mb-4 position-relative d-inline-block">
                                <div className="profile-wrapper position-relative">
                                    <img 
                                        src={heroSectionData.heroImage.src}
                                        alt={heroSectionData.heroImage.alt}
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

                          
                            <div className="stats-grid row g-3 mb-4">
                                {heroSectionData.quickStats.map((stat, index) => (
                                    <div key={index} className="col-4">
                                        <div className="stat-box bg-dark bg-opacity-30 p-3 rounded-4 backdrop-blur text-center border border-light border-opacity-10"
                                             data-aos="flip-up" 
                                             data-aos-delay={300 + (index * 100)}>
                                            <i className={`bx ${getIconClass(stat.icon)} fs-2 text-warning mb-2 d-block`}></i>
                                            <div className="fw-bold fs-5 text-warning mb-1">{stat.value}</div>
                                            <div className="small text-light fw-medium">{stat.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            
                            <div className="status-badge" data-aos="fade-up" data-aos-delay="600">
                                <div className="bg-success bg-opacity-20 d-inline-flex align-items-center text-white px-4 py-2 rounded-pill border border-success border-opacity-50">
                                    <div className="status-dot bg-success rounded-circle me-2" 
                                         style={{
                                             width: '8px', 
                                             height: '8px',
                                             animation: 'pulse 2s infinite'
                                         }}>
                                    </div>
                                    <span className="small fw-bold text-white">Available for Projects</span>
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

                @keyframes typing-cursor {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }

                .typing-cursor {
                    animation: typing-cursor 1s infinite;
                    font-weight: bold;
                }

                .backdrop-blur {
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                }

                .hero-section .btn:hover {
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

                .stat-box {
                    transition: all 0.3s ease;
                    cursor: default;
                }

                .stat-box:hover {
                    transform: translateY(-5px);
                    background: rgba(255,215,0,0.1) !important;
                    border-color: rgba(255,215,0,0.3) !important;
                }

                .profile-wrapper:hover .profile-img {
                    transform: scale(1.05);
                    transition: all 0.3s ease;
                }

                .animated-text-container {
                    min-height: 70px;
                    display: flex;
                    align-items: center;
                }

                .particles .particle {
                    pointer-events: none;
                }

                @media (max-width: 768px) {
                    .hero-section {
                        padding: 60px 15px !important;
                    }
                    
                    .profile-img {
                        width: 220px !important;
                        height: 220px !important;
                    }
                    
                    .display-3 {
                        font-size: 2.5rem !important;
                    }
                    
                    .fs-3 {
                        font-size: 1.5rem !important;
                    }
                    
                    .hero-buttons .btn {
                        width: 100%;
                        max-width: 280px;
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
                    
                    .stat-box {
                        padding: 0.75rem !important;
                    }
                    
                    .stat-box .fs-2 {
                        font-size: 1.5rem !important;
                    }
                    
                    .stat-box .fs-5 {
                        font-size: 1rem !important;
                    }
                    
                    .hero-buttons {
                        gap: 0.75rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Hero;