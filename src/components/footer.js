import React from 'react'
import { Link } from 'gatsby'
import '../components/fontawesome'
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return (
        <footer className="footer">
            <ul className="page-width menu">
                <li>Designed & Developed by Lorenzo Fernandez <br />
                {`Copyright © ${new Date().getFullYear()}  LF NZ LTD.`}</li>
                <div className="icon-spacing">
                <li><OutboundLink href="https://www.linkedin.com/in/fernandezlorenzo/" rel="noreferrer noopener" target="_blank">
                    <FontAwesomeIcon className="footer-icon" icon={['fab', 'linkedin-in']} />
                    </OutboundLink>
                </li>
                <li><OutboundLink href="https://github.com/lorenzo-joseph-fernandez-19" rel="noreferrer noopener" target="_blank">
                    <FontAwesomeIcon className="footer-icon" icon={['fab', 'github']} />
                    </OutboundLink>
                </li>
                </div>
            </ul>
        </footer>
    )
}

export default Footer