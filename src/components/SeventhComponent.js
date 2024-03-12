import React from "react";
import '../style.css';

const SeventhComponent = () => {
    return(
       <>
       <div className="header1">
        <div className="title1"> BLOG</div>
        <h2 className="features1">
            Stay updated with our latest news
        </h2>
        </div>

        <div className="card-deck">
        <div className="card">
          <img src={process.env.PUBLIC_URL + '/Img/p8.png'}className="card-img-top" alt="..."/> 
          <div className="card-body">
            <h6 className="card-title">Twitter</h6>
            <h5 className="card-title">New Technology Make for Dental Operation</h5>
            <p className="card-text card-text-custom">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.</p>
          </div>
          </div>

          <div className="card">
          <img src={process.env.PUBLIC_URL + '/Img/p9.png'}className="card-img-top" alt="..."/> 
          <div className="card-body">
            <h6 className="card-title">Facebook</h6>
            <h5 className="card-title">New Technology Make for Dental Operation</h5>
            <p className="card-text card-text-custom">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.</p>
          </div>
          </div>

          <div className="card">
          <img src={process.env.PUBLIC_URL + '/Img/p10.png'}className="card-img-top" alt="..."/> 
          <div className="card-body">
            <h6 className="card-title">Instagram</h6>
            <h5 className="card-title">New Technology Make for Dental Operation</h5>
            <p className="card-text card-text-custom">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.</p>
          </div>
          </div>
        </div>
        </>
    );
};
export default SeventhComponent;