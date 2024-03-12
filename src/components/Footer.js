import React from "react";
import '../style.css';

const Footer = () => {
    return(

        <footer>
            <div className="container1">
                <div className="row">
                    <div className="col-md-3">
                        <h4>Ufelx Tech</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-md-2">
                        
                            <h6>Home</h6>
                            <h6>About Us</h6>
                            <h6>Services</h6>
                            <h6>Contact Us</h6>
                    </div>

                    <div className="col-md-2">
                        
                            <h6>Contact Us</h6>

                            <h6 style={{ fontSize: '0.9rem' }}><i className="material-icons" style={{ fontSize: '13px' }}>call</i>
                                8668842698
                            </h6>

                            <h6 style={{ fontSize: '0.9rem' }}><i class="material-icons" style={{ fontSize: '13px' }}>email</i>incspace@.com</h6>
                            <h6 style={{ fontSize: '0.9rem' }}><i class="material-icons" style={{ fontSize: '13px' }}>location_on</i>Bangalore</h6>
                    </div>

                    <div className="col-md-2">
                        
                            <h6>Social Media</h6>

                            <h6 style={{ fontSize: '0.9rem' }}><i class="fa fa-instagram" style={{ fontSize: '13px' }}></i>
                                 @incspace
                            </h6>

                            <h6 style={{ fontSize: '0.9rem' }}><i class="fa fa-facebook-square" style={{ fontSize: '13px' }}></i> incspace</h6>
                            <h6 style={{ fontSize: '0.9rem' }}><i class="fa fa-linkedin-square" style={{ fontSize: '13px' }}></i> @incspace</h6>
                            <h6 style={{ fontSize: '0.9rem' }}><i class="fa fa-twitter" style={{ fontSize: '13px' }}></i> incspace</h6>
                    </div>

                    <div className="col-md-3">
                        
                            <h6>Links</h6>
                            <h6 style={{ fontSize: '0.9rem' }}>Terms of use</h6>
                            <h6 style={{ fontSize: '0.9rem' }}>Privacy policy</h6>
                    </div>
                </div>
            </div>

            <div className="header3">
                <div className="title2" style={{display: "flex", justifyContent: "center", fontSize: '15px'}}>Copyright 2023 @incspace All Rights Reserved Design by Asra</div>
            </div>
        </footer>
    );
};

export default Footer;