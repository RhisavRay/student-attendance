import { useState } from "react";

import Mark from "./Mark";
import Dashboard from "./Dashboard";

function Home()
{
    const [switchBtn, setSwitchBtn] = useState(false);

    const handleSwitch = () => {
        setSwitchBtn(true);
    }

    return(
        <div className="home">
            {switchBtn ? <Dashboard/> : <Mark onSwitch={handleSwitch}/>}
        </div>
    )
}

export default Home;