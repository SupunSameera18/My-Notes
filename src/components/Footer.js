import React from "react";
import { Icon } from "@iconify/react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center text-lg-start fixed-bottom bg-dark">
      <div className="container d-flex justify-content-center py-5">
        <a href="#" type="button" className="btn btn-primary btn-floating mx-2">
          <Icon icon="ic:baseline-facebook" width="30" height="30" />
        </a>
        <a href="#" type="button" className="btn btn-primary btn-floating mx-2">
          <Icon icon="ri:youtube-fill" width="30" height="30" />
        </a>
        <a href="#" type="button" className="btn btn-primary btn-floating mx-2">
          <Icon icon="mdi:instagram" width="30" height="30" />
        </a>
        <a href="#" type="button" className="btn btn-primary btn-floating mx-2">
          <Icon icon="mdi:twitter" width="30" height="30" />
        </a>
      </div>

      <div className="text-center text-white p-3">
        © {currentYear} Copyright
      </div>
    </footer>
  );
}

export default Footer;
