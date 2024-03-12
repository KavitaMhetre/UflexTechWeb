import React from "react";
import '../style.css';

const FourthComponent = () => {
    return(
        <>
        <header className="Second">
        <div className="title">Our Services</div>
        <h2 className="features">
            We provide expert advice For Startup Consulting
        </h2>
       
        </header>

<div className="card-deck">
<div className="card">
  <div className="card-body">
  <i className="fa fa-renren"></i>
    <h5 className="card-title card-title-custom">Test Run</h5>
    <p className="card-text card-text-custom">A collaborative space where creativity and innovaton flow like a refreshing breeze. Ideal for forward thinking minds.</p>
  </div>
    <a href="#" className="link">Learn More</a>
</div>

<div className="card">
  <div className="card-body">
  <i className="fa fa-renren"></i>
    <h5 className="card-title card-title-custom">Business Deployment</h5>
    <p className="card-text card-text-custom">A collaborative space where creativity and innovation flow like a refreshing breeze.Ideal for forward thinking minds.</p>
  </div>
  <a href="#" className="link">Learn More</a>
</div>

<div className="card">
  <div className="card-body">
  <i className="fa fa-renren"></i>
    <h5 className="card-title card-title-custom">Team Building</h5>
    <p className="card-text card-text-custom">A collaborative space where creativity and innovation flow like a refreshing breeze.Ideal for forward thinking minds.</p>
  </div>
  <a href="#" className="link">Learn More</a>
</div>
</div>

<div className="card-deck">
<div className="card">
  <div className="card-body">
  <i className="fa fa-renren"></i>
    <h5 className="card-title card-title-custom">Strategy</h5>
    <p className="card-text card-text-custom">A collaborative space where creativity and innovaton flow like a refreshing breeze. Ideal for forward thinking minds.</p>
  </div>
    <a href="#" className="link">Learn More</a>
</div>

<div className="card">
  <div className="card-body">
  <i className="fa fa-renren"></i>
    <h5 className="card-title card-title-custom">Test Run</h5>
    <p className="card-text card-text-custom">A collaborative space where creativity and innovation flow like a refreshing breeze.Ideal for forward thinking minds.</p>
  </div>
  <a href="#" className="link">Learn More</a>
</div>


<div className="card1">
  <div className="card-body">
  <div className="card-body centered-content">
<header className="Second">
  <div className="title">View All Services</div>
  <i className="fa fa-arrow-circle-o-right" style={{fontSize: '48px', color: 'skyblue'}}></i>
</header>
</div>
</div>
</div>
</div>
</>
  );
};

export default FourthComponent;