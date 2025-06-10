import { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div
            className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            role="button"
            aria-label="Scroll to top"
        >
            <i className="bx bx-chevron-up"></i>
            <style jsx>{`
                .scroll-to-top {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    background: #ffd700;
                    color: #1e3c72;
                    width: 55px;
                    height: 55px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                    z-index: 1000;
                }

                .scroll-to-top.visible {
                    opacity: 1;
                    visibility: visible;
                }

                .scroll-to-top:hover {
                    transform: translateY(-5px);
                    background: #ffeb3b;
                }

                .scroll-to-top i {
                    font-size: 24px;
                }

               
            `}</style>
        </div>
    );
};

export default ScrollToTop;
