import React from 'react'

const Switch = ({onSwitch, text}) => {
  return (
    <div>
        <button class="switch" onClick={onSwitch}>
            {text}
        </button>
    </div>
  )
}

export default Switch;