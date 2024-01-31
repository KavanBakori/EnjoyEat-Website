import React, { useState, useEffect } from 'react'
import Header from '../header/header';
// import Rating from "react-rating";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Button from '@mui/material/Button';
import Footer from "../footer/footer";
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import 'aos/dist/aos.css';
import AOS from 'aos';
import FAQ from '../faq/faq';
import { Allres } from '../quality';
import { Carousel } from '../quality';
import { useLocation } from 'react-router-dom';
import './tablebook.css'


function Tablebook() {


  useEffect(() => {
    AOS.init({
      // Your configuration options here
      // duration: 1000,
      offset: 70,
    });
  }, []);

  const location = useLocation();
  const name = location.state.name;
  const [form, setForm] = useState({});
  const [availableseats, setavailableseats] = useState([]);


  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      Restaurantname: name,
    });
  };


  useEffect(() => {
    axios.get(`http://localhost:3001/availableseats/${name}`)
      .then(availableseats => {
        setavailableseats(availableseats.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const handlesubmit = async (e) => {
    const response = await fetch('http://localhost:3001/tablebook', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }

    });
    const data = await response.text();
    console.log(data);
    alert("Request send successful")
  }


  function green() {
    // Assuming availableseats is an array of objects with an availableseats property
    const colors = availableseats
      .filter(seat => seat.resname === name)
      .map(seat => {
        if ((seat.availableseats * 100) / seat.totalpersons > 65 && (seat.availableseats * 100) / seat.totalpersons <= 100) {
          return 'green';
        }
        else {
          return '#01450095';
        }
      });

    // Return the first color in the array (or a default color if no matching seats are found)
    return colors.length > 0 ? colors[0] : 'grey';
  }
  function yellow() {
    // Assuming availableseats is an array of objects with an availableseats property
    const colors = availableseats
      .filter(seat => seat.resname === name)
      .map(seat => {
        if ((seat.availableseats * 100) / seat.totalpersons >= 33 && (seat.availableseats * 100) / seat.totalpersons <= 65) {
          return 'yellow';
        }
        else {
          return '#504a0f88';
        }
      });

    // Return the first color in the array (or a default color if no matching seats are found)
    return colors.length > 0 ? colors[0] : 'grey';
  }
  function red() {
    // Assuming availableseats is an array of objects with an availableseats property
    const colors = availableseats
      .filter(seat => seat.resname === name)
      .map(seat => {
        if ((seat.availableseats * 100) / seat.totalpersons >= 0 && (seat.availableseats * 100) / seat.totalpersons < 33) {
          return 'red';
        }
        else {
          return '#500f0f88';
        }
      });

    // Return the first color in the array (or a default color if no matching seats are found)
    return colors.length > 0 ? colors[0] : 'grey';
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



  const [rating3, setRating3] = useState(0);
  const [value, setValue] = React.useState(4);



  return (
    <>

      <Header />
      <div className="top" id='tablebook_back'>
        <section className="showcase-area" id="showcase">
          <div className="showcase-container" data-aos="fade-up">
            <div>
              {availableseats.filter((res) => res.resname === name).map((res) => (
                <div style={{ display: 'flex', flexDirection: 'column', rowGap: '200px', alignItems: 'center' }}>
                  <div>
                    <h1 style={{ color: "white", fontSize: "4vw" }}>{res.resname}</h1>
                    <p style={{ color: "grey", fontSize: "1vw" }}>
                      {res.tagline}
                    </p>
                    <br />
                    <button>Book now</button>
                  </div>
                  <div style={{ display: 'flex', columnGap: '30px' }}>
                    {/* <Box
                      sx={{
                        '& > legend': { mt: 2 },
                      }}
                    >
                      <Rating name="read-only" value={value} readOnly />
                      <Typography component="legend" style={{ color: 'white' }}>{res.rating}</Typography>

                    </Box> */}


                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', columnGap: '10px' }}>
                        <div style={{ height: '25px', width: '80px', backgroundColor: green(), textAlign: 'center', borderRadius: '5px' }}>
                          <h6>Low</h6>
                        </div>
                        <div style={{ height: '25px', width: '80px', backgroundColor: yellow(), textAlign: 'center', borderRadius: '5px' }}>
                          <h6>Medium</h6>
                        </div>
                        <div style={{ height: '25px', width: '80px', backgroundColor: red(), textAlign: 'center', borderRadius: '5px' }}>
                          <h6>High</h6>
                        </div>
                      </div>
                      <p style={{ fontSize: '1vw', color: 'white', textAlign: 'center' }}>Current Queue</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <h1 style={{ color: 'orange' }}>{res.availableseats}</h1>
                      <p style={{ fontSize: '1vw', color: 'white', textAlign: 'center' }}>Availabe Seats</p>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>
      </div>


      <div>
        {availableseats.filter((res) => res.resname === name).map((res) => (
          <div className="booktable">



            <div className="boxes2">
              <section id="about">
                <div class="about-wrapper " style={{ display: 'flex' }}>
                  <div class="about-text" >
                    <p class="small" style={{ color: 'orange' }}>About Us</p>
                    <h2>{res.tagline}</h2>
                    <p>
                      {res.describe}
                    </p>
                    <br />
                    <p style={{ color: 'orange' }}>
                      Varieties: <span style={{ color: 'black' }}> {res.food.join(', ')} </span>
                    </p>
                    <br />
                    <p style={{ color: 'orange' }}>
                      Address : <span style={{ color: 'black' }}> {res.resaddress} </span>
                    </p>
                    <br />
                    <div style={{ display: 'flex', columnGap: '10px' }}>
                      <img src={require('../../images/phone-call.png')} width={20} alt="" /> <br />
                      <span>  {res.rescontact}</span>
                    </div><br />

                    <div style={{ display: 'flex', columnGap: '20px' }}>
                      <img src={require('../../images/global.png')} width={20} alt="" />
                      <span> <a href="" style={{color:'black'}}> {res.reswebsite}</a> </span>


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






            <div className='details_form' data-aos="fade-up">
              <div className="part1">
                <h1>Enter Your Details</h1>
                <p>Just Send & Save your time</p>
              </div>
              <div className="part2">

                <input type="text" name="Coustumername" onChange={handleForm} placeholder='Name' />
                <input type="email" name="Coustumeremail" onChange={handleForm} placeholder='Email' />
                <input type="number" name="Coustumercall" onChange={handleForm} placeholder='Phone no.' />
                <input type="number" name="CustomerCount" min='1' onChange={handleForm} placeholder='How many persons you are?' />

                {/* <div style={{ display: 'flex', columnGap: '20px', width: 'fit-content', borderRadius: '100px', alignItems: 'center' }}>
                  <p>How many persons you are?</p>
                  <button style={{ borderRadius: '100px', color: 'orange', backgroundColor: '#1c2c52' }} onClick={minus}>-</button>
                  <h1
                    id="persons"
                    name="CustomerCount"
                    contentEditable={true}
                    onBlur={handleForm}
                  >
                    {a}
                  </h1>
                  <button style={{ borderRadius: '100px', color: 'orange', backgroundColor: '#1c2c52' }} onClick={add}>+</button>
                </div> */}
                <br />
                <Button style={{ backgroundColor: 'orange', color: '#1c2c52' }} onClick={handlesubmit} endIcon={<SendIcon />}>
                  Send
                </Button>
                {/* <p>{JSON.stringify(form)}</p> */}
              </div>
            </div>
          </div>))}
      </div>


      <div>
      </div>
      <br /><br /><br />
      <FAQ/>
      <Footer />
    </>

  )
}

export default Tablebook;
