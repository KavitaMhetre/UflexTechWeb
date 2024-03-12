import React from "react";
import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SixthComponent = () => {
    return(
      <>
        <div className="container">
      <div className="left-section">
      <header className="Second">
        <div className="title">Top features</div>
        <h2 className="features">
            What people have said about us
        </h2>
       
        </header>
         
      </div>

      
      <div className="right-section">
        <div className="content-box">
          
          <p className="paragraph-text1">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts.
          </p>
        </div>
      </div>
    </div>
    
    <div className="card-deck">
        <div className="card">
          <img src={process.env.PUBLIC_URL + '/Img/p1.png'}className="card-img-top" alt="..."/> 
          <div className="card-body">
            <h5 className="card-title" style={{display: 'flex', justifyContent: 'center'}}>Robert Fox</h5>
            <p className="card-text card-text-custom">Get the project Details faster and accurate by a few of clicks.</p>
          </div>
          <div className="card-footer1" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
         <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <i className="fa fa-star-o" style={{fontSize: '15px', color: 'black'}}></i> 
          </div>
        </div>

        <div className="card">
        <img src={process.env.PUBLIC_URL + '/Img/p2.png'}className="card-img-top" alt="..."/> 
          <div className="card-body">
            <h5 className="card-title" style={{display: 'flex', justifyContent: 'center'}}>Albert Tango</h5>
            <p className="card-text card-text-custom">Send a couple of Templates A/B testing to encourage clients.</p>
          </div>
          <div className="card-footer1" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
         <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <i className="fa fa-star-o" style={{fontSize: '15px', color: 'black'}}></i> 
          </div>
        </div>

        <div className="card">
        <img src={process.env.PUBLIC_URL + '/Img/p3.png'}className="card-img-top" alt="..."/> 
          <div className="card-body">
            <h5 className="card-title" style={{display: 'flex', justifyContent: 'center'}}>John Nik</h5>
            <p className="card-text card-text-custom">Clients would send the money to your bank account, secured.</p>
          </div>
          <div className="card-footer1" style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
         <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <i className="fa fa-star-o" style={{fontSize: '15px', color: 'black'}}></i> 
          </div>
    </div>
    </div>
    </>
    );
};

export default SixthComponent;