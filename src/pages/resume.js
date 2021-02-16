import React from 'react'
import { gsap } from 'gsap'
import Layout from '../components/layout'
import { OutboundLink } from "gatsby-plugin-google-analytics"
import EDA from '../images/EDA.png'
import Unitec from '../images/unitec.png'
import UOA from '../images/uoa.png'
import NZIE from '../images/nzie.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Gatsby from '../images/gatsby.png'

const Resume = () => {
    return (
        <Layout pageMeta={{
            title: "Resume",
            keywords: [],
            description: "My Resume"
          }}>
        <section className="resume-page-width">
            <h1 className="resume-h1">/ resume /</h1>
            <p className="resume-text">I’m an experienced Marketing Coordinator and Web Developer with a passion for learning new skills and technologies. <br /> <br/>I’m a curious person and I have spent the last two years investing in myself in order to reach my goal of being financially independent. <br/> <br />Looking for a Technical Digital Marketing role I can grow into and own.</p>
            <div className="column">
            <h2 className="resume-h1">/ technical skills /</h2>
                <ul className="skills">
                    <li><FontAwesomeIcon className="icon" icon={['fab', 'html5']} /></li>
                    <li><FontAwesomeIcon className="icon" icon={['fab', 'css3-alt']} /></li>
                    <li><FontAwesomeIcon className="icon" icon={['fab', 'js-square']} /></li>
                    <li><FontAwesomeIcon className="icon" icon={['fab', 'node']} /></li>
                    <li><FontAwesomeIcon className="icon" icon={['fab', 'npm']} /></li>
                    <li><FontAwesomeIcon className="icon" icon={['fab', 'git-square']} /></li>
                    <li><FontAwesomeIcon className="icon" icon={['fab', 'react']} /></li>
                    <li><FontAwesomeIcon className="icon" icon={['fab', 'shopify']} /></li>
                    <li><FontAwesomeIcon className="icon" icon={['fab', 'wordpress']} /></li>
                    <li><FontAwesomeIcon className="icon" icon={['fab', 'elementor']} /></li>
                    <li><FontAwesomeIcon className="icon" icon={['fab', 'squarespace']} /></li>
                </ul>
                <h2 className="resume-h1">/ tools /</h2>
                <ul className="tools">
                    <li><strong>EDM</strong> <br /> MailChimp <br /> Hubspot</li>
                    <li><strong>Social Media</strong> <br /> Facebook Business Manager</li> 
                    <li><strong>Analytics</strong><br /> Google Analytics <br />Google Tag Manager <br /> Google Data Studio</li>
                    <li><strong>SEM</strong><br /> Google Ads <br />Google Search Console <br /> Wordstream</li>
                    <li><strong>Design/Video </strong><br /> Canva <br />Photoshop <br /> Illustrator <br /> Indesign <br /> Adobe XD <br /> Premiere Pro</li>
                    <li><strong>Microsoft</strong><br /> Word <br /> Excel <br /> Power Point</li>
                </ul>
            </div>
            <h2 className="resume-h1">/ work experience /</h2>
            <ul className="work-experience">
                <li className="company">LF NZ LTD<br /> <span className="location">Auckland, New Zealand</span></li>
                <li className="role"><span className="job-title">Freelance Developer · <i>July 2020 ~ Present</i></span> <br />Developed <OutboundLink id="trig1" className="resume-links" href="https://www.taniko.co.nz/" rel="noreferrer noopener" target="_blank">Tāniko Group’s website</OutboundLink> from the ground up using HTML, CSS, Gatsby.js, Bulma and Wordpress as the backend. <br /> <br /> Developed an Ecommerce (Shopify) website for <OutboundLink id="trig1" className="resume-links" href="https://www.mokulimited.com/" rel="noreferrer noopener" target="_blank">Moku Limited</OutboundLink>, a locally owned and operated food wholesaler. 
                </li>
                <li className="company">IT Support Staff Limited <br /> <span className="location">Auckland, New Zealand</span></li>
                <li className="role"><span className="job-title">Junior IT Support · <i>August 2020 ~ December 2020</i></span><br /> Designed and developed custom Ecommerce (Shopify) sites for 
                    <OutboundLink id="trig1" className="resume-links" href="https://www.healthcarestaff.co.nz/" rel="noreferrer noopener" target="_blank"> Healthcare Staff Limited </OutboundLink> and <OutboundLink className="resume-links" href="https://www.scrubsup.co.nz/" rel="noreferrer noopener" target="_blank">Kiwi As Productions Limited.</OutboundLink>
                </li>
                <li className="company">Windcave<br /> <span className="location">Auckland, New Zealand</span></li>
                <li className="role"><span className="job-title">Marketing Coordinator · <i>July 2019 ~ November 2019</i></span><br />Successfully supported the global rebrand from Payment Express to Windcave. <br /> Skillfully designed sales collateral and content for Windcave’s social media pages.
                </li>
                <li className="company">Payment Express<br /> <span className="location">Auckland, New Zealand</span></li>
                <li className="role"><span className="job-title">Sales Account Manager · <i>August 2018 ~ July 2019</i></span><br />Effectively managed a portfolio of small to enterprise level business accounts such as OmniTech, Pita Pit and Green Cross Health.<br /> Generated new sales through existing and potential networks. </li>
                <li className="company">Travel Money NZ<br /> <span className="location">Auckland, New Zealand</span></li>
                <li className="role"><span className="job-title">Team Leader · <i>June 2018 ~ August 2018</i></span><br />Maintained and managed a safe, secure and compliant working environment. <br /> Provided a seamless foreign exchange service with a focus on meeting and exceeding client expectations. </li>
                <li></li>
                <li className="role"><span className="job-title">Foreign Exchange Consultant · <i>December 2017 ~ June 2018</i></span> <br />Competently sold foreign currency, prepaid travel money cards, international money transfers and travel insurance. <br /> Provided exceptional customer service. <br /> Completed transactions with a high level of accuracy. </li>
                <li className="company">Lincoln Family Restaurant<br /> <span className="location">Auckland, New Zealand</span></li>
                <li className="role"><span className="job-title">Restaurant Manager · <i>October 2017 ~ October 2018</i></span> <br />Competently sold foreign currency, prepaid travel money cards, international money transfers and travel insurance. <br /> Provided exceptional customer service. <br /> Completed transactions with a high level of accuracy. </li>
            </ul>

            <h2 className="resume-h1">/ qualifications /</h2>
            <ul className="qualifications">
                <li><OutboundLink className="img-container" href="https://devacademy.co.nz/" rel="noreferrer noopener" target="_blank"><img src={EDA} width="50%" alt="Enspiral Dev Academy Logo" /></OutboundLink></li>
                <li className="education">Certificate in Full Stack Software Development <br /> <span className="location">Enspiral Dev Academy<br /> March 2020 </span> </li>
                
                <li><OutboundLink className="img-container" href="https://nzie.ac.nz/" rel="noreferrer noopener" target="_blank"><img src={NZIE} width="50%" alt="NZIE Logo" /></OutboundLink></li>
                <li className="education">Diploma in Digital Marketing <br /> <span className="location">NZIE <br /> November 2019</span></li>

                <li><OutboundLink className="img-container" href="https://www.unitec.ac.nz/" rel="noreferrer noopener" target="_blank"><img src={Unitec} width="50%" alt="Unitec Logo" /></OutboundLink></li>
                <li className="education">CELTA/NZCLT  <br /> <span className="location">Unitec <br /> November 2019</span></li>

                <li><OutboundLink className="img-container" href="https://www.auckland.ac.nz/en.html" rel="noreferrer noopener" target="_blank"><img src={UOA} width="50%" alt="University of Auckland Logo"/></OutboundLink></li>

                <li className="education">BCom (Economics & Innovation and Entrepreneurship)  <br /> <span className="location">University of Auckland <br /> May 2017</span></li>
            </ul>
        </section>
        </Layout>
    )
}

export default Resume