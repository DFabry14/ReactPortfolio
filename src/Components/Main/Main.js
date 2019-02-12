import React from "react";
import { Card, CardTitle, Col, Parallax } from 'react-materialize';
import "./Main.css"

const MainPage = () => (
    <div>
        <h4>Dan is a Chicago-based web developer and recent graduate of the Northwestern University School of Professional Studies Full-Stack Web Development Program.</h4>
        <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg" />
        <div>
            <h4 className="headline" >Skills</h4>
            <img alt="HTML logo" src="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/Logos/html.png?raw=true"></img>
            <img alt="CSS logo" src="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/Logos/css.png?raw=true"></img>
            <img alt="Javascript logo" src="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/Logos/javascript.png?raw=true"></img>
            <img alt="jQuery logo" src="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/Logos/jquery-logo.png?raw=true"></img>
            <img alt="React logo" src="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/Logos/reactjs.png?raw=true"></img>
            <img alt="Node logo" src="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/Logos/Node.jpg?raw=true"></img>
            <img alt="Express logo" src="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/Logos/express.png?raw=true"></img>
            <img alt="SQL logo" src="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/Logos/sql-file-format-symbol.png?raw=true"></img>
            <img alt="NoSQL logo" src="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/Logos/Mongo.png?raw=true"></img>
            <img alt="Heroku logo" src="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/Logos/heroku.png?raw=true"></img>
            <img alt="Handlebars logo" src="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/Logos/handlebars-js.png?raw=true"></img>
        </div>
        <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg" />
        <div>
            <h4 className="headline">Projects</h4>
        </div>
    </div>
)

export default MainPage;