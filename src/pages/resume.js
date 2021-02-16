import React from 'react'
import { gsap } from 'gsap'
import Layout from '../components/layout'
import { OutboundLink } from "gatsby-plugin-google-analytics"



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
            <h2 className="resume-h1">/ work experience /</h2>
            <ul className="work-experience">
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
                <li className="role"><span className="job-title">Team Leader · <i>June 2018 ~ August 2019</i></span><br />Maintained and managed a safe, secure and compliant working environment. <br /> Provided a seamless foreign exchange service with a focus on meeting and exceeding client expectations. </li>
                <li></li>
                <li className="role"><span className="job-title">Foreign Exchange Consultant · <i>December 2017 ~ June 2018</i></span> <br />Competently sold foreign currency, prepaid travel money cards, international money transfers and travel insurance. <br /> Provided exceptional customer service. <br /> Completed transactions with a high level of accuracy. </li>
                <li className="company">Lincoln Family Restaurant<br /> <span className="location">Auckland, New Zealand</span></li>
                <li className="role"><span className="job-title">Restaurant Manager · <i>October 2017 ~ October 2018</i></span> <br />Competently sold foreign currency, prepaid travel money cards, international money transfers and travel insurance. <br /> Provided exceptional customer service. <br /> Completed transactions with a high level of accuracy. </li>
            </ul>

        </section>
        </Layout>
    )
}

export default Resume