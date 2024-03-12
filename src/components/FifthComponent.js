import React from "react";
import '../style.css';

// const FifthComponent = () => {
//     return(
//       <>
     
//   <div className="dropdown">
//   <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" 
//   aria-expanded="false" 
//   style={{  backgroundColor: 'black',
//   color: 'transparent',
//   WebkitBackgroundClip: 'text',
//   backgroundClip: 'text',
//   backgroundImage: 'linear-gradient(to right, #6f279c, #58b0f8)' }}>
//     How can we help your Business? 
//   </a>

//   <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
//     <a className="dropdown-item" href="#">Action</a>
//     <a className="dropdown-item" href="#">Another action</a>
//     <a className="dropdown-item" href="#">Something else here</a>
//   </div>
// </div>

// {/* Second Dropdown */}
// <div className="dropdown" style={{ marginTop: '20px' }}>
//   <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" 
//   aria-expanded="false" 
//   style={{  backgroundColor: 'black',
//   color: 'transparent',
//   WebkitBackgroundClip: 'text',
//   backgroundClip: 'text',
//   backgroundImage: 'linear-gradient(to right, #6f279c, #58b0f8)' }}>
//     How can we help your Business? 
//   </a>

//   <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
//     <a className="dropdown-item" href="#">Action</a>
//     <a className="dropdown-item" href="#">Another action</a>
//     <a className="dropdown-item" href="#">Something else here</a>
//   </div>
// </div>


// <div className="dropdown" style={{ marginTop: '20px' }}>
//   <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" 
//   aria-expanded="false" 
//   style={{  backgroundColor: 'black',
//   color: 'transparent',
//   WebkitBackgroundClip: 'text',
//   backgroundClip: 'text',
//   backgroundImage: 'linear-gradient(to right, #6f279c, #58b0f8)' }}>
//     How can we help your Business? 
//   </a>

//   <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
//     <a className="dropdown-item" href="#">Action</a>
//     <a className="dropdown-item" href="#">Another action</a>
//     <a className="dropdown-item" href="#">Something else here</a>
//   </div>
// </div>


// <div className="dropdown" style={{ marginTop: '20px' }}>
//   <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" 
//   aria-expanded="false" 
//   style={{  backgroundColor: 'black',
//   color: 'transparent',
//   WebkitBackgroundClip: 'text',
//   backgroundClip: 'text',
//   backgroundImage: 'linear-gradient(to right, #6f279c, #58b0f8)' }}>
//     How can we help your Business? 
//   </a>

//   <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
//     <a className="dropdown-item" href="#">Action</a>
//     <a className="dropdown-item" href="#">Another action</a>
//     <a className="dropdown-item" href="#">Something else here</a>
//   </div>
//   </div>
  

// </>

//     );
// };

// export default FifthComponent;



const FifthComponent = () => {
  return (
    <div className="container">
      <div className="left-section">
        <div className="help-buttons">
          <button className="help-button">
            How can we help your business? <i className="arrow-icon"></i>
          </button>
          {/* Repeat this button for other options */}
          
        </div>
      </div>

      
      <div className="right-section">
        <div className="content-box">
          <p className="small-text">FAQs</p>
          <h2 className="bold-text">Be Kind to Your Mind Question & Answer</h2>
          <p className="paragraph-text">
            All your questions are in a document format, in question and answer format, introducing newcomers to common questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FifthComponent;
