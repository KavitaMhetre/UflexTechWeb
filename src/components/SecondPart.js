import React from 'react';
import '../style.css';

const SecondPart = () =>{
    return(
        <>
        <header className="Second">
        <div className="title">Top features</div>
        <h2 className="features">
            Built-in Robust Features Verstile Purposes
        </h2>
       
        </header>
         
        <div className="card-deck">
        <div className="card">
          {/* Uncomment and replace "..." with your image path if needed */}
          {/* <img src="..." className="card-img-top" alt="..."/> */}
          <div className="card-body">
          {/* <i class='fas fa-globe'></i> */}
            <h5 className="card-title card-title-custom">Real Tracking</h5>
            <p className="card-text card-text-custom">Get the project Details faster and accurate by a few of clicks.</p>
          </div>
          {/* <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div> */}
        </div>

        <div className="card">
          {/* <img src="..." className="card-img-top" alt="..."/> */}
          <div className="card-body">
          <i class="material-icons">forum</i>
            <h5 className="card-title card-title-custom">Mobile and Web Applications</h5>
            <p className="card-text card-text-custom">Send a couple of Templates A/B testing to encourage clients.</p>
          </div>
         {/*  <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div> */}
        </div>

        <div className="card">
          {/* <img src="..." className="card-img-top" alt="..."/> */}
          <div className="card-body">
          <i class="fa fa-cc-visa"></i>
            <h5 className="card-title card-title-custom">Payment Gateway</h5>
            <p className="card-text card-text-custom">Clients would send the money to your bank account, secured.</p>
          </div>
         {/*  <div className="card-footer">
            <small className="text-muted">Last updated 3 mins ago</small>
          </div> */}
        </div>
      </div>


      <div className="card-deck">
                {/* Second row of cards */}
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title card-title-custom">Maintenance</h5>
                        <p className="card-text card-text-custom">Our commitment for 03 months from each project we work.</p>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                    <i class='fas fa-bezier-curve'></i>
                        <h5 className="card-title card-title-custom">More Automations</h5>
                        <p className="card-text card-text-custom">Our system will notify clients regarding deadline payment, repetation orders.</p>
                    </div>
                </div>
            </div>
             
      </>
  );
};

export default SecondPart;