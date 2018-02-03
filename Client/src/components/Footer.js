import React, {Component } from 'react';

import LogoImgSmall from '../img/recycle_bits_logo_small.png';

class Footer extends Component {
/*======================================================================
// This will render the Footer at the bottom of each page.
======================================================================*/
  render() {
    return (
      <div className="footer">
        <img src={LogoImgSmall} alt='' />
        <p>Copyright © 2018 Recycle Bits</p>
      </div>
    );
  }
}

export default Footer;