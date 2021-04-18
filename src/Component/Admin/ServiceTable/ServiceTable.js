import React from 'react';

const ServiceTable = (props) => {
    const { serviceName,price,imageUrl,_id,description } = props.serviceInfo;

    const  handleDelete =(id) =>{
        fetch(`https://shielded-plateau-39007.herokuapp.com/deleteService/${id}`,{
            method:"DELETE",
        })
        .then(res => res.json())
        .then(data => console(data))
    }


    return (
        <>
            <tr>
                <th scope="row">{serviceName}</th>
                <td>${price}</td>
                <td><img src={imageUrl} alt="" style={{width:'15%'}} /></td>
                
                <td>
                    <button className="btn btn-primary" onClick={() => handleDelete(_id)}>DELETE</button>
                </td>
            </tr>
        </>
    )};

export default ServiceTable;