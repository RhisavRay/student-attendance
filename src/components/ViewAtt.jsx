import React from 'react'

import Switch from './Switch'
import LogoutSwitch from './LogoutBtn';

function Dashboard ({onSwitch, logout})
{
  const handleClick = () => {
    onSwitch();
  }

  const handleLogout = () => {
    logout();
}

  return (
    <div className='container dash'>
      <table className='dashTable'>
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Slot</th>
            <th>Hours Conducted</th>
            <th>Hours Absent</th>
            <th>Atten %</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>18CSE877T</td>
            <td>Security Governance</td>
            <td>B</td>
            <td>16</td>
            <td>4</td>
            <td className='green'>75.00</td>
          </tr>
          <tr>
            <td>18IPE417T</td>
            <td>Application Development</td>
            <td>D</td>
            <td>17</td>
            <td>4</td>
            <td className='green'>76.47</td>
          </tr>
          <tr>
            <td>18MEO101T</td>
            <td>Robotics</td>
            <td>F</td>
            <td>18</td>
            <td>8</td>
            <td className='red'>55.56</td>
          </tr>
        </tbody>
      </table>

      <Switch onSwitch={handleClick} text="Mark Attendance"/>
      <LogoutSwitch logout={handleLogout}/>
    </div>
  )
}

export default Dashboard;