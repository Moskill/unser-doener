import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './refreshToken';
import profliePlaceholer from '../../../img/profile-placeholder.png';
import './Login.css';
import LogMenu from '../Navbar/LogMenu';
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function Login() {

  const [response, setResponse] = useState();

  let profileImage = profliePlaceholer;

  const onSuccess = (res) => {
    console.log('[Login Success] currentUser: ', res.profileObj);
    refreshTokenSetup(res);
    res.profileObj && setResponse(res.profileObj);
  };

  const onFailure = (res) => {
    console.log('[Login failed] res: ', res);
  };

    console.log(response)

  return (
    <>
    <div >
      <img src={response ? response.imageUrl : profileImage} style={{padding: '5px 10px', backgroundSize: '50px'}} className="google-login-btn"></img>
    </div>
      {/* <GoogleLogin 
        clientId={clientId}
        render={renderProps => (
          <button 
          onClick={renderProps.onClick}
            disabled={renderProps.disabled} 
            className="google-login-btn" 
            style={{padding: '5px 10px', backgroundImage: `url(${response && response.imageUrl})`, backgroundSize: '50px'}}>
          </button>
        )}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      /> */}
    </>
  )
}

export default Login;
