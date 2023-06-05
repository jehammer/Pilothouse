import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/login.css';

function LoginPage() {
  const [data, setData] = useState('');
  const navigate = useNavigate();

  const saveData = (): void => {
    localStorage.setItem('loginData', data);
    console.log('Data saved:', data);
    navigate('/BridgePage');
  };
  

  // SAVING THIS FOR QUICK REUSE LATER
  /*const loadData = (): void => {
    const savedData = localStorage.getItem('loginData');
    if (savedData) {
      setData(savedData);
      console.log('Data loaded:', savedData);
    }
  };*/

  return (
    <div className='loginPage'>
      <h3>Greetings Commander</h3>
      <h4>Enter your ID to access the system</h4>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={saveData}>Launch</button>
      <br />
      <Link to='/RegisterPage'><button>Register</button></Link>
    </div>
  );
}

export default LoginPage;