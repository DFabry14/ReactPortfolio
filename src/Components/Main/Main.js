import React from "react";
import { Card, CardTitle, Col, Parallax } from 'react-materialize';
import "./Main.css"

const MainPage = () => (
    <div>
        <h4>Dan is a Chicago-based web developer and recent graduate of the Northwestern University School of Professional Studies Full-Stack Web Development Program.</h4>
        <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
        <h4 className="headline" >Skills</h4>
        <img src={"src/Images/Logos/html.png"}></img>
        
        
        {/* <ul>HTML</ul>
        <ul>CSS</ul>
        <ul>JavaScript</ul>
        <ul>jQuery</ul>
        <ul>React.js</ul>
        <ul>Node.js</ul>
        <ul>Express Servers</ul>
        <ul>SQL Databases</ul>
        <ul>NoSQL Databases</ul>
        <ul>Heroku</ul>
        <ul>Handlebars.js</ul> */}
        <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
        <h4 className="headline">Projects</h4>
{/* <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
    </div>
)


export default MainPage;