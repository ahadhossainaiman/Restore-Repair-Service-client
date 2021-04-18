import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar/AdminSidebar';


const AddAdmin = () => {
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch("https://shielded-plateau-39007.herokuapp.com/admin",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        history.push("/allorder");
    }
    return (
        <div style={{height: "100vh"}} className="row container-fluid">
            <div className="col-md-2 p-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div style={{ background: "#E5E5E5" }} className="col-md-10 p-5 container-fluid">
                <h3 style={{color:'#8810f8'}}>Admin</h3>
                <form onSubmit={handleSubmit(onSubmit)} style={{width:"400px"}}>
                    <input className="form-control mb-5 py-3" type="email" placeholder="email" name="email" {...register("email", { required: true })}/>
                    <input className="form-control btn btn-dark" type="submit" value="send"/>
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;