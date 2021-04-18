import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";


const Review = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [imageUrl,setImageUrl] = useState(null)



  const onSubmit = (data) => {

    const eventData = {
        name:data.name,
        profession:data.profession,
        feedback:data.feedback, 
        imageUrl:imageUrl
    };

    fetch("https://shielded-plateau-39007.herokuapp.com/yourfeedback", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    });

    history.push("/");
  };

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
  }


  return (
    <div style={{ height: "100vh" }} className="row container-fluid">
      <div className="col-md-2 p-3">
        <Sidebar></Sidebar>
      </div>
      <div style={{ background: "#E5E5E5" }} className="col-md-10 p-5">
        <h3 style={{color:'#8810f8'}}>Review</h3>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "400px" }}>
          <input
            className="form-control mb-5 py-3"
            type="text"
            placeholder="your name"
            name="name"
            {...register("name", { required: true })}
          />
          <input
            className="form-control mb-5 py-3"
            type="text"
            placeholder="company, Designation"
            name="profession"
            {...register("profession", { required: true })}
          />
          <input
            className="form-control mb-5 py-3"
            type="text"
            placeholder="feedback"
            name="feedback"
            {...register("feedback", { required: true })}
          />
          <input
            name="exampleRequired"
            type="file"
            onChange={handleImageUpload}
          />
          <input
            className="form-control btn btn-dark"
            type="submit"
            value="send"
          />
        </form>
      </div>
    </div>
  );
};

export default Review;
