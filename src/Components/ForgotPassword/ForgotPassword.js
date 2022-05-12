import React,{useState,useContext} from 'react';
import { FirebaseContext } from '../../store/AuthContext';
import Logo from '../../olx-logo.png';
import './ForgotPassword.css';
import {useHistory} from 'react-router-dom'
function ForgotPassword() {
  const [email,setEmail] = useState('')
  const {firebase}= useContext(FirebaseContext)
  const history = useHistory()
  const handleLogin=(e)=>{
    e.preventDefault()
    firebase.auth().sendPasswordResetEmail(email).then(()=>{
      alert("Check your Gmail")
      history.push('/login')
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit = {handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e)=>
              setEmail(e.target.value)
            }
            required
          />
          <br />
          <br />
          <br />
          <br />
          
          <button>Reset Password</button>
        </form>

        <a onClick={()=>{
          history.push('/login')
        }} id="login">Already have an account? Login here</a>

        <a onClick={()=>{
          history.push('/signup')
        }} id="signup">Doesn't have an account? Signup here</a>
        
      </div>
    </div>
  );
}

export default ForgotPassword;
