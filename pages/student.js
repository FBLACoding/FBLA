import { useHistory, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


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
    
 
    <div class="center" style={{ width: '50%', margin: '0 auto', textAlign: 'center' }}>
     { isSuccess && success() }
      <h1 style={{ fontSize: '2rem', margin: '1rem 0' }}>First Post</h1>
      <form style={{ margin: '1rem 0' }}>
        <label htmlFor="username" style={{ display: 'block', margin: '0.5rem 0', fontSize: '1.2rem' }}>Username:</label>
        <br />
        <input type="text" id="username" style={{ width: '80%', padding: '0.5rem', fontSize: '1.2rem', border: '1px solid #ccc', borderRadius: '5px' }}/>
        <br />
        <label htmlFor="password" style={{ display: 'block', margin: '0.5rem 0', fontSize: '1.2rem' }}> Password:</label>
        <br />
        <input type="password" id="password" style={{ width: '80%', padding: '0.5rem', fontSize: '1.2rem', border: '1px solid #ccc', borderRadius: '5px' }}/>
        <br />
        <br />
        <button type="submit" onClick={login}>
          Login
        </button>
      </form>
    </div>
   
  );

}


function success() {
  //window.location.href = 'C:\Users\k1219\projects\FBLA\pages\studentInterface.js';
  return <a href="/studentInterface" className={pages.useHistory}> </a>;
}
  

