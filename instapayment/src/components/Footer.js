import React from "react";
import "../modules/module.footer.css";

function Footer() {
  return (
    <>
      <div className="footer" id="contactus">
        <div className="contact">
          <h3>Contact Us</h3>
        </div>
        <div className="social">
        <div>
          <img
            alt="phone"
            src="https://img.icons8.com/color/48/000000/phone.png"
          />
          <b>+65-8402-8590</b>
          <br />
          <img
            alt="mail"
            src="https://img.icons8.com/color/48/000000/apple-mail.png"
          />
          <b>info@thesparksfoundation.sg</b>
          <br />
          <img
            alt="Address"
            src="https://img.icons8.com/arcade/48/000000/experimental-marker-arcade.png"
          />
          <b>
            THE HANGAR, NUS ENTERPRISE 21 HENG MUI KENG TERRACE, SINGAPORE,
            119613
          </b>
        </div>
        <div className="sociallinks">
          <a href="https://twitter.com/tsfsingapore" target="_blanck">
            <img
              alt="Twitter"
              src="https://img.icons8.com/color/48/000000/twitter-circled--v1.png"
            />
          </a>
          <a href="https://www.linkedin.com/company/the-sparks-foundation/" target="_blanck">
            <img
              alt="LinkedIn"
              src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png"
            />
          </a>
          <a href="https://www.facebook.com/thesparksfoundation.info" target="_blanck">
            <img
              alt="Facebook"
              src="https://img.icons8.com/fluency/48/000000/facebook-new.png"
            />
          </a>
          <a href="https://www.instagram.com/thesparksfoundation.info/" target="_blanck">
            <img
              alt="Instagram"
              src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
            />
          </a>
        </div>
        </div>
        <div className="copyright">
          <b>© Copyright 2022 Priyanka Chaudhari</b>
        </div>
      </div>
    </>
  );
}

export default Footer;
