import React from 'react';


function Header() {
  
  return (
    <header>

      <img className="logo" src={require('../../images/meal2.png')} style={{ filter: 'invert(100%)' }} alt="" />
    <h1 style={{color:'white',marginLeft:'-350px',fontSize:'45px'}}>Enjoy Eat</h1>
      <nav>
        <ul className="nav__links">
          <li><a href="/">Home</a></li>
          <li><a href="Restaurants">All Restaurants</a></li>
          <li><a href="/#food">Food</a></li>
          <li><a href="/#footer">About us</a></li>
        </ul>
      </nav>

      <div>

        {/* <button className="button2" >Sign Up</button>
      <button >Log In</button> */}
      {/* <button>Sign Up</button>
      <button >Login</button> */}
        {/* <i className="fas fa-phone" style={{ color: 'orange' }}></i> */}
      </div>
    </header>
  )
}

export default Header;