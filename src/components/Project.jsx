import { useState } from 'react';
import { projectData } from "../data/projectData.jsx";

const Project = () => {
    const [activeTab, setActiveTab] = useState(projectData[0].id);

    const getIconClass = (tech) => {
        const iconMap = {
            'React': 'bxl-react',
            'Redux': 'bxl-redux',
            'Redux Toolkit': 'bxl-redux',
            'Chart.js': 'bx-line-chart',
            'Node.js': 'bxl-nodejs',
            'Express': 'bxl-nodejs',
            'PostgreSQL': 'bxl-postgresql',
            'MongoDB': 'bxl-mongodb',
            'Next.js': 'bxl-nextjs',
            'TypeScript': 'bxl-typescript',
            'Tailwind CSS': 'bxl-tailwindcss',
            'Stripe': 'bxl-stripe',
            'Prisma': 'bx-data',
            'NextAuth.js': 'bx-lock',
            'Vue.js': 'bxl-vuejs',
            'Socket.IO': 'bx-network-chart',
            'Angular': 'bxl-angular',
            'RxJS': 'bx-refresh',
            'NestJS': 'bx-server',
            'TypeORM': 'bx-data',
            'MySQL': 'bxl-mysql',
            'JWT': 'bx-lock-alt',
            'React Native': 'bxl-react',
            'Expo': 'bx-mobile',
            'Firebase Firestore': 'bxl-firebase',
            'Authentication': 'bx-user-check',
            'Flutter': 'bxl-flutter',
            'Dart': 'bx-code-curly',
            'REST API': 'bx-api',
            'Provider State Management': 'bx-layer',
            'Google Maps API': 'bx-map',
            'SQLite': 'bx-data',
            'Expo Go': 'bx-mobile',
            'Python': 'bxl-python',
            'TensorFlow': 'bxl-tensorflow',
            'Keras': 'bx-brain',
            'OpenCV': 'bx-camera',
            'Flask API': 'bxl-flask',
            'Pandas': 'bx-table',
            'Scikit-learn': 'bx-brain',
            'Jupyter Notebook': 'bx-book',
            'Matplotlib': 'bx-bar-chart',
            'PyTorch': 'bx-chip',
            'PIL': 'bx-image',
            'Streamlit': 'bx-slideshow',
            'Kafka': 'bx-transfer',
            'Docker': 'bxl-docker',
            'Kubernetes': 'bxl-kubernetes',
            'Apollo Server': 'bx-server',
            'GraphQL': 'bxl-graphql',
            'Sequelize': 'bx-data',
            'WordPress': 'bxl-wordpress',
            'PHP': 'bxl-php',
            'ACF Pro': 'bx-customize',
            'SCSS': 'bxl-sass',
            'JavaScript': 'bxl-javascript',
            'LearnDash': 'bx-book-open',
            'WooCommerce': 'bx-cart',
            'Elementor Pro': 'bx-brush'
        };
        return iconMap[tech] || 'bx-code-alt';
    };

    return (
        <section 
            className="project-section position-relative overflow-hidden"
            id="projects"
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
                    Proyek
                </h1>

                <div className="nav nav-tabs d-flex flex-wrap justify-content-center mb-5 gap-2" data-aos="fade-up" data-aos-delay="100">
                    {projectData.map((category, index) => (
                        <button
                            key={category.id}
                            className={`nav-link ${activeTab === category.id ? 'active' : ''} btn btn-outline-light mb-3 rounded-pill px-4 py-2 fw-medium`}
                            onClick={() => setActiveTab(category.id)}
                            data-aos="zoom-in"
                            data-aos-delay={200 + (index * 50)}
                        >
                            {category.category}
                        </button>
                    ))}
                </div>

                <div className="tab-content">
                    {projectData.map((category, catIndex) => (
                        activeTab === category.id && (
                            <div key={category.id} className="row justify-content-center">
                                {category.projects.map((project, projIndex) => (
                                    <div 
                                        key={projIndex}
                                        className="col-lg-4 col-md-6 mb-4"
                                        data-aos="fade-up"
                                        data-aos-delay={300 + (projIndex * 100)}
                                    >
                                        <div className="project-card bg-dark bg-opacity-50 p-4 rounded-4 backdrop-blur border border-warning border-opacity-30 h-100 d-flex flex-column">
                                            <h3 className="h4 fw-bold text-warning mb-3">{project.title}</h3>
                                            <p className="text-light flex-grow-1 mb-3" style={{ lineHeight: '1.6' }}>
                                                {project.description}
                                            </p>
                                            <div className="tech-stack mb-3">
                                                <div className="d-flex flex-wrap gap-2">
                                                    {project.tech.map((tech, techIndex) => (
                                                        <div 
                                                            key={techIndex}
                                                            className="skill-badge bg-dark bg-opacity-75 px-3 py-1 rounded-pill border border-light border-opacity-20"
                                                        >
                                                            <i className={`bx ${getIconClass(tech)} me-2 text-warning`}></i>
                                                            <span className="small fw-medium">{tech}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="project-links d-flex gap-3">
                                                <a 
                                                    href={project.link}
                                                    className="btn btn-warning btn-sm px-4 py-2 rounded-pill fw-bold text-dark"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <i className="bx bx-link-external me-2"></i>
                                                    Demo
                                                </a>
                                                <a 
                                                    href={project.repo}
                                                    className="btn btn-outline-light btn-sm px-4 py-2 rounded-pill fw-bold"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <i className="bx bxl-github me-2"></i>
                                                    Repo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )
                    ))}
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

                .project-card {
                    transition: all 0.3s ease;
                }

                .project-card:hover {
                    transform: translateY(-5px);
                    background: rgba(255,215,0,0.1) !important;
                    border-color: #ffd700 !important;
                }

                .skill-badge {
                    transition: all 0.3s ease;
                    cursor: default;
                }

                .skill-badge:hover {
                    background: rgba(255,215,0,0.2) !important;
                    border-color: #ffd700 !important;
                }

                .nav-tabs .nav-link {
                    transition: all 0.3s ease;
                    border: none;
                    color: #ffffff;
                    background: rgba(255,255,255,0.1);
                }

                .nav-tabs .nav-link.active {
                    background: #ffd700 !important;
                    color: #1e3c72 !important;
                    font-weight: bold;
                }

                .nav-tabs .nav-link:hover {
                    background: rgba(255,215,0,0.3);
                    transform: translateY(-2px);
                }

                .project-section .btn:hover {
                    transform: translateY(-2px);
                    transition: all 0.3s ease;
                }

                .particles .particle {
                    pointer-events: none;
                }

                @media (max-width: 768px) {
                    .project-section {
                        padding: 60px 15px !important;
                    }

                    .display-4 {
                        font-size: 2.5rem !important;
                    }

                    .project-card {
                        padding: 1rem !important;
                    }

                    .project-card h3 {
                        font-size: 1.25rem !important;
                    }

                    .project-card p {
                        font-size: 0.9rem !important;
                    }

                    .nav-tabs .nav-link {
                        font-size: 0.9rem;
                        padding: 0.5rem 1rem;
                    }
                }

                @media (max-width: 576px) {
                    .display-4 {
                        font-size: 2rem !important;
                    }

                    .project-card h3 {
                        font-size: 1.1rem !important;
                    }

                    .project-links .btn {
                        font-size: 0.85rem;
                        padding: 0.5rem 1rem !important;
                    }

                    .nav-tabs .nav-link {
                        font-size: 0.85rem;
                        padding: 0.5rem 0.75rem;
                    }
                }
            `}</style>
        </section>
    );
};

export default Project;