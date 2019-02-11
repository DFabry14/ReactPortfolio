import React from "react";
import { Parallax } from "react-materialize"
import "./Main.css"

const MainPage = () => (
    <div>
        <div className="section white">
            <div className="row container">
                <h2 className="header">Chicago-based Full-Stack Web Developer</h2>
                <p className="grey-text text-darken-3 lighten-3">Dan is a Chicago-Based web developer and recent graduate of the Northwestern University School of Professional Studies Full-Stack Web Development Course.</p>
            </div>
        </div>
        <Parallax imageSrc="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/cityview.jpg?raw=true" />
        <div className="section white">
            <div className="row container">
                <h2 className="header">Skills</h2>
                <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
            </div>
        </div>
        <Parallax imageSrc="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/playpen.jpg?raw=true" />
    </div>
)

export default MainPage;