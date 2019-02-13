import React from "react";
import { Card, CardTitle, Col, Parallax } from 'react-materialize';
import "./Main.css"

const MainPage = () => (
    <div>
        <h4>Dan is a Chicago-based web developer and recent graduate of the Northwestern University School of Professional Studies Full-Stack Web Development Program.</h4>
        <Parallax className="Parallax" imageSrc="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/MichiganAve.jpg?raw=true" />
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
        <Parallax className="Parallax" imageSrc="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/east.jpg?raw=true" />
        <div>
            <h4 className="headline">Projects</h4>
            <Col m={7} s={12}>
                <Card className="small" horizontal header={<CardTitle className="cardpic" image="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/ACC.png?raw=true"></CardTitle>} actions={[<a href='http://www.aaronscoffeecorner.org/' target="_blank">Check it out!</a>]}>
                    <p>Website for the Aaron's Coffee Corner charity. Uses Google Analytics</p>
                </Card>
            </Col>
            <Col m={7} s={12}>
                <Card className="small" horizontal header={<CardTitle className="cardpic" image="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/Planit.png?raw=true"></CardTitle>} actions={[<a href="https://bcs-plan-it.herokuapp.com/" target="_blank">Check it out!</a>]}>
                    <p>Last-minute planner for the upcoming weekend, built with the Eventful API.</p>
                </Card>
            </Col>
            <Col m={7} s={12}>
                <Card className="small" horizontal header={<CardTitle className="cardpic" image="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/WorldCup.png?raw=true"></CardTitle>} actions={[<a href="https://dfabry14.github.io/TriviaGame/" target="_blank" >Check it out!</a>]}>
                    <p>Timed trivia game built with Javascript and jQuery.</p>
                </Card>
            </Col>
            <Col m={7} s={12}>
                <Card className="small" horizontal header={<CardTitle className="cardpic" image="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/Burger.png?raw=true"></CardTitle>} actions={[<a href="https://github.com/DFabry14/burger" target="_blank">Check it out!</a>]}>
                    <p>Full stack MySQL app. Create and "eat" burgers from the database.</p>
                </Card>
            </Col>
            <Col m={7} s={12}>
                <Card className="small" horizontal header={<CardTitle className="cardpic" image="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/Crypton.png?raw=true"></CardTitle>} actions={[<a href="https://m0bi.github.io/cryptocurrency-trading/" target="_blank">Check it out!</a>]}>
                    <p>Cryptocurrency tracker, uses API calls to plot data on box and whisker charts.</p>
                </Card>
            </Col>
            <Col m={7} s={12}>
                <Card className="small" horizontal header={<CardTitle className="cardpic" image="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/Crystal.png?raw=true"></CardTitle>} actions={[<a href="https://dfabry14.github.io/unit-4-game/" target="_blank">Check it out!</a>]}>
                    <p>jQuery-based game that randomly assigns numbers, aim is to add them up to the
                        goal.</p>
                </Card>
            </Col>
            <Col m={7} s={12}>
                <Card className="small" horizontal header={<CardTitle className="cardpic" image="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/Psychic.png?raw=true"></CardTitle>} actions={[<a href="https://dfabry14.github.io/Psychic-Game/" target="_blank">Check it out!</a>]}>
                    <p>Javascript game that gives you nine guesses to find out a letter chosen
                        randomly by computer.</p>
                </Card>
            </Col>
            <Col m={7} s={12}>
                <Card className="small" horizontal header={<CardTitle className="cardpic" image="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/train.png?raw=true"></CardTitle>} actions={[<a href="https://dfabry14.github.io/TrainSchedule/" target="_blank">Check it out!</a>]}>
                    <p>Firebase app that shows upcoming train times, also allows adding trains to
                        schedule.</p>
                </Card>
            </Col>
        </div>
        <div className="clearfix"></div>
    </div>
)

export default MainPage;