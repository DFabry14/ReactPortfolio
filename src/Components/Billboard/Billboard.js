import React from "react";
import { Slider, Slide } from "react-materialize"
import "./Billboard.css"

const Billboard = () => (
    <div>
        <Slider>
            <Slide
                src="./cityview.jpg"
                title="This is our big Tagline!">
                Here's our small slogan.
  </Slide>
            <Slide
                src='src/Components/Billboard/skyline.jpg'
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