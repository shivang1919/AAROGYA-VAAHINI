import React from "react";
import Frontpage from "./components/frontpage/Frontpage";
import Driverlogin from "./components/loginpages/Driverlogin";
import Userlogin from "./components/loginpages/Userlogin"
import Driversignup from "./components/signuppages/Driversignup";
import Usersignup from "./components/signuppages/Usersignup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App img'>
      <Router>
        <Routes>
          <Route path='/' element={<Frontpage />} />
          <Route path='/drivers/login/drivers/register' element={<Driversignup/>} />
          <Route path='/drivers/login' element={<Driverlogin/>} />
          <Route path='/users/login/users/register' element={<Usersignup/>} />
          <Route path='/users/login' element={<Userlogin/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
