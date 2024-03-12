import React from "react";
import '../style.css';

const EightComponent = () => {
    return(
        <div className="header2">
        <div className="title2" style={{display: "flex", justifyContent: "center", fontSize: '30px'}}>
        <span role="img" aria-label="hi" style={{marginRight: '10px'}}>👋</span>
             Keep in touch with Us</div>
        <div className="title2" style={{display: "flex", justifyContent: "center", fontSize: '32px'}}> Say Hi!</div>
        <h5 className="features1"  style={{display: "flex", justifyContent: "center"}}>
            info@asraworks.com
        </h5>
        </div>
    );
};

export default EightComponent;