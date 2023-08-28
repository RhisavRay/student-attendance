import { useState } from "react"

import Login from "./Login";

function LogoutSwitch({logout})
{
  return (
    <div>
      <button className='logoutBtn' onClick={logout}>Logout</button>
    </div>
  )
}

export default LogoutSwitch