<<<<<<< HEAD
import React from 'react';

function App(props) {
  return (
    <h1>Hi</h1>
  );
}

export default App;
=======
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './containers/HomePage';
import SignUpLogInPage from './components/SignUpLogInPage';
import SayHi from './components/SayHi';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpLogInPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        {/* <Route path="/SayHi" element={<SayHi />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
>>>>>>> 19f7e4df52f4e16f41f0eebf4ba5f28d5f3fe820
