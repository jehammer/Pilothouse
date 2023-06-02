import React, { useState } from 'react';
import '../css/login.css';

function LoginPage() {
  const [data, setData] = useState('');

  const saveData = (): void => {
    localStorage.setItem('loginData', data);
    console.log('Data saved:', data);
  };

  const loadData = (): void => {
    const savedData = localStorage.getItem('loginData');
    if (savedData) {
      setData(savedData);
      console.log('Data loaded:', savedData);
    }
  };

  return (
    <div className='loginPage'>
      <h3>Greetings Commander</h3>
      <h4>Enter your ID to access the system</h4>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={saveData}>Save Data</button>
      <button onClick={loadData}>Load Data</button>
    </div>
  );
}

export default LoginPage;