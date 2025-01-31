import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import '/src/App.css'
import GoogleButton from 'react-google-button'
import { auth, provider } from '../services/firebase'
import { signInWithPopup } from 'firebase/auth'

const Login = () => {
  const {theme}=useContext(ThemeContext)
  const handleLogin=()=>{
    signInWithPopup(auth,provider)
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}
  return (
    <div style={{backgroundColor:theme=="light" ?"#f5f5f5":"black",paddingTop:"5%",paddingBottom:"2%"}}>
      <div style={{ width:"34%",border:"none",borderRadius:"10px",padding:"20px",backgroundColor:theme=="light"? "white":"#f5f5f5",marginTop:"0%",marginLeft:"33%"}}>
        <div style={{marginLeft:"32%"}}>
        <img
              style={{  }}
              height={100}
              src="/src/assets/logo.png"
              alt=""
            />
        </div>
        <div className='mt-3'>
          <h4 style={{fontFamily:"sans-serif",color:theme=="light"? "black": "black"}}>Log in</h4>
          <p style={{fontFamily:"sans-serif",fontSize:"16px",color:"grey"}}>Enter your email and we'll send you a login code</p>
          <div >
          <p style={{fontFamily:"sans-serif",color:theme=="light"? "black": "black"}}>Email</p>
          <input className='login-input' style={{border:theme=="light"?"1px solid grey": "none"}} type="email" placeholder='Enter Your Email...' />
          <p className='mt-2' style={{fontFamily:"sans-serif",color:theme=="light"? "black": "black"}}>Password</p>
          <input className='login-input' style={{border:theme=="light"?"1px solid grey": "none"}} type="password" placeholder='Enter Your password...' /></div><br></br>
          <button className='' style={{backgroundColor:theme=="light" ?"#f5f5f5":"black",border:"none",color:theme=="light"? "grey":"white",padding:"10px 216px",boxShadow:"5px 5px 10px grey"}}>Login</button>
          <div className='mt-3' style={{}}>
          <GoogleButton style={{width:"99%",backgroundColor:theme=="light" ?"#f5f5f5":"black",color:theme=="light"? "grey":"white",boxShadow:"5px 5px 10px grey"}}  onClick={handleLogin}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
