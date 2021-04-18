import React, { useEffect, useState } from 'react';
import SingleServices from '../SingleServices/SingleServices';



const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, []);
    console.log(services);
    return (
        <section id="service" className="service container text-center py-5">
            <h2 className="mb-5">Provide Awsome <span style={{color:'#8810f8'}}>Services</span></h2>
            <div className="row d-flex align-items-center">
                {
                    services.map(service => <SingleServices key={service._id} serviceInfo={service}></SingleServices>)
                }
            </div>
        </section>
    );
};

export default Services;