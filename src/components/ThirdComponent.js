 import React from 'react';

 const ThirdComponent = () => {
    return(
         <div style={{ display: 'flex', justifyContent:'center'} }>
         {/* Use the img tag and provide the path to the image */}
         <img src={process.env.PUBLIC_URL + '/Img/p5.png'} alt="Example" 
         style={{
            
             marginTop: '40px' 
             }} />
       </div>
       
     );
 };
 export default ThirdComponent;

