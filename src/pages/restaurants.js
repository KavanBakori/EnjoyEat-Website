import React from 'react';
import Header from './header';
import Footer from './footer';
import { Allres } from './quality';
import { useNavigate } from 'react-router-dom';

function All() {
  const navigate = useNavigate();

  function gototablebook(name) {
    // Navigate to the Tablebook component with the name state
    navigate("/tablebook", { state: { name: name } });
  }

  return (
    <>
      <Header />
      <div className='SearchRes'>
        <input type="text" className="input_search" style={{ marginRight: '10px' }} placeholder="Which Restaurent are you looking for? " />
        <button style={{ marginRight: '250px' }}><i className="fas fa-search"></i></button>
      </div>
      <div className="allboxes" style={{ marginTop: '50px', marginBottom: '50px' }}>
        {Allres.map((item, index) => (
          <div className="allbox">
            <div className="image" style={{ width: '440px' }}>
              <img className="image__img" src={item.img} />
              <div className="image__overlay">
                {/* <button type="button" class="btn btn-outline-light ">Show More</button> */}
              </div>
            </div>
            <div className="col">
              <h1>{item.h1}</h1>
              <p>{item.p}</p>
              {/* Pass an arrow function to the onClick prop */}
              <button className="button1" onClick={() => gototablebook(item.h1)} style={{ fontSize: '16px', width: '50%' }}>Book Table</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}
export default All;
