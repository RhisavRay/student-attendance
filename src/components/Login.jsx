import './Style.css';
import React, { useState } from 'react';

function Login({onLogin})
{
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [rollNoError, setRollNoError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error message
    setRollNoError('');

    const rollNoPattern = /^[a-zA-Z0-9]+$/;
    if (!rollNo.match(rollNoPattern))
      setRollNoError('Roll No must be alphanumeric');
    else
      onLogin();
  }

  return (
    <div className='app'>
      <h1>Student Attendance Portal</h1>
      <div className='container'>
        <img src='https://images.unsplash.com/photo-1567168544646-208fa5d408fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' />
          <form onSubmit={handleSubmit}>
            <h2>Please enter your details to login</h2>

            <label htmlFor='email'>Email ID:</label>
            <input type='email' id="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor='name'>Name:</label>
            <input type='text' id="name" required value={name} onChange={(e) => setName(e.target.value)}/>

            <label htmlFor='rollNo'>Roll No:</label>
            <input type='text' id='rollNo' required value={rollNo} onChange={(e) => setRollNo(e.target.value)}/>
            {rollNoError && <p className='error'>{rollNoError}</p>}

            <div className='formBtn'>
              <button id='loginBtn' type='submit'>Login</button>
              <button id='clearBtn' type='reset'>Clear Form</button>
            </div>
          </form>
      </div>
    </div>
  );
}

export default Login;