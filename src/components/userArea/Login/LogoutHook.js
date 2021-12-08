import React from 'react'
import { useGoogleLogout } from 'react-google-login'
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

function LogoutHook() {
  const onLogoutSuccess = (res) => {
    alert('Logged out successfully')
  }

  const onFailure = () => {
    console.log('Handle failure cases')
  }

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  })

  return (
    <>
      <button onClick={signOut} className='logout-btn'>
        <img src='icons/google.svg'></img>
        <span className='logout-btn-text'>Sign out</span>
      </button>
    </>
  )
}

export default LogoutHook
