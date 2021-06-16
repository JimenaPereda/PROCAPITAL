import React from "react";

import MainLogo from "../../Components/Images/logocuadrado.jpg";
import './introstyle.css';



function IntroPage() {
	
   
      return (

        <div className="introback">
          
        <img alt="somevalue" className="LogoImg" src={MainLogo} />
          
        </div>
          
      );
  }
  
  export default IntroPage;