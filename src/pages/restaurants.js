import React, { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import { Allres } from './quality';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function All() {
  const navigate = useNavigate();
  const [restaurant,setrestaurant] = useState([]);
  const [name,setname] = useState('');

  function gototablebook(name) {
    // Navigate to the Tablebook component with the name state
    navigate("/tablebook", { state: { name: name } });
  }


  useEffect(()=>{
    axios.get('http://localhost:3001/allrestaurants')
    .then(allres=>{
      setrestaurant(allres.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  },[])

  return (
    <>
      <Header />
      <div className='SearchRes'>
        <input type="text" className="input_search" style={{ marginRight: '10px' }} placeholder="Which Restaurent are you looking for? " />
        <button style={{ marginRight: '250px' }}><i className="fas fa-search"></i></button>
      </div>
      <div className="allboxes" style={{ marginTop: '50px', marginBottom: '50px' }}>
        {restaurant.map((item, index) => (
          <div className="allbox">
            {Allres.filter((res)=> res.h1===item.resname).map((res)=>
            <div className="image" >
              <img className="image__img" style={{ width: '440px'}} src={res.img} />
              <div className="image__overlay">
              </div>
            </div>
              )}
            <div className="colall">
             <span> <h1>{item.resname}</h1></span>
             <p>{item.tagline}</p>
             <hr />
              <p >Timing: <span >{item.opentime} to {item.closetime} </span>  </p>
              <p> Address : <span> {item.resaddress}  {item.rescity}, {item.respin} {item.resstate} </span></p>
              <p>Available types of food: <span> {item.food.join(', ')} </span></p>
            <p style={{color:'red'}}>Currently only <span style={{color:'red'}} > {item.availableseats}</span>  seats available</p>
              {/* Pass an arrow function to the onClick prop */}
              <button className="button1" onClick={() => gototablebook(item.resname)}>Book Table</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}
export default All;
