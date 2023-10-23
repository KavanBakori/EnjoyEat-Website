import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Footer from "./footer/footer";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Header from "./header/header";
import { Quality, restaurent } from "./quality";


const Index = () => {

  useEffect(() => {
    AOS.init({
      // Your configuration options here
      // duration: 1000,
      offset: 70,
    });
  }, []);


  const [search, setsearch]=useState('');
  const navigate = useNavigate();

  function gotoallrestaurents() {
    // Render the Tablebook component with the name prop
    navigate("/Restaurants")
  }


  function gototablebook(name) {
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

        <div className="container1" data-aos="zoom-in-up">
          {/* <img src={require('../images/pexels-fauxels-3184183.jpg')} alt="" style={{ objectFit: 'cover', width: '100%', height: '80%' }} /> */}
          <div style={{ display: 'flex', flexDirection: 'column', rowGap: '50px',textAlign:'center',margin:'auto' ,alignItems:'center',marginTop:'10%'}}>
            <h1>Are You <span>Hungry?</span></h1>
            <div className="search_box">
              <input type="text" onChange={(e)=>setsearch(e.target.value)} className="input_search" placeholder="Which Restaurent are you looking for?" />
              <div className="search_btn" onClick={() => gototablebook(search)}><i className="fas fa-search"></i></div>
            </div>

          </div>
          {/* <img className="" src={require('../images/burger.png')} style={{ width: '600px' }} alt="" /> */}
        </div>
      </div>


      <div className="grid1">
        {Quality.map((item, index) => (
          <div className="griditems" key={index} data-aos="zoom-in-up">
            <img src={item.img} alt="" />
            <h2>{item.h2}</h2>
            <p>{item.p}</p>
          </div>
        ))}


      </div>


      <div className="top" data-aos="fade-up">
        <h1> <span>Top</span> Restaurants</h1>
          <span style={{marginTop:'-40px',marginLeft:'60px'}}>Savor the culinary delights of the city's top restaurants for an unforgettable dining experience</span>
        <div className="boxes" >
          {restaurent.map((item, index) => (
            <div className="box" data-aos="fade-up">
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
        <button onClick={gotoallrestaurents} data-aos="fade-up" className="button-28">Show all Restaurants </button>
      </div>


      <div className="food" id="how" data-aos="fade-up">
        <h1> <span>How</span> it Works</h1>
        <span style={{marginTop:'-40px',marginLeft:'60px'}}> Discover how it works, step by step, and unlock the magic behind the scenes
</span>
        <div className="boxes" >
          <div className="box1" data-aos="fade-up">
            <h1>1</h1>
            <div className="col">
              <p>Find the perfect restaurant for your cravings and preferences with just a few clicks</p>
            </div>
          </div>
          <div className="box1" data-aos="fade-up">
            <h1>2</h1>
            <div className="col">
              <p>Submit your request effortlessly by entering just a few key details</p>
            </div>

          </div>
          <div className="box1" data-aos="fade-up">
            <h1>3</h1>
            <div className="col">
              <p>Save your precious time by waiting for our email confirmation instead of waiting in line at the restaurant</p>
            </div>

          </div>
          <div className="box1" data-aos="fade-up">
            <h1>4</h1>
            <div className="col">
              <p>After receiving our email, simply arrive and indulge in your delightful meal</p>
            </div>

          </div>
        </div>

      </div>

      <div className="what" id="food" data-aos="fade-up">
        <h1> <span>What </span>you want?</h1>
        <span style={{marginLeft:'60px'}}>What kind of cuisine are you in the mood for today?</span>
        <div className="grid" data-aos="fade-up">
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
