import React from "react";
import "./Footer.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="footer"
    >
      <div className="copyright">
        <p>Copyright&copy; 2025 All rights reserved.</p>
      </div>

      <div className="followMe">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="social_icons">
          <a style={{ color: "white" }} href="https://github.com/sheikhabbasit">
            My Github
          </a>
          <a
            style={{ color: "white" }}
            href="https://github.com/sheikhabdulbasit-nickelfox"
          >
            My Workplace Github
          </a>
          <a
            style={{ color: "white" }}
            href="https://www.linkedin.com/in/sheikh-abdul-basit"
          >
            My LinkedIn
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
