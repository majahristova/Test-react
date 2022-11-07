import React from 'react';
import '../Css/Aboutpage.css';
import Aboutpageimage1 from '../images/Green-app.jpg';
import Aboutpageimage2 from '../images/Green-landingpage.jpg';

function Aboutpage() {
  return (
    <div className="Aboutpage-main">
      <h1>
       Need a new website to your company or personal website?
      </h1>
      <p>
        Maya-fix, creates smart and creative website in less than 1 week after requiest, 
        prices are between 2 000 - 10 000 kr depending on what kind of website you wanna create.
      </p>
      <div className="Aboutpage-img">
        <img src={Aboutpageimage1} className="Aboutimage1" alt="Main-page" />
        <img src={Aboutpageimage2} className="Aboutimage2" alt="Main-page" />
      </div>
    </div>

  );
}

export default Aboutpage;
