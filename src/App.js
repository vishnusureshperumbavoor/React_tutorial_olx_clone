import React,{useEffect,useContext} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import View from './Pages/ViewPost';
import './App.css';
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/AuthContext';
import Post from './store/postContext';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './Pages/ForgotPassword';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
      alert("user " + user.displayName)
    })
  })
  return (
    <div>
          <Post>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/login" component={Login}/>
              <Route path="/forgot-password" component={ForgotPassword}/>
              <PrivateRoute path="/create" component={Create}/>
              <PrivateRoute path="/view" component={View}/>
            </Switch>
          </Router>
          </Post>
    </div>
  );
}

export default App;
