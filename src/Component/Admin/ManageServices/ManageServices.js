import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
// import ServiceTable from '../ServiceTable/ServiceTable';

const ManageServices = () => {
    const [manageService,setManageService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setManageService(data)
        })
    },[])

    const  handleDelete =(id) =>{
        fetch(`http://localhost:5000/deleteService/${id}`,{
            method:"DELETE",
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        } )
    }
    return (
        <div style={{ height: "100vh" }} className="row container-fluid">
            <div className="col-12 col-md-2 p-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div style={{ background: "#E5E5E5" }} className="col-12 col-md-10 p-5">
                <h3>Admin</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col-md-3"><h3>Service Name</h3></th>
                            <th scope="col-md-3"><h3>Price</h3></th>
                            <th scope="col-md-3"><h3>Service Logo</h3></th>
                            <th scope="col-md-3"><h3>Status</h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            manageService.map((service) => <tr>
                            <th scope="row">{service.serviceName}</th>
                            <td>${service.price}</td>
                            <td><img src={service.imageUrl} alt="" style={{width:'15%'}} /></td>
                            
                            <td>
                                <button className="btn btn-primary" onClick={ ()=>handleDelete(service._id)}>DELETE</button>
                            </td>
                        </tr> )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageServices;



{/* <ServiceTable serviceInfo={service} key={service._id}></ServiceTable> */}