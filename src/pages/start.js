import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';




function Start() {

  const [form, setForm] = useState({ selectedFoods: [] });


  const handleForm = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (checked) {
        setForm((prevForm) => ({
          ...prevForm,
          selectedFoods: [...prevForm.selectedFoods, value],
        }));
      } else {
        setForm((prevForm) => ({
          ...prevForm,
          selectedFoods: prevForm.selectedFoods.filter((food) => food !== value),
        }));
      }
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
    }
  }

  const handlesubmit = async (e) => {

    setCurrentActive(prevActive => {
      const newActive = prevActive + 1;
      return newActive > 4 ? 4 : newActive;
    });

    if (currentActive == 4) {
      const response = await fetch('http://localhost:3001/', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json'
        }

      });
      const data = await response.text();
      console.log(data);
    }
  }


  const [currentActive, setCurrentActive] = useState(1);

  // const handleClickNext = () => {
  //   setCurrentActive(prevActive => {
  //     const newActive = prevActive + 1;
  //     return newActive > 4 ? 4 : newActive;
  //   });
  // };

  const handleClickPrev = () => {
    setCurrentActive(prevActive => {
      const newActive = prevActive - 1;
      return newActive < 1 ? 1 : newActive;
    });
  };



  return (
    <div className="container" >
      <p>{JSON.stringify(form)}</p>
      <div className="progress-container">
        <div className="progress" style={{ width: `${((currentActive - 1) / 3) * 100}%` }}></div>
        <div className={`circle ${currentActive === 1 ? 'active' : ''}`}>1</div>
        <div className={`circle ${currentActive === 2 ? 'active' : ''}`}>2</div>
        <div className={`circle ${currentActive === 3 ? 'active' : ''}`}>3</div>
        <div className={`circle ${currentActive === 4 ? 'active' : ''}`}>4</div>
      </div>
      {currentActive === 1 && (
        <form action="#" className="form" >
          <h1>Enter Your Personal Information </h1>
          <br />

          <div className="input-box">
            <div className="column">
              <div className="input-box">
                <h3>First Name</h3>
                <input type="text" name='first' placeholder="Enter your first name" onChange={handleForm} required />
              </div>
              <div className="input-box">
                <h3>Last Name</h3>
                <input type="text" name='last' placeholder="Enter your last name" onChange={handleForm} required />
              </div>
            </div>
          </div>
          <div className="input-box">
            <h3>Email Address</h3>
            <input type="text" name='email' style={{ width: '97%' }} onChange={handleForm} placeholder="Enter email address" required />
          </div>
          <div className="input-box">
            <h3>Password</h3>
            <input type="password" name='password' style={{ width: '97%' }} onChange={handleForm} placeholder="Enter password" required />
          </div>

          <div className="column">
            <div className="input-box">
              <h3>Phone Number</h3>
              <input type="number" name='phone' onChange={handleForm} placeholder="Enter phone number" required />
            </div>
            <div className="input-box">
              <h3>Birth Date</h3>
              <input type="date" name='birthdate' onChange={handleForm} placeholder="Enter birth date" required />
            </div>
          </div>
          <div className="gender-box">
            <h3>Gender</h3>
            <div className="gender-option">
              <div className="gender">
                <input type="radio" value={'male'} id="check-male" onChange={handleForm} name="gender" defaultChecked />
                <h3 htmlFor="check-male">male</h3>
              </div>
              <div className="gender">
                <input type="radio" value={'female'} id="check-female" onChange={handleForm} name="gender" />
                <h3 htmlFor="check-female">Female</h3>
              </div>
              <div className="gender">
                <input type="radio" value={'prefer not to say'} id="check-other" onChange={handleForm} name="gender" />
                <h3 htmlFor="check-other">prefer not to say</h3>
              </div>
            </div>
          </div>
          <div className="input-box address">
            <h3>Address</h3>
            <input type="address" name='address' onChange={handleForm} style={{ width: '97%' }} placeholder="Enter street address" required />
            <div className="column">
              <div className="select-box">
                <select name='country' onChange={handleForm} >
                  <option hidden >Country</option>
                  <option value={'America'}>America</option>
                  <option value={'Japan'}>Japan</option>
                  <option value={'India'}>India</option>
                  <option value={'Nepal'}>Nepal</option>
                </select>
              </div>
              <div className="select-box">
                <select name='state' onChange={handleForm}>
                  <option hidden >State</option>
                  <option value={'Gujarat'}>Gujarat</option>
                  <option value={'Maharashtra'}>Maharashtra</option>
                  <option value={'Punjab'}>Punjab</option>
                  <option value={'Madhya Pradesh'}>Madhya Pradesh</option>
                </select>
              </div>
              <input type="text" name='city' onChange={handleForm} placeholder="Enter your city" required />
            </div>
            <div className="column">
              <input type="text" name='region' onChange={handleForm} placeholder="Enter your region" required />
              <input type="number" name='pin' onChange={handleForm} placeholder="Enter postal code" required />
            </div>
            {/* <button onClick={handlesubmit}>Submit</button> */}
          </div>
        </form>
      )}

      {currentActive === 2 && (
        // <div className='first'>
        //               <h2 id='Personal'>Enter Your Restaurent Details</h2>


        //   <input type="text" placeholder="Your Restaurent name" />
        //   <input type="text" placeholder="Your Tagline(optional)" />
        //   <h5 >Restaurent Timing</h5>
        //   <div style={{display:'flex',alignItems:'center'}}>
        //     <h3>From</h3>
        //   <input type="text" placeholder="Opening At" />
        //   <h3>To</h3>

        //   <input type="text" placeholder="Closing At" />
        //   </div>
        //   <div style={{display:'flex',alignItems:'center'}}>

        //   <input type="text" placeholder="City" />
        //   <input type="text" placeholder="Distinct" />

        //   <input type="text"   placeholder="State" />
        //   </div>

        //   <textarea id="" name="" rows="20" cols="136">Your Restaurent Address</textarea>


        // </div>


        <form action="#" className="form">
          <h1>Details of Your Restaurant </h1>
          <br />

          <div className="input-box">
            <h3>Name of Restaurant</h3>
            <input type="text" name='resname' style={{ width: '97%' }} onChange={handleForm} placeholder="Enter the name of restaurant" required />
            <h3>Tagline</h3>
            <input type="text" name='tagline' style={{ width: '97%' }} onChange={handleForm} placeholder="Tagline of restaurant (Optional)" />
            <h3>Name of Owner</h3>
            <input type="text" name='ownername' style={{ width: '97%' }} onChange={handleForm} placeholder="Name of restaurant's Owner" required />
          </div>


          <div className="column">
            <div className="input-box">
              <h3>Email of Owner</h3>
              <input type="email" name='owneremail' onChange={handleForm} placeholder="Email of restaurant's Owner" required />
            </div>


            <div className="input-box">
              <h3>Contact no. of Owner</h3>
              <input type="text" name='ownercontact' onChange={handleForm} placeholder="Phone no. of restaurant's Owner" required />
            </div>
          </div>


          <div className="column">
            <div className="input-box">
              <h3>Opening Time</h3>
              <input type="text" name='opentime' onChange={handleForm} placeholder="Enter opening time of restaurant" required />
            </div>
            <div className="input-box">
              <h3>Closing Time</h3>
              <input type="text" name='closetime' onChange={handleForm} placeholder="Enter closing time of restaurant" required />
            </div>
          </div>


          <div className="input-box">
            <h3>Contact</h3>
            <input type="text" name='rescontact' onChange={handleForm} style={{ width: '97%' }} placeholder="Enter contact no. of restaurant" required />
          </div>

          <div className="input-box">
            <h3>Website</h3>
            <input type="text" name='reswebsite' onChange={handleForm} style={{ width: '97%' }} placeholder="Enter link of restaurant's website" required />
          </div>


          <div className="input-box address">
            <h3>Address</h3>
            <input type="address" name='resaddress' onChange={handleForm} style={{ width: '97%' }} placeholder="Enter the address of your restaurant " required />

            <div className="column">
              <div className="select-box">
                <select name='resstate' onChange={handleForm}>
                  <option hidden >State of restaurant</option>
                  <option value={'Gujarat'}>Gujarat</option>
                  <option value={'Maharashtra'}>Maharashtra</option>
                  <option value={'Punjab'}>Punjab</option>
                  <option value={'Madhya Pradesh'}>Madhya Pradesh</option>
                </select>
              </div>


              <input type="text" name='rescity' onChange={handleForm} placeholder="City of restaurant" required />
            </div>
            <div className="column">
              <input type="number" name='respin' onChange={handleForm} placeholder="Enter postal code" required />
            </div>
          </div>
        </form>
      )}

      {currentActive === 3 && (
        <form action="#" className="form">
          <h1>More Information</h1>
          <br />

          <div className="column" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <h3>Logo of restaurant</h3>
            <input type="file" placeholder="Enter postal code" required />
          </div>
          <div className="column" style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <h3>How many peoples you can manage?</h3>
            <input type="number" name='totalpersons' onChange={handleForm} placeholder="Count of people" min="0" required />
          </div>
          <br />

          <h3>Which types of food available in restaurant?</h3>
          <div className="column" style={{ alignItems: 'center', justifyContent: 'space-around' }} >
            <div>
              <input type="checkbox" onChange={handleForm} id="food1" name="food" value="Gujarati" />
              <h4 htmlFor="" style={{ color: 'black' }}>Gujarati</h4></div>
            <div>
              <input type="checkbox" onChange={handleForm} id="food2" name="food" value="Italian" />
              <h4 htmlFor="" style={{ color: 'black' }}>Italian</h4></div>
            <div>
              <input type="checkbox" onChange={handleForm} id="food3" name="food" value="South Indian" />
              <h4 htmlFor="" style={{ color: 'black' }}>South Indian</h4></div>
            <div>
              <input type="checkbox" onChange={handleForm} id="food4" name="food" value="Chinese" />
              <h4 htmlFor="" style={{ color: 'black' }}>Chinese</h4></div>
            <div>
              <input type="checkbox" onChange={handleForm} id="food5" name="food" value="Punjabi" />
              <h4 htmlFor="" style={{ color: 'black' }}>Punjabi</h4></div>


          </div>
          <br />

          <div className="input-box">
            <h3>Description of restaurant</h3>
            <input type="text" name='describe' onChange={handleForm} style={{ width: '97%' }} placeholder="Enter whole information about restaurant" required />
          </div>

          <div className="column" style={{ alignItems: 'center' }}>
            <h3>Enter zip file of restaurant photos</h3>
            <input type="file" placeholder="Enter postal code" required />
          </div>
        </form>
      )}
      {currentActive === 4 && (
        // <div className='first'>
        //                         <h2 id='Personal' style={{color:'green'}}>Pay ₹1000/- for register your Restaurent</h2><br /><br />
        //                         <h3>Via Bank</h3>

        //   <input type="text" placeholder="Account Number" />
        //   <input type="text" placeholder="IFSC Code" />
        //   <hr />
        //   <h2>or</h2>
        //   <br />
        //   <h3>Via UPI</h3>
        //   <br /><br />
        //   <div className='payment' style={{display:'flex',alignItems:'center'}}>
        //   <img src={require('../images/gpay.png')} alt="" />
        //   <img src={require('../images/Paytm.jpg')} alt="" />
        //   <img src={require('../images/BHIM.png')} alt="" />
        //   <img src={require('../images/phonepay.png')} alt="" />
        //   </div>

        // </div>

        <form action="#" className="form">
          <h1 id='Personal' style={{ color: 'green', textAlign: 'center' }}>Pay ₹1000/- for register your Restaurent</h1><br /><br />

          <div className="input-box">
            <h3>Via Bank</h3>
            <div className="column">
              <div className="input-box">
                <input type="text" placeholder="Account Number" required />
              </div>
              <div className="input-box">
                <input type="text" placeholder="IFSC Code" required />
              </div>
            </div>
          </div>
          <hr />
          <h1 style={{ textAlign: 'center' }}>or</h1>
          <br />
          <div className="input-box">
            <h3 style={{ textAlign: 'center' }}>Via UPI</h3>
            <br />
            <div className='payment' style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={require('../images/gpay.png')} alt="" />
              <img src={require('../images/Paytm.jpg')} alt="" />
              <img src={require('../images/BHIM.png')} alt="" />
              <img src={require('../images/phonepay.png')} alt="" />
            </div>
          </div>



        </form>
      )}
      <br /><br />
      <div>
        <button className="btn" id="prev" disabled={currentActive === 1} onClick={handleClickPrev}>Prev</button>
        <button className="btn" id="next" onClick={handlesubmit}>Next</button>
      </div>
      <br /><br />
    </div>
  );
}

export default Start;
