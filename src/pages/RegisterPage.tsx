import React, { useState } from 'react';
import stservice from '../components/stservice';
import { useNavigate } from 'react-router-dom';
import '../css/registration.css';

function RegisterPage() {
  const [data, callsign] = useState('');
  const navigate = useNavigate();

  const service = new stservice();

  const register = (): void => {
    //console.log('Registered Callsign:', data);
    service.test(data);
    navigate('/BridgePage');
  };

  return (
    <div className='registration'>
      <p>Enter your callsign, Commander</p>
      <input type="text" value={data} onChange={(e) => callsign(e.target.value)} />
      <button onClick={register}>Register</button>
    </div>
  );
}
export default RegisterPage;