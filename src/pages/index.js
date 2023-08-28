import React, { Fragment } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Footer from "./footer";
import Header from "./header";
import { Allres, Quality, restaurent } from "./quality"; // Import the named export Quality from qualityData.js
// import { Restaurent } from "./restaurentData";;

// import { IconName } from "react-icons/fa";
// import imageSrc from '../images/images.png';

const Index = () => {
  const navigate = useNavigate();

  function gotoallrestaurents() {
    // Render the Tablebook component with the name prop
    navigate("/Restaurants")
  }


  function gototablebook(name) {
    // Navigate to the Tablebook component with the name state
    navigate("/tablebook", { state: { name: name } });
  }
  return (


    <Fragment>


      {/* <ul>
        <li><img src={require('../images/meal2.png')} style={{width:'90px',marginTop:'20px'}}  alt="" /></li>
        <div className="nav">
        <li><Link className="active" to="/login">How to Start</Link></li>
        <li><Link className="active" to="/login">About Us</Link></li>
        <li><Link className="active" to="/login"><i className="fas fa-phone"></i></Link></li>
        <button className="button1">Sign Up</button>
        </div>
      </ul> */}


      <div className="wrapper">
        <Header />

        <div className="container1" >
          {/* <img src={require('../images/pexels-fauxels-3184183.jpg')} alt="" style={{ objectFit: 'cover', width: '100%', height: '80%' }} /> */}
          <div style={{ display: 'flex', flexDirection: 'column', rowGap: '50px' }}>
            <h1>Are You <span>Hungry?</span></h1>
            <div className="search_box">
              <input type="text" className="input_search" placeholder="Which Restaurent are you looking for?" />
              <div className="search_btn"><i className="fas fa-search"></i></div>
            </div>

          </div>
          <img className="" src={require('../images/burger.png')} style={{ width: '600px' }} alt="" />
        </div>
      </div>


      <div className="grid1">
        {Quality.map((item, index) => (
          <div className="griditems" key={index}>
            <img src={item.img} alt="" />
            <h2>{item.h2}</h2>
            <p>{item.p}</p>
          </div>
        ))}


      </div>


      <div className="top">
        <h1> <span>Top</span> Restaurants</h1>

        <div className="boxes">
          {restaurent.map((item, index) => (
            <div className="box">
              <div className="image">
                <img className="image__img" src={item.img} />
                <div className="image__overlay">
                  <button onClick={() => gototablebook(item.h1)} type="button" class="btn btn-outline-light ">Show More</button>
                </div>
              </div>
              <div className="col">
                <h1>{item.h1}</h1>
                <p>{item.p}</p>
                <br /><br />
                {/* <button onClick={() => gototablebook(item.h1)} className="button1">Book Table</button> */}
              </div>
            </div>

          ))}

        </div>
        <button onClick={gotoallrestaurents} className="button-28">Show all Restaurants </button>
      </div>


      <div className="food" id="how">
        <h1> <span>How</span> it Works</h1>
        <div className="boxes">
          <div className="box1">
            <h1>1</h1>
            <div className="col">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ducimus?</p>
            </div>
          </div>
          <div className="box1">
            <h1>2</h1>
            <div className="col">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ducimus?</p>
            </div>

          </div>
          <div className="box1">
            <h1>3</h1>
            <div className="col">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ducimus?</p>
            </div>

          </div>
          <div className="box1">
            <h1>4</h1>
            <div className="col">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ducimus?</p>
            </div>

          </div>
        </div>

      </div>

      <div className="what" id="food">
        <h1> <span>What </span>you want?</h1>
        <div className="grid">
          <div className="griditems" >
            {/* <h1 style="color: rgba(254,193,6,255);">7+</h1> */}
            <img id='foodname' src={require('../images/pizza.png')} alt="" />
            <h2>Italian</h2>

          </div>
          <div className="griditems" >
            {/* <h1 style="color: rgba(254,193,6,255);">2years</h1> */}
            <img id='foodname' src={require('../images/indian.png')} alt="" />

            <h2>Gujarati</h2>

          </div>
          <div className="griditems" >
            {/* <h1 style="color: rgba(254,193,6,255);">3+</h1> */}
            <img id='foodname' src={require('../images/dosa.png')} alt="" />

            <h2>South Indian</h2>

          </div>
          {/* <br /> */}

          <div className="griditems" >
            {/* <h1 style="color: rgba(254,193,6,255);">3+</h1> */}
            <img id='foodname' src={require('../images/chienese.png')} alt="" />

            <h2>Chinese</h2>
          </div>

          <div className="griditems" >
            {/* <h1 style="color: rgba(254,193,6,255);">2years</h1> */}
            <img id='foodname' src={require('../images/kulcha.png')} alt="" />

            <h2>Punjabi</h2>

          </div>

        </div>


      </div>

      <Footer />

      {/* <div className="footer">

        <div className="col1">
          <h1><span>Enjoy </span>Eat </h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem tempora aliquam similique consectetur debitis obcaecati ea, fugit alias soluta nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, amet.</p>
          <i className="fa fa-instagram"></i>

        </div>
        <div className="col1">
          <ul>
            <h2>UseFull Links</h2>
            <br />
            <li><Link style={{color:'white'}} className="active" to="/login">About</Link></li><br />
            <li><Link style={{color:'white'}} className="active" to="/login">Add Your restaurent</Link></li>
            
            
          </ul>
        </div>
        <div className="col1"></div>


      </div> */}

    </Fragment>
  );
}

export default Index;
