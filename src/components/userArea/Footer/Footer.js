import React from 'react';
import FooterLeft from './FooterLeft';
import FooterCenter from './FooterCenter';
import FooterRight from './FooterRight';
import './Footer.css';


function Footer() {
  return (
    <div className="footer-wrapper">
      <FooterLeft />
      <FooterCenter />
      <FooterRight />
    </div>
  )
}

export default Footer
