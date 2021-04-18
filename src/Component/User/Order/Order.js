import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { idContext, UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../Sidebar/Sidebar';



const Order = () => {
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [serviceId,setServiceId] = useContext(idContext);
    const [serviceInfo,setServiceInfo] = useState({});
    useEffect(() => {
        fetch("https://shielded-plateau-39007.herokuapp.com/userService/"+serviceId)
        .then(res => res.json())
        .then(data => {
            setServiceInfo(data);
        })
    },[serviceId]);
    const onSubmit = (data) => {
        const info = {...data,serviceName:serviceInfo.serviceName,imageUrl:serviceInfo.imageUrl,description:serviceInfo.description,price:serviceInfo.price,process: "pending"};
        fetch("https://shielded-plateau-39007.herokuapp.com/selectedService",{
            method: "POST",
            headers:{
                'content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        history.push("/servicelist");
        console.log(serviceInfo);
        
    }
    return (
        <div style={{height: "100vh"}} className="row container-fluid">
            <div className="col-md-2 p-3">
                <Sidebar></Sidebar>
            </div>
            <div style={{background: "#E5E5E5"}} className="col-md-10 p-5">
                <form onSubmit={handleSubmit(onSubmit)} style={{width:"400px"}}>
                    <input className="form-control mb-5 py-3" type="text" defaultValue={loggedInUser.name} name="name" {...register("name", { required: true })}/>
                    <input className="form-control mb-5 py-3" type="email" defaultValue={loggedInUser.email} name="email" {...register("email", { required: true })}/>
                    <input className="form-control mb-5 py-3" type="text" defaultValue={serviceInfo.serviceName} name="serviceName" {...register("serviceName", { required: true })}/>
                    <h5 className='my-2'>Pay With</h5>
                         <ProcessPayment></ProcessPayment>
                         <h6>Your Service Charge Will be:$<span style={{color:'red',pading:'10px'}}>{serviceInfo.price}</span></h6>
                    <input className="form-control btn btn-dark mt-2" type="submit" value="send"/>
                </form>
            </div>
        </div>
    );
};

export default Order;