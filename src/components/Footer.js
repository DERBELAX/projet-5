import React from "react";
import logo from '../assests/img/footer.png';
import "../style/Footer.scss";


function Footer(){
    return (
        <footer className="footer">
            <img src= {logo} className="logo" alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
};

export default Footer