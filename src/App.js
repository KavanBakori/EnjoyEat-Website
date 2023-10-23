import React from 'react';
import Login from './pages/login/login';
import Index from './pages/index';
import Start from './pages/register/start';
import All from './pages/allrestaurants/restaurants';
import Tablebook from './pages/tablebook/tablebook';
// import FooterStyles from './pages/FooterStyles';
import Admin from './pages/admin/admin';
import History from './pages/history/history';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
            <Route path='/Restaurants' element={<All />} />
            <Route path='/Tablebook' element={<Tablebook />} />
            {/* <Route path='/FooterStyles' element={<FooterStyles />} /> */}
            <Route path='/admin' element={<Admin />} />
            <Route path='/history' element={<History />} />
          <Route path='/Start' element={<Start />} />
          <Route path='/Login' element={<Login />}>
          </Route>
        </Routes>
      </Router>
    </div>

    // <Event />

   
  );
}


export default App;