import React,{useState,useContext} from 'react';
import { FirebaseContext } from '../../store/AuthContext';
import { useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Signup.css';
import {Alert} from 'react-bootstrap';

export default function Signup() {
  const history = useHistory()
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const [ConfirmPassword,setConfirmPassword] = useState('')
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)
  const {firebase} = useContext(FirebaseContext)
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(password!=ConfirmPassword){
      return setError('Passwords do not match')
    }
    else{
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
        setError(null)
        setLoading(true)
        result.user.updateProfile({displayName:username}).then(()=>{
          firebase.firestore().collection('users').add({
            id:result.user.uid,
            username:username,
            email:email,
            phone:phone
          }).then(()=>{
            history.push("/login")
          })
        })
      setLoading(false)
    }).catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage)
    });
  }

  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} className="center"></img>
        {error && <Alert variant="danger" >{error}</Alert> }
        <form onSubmit = {handleSubmit}>
          <label htmlFor="fname" >Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            value={username}
            onChange={(e)=>
              setUsername(e.target.value)
            }
            required
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            value={phone}
            onChange={(e)=>
              setPhone(e.target.value)
            }
            required
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=>
              setPassword(e.target.value)
            }
            required
          />
          
          <br />
          <label htmlFor="lname">Confirm Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={ConfirmPassword}
            onClick={()=>{
              setError(null)
            }}
            onChange={(e)=>
              setConfirmPassword(e.target.value)
            }
            required
          />
          
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>{
          history.push('/login')
        }} id="login">Already have an account? Login here</a>
      </div>
    </div>
  );
}
