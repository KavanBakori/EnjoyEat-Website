import React, { useState, useEffect } from 'react'
import Header from './header';
// import Rating from "react-rating";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Button from '@mui/material/Button';
import Footer from "./footer";
import SendIcon from '@mui/icons-material/Send';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Person } from '@mui/icons-material';
import shadows from '@mui/material/styles/shadows';
import { Allres } from './quality';
import { useLocation } from 'react-router-dom';





// import Stack from '@mui/material/Stack';




function Tablebook() {


  const location = useLocation();
  const name = location.state.name;

  var a = 1;
  // document.getElementById("persons").innerHTML=1;

  function minus() {
    if (a > 1) {
      a = a - 1;
      document.getElementById("persons").innerHTML = a;
    }
  }
  function add() {

    a = a + 1;
    document.getElementById("persons").innerHTML = a;

  }


  const spanStyle = {
    padding: '20px',
    background: '#efefef',
  }

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '500px'
  }

  const Carousel = [
    {
      h1: "Spice & Slice",
      url: "images/spice&slice/five.jpg",
    },
    {
      h1: "Spice & Slice",
      url: "images/spice&slice/five_1.jpg",
    },
    {
      h1: "Spice & Slice",
      url: "images/spice&slice/five_2.jpg",
    },
    {
      h1: "Spice & Slice",
      url: "images/spice&slice/five_3.jpg",
    },


    {
      h1: "Urban Crust",
      url: "images/UrbanCrust/five.jpg",
    },
    {
      h1: "Urban Crust",
      url: "images/UrbanCrust/five_1.jpg",
    },
    {
      h1: "Urban Crust",
      url: "images/UrbanCrust/five_2.jpg",
    },
    {
      h1: "Urban Crust",
      url: "images/UrbanCrust/five_3.jpg",
    },


    {
      h1: "Flavor Factory",
      url: "images/FlavorFactory/five.jpg",
    },
    {
      h1: "Flavor Factory",
      url: "images/FlavorFactory/five_1.jpg",
    },
    {
      h1: "Flavor Factory",
      url: "images/FlavorFactory/five_2.jpg",
    },
    {
      h1: "Flavor Factory",
      url: "images/FlavorFactory/five_3.jpg",
    },


    {
      h1: "The Hungry Hub",
      url: "images/TheHungryHub/five.jpg",
    },
    {
      h1: "The Hungry Hub",
      url: "images/TheHungryHub/five_1.jpg",
    },
    {
      h1: "The Hungry Hub",
      url: "images/TheHungryHub/five_2.jpg",
    },
    {
      h1: "The Hungry Hub",
      url: "images/TheHungryHub/five_3.jpg",
    },


    {
      h1: "Punjabi Junction",
      url: "images/punjabi/five.jpg",
    },
    {
      h1: "Punjabi Junction",
      url: "images/punjabi/five_1.jpg",
    },
    {
      h1: "Punjabi Junction",
      url: "images/punjabi/five_3.jpg",
    },


    {
      h1: "Chienese Stop",
      url: "images/chienese/five.jpg",
    },
    {
      h1: "Chienese Stop",
      url: "images/chienese/five_1.jpg",
    },
    {
      h1: "Chienese Stop",
      url: "images/chienese/five_2.jpg",
    },
    {
      h1: "Chienese Stop",
      url: "images/chienese/five_3.jpg",
    },


    {
      h1: "Pizza House",
      url: "images/pizza/five.jpg",
    },
    {
      h1: "Pizza House",
      url: "images/pizza/five_1.jpg",
    },
    {
      h1: "Pizza House",
      url: "images/pizza/five_2.jpg",
    },
    {
      h1: "Pizza House",
      url: "images/pizza/five_3.jpg",
    },


    {
      h1: "Dosa Spot",
      url: "images/dosaspot/five.jpg",
    },
    {
      h1: "Dosa Spot",
      url: "images/dosaspot/five_1.jpg",
    },
    {
      h1: "Dosa Spot",
      url: "images/dosaspot/five_2.jpg",
    },
    {
      h1: "Dosa Spot",
      url: "images/dosaspot/five_3.jpg",
    },
  ];

  const [rating3, setRating3] = useState(0);
  const [value, setValue] = React.useState(4);



  return (
    <>

      <Header />
      <div className="top" id='tablebook_back'>
        <section className="showcase-area" id="showcase">
          <div className="showcase-container">
            <div>
              {Allres.filter((res) => res.h1 === name).map((res) => (
                <div style={{ display: 'flex', flexDirection: 'column', rowGap: '200px', alignItems: 'center' }}>
                  <div>
                    <h1 style={{ color: "white", fontSize: "4vw" }}>{res.h1}</h1>
                    <p style={{ color: "grey", fontSize: "1vw" }}>
                      {res.p}
                    </p>
                    <br />
                    <button>Book now</button>
                  </div>
                  <div style={{ display: 'flex', columnGap: '30px' }}>
                    <Box
                      sx={{
                        '& > legend': { mt: 2 },
                      }}
                    >
                      <Rating name="read-only" value={value} readOnly />
                      <Typography component="legend" style={{ color: 'white' }}>{res.rating}</Typography>

                    </Box>


                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', columnGap: '10px' }}>
                        <div style={{ height: '25px', width: '80px', backgroundColor: 'green', textAlign: 'center', borderRadius: '5px' }}>
                          <h6>Low</h6>
                        </div>
                        <div style={{ height: '25px', width: '80px', backgroundColor: '#504a0f88', textAlign: 'center', borderRadius: '5px' }}>
                          <h6>Medium</h6>
                        </div>
                        <div style={{ height: '25px', width: '80px', backgroundColor: '#500f0f88', textAlign: 'center', borderRadius: '5px' }}>
                          <h6>High</h6>
                        </div>
                      </div>
                      <p style={{ fontSize: '1vw', color: 'white', textAlign: 'center' }}>Current Queue</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>



            {/* <h4 style={{color:'grey'}}>Currently Queue is low may be you need to wait for 30 minuts </h4> */}
          </div>

        </section>
      </div>


      <div>
        {Allres.filter((res) => res.h1 === name).map((res) => (
          <div className="booktable">



            <div className="boxes2">
              <section id="about">
                <div class="about-wrapper " style={{ display: 'flex' }}>
                  <div class="about-text">
                    <p class="small">About Us</p>
                    <h2>{res.about}</h2>
                    <p>
                      {res.aboutdetails}
                    </p>
                    <br />
                    <div style={{ display: 'flex', columnGap: '10px' }}>
                      <img src={require('../images/phone-call.png')} width={20} alt="" /> <br />
                      <span>  {res.phoneno}</span>
                    </div><br />

                    <div style={{ display: 'flex', columnGap: '20px' }}>
                      <img src={require('../images/email.png')} width={20} alt="" />
                      <span>  {res.email}</span>


                    </div>
                  </div>
                  <div class="about-img">
                    <div className="slide-container" style={{ width: '800px' }}>
                      <Fade>
                        {Carousel.filter((res) => res.h1 === name).map((slideImage, index) => (
                          <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            </div>
                          </div>
                        ))}
                      </Fade>
                    </div>
                  </div>
                </div>
              </section>
            </div>






            <div className='details_form'>
              <div className="part1">
                <h1>Enter Your Details</h1>
                <p>Just Send & Save your time</p>
              </div>
              <div className="part2">

                <input type="text" placeholder='Name' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Phone no.' />

                <div style={{ display: 'flex', columnGap: '20px', width: 'fit-content', borderRadius: '100px', alignItems: 'center' }}>
                  <p>How many persons you are?</p>
                  <button style={{ borderRadius: '100px', color: 'orange', backgroundColor: '#1c2c52' }} onClick={minus}>-</button>
                  <h1 id="persons" >1</h1>
                  <button style={{ borderRadius: '100px', color: 'orange', backgroundColor: '#1c2c52' }} onClick={add}>+</button>
                </div>
                <br />
                <Button style={{ backgroundColor: 'orange', color: '#1c2c52' }} endIcon={<SendIcon />}>
                  Send
                </Button>

              </div>
            </div>



          </div>))}
      </div>


      <div>
      </div>
      <Footer />
    </>

  )
}

export default Tablebook;
