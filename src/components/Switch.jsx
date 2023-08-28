import React from 'react'

const Switch = ({onClick, text}) => {
  return (
    <div>
        <button class="switch" onClick={onClick}>
            {text}
        </button>
    </div>
  )
}

export default Switch;