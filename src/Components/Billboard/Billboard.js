import React from "react";
import { Slider, Slide } from "react-materialize"
import "./Billboard.css"

const Billboard = () => (
    <div className="container">
        <Slider>
            <Slide
                src="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/cityview.jpg?raw=true">
            </Slide>
            <Slide
                src='https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/playpen.jpg?raw=true'>
            </Slide>
            <Slide
                src="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/river.jpg?raw=true">
            </Slide>
        </Slider>
    </div>
)

export default Billboard;