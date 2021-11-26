import React from 'react';
import { GoogleLogout } from 'react-google-login';
const clientId = '959246751290-rk52fqkh4ra9i0ms9jea60f1s3sjropf.apps.googleusercontent.com';

export default function Logout() {

  const onSuccess = () => {
    alert('Logout made successfully');
  };
  
  return (
    <>
      <GoogleLogout 
        clientId={clientId}
        buttonText='Logout'
        onLogoutSuccess={onSuccess}
      />    
    </>
  );
}

export default Logout;