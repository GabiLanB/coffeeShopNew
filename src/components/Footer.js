import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return(
            <div id="footer">
                <h3>Alexandria, 32 Washingtorn str, 22303</h3>
                <h3>Opening hours:Mo-Fr 11:00-00:00, Sa-Su 15:00-00:00</h3>
                <h3>Call(555)123-4567</h3>
                <small>&copy;2018 igabidev. All Rights Reserved. Terms of use and Privacy Policy</small>
            </div>
        );
    }

}

export default Footer;