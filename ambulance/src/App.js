import React, { useState } from "react";
import Frontpage from "./components/frontpage/Frontpage";
import Driverlogin from "./components/loginpages/Driverlogin";
import Userlogin from "./components/loginpages/Userlogin"
import Driversignup from "./components/signuppages/Driversignup";
import Usersignup from "./components/signuppages/Usersignup";
function App() {
  return (
    <div className='App'>
      {
        <Driverlogin />
      }
    </div>
  );
}

export default App;
