import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { Link, useHistory, useLocation } from 'react-router-dom';
import google from '../../images/google.png';
import { UserContext } from '../../App';
import logo from '../../setting.svg'
import firebaseConfig from './firebaseConfig';
import './Login.css';




const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleLogin = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => {
        const {displayName,email} = result.user;
        const newUser = {...loggedInUser};
        newUser.name = displayName;
        newUser.email = email;
        newUser.userExist = true;
        newUser.error = '';
        setLoggedInUser(newUser);
        // history.replace(from);
        fetch("https://shielded-plateau-39007.herokuapp.com/admin?email="+newUser.email)
            .then(res => res.json())
            .then(data => {
                if(data){
                    history.push("/allorder");
                }
                else{
                    history.push("/order")
                }
            })
            sessionStorage.setItem('token',newUser.email);
        
      }).catch(function(error) {
        var errorMessage = error.message;
        const newUser = {...loggedInUser};
        newUser.error = errorMessage;
        newUser.name = '';
        newUser.email = '';
        newUser.userExist = false;
        setLoggedInUser(newUser);
      });
}

    return (
        <div className="bg-color">
        <Link className="navbar-brand mb-5" to="/home"><img style={{width: "150px",display:'block',marginLeft:'auto'}} src={logo} alt=""/></Link>
        <div className="main-div">
            <div className="mini-div">
                <h3 style={{color:'#8810f8'}}>Login With</h3>
                <div onClick={handleLogin} className="button-div" style={{color:'#009fe8'}}>
                    <img src={google} alt="google"/>
                    continue with google
                </div>
            </div>
        </div>
    </div>
    )};

export default Login;