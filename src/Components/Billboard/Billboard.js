import React from "react";
import { Parallax } from "react-materialize"
import "./Billboard.css"

const Billboard = () => (
    <div>
        <Parallax imageSrc="" />
        <div className="section white">
            <div className="row container">
                <h2 className="header">Chicago-based web developer</h2>
                <p className="grey-text text-darken-3 lighten-3">Dan is a Chicago-based web developer and recent graduate of the Northwestern University School of Professional Studies Full-Stack Web Development Course. Please see below for some examples of his work.</p>
            </div>
        </div>
        <Parallax imageSrc="" />
        <div className="section white">
            <div className="row container">
                <h2 className="header">Chicago-based web development</h2>
                <p className="grey-text text-darken-3 lighten-3">Dan is a Chicago-based web developer and recent graduate of the Northwestern University School of Professional Studies Full-Stack Web Development Course. Please see below for some examples of his work.</p>
            </div>
        </div>
    </div>
)

export default Billboard;