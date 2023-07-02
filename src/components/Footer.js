import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center text-lg-start fixed-bottom bg-dark">
      <div className="container d-flex justify-content-center py-5">
        <a
          href="mailto:supunsameera18@gmail.com"
          type="button"
          className="btn-floating mx-2"
        >
          <Icon icon="mdi:gmail" width="50" height="50" />
        </a>
        <a
          href="https://www.linkedin.com/in/supun-sameera/"
          target="_black"
          rel="noopener noreferrer"
          type="button"
          className="btn-floating mx-2"
        >
          <Icon icon="mdi:linkedin" width="50" height="50" />
        </a>
        <a
          href="https://github.com/SupunSameera18"
          target="_black"
          rel="noopener noreferrer"
          type="button"
          className="btn-floating mx-2"
        >
          <Icon icon="mdi:github" width="50" height="50" />
        </a>
        <a
          href="https://www.facebook.com/sameera.thilakarathna.923/"
          target="_black"
          rel="noopener noreferrer"
          type="button"
          className="btn-floating mx-2"
        >
          <Icon icon="ic:baseline-facebook" width="50" height="50" />
        </a>
      </div>

      <div className="text-center text-white p-3">
        © {currentYear} Copyright
      </div>
    </footer>
  );
}

export default Footer;
