import React from "react";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link"></PageLinks>
      <ul className="footer-icons">
        {socialLinks.map((social) => {
          return (
            <SocialLink
              key={social.id}
              {...social}
              itemClass="footer-icon"
            ></SocialLink>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
