import React from 'react';
import photo from '../../../images/experience.jpg'
import './ServiceExperience.css'

const ServiceExperience = () => {
    
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={photo} alt=""/>
                    </div>
                    <div className="col-md-7 align-self-center about-details">
                    <h3> <span className='year'>22</span> Years of experience in digital device repair services</h3>
                        <p className="text-secondary my-5">
                        Restore is a U.S based computer repair service center. Basically we repair all major brands of PCs, Laptops, Smartphone, Tablet and Gaming console devices issues. We provide the services by well trained, skillful and friendly stuff. Our skill have been tested over the years.
                        We’re not only here to fix your device but also make sure you are informed and comfortable with the whole process. We’ll keep you updated and you feel comfortable with our services.
                        </p>
                        <button className="btn btn-primary b">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceExperience;