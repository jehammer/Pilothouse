import React, { useState } from 'react';
import stservice from '../components/stservice';

function RegisterPage() {
  const [data, callsign] = useState('');

  const service = new stservice();

  const register = (): void => {
    //console.log('Registered Callsign:', data);
    service.test(data);
  };

  return (
    <div>
      <p>Welcome to Registration!</p>
      <input type="text" value={data} onChange={(e) => callsign(e.target.value)} />
      <button onClick={register}>Register</button>
    </div>
  );
}
export default RegisterPage;