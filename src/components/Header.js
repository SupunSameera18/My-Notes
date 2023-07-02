import React from "react";

function Header() {
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark px-5">
        <div className="container-fluid">
          <p className="navbar-brand">My Notes</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <p className="nav-link active" aria-current="page">
                  Home
                </p>
              </li>
              <li className="nav-item px-3">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="https://www.linkedin.com/in/supun-sameera/"
                  target="_black"
                  rel="noopener noreferrer"
                >
                  About
                </a>
              </li>
              <li className="nav-item px-3">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="mailto:supunsameera18@gmail.com"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
