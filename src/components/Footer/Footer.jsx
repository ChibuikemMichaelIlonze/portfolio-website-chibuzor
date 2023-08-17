import React, { useEffect, useState } from 'react';
import './Footer.scss';

const Footer = () => {
const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        Copyright @
        <span id="year">{currentYear}</span> &bull;
        All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
