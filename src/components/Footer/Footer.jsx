import React, { useEffect, useState } from 'react';
import './Footer.scss';

const Footer = () => {
  const [year, setYear] = useState(null);

  useEffect(() => {
    const date = new Date();
    const currentYear = date.getFullYear();
    setYear(currentYear);
  }, []);

  return (
    <footer>
      <p>
        Copyright @
        <span id="year">{year}</span> &bull;
        All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
