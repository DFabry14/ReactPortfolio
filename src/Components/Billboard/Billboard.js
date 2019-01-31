import React from "react";

const style = {
    position: "fixed",
    top: "0px",
    height: "70px",
    backgroundColor: "white",
    marginTop: "0px",
    width: "100%",
    borderBottomColor: "red",
    borderBottomStyle: "solid"
};
const fontOne = {
    color: "#3A4041",
    fontWeight: "bold",
    fontSize: "3em",
    textAlign: "Center"
};

const Billboard = () => (
    <div style={style} className="size billboard billboard-fluid">
        <div className="container">
            <span style={fontOne} > Dan Fabry - Web Developer </span>
        </div>
    </div>
);



export default Billboard;