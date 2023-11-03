import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright by Jlad ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
