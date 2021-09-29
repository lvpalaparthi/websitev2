import "./App.css";
import React from "react";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <ul class="social-links">
        <li>
          <a
            href="https://www.facebook.com/lakshmi.palaparthi.7/"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebook class="fb-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/laksh_mi21"
            rel="noreferrer"
            target="_blank"
          >
            <FaTwitter class="twitter-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lakshmipalaparthi/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin class="li-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/palaparthi_lakshmi/"
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagram class="ig-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/lvpalaparthi"
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub class="git-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCowgcxgT0Q3YeOOijXWj4qA?view_as=subscriber"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube class="yt-icon" />
          </a>
        </li>
      </ul>
      <div class="footer-section">
        <p>Copyright &copy; 2021 by Lakshmi Palaparthi. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
