import React from 'react';
import '../Home/Services/Services.css';

const SingleFeedback = ({fb}) => {
    const {name,profession,feedback,imageUrl} = fb;
    return (
        <div className="col-12 col-sm-6 col-md-4 p-2" >
            <div className="single-service p-4" style={{borderRadius:'5px 30px 5px'}}>
                <div className="row d-flex justify-content-start align-items-center mb-3" >
                    <div className="col-md-4">
                        <img style={{width: "50px"}} src={imageUrl} alt=""/>
                    </div>
                    <div className="col-md-8">
                        <h5>{name}</h5>
                        <small>{profession}</small>
                    </div>
                </div>
                <p>{feedback}</p>
            </div>
        </div>
    );
};

export default SingleFeedback;