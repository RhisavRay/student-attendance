import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Mark from "./components/Mark"

import { useState } from "react";

function App()
{
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  return(
    <div>
    {isLoggedIn ? <Mark/> : <Login onLogin={handleLogin}/>}
    </div>
  )
}

export default App;