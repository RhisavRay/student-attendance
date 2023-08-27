import { useState } from "react";

function Home()
{
    return(
        <div className="container home">
            <h1>Choose carefully and mark your attendance</h1>
            <form>
            <div className="form-section">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" required>
                        <option>*SELECT AN OPTION*</option>
                        <option>Operating System</option>
                        <option>Database Managemen System</option>
                        <option>Forensic Investigation and Research</option>
                        <option>Robotics</option>
                        <option>Security Governance</option>
                    </select>
                </div>

                <div className="form-section">
                    <label>Class timing</label>
                    <select required>
                        <option>*SELECT AN OPTION*</option>
                        <option>P1 - 8:00 to 8:50</option>
                        <option>P2 - 8:50 to 9:40</option>
                        <option>P3 - 9:45 to 10:35</option>
                        <option>P4 - 10:40 to 11:30</option>
                        <option>P5 - 11:35 to 12:25</option>
                        <option>P6 - 12:30 to 13:20</option>
                        <option>P7 - 13:25 to 14:15</option>
                        <option>P8 - 14:20 to 15:10</option>
                        <option>P9 - 15:10 to 16:00</option>
                        <option>P10 - 16:00 to 16:50</option>
                        <option>L1 - 16:50 to 17:30</option>
                        <option>L2 - 17:30 to 18:10</option>
                    </select>
                </div>

                <div className="form-section">
                    <label>Faculty Name</label>
                    <input type="text" required/>
                </div>

                <button type="submit" id="loginBtn">Present!</button>
                <button type="reset" id="clearBtn">Clear form</button>
            </form>
        </div>
    )
}

export default Home;