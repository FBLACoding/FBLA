import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import styles from '../styles/Home.module.css'

export default function FirstPost() {

  
  const [isSuccess, setSuccess] = useState(false);

  function login(event) {
    event.preventDefault();
    // Get the username and password from the form
    const adminUser = "k1219851";
    const adminPass = "12345";
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

   

    // TODO: Send a request to the server to verify the username and password
    if (username === adminUser && password === adminPass) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }

  return (
    
 
    <div class="center" style={{borderWidth: '1px', borderStyle: 'solid' ,position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', borderRadius: '10px', boxShadow: '10px 10px 15px rgba(0,0,0,0.05)'}}>
     { isSuccess && success() }
      <h1 style={{ textAlign: 'center', fontSize: '2rem', margin: '1rem 0' }}>Login</h1>
      <form style={{ margin: '1rem 0' }}>
        <label htmlFor="username" style={{display: 'block', margin: '0.5rem 0', fontSize: '1.2rem' }}>Username:</label>
        <br />
        <input type="text" id="username" style={{ display: 'block', width: '50%', margin: ' 0 auto', width: '80%', padding: '0.5rem', fontSize: '1.2rem', border: '1px solid #ccc', borderRadius: '5px' }}/>
        <br />
        <label htmlFor="password" style={{ display: 'block', margin: '0.5rem 0', padding: '10px', fontSize: '1.2rem' }}> Password:</label>
        <br />
        <input type="password" id="password" style={{ display: 'block', width: '50%', margin: '0 auto', width: '80%', padding: '0.5rem', fontSize: '1.2rem', border: '1px solid #ccc', borderRadius: '5px' }}/>
        <br />
        <br />
        <button type="submit" onClick={login} style={{ display: 'block', margin: '0 auto', width: '80%', padding: '0.5rem', fontSize: '1.2rem', border: '1px solid #ccc', borderRadius: '5px' }}>
          Login
        </button>
      </form>
    </div>
   
  );

}


function success() {
  window.location.href = 'studentInterface/';
  return null;
}
  

