import Login from "./components/Login";
import Home from "./components/Home";
import { useState } from "react";

function App()
{
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  return(
    <div>
    {isLoggedIn ? <Home/> : <Login onLogin={handleLogin}/>}
    </div>
  )
}

export default App;