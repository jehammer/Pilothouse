import React from 'react';
import { Link } from 'react-router-dom';


function BridgePage() {
  return (
    <div>
    <p>Welcome!</p>
    
    <Link to="/RegisterPage">Register Page</Link> <br />
    <Link to="/LoginPage">Login Page</Link>
    </div>
  );
}

export default BridgePage;