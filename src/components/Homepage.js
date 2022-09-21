import React from 'react';
import '../Css/Homepage.css';
import image from '../images/Green-image.jpg';

function Homepage() {
  return (
    <div className="Main">
      <div className="Main-title">
        <div className="Text">
          <h2>
            HELLO
          </h2>
          <p>
            My name is Maya Hristova, if you want help with creating your website, contact me
          </p>
        </div>
        <img src={image} className="Homepageimg" height={200} width={200} alt="Main-page" />
      </div>
    </div>

  );
}

export default Homepage;
