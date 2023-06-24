import React from 'react';

import './Footer.css';

const Footer = () => (
  <div className="footer">
    <p className="footer-copyright">
      &copy; WasteTech. {new Date().getFullYear()}
    </p>
  </div>
)

export default Footer