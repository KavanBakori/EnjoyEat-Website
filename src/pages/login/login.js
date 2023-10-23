// import React, { Fragment, useState } from "react";
// import { Link, useNavigate } from 'react-router-dom';


// function Login() {
// 	const navigate = useNavigate();
// const [name,setname] = useState('');


// function resname(e){
// 	setname(e.target.value);
// }
// 	function gotoadmin(name){
// 		navigate("/admin", { state: { name: name} });
// 	}

//   return (
//     <Fragment>
//       {/* <div classNameNameName="container">
//         <label>Email:</label>
//         <input type="email" placeholder="Enter Email" name="email" id="email" required />
//         <label>Password:</label>
//         <input type="password" placeholder="Enter Password" name="password" id="password" required />
//         <button type="button" classNameNameName="submitbtn" >Login</button>
//         <a href="#" style={{ textDecoration: "none", color: "rgb(8, 8, 180)" }} >Forgot password?</a>
//       </div> */}

// <div className="main">  	
// 		<input type="checkbox" id="chk" aria-hidden="true"/>

// 			<div className="signup">
// 				<form>
// 					<h1 for="chk" aria-hidden="true" style={{textAlign:'center',color:'white',marginTop:'70px',marginBottom:'50px',fontSize:'3vw'}}>Log In</h1>
// 					{/* <input type="text" name="txt" placeholder="User name" required=""/>
// 					<input type="email" name="email" placeholder="Email" required=""/>
// 					<input type="password" name="pswd" placeholder="Password" required=""/>
// 					<button className="buttonl">Sign up</button> */}
// 				</form>
// 			</div>

// 			<div className="login">
// 				<form method="post" action="/login">
// 					<br />
// 					{/* <label for="chk" aria-hidden="true">Login</label> */}
// 					<input type="email" name="email" placeholder="Email" required=""/>
// 					<input type="password" name="pswd" placeholder="Password" required=""/>
// 					<input type="text" id="resname" onChange={resname} placeholder="Name of Restaurant (same as you registered)" required=""/>
// 					<input type="button" value="Submit" style={{cursor:'pointer'}} />
// 					{/* <button className="buttonl" onClick={() => gotoadmin(name)} >Login</button> */}
// 				</form>
				
// 				{/* <h5 style={{color:'blue'}}>Forgot Password?</h5> */}
// 				<br />
// 				<h5>Have no account? <span><Link style={{fontSize:'15px',color:'darkblue'}} className="active" to="/start">New Registration</Link></span></h5>
// 			</div>
// 	</div>
//     </Fragment>
//   );
// }

// export default Login;





import React, { Fragment, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import './login.css'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const resname = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from submitting via a full page reload
    try {
      // Make a POST request to your server with the login data
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
        name,
      });

      if (response.data.success) {
        // Redirect to the admin page or handle success on the client-side
        navigate("/admin", { state: { name: name } });
      } else {
        alert('Login failed: Please Enter Correct details ');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <Fragment>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

		<div className="signup">
				<form>
 					<h1 for="chk" aria-hidden="true" style={{textAlign:'center',color:'white',marginTop:'70px',marginBottom:'50px',fontSize:'3vw'}}>Log In</h1>
					{/* <input type="text" name="txt" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
 					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button className="buttonl">Sign up</button> */}
 				</form>
			</div>

        <div className="login">
          {/* Remove the second form here */}
		  <form onSubmit={handleSubmit}>
			<br />
            <input type="email" name="email" placeholder="Email" required="" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="password" placeholder="Password" required="" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="text" id="resname" placeholder="Name of Restaurant (same as you registered)" required="" value={name} onChange={resname} />
            <input type="submit" value="Submit" style={{ cursor: 'pointer',backgroundColor:'orange',height:'40px' }} />
          </form>
          <h5>Have no account? <span><Link style={{ fontSize: '15px', color: 'darkblue' }} className="active" to="/start">New Registration</Link></span></h5>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
