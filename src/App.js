import './App.css';
import React, { useState } from 'react';

function App()
{

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [rollNoError, setRollNoError] = useState('');

  return (
    <div className='app'>
      <div className='container'>
        <img src='https://images.unsplash.com/photo-1567168544646-208fa5d408fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80' />
          <form>
            <h2>Please enter your details to login</h2>
            <label htmlFor='email'>Email ID:</label>
            <input type='email' id="email" required></input>
            <label htmlFor='name'>Name:</label>
            <input type='text' id="name" required></input>
            <label htmlFor='rollNo'>Roll No:</label>
            <input type='text' id='rollNo' required></input>
            <div className='formBtn'>
              <button id='loginBtn' type='submit'>Login</button>
              <button id='clearBtn' type='reset'>Clear Form</button>
            </div>
          </form>
      </div>
    </div>
  );
}

export default App;