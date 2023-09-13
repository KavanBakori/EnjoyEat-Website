import React from "react";
import { Link } from 'react-router-dom';



const Footer = () => {
  return (
    <>
      <div style={{ display: 'flex', marginTop: '300px', backgroundColor: '#0f172b', padding: '50px', justifyContent: 'space-between' }}>
        <div className="col1">
          <h1><span>Enjoy </span>Eat </h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem tempora aliquam similique consectetur debitis obcaecati ea, fugit alias soluta nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, amet.</p>

          <div style={{ display: 'flex', columnGap: '10px' }}>
            <img src={require('../images/phone-call.png')} alt="" /> <br />
            <span>  8927829001</span>
          </div>
          <div style={{ display: 'flex', columnGap: '20px' }}>
            <img src={require('../images/email.png')} alt="" />
            <span>  lorem123@gmail.com</span>


          </div>
        </div>
        <div className="col1" style={{ alignItems: 'center' }} >
          <ul>
            <h2>UseFull Links</h2>
            <br />
            <li><Link style={{ color: 'grey' }} className="active" to="">About</Link></li>
            <li><Link style={{ color: 'grey' }} className="active" to="/login">Add Your restaurent</Link></li>
            <br />
            <br />
            <h2>Social Media</h2>
            <br />

            <div style={{ display: 'flex', columnGap: '20px' }}>
              <img src={require('../images/instagram.png')} alt="" />
              <img src={require('../images/twitter.png')} alt="" />
              <img src={require('../images/telegram.png')} alt="" />
              <img src={require('../images/facebook.png')} alt="" />
            </div>


          </ul>
        </div>

        <div className="col1">
          <input type="text" name="" style={{ width: '460px' }} placeholder="Share Your Suggesion" id="" />
          <button >Send Suggetion </button>

        </div>



      </div>
      <div style={{ width: '100%', backgroundColor: 'black', color: 'white', textAlign: 'center', fontSize: '12px' }}>
        <p>Copyright © 2023 Kavan Bakori | All rights reserved</p>

      </div>
    </>

  );
};
export default Footer;
