import React from "react";
import { Footer, Modal, Button } from "react-materialize"
import "./Footer.css"

const Foot = () => (
    <div>
        <Footer
            links={
                <ul>
                    <li><a className="grey-text text-lighten-3" target="_blank" href="https://www.linkedin.com/in/dan-fabry/">LinkedIn</a></li>
                    <li><a className="grey-text text-lighten-3" target="_blank" href="https://github.com/DFabry14">GitHub</a></li>
                    <li><a className="grey-text text-lighten-3" target="_blank" href="#!">Resume</a></li>
                    <li><a className="grey-text text-lighten-3" target="_blank" href='mailto:dan@DanFabry.tech'>Contact</a></li>
                </ul>
            }
            className='example'>
            {/* <h5 className="white-text">More About Dan</h5> */}
            <Modal
                header='More About Dan'
                fixedFooter
                trigger={<Button>More About Dan</Button>}>
                <img ></img>
                Dan is a former professional athlete turned web developer. Born and raised in Chicago, from there he went on to play
        Division I volleyball at Long Beach State, where he earned a Bachelors Degree in Journalism and Communications,
        before playing professionally in Sweden for two seasons. He is a 2018 graduate of the Northwestern University
        Full Stack Web Development Boot Camp where he learned extensively about HTML, CSS, JavaScript, Bootstrap, jQuery,
        Node.js, Express, React, Handlebars, SQL/Sequelize databases, and NoSQL/Mongo databases. He also has a Masters
        Degree in Sports Management from the University of East London Docklands Business School. Dan currently lives in Chicago's West Loop neighborhood with his girlfriend, Morgan, and their Black Lab, Norman.
</Modal>
        </Footer>
    </div>
)

export default Foot;