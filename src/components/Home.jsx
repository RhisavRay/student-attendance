import { useState } from "react";

import Mark from "./Mark";
import Dashboard from "./Dashboard";

function Home()
{
    const [switchBtn, setSwitchBtn] = useState(false);

    const goToDashboard = () => {
        setSwitchBtn(false);
    }

    const goToAttendance = () => {
        setSwitchBtn(true);
    }

    return(
        <div className="home">
            {switchBtn ? <Mark onSwitch={goToDashboard}/> : <Dashboard onSwitch={goToAttendance}/>}
        </div>
    )
}

export default Home;