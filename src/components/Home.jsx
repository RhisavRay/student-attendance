import { useState } from "react";

import Mark from "./Mark";
import Dashboard from "./Dashboard";

function Home()
{
    const [switchBtn, setSwitchBtn] = useState(false);

    const goToDashboard = () => {
        setSwitchBtn(true);
    }

    const goToAttendance = () => {
        setSwitchBtn(false);
    }

    return(
        <div className="home">
            {switchBtn ? <Dashboard onSwitch={goToAttendance}/> : <Mark onSwitch={goToDashboard}/>}
        </div>
    )
}

export default Home;