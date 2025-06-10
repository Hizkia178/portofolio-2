import { useState, useEffect } from "react";
import { navbarData } from "../data/navbarData";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("hero");
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClickMenu = (id) => {
    setActiveMenu(id);
    scrollToSection(id);
    setShowOffcanvas(false);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero";
      navbarData.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 100) {
          current = id;
        }
      });
      setActiveMenu(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-white fixed-top shadow py-3"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="container">
          <a
            href="#"
            className="navbar-brand d-flex align-items-center fw-bold"
            onClick={() => handleClickMenu("hero")}
          >
            <i className="bx bx-code me-1 fs-3"></i>
            My Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setShowOffcanvas(true)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-none d-lg-block" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navbarData.map((item) => (
                <li className="nav-item" key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link d-flex align-items-center ${activeMenu === item.id ? "bg-primary text-white rounded shadow" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClickMenu(item.id);
                    }}
                  >
                    <i className={`bx ${item.icon} me-1`}></i>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Offcanvas Mobile */}
      <div
        className={`offcanvas offcanvas-end ${showOffcanvas ? "show" : ""}`}
        style={{ visibility: showOffcanvas ? "visible" : "hidden", width: "65vw" }}
        tabIndex="-1"
      >
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title fw-bold d-flex align-items-center">
            <i className="bx bx-code  me-2"></i> My Portfolio
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowOffcanvas(false)}
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-0">
          <ul className="navbar-nav">
            {navbarData.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link d-flex align-items-center px-4 py-3 border-bottom ${
                    activeMenu === item.id ? "bg-primary text-white rounded shadow" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClickMenu(item.id);
                  }}
                >
                  <i className={`bx ${item.icon} me-2`}></i>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Backdrop */}
      {showOffcanvas && (
        <div
          className="offcanvas-backdrop fade show"
          onClick={() => setShowOffcanvas(false)}
        />
      )}
    </>
  );
};

export default Navbar;
