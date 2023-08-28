import { useState } from "react";

import Mark from "./Mark";
import Dashboard from "./ViewAtt";
import Login from "./Login";

function Home()
{
    const [switchBtn, setSwitchBtn] = useState(false);
    const [logout, setLogout] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const goToDashboard = () => {
        setSwitchBtn(false);
    }

    const goToAttendance = () => {
        setSwitchBtn(true);
    }

    const handleLogout = () => {
        setLogout(true);
    }

    const handleLogin = () => {
        setIsLoggedIn(false);
    }

    return(
        <div className="home">
            {logout ? <Login onLogin={handleLogin}/> : (switchBtn ? <Mark onSwitch={goToDashboard} logout={handleLogout}/> : <Dashboard onSwitch={goToAttendance} logout={handleLogout}/>)}
        </div>
    )
}

export default Home;