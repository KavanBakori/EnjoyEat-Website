import React from 'react';
import Login from './pages/login';
import Index from './pages/index';
import Start from './pages/start';
import All from './pages/restaurants';
import Tablebook from './pages/tablebook';
import FooterStyles from './pages/FooterStyles';
import Admin from './pages/admin';
import History from './pages/history';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Event from './pages/EventComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
            <Route path='/Restaurants' element={<All />} />
            <Route path='/Tablebook' element={<Tablebook />} />
            <Route path='/FooterStyles' element={<FooterStyles />} />
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