import React, { useState, useEffect } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import axios from 'axios';
import './admin.css'

const Admin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const resname = location.state.name;

  const [allrequest, setrequest] = useState([]);
  const [a, seta] = useState(0);
  const [availableseats, setavailableseats] = useState([]);


  const gotoaccept= async (People)=>{
    try {
      const response = await fetch('http://localhost:3001/history', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(People),
      });

      if (response.ok) {
        // Handle success, maybe update your UI
        console.log('Entry stored in history.');
      } else {
        // Handle error
        console.error('Failed to store entry in history.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }


  function gotohistory() {
    // Navigate to the Tablebook component with the name state
    navigate('/history', { state: { name: resname } });
  }

  useEffect(() => {
    axios.get(`http://localhost:3001/admin/${resname}`)
      .then(request => {
        setrequest(request.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  useEffect(() => {
    axios.get(`http://localhost:3001/availableseats/${resname}`)
      .then(availableseats => {
        setavailableseats(availableseats.data);
        console.log(availableseats.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);



  const updateseats = async (seats) => {
    try {
      const response = await fetch(`http://localhost:3001/updateseats/${resname}`, {
        method: 'PUT',
        body: JSON.stringify({ availableseats: seats }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error updating available seats:', error);
    }
  }



  function minus() {
    seta(a - 1);
  }
  function add() {
    seta(a + 1);
  }

  return (
    <>
      <Header />
      <div className="top" id='tablebook_back'>
        <section className="showcase-area" id="showcase">
          <div className="showcase-container">
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', rowGap: '200px', alignItems: 'center' }}>
                <div>
                  <h1 style={{ color: "white", fontSize: "4vw" }}>{resname}</h1>
                  {/* <p style={{ color: "grey", fontSize: "1vw" }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus, molestias.
                  </p> */}
                  <br />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="admin-container">
        <div className="scrollable-container">
          <h1 style={{ textAlign: 'center' }}>All Requests</h1>
          <br />

          <div className="content" style={{display:'flex',flexDirection:'column',rowGap:'20px'}}>
            {allrequest
              .filter(People => People.Restaurantname === resname)
              .map(People => (
                <div className="requestbox" key={People.id}>
                  <h1 style={{ float: "right", fontSize: "50px", color: "orange" }}>{People.persons}</h1>
                  <span>Name</span>
                  <h3>{People.name}</h3>
                  <br />
                  <span>Email</span>
                  <h3>{People.email}</h3>
                  <br />
                  <span>Phone No.</span>
                  <h3>{People.call}</h3>
                  <div style={{ float: 'right', display: 'flex', columnGap: '20px', marginTop: '-20px' }}>
                    <button style={{ backgroundColor: 'green' }} onClick={()=> gotoaccept(People)} >Accept</button>
                    {/* <button>Send email</button> */}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        {availableseats
          .filter(seat => seat.resname === resname)
          .map(seat =>
            <div className="sidenav">
              <br /><br />
              <h2>Available chairs</h2>
              <p>Set Available seats if you want to do manualy</p>
              <br />



              <h1 >{seat.availableseats + a}</h1>
              <div style={{ display: 'flex', columnGap: '20px', width: 'fit-content', borderRadius: '100px', alignItems: 'center', margin: 'auto' }}>
                <button style={{ borderRadius: '100px', color: 'orange', backgroundColor: '#1c2c52' }} onClick={minus}>-</button>
                <button style={{ borderRadius: '100px', color: 'orange', backgroundColor: '#1c2c52' }} onClick={add}>+</button>
              </div>
              <br />
              <button onClick={() => updateseats(seat.availableseats + a)}>Update</button>
              <br /><br /><hr /><br />
              <button style={{backgroundColor:'black'}} onClick={()=>gotohistory(resname)}>History</button>
            </div>
          )}
      </div>

      <Footer />
    </>
  );
};

export default Admin;
