import React, { useContext } from 'react'
import { useGoogleLogin } from 'react-google-login'
import { AuthContext } from '../context/AuthContext'
import { refreshTokenSetup } from './refreshToken'
import { FcGoogle } from "react-icons/fc";
import './Login.css';
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

function LoginHook() {

  const { setGoogleUserData } = useContext(AuthContext)

  const onSuccess = (res) => {
    console.log('[Login Success] currentUser: ', res.profileObj)
    setGoogleUserData(res)
    refreshTokenSetup(res)
  }

  const onFailure = (res) => {
    console.log('[Login failed] res: ', res)
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  })

  return (
    <>
      <button onClick={signIn} className='login-btn'>
        <FcGoogle className="google-icon" />
        <span className='button-text'>Google sign in</span>
      </button>
    </>
  )
}

export default LoginHook
