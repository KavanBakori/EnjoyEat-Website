import React, { useEffect, useState } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Allres } from '../quality';
import { useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './res.css'

function All() {

  useEffect(() => {
    AOS.init({
      // Your configuration options here
      // duration: 1000,
      offset: 120,
    });
  }, []);


  const navigate = useNavigate();

  const [restaurant, setRestaurant] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  function gototablebook(name) {
    // Navigate to the Tablebook component with the name state
    navigate('/tablebook', { state: { name: name } });
  }

  

  useEffect(() => {
    axios
      .get('http://localhost:3001/allrestaurants')
      .then((allres) => {
        setRestaurant(allres.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Filter the restaurant data based on the search query
  const filteredRestaurant = restaurant.filter((item) => {
    if (item.resname) {
      return item.resname.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return false; // Return false if item.resname is undefined
  });
  

  return (
    <>
      <Header />
      <div className="SearchRes">
        <input
          type="text"
          className="input_search"
          style={{ marginRight: '10px' }}
          placeholder="Which Restaurant are you looking for?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button style={{ marginRight: '250px' }}>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="allboxes" style={{ marginTop: '50px', marginBottom: '50px' }}>
        {filteredRestaurant.map((item, index) => (
          <div className="allbox" data-aos="fade-up" key={index}>
            {Allres.filter((res) => res.h1 === item.resname).map((res) => (
              <div className="image">
                <img className="image__img" style={{ width: '440px' }} src={res.img} alt={item.resname} />
                <div className="image__overlay"></div>
              </div>
            ))}
            <div className="colall">
              <span>
                <h1>{item.resname}</h1>
              </span>
              <p>{item.tagline}</p>
              <hr />
              <p>
                Timing: <span>{item.opentime} to {item.closetime}</span>
              </p>
              <p>
                Address : <span> {item.resaddress} </span>
              </p>
              <p>
                Varieties: <span> {item.food.join(', ')} </span>
              </p>
              <p style={{ color: 'red' }}>
                Currently only <span style={{ color: 'red' }}> {item.availableseats}</span> seats available
              </p>
              {/* Pass an arrow function to the onClick prop */}
              <button className="button1" onClick={() => gototablebook(item.resname)}>
                Book Table
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default All;
