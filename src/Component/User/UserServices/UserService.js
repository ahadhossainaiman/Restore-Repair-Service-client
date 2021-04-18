import React from 'react';
import '../../../Component/Home/Home/Services/Services.css';

const UserServices = (props) => {
    const {serviceName,imageUrl,description,process} = props.service;
    console.log(props.service);
    return (
        <div className="col-md-6 p-3">
            <div style={{background: "white"}} className="single-service p-3">
                <img className="img" src={imageUrl} alt=""/>
                <h6>{serviceName}</h6>
                <p>{description}</p>
                <button className="btn btn-primary">{process}</button>
            </div>
        </div>
    );
};

export default UserServices;