import axios from "axios";
import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AddService = () => {
    const history = useHistory();
    const { register, handleSubmit} = useForm();
  
    const [imageUrl,setImageUrl] = useState(null)

    const onSubmit = (data) => {

        const eventData = {
            serviceName:data.serviceName,
            description:data.description,
            price:data.price, 
            imageUrl:imageUrl
        };



        fetch("https://shielded-plateau-39007.herokuapp.com/addService",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })

        history.push("/");
    }

    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "56489a32a100a5eccb9c2e11041fbd0e");
        imageData.append("image", event.target.files[0]);
    axios.post('https://api.imgbb.com/1/upload',imageData)
          .then((res) => {
            setImageUrl(res.data.data.display_url);
          })
          .catch((err) => {
            console.log(err);
          });
      };


    return (
        <div style={{height: "100vh"}} className="row container-fluid">
            <div className="col-md-2 p-3">
                <AdminSidebar></AdminSidebar>
            </div>
            <div style={{background: "#E5E5E5"}} className="col-md-10 p-5">
                <h3 style={{color:'#8810f8'}}>Admin</h3>
                <form onSubmit={handleSubmit(onSubmit)} style={{width:"400px"}}>
                    <input className="form-control mb-5 py-3" type="text" placeholder="new service" name="serviceName" {...register("serviceName", { required: true })}/>
                    <input className="form-control mb-5 py-3" type="text" placeholder="details" name="description" {...register("description", { required: true })}/>
                    <input className="form-control mb-5 py-3" type="text" placeholder="Price" name="price" {...register("price", { required: true })}/>
                    <input
          name="exampleRequired"
          type="file"
          onChange={handleImageUpload}
        />
                    <input className="form-control btn btn-dark" type="submit" value="send"/>
                </form>
            </div>
        </div>
    );
};

export default AddService;