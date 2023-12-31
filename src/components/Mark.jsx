import React from 'react'
import { useState } from 'react';

import Switch from './Switch';
import LogoutSwitch from './LogoutBtn';

function Mark({onSwitch, logout})
{
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000);
    }

    const handleClick = () => {
        onSwitch();
    }

    const handleLogout = () => {
        logout();
    }

    return(
        <div className="container mark">
            <h1>Choose carefully and mark your attendance</h1>
            <form onSubmit={handleSubmit}>
            <div className="form-section">
                    <label htmlFor="subject">Subject</label>
                    <select id="subject" required>
                        <option value="">*SELECT AN OPTION*</option>
                        <option value="SG">Security Governance</option>
                        <option value="AD">Application Development</option>
                        <option value="Rob">Robotics</option>
                    </select>
                </div>

                <div className="form-section">
                    <label htmlFor="time">Class timing</label>
                    <select id="time" required>
                        <option value="">*SELECT AN OPTION*</option>
                        <option value="P1">P1 - 8:00 to 8:50</option>
                        <option value="P2">P2 - 8:50 to 9:40</option>
                        <option value="P3">P3 - 9:45 to 10:35</option>
                        <option value="P4">P4 - 10:40 to 11:30</option>
                        <option value="P5">P5 - 11:35 to 12:25</option>
                        <option value="P6">P6 - 12:30 to 13:20</option>
                        <option value="P7">P7 - 13:25 to 14:15</option>
                        <option value="P8">P8 - 14:20 to 15:10</option>
                        <option value="P9">P9 - 15:10 to 16:00</option>
                        <option value="P10">P10 - 16:00 to 16:50</option>
                        <option value="L1">L1 - 16:50 to 17:30</option>
                        <option value="L2">L2 - 17:30 to 18:10</option>
                    </select>
                </div>

                <div className="form-section">
                    <label htmlFor="facultyName">Faculty Name</label>
                    <input type="text" id="facultyName" required/>
                </div>

                <button type="submit" id="loginBtn">Mark Attendance</button>
                <button type="reset" id="clearBtn">Clear form</button>
            </form>

            {isSubmitted &&
                <div className="confirmation-message">
                    Submission successful!
                </div>
            }

            <Switch onSwitch={handleClick} text="View Attendance"/>
            <LogoutSwitch logout={handleLogout}/>
        </div>
    )
}

export default Mark;