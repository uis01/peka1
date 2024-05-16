// import React from 'react';
// import LandingPage from "./componen/landingPage";

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./componen/landingPage";
import Login from "./componen/login";
import Register from "./componen/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}>
        </Route>
        <Route path="Login" element={<Login />}>
        </Route>
        <Route path="Register" element={<Register />}>
        </Route>
      </Routes>
    </Router>
  );
}

const root=
ReactDOM.createRoot (document.getElementById ('root'));
root.render(<app />)
export default App;