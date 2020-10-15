import React from 'react';
import './Footer.scss';

const Footer = () => {
    const links = [{
        id: 0,
        text: "Github",
        link: "https://github.com/kwurty"
    }, {
        id: 1,
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/kurtissoroka/"
    }]
    return (
        <footer>
            <ul>
                {links.map(link => {
                    return <li key={link.id}> <button className="btn"> <a href={link.link}> {link.text} </a>  </button> </li>
                })}
            </ul>
        </footer>
    )
}
export default Footer;