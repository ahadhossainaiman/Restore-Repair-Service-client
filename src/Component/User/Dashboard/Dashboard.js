import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import UserServices from '../UserServices/UserService';

const Dashboard = () => {
    const [userService,setUserService] = useState([]);
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/userService?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setUserService(data);
        })
    })
    console.log(userService);
    return (
        <div style={{height: "100vh"}} className="row container-fluid">
            <div className="col-md-2 p-3">
                <Sidebar></Sidebar>
            </div>
            <div style={{background: "#E5E5E5"}} className="col-md-10">
                <h3 style={{color:'#8810f8'}}>Order</h3>
                <div className="row p-3">
                        {
                            userService.map(service => <UserServices service={service} key={service._id}></UserServices>)
                        }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;