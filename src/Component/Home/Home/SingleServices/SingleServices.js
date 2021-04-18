import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { idContext } from '../../../../App';

import '../Services/Services.css'

const SingleServices = ({serviceInfo}) => {
    const [serviceId,setServiceId] = useContext(idContext);
    const history = useHistory();
    const {serviceName,description,price,imageUrl,_id} = serviceInfo; 
    const handleService = (id) => {
        setServiceId(id);
        history.push("/order");
    }
    return (
            <div className="col-12 col-sm-6 col-md-4 p-2" >
                <div onClick={() => handleService(_id)} className="single-service p-3" style={{borderRadius:'5px 30px 5px'}}>
                    <img className="img" src={imageUrl} alt=""/>
                    <h5>{serviceName}</h5>
                    <p>{description}</p>
                    <h3>{price}</h3>
                </div>
            </div>
    );
};

export default SingleServices;