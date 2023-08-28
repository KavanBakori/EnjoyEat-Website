import React, { Fragment } from "react";
import { Link } from 'react-router-dom';


function Login() {
  return (
    <Fragment>
      {/* <div classNameNameName="container">
        <label>Email:</label>
        <input type="email" placeholder="Enter Email" name="email" id="email" required />
        <label>Password:</label>
        <input type="password" placeholder="Enter Password" name="password" id="password" required />
        <button type="button" classNameNameName="submitbtn" >Login</button>
        <a href="#" style={{ textDecoration: "none", color: "rgb(8, 8, 180)" }} >Forgot password?</a>
      </div> */}

<div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

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
				<form>
					<br />
					{/* <label for="chk" aria-hidden="true">Login</label> */}
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button className="buttonl">Login</button>
				</form>
				
				<h5 style={{color:'blue'}}>Forgot Password?</h5>
				<br />
				<h5>Have no account? <span><Link style={{fontSize:'15px',color:'darkblue'}} className="active" to="/start">New Registration</Link></span></h5>
			</div>
	</div>
    </Fragment>
  );
}

export default Login;
