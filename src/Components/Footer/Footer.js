import React from "react";
import { Footer } from "react-materialize"
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
            <h5 className="white-text">More Info</h5>
            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </Footer>
    </div>
)

export default Foot;