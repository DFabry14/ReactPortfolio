import React from "react";
import { Footer, Modal, Button } from "react-materialize"
import "./Footer.css"

const Foot = () => (
    <div>
        <Footer
            links={
                <ul>
                    {/* <li><a className="grey-text text-lighten-3" target="_blank" href="https://www.linkedin.com/in/dan-fabry/">LinkedIn</a></li>
                    <li><a className="grey-text text-lighten-3" target="_blank" href="https://github.com/DFabry14">GitHub</a></li> */}
                    <li><Modal header="Resume" trigger={<p className="grey-text text-lighten-3">Resume</p>}>
                        <iframe className="iframe" src="https://www.scribd.com/embeds/399588979/content?start_page=1&view_mode=scroll&show_recommendations=false&access_key=key-dMxwQADW5t98UKCM3LJT" data-auto-height="true" data-aspect-ratio="null" scrolling="no" frameborder="0"></iframe>
                    </Modal></li>
                    <li><Modal header="Contact Info" trigger={<p className="grey-text text-lighten-3">Contact</p>}>
                        <ul><p>Email: <a target="_blank" href='mailto:dan@DanFabry.tech'>Dan@DanFabry.tech</a></p></ul>
                        <ul>Phone: 1-847-421-5402</ul>
                    </Modal></li>
                </ul>
            }
            className='example'>
            <Modal
                header='More About Dan'
                fixedFooter
                trigger={<Button className="button">More About Dan</Button>}>
                <img className="image" src="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/IMG_1528.jpeg?raw=true"></img>
                <p>Dan is a former professional athlete turned web developer. Born and raised in Chicago, from there he went on to play
        Division I volleyball at Long Beach State, where he earned a Bachelors Degree in Journalism and Communications,
        before playing professionally in Sweden for two seasons. He is a 2018 graduate of the Northwestern University
        Full Stack Web Development Boot Camp where he learned extensively about HTML, CSS, JavaScript, Bootstrap, jQuery,
        Node.js, Express, React, Handlebars, SQL/Sequelize databases, and NoSQL/Mongo databases. He also has a Masters
        Degree in Sports Management from the University of East London Docklands Business School. </p>
                <p>Dan currently lives in Chicago's West Loop neighborhood with his girlfriend, Morgan, and their Black Lab, Norman.</p>
            </Modal>
        </Footer>
    </div>
)

export default Foot;