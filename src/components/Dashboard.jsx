import React from 'react'

import Switch from './Switch'

function Dashboard ({onSwitch})
{
  const handleClick = () => {
    onSwitch();
  }

  return (
    <div className='container dash'>
      <table className='dashTable'>
        <thead></thead>
      </table>

      <Switch onSwitch={handleClick} text="Mark Attendance"/>
    </div>
  )
}

export default Dashboard