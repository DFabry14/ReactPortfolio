import React from "react";
import { Slider, Slide } from "react-materialize"
import "./Billboard.css"

const Billboard = () => (
    <div>
        <Slider>
            <Slide
                src="https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/cityview.jpg?raw=true"
                title="This is our big Tagline!">
                Here's our small slogan.
  </Slide>
            <Slide
                src='https://github.com/DFabry14/ReactPortfolio/blob/master/src/images/skyline.jpg?raw=true'
                title="Left aligned Caption"
                placement="right">
                Here's our small slogan.
  </Slide>
            <Slide
                src="http://lorempixel.com/580/250/nature/3"
                title="Right aligned Caption"
                placement="right">
                Here's our small slogan.
  </Slide>
        </Slider>
    </div>
)

export default Billboard;