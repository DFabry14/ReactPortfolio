import React from "react";
import { Card, CardTitle, Col } from 'react-materialize';
import "./Main.css"

const MainPage = () => (
    <div>
        <h4>Dan is a Chicago-based web developer and recent graduate of the Northwestern University School of Professional Studies Full-Stack Web Development Course.</h4>
        <h4>Skills</h4>
        <ul>HTML</ul>
        <ul>JavaScript</ul>
        <ul>CSS</ul>
        <ul>React.js</ul>
        <ul>Node.js</ul>
        {/* <Col s={3} m={5}>
            <Card header={<CardTitle reveal image={"https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/ACC.png?raw=true"} waves='light' />}
                title="Aaron's Coffee Corner"
                reveal={<p>Materialize-based website for the Aaron's Coffee Corner charity. Uses Google Analytics.</p>}>
                <p><a href="http://www.aaronscoffeecorner.org/" target="_blank">Check it out!</a></p>
            </Card>
        </Col> */}
    </div>
)

export default MainPage;