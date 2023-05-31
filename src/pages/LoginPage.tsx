import React, { useState } from 'react';

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
    <div>
      <p>Welcome to Login!</p>
      <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
      <button onClick={saveData}>Save Data</button>
      <button onClick={loadData}>Load Data</button>
    </div>
  );
}

export default LoginPage;