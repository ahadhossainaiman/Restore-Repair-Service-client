import React, { useEffect, useState } from 'react';
import SingleFeedback from '../SingleFeedback/SingleFeedback';

const FeedBack = () => {
    const [feedback,setFeedback] = useState([]);
    useEffect(() => {
        fetch("https://shielded-plateau-39007.herokuapp.com/feedback")
        .then(res => res.json())
        .then(data => {
            setFeedback(data);
        })
    },[])
    return (
        <section className="feedback py-5 container">
            <h2 className="mb-5 text-center">Clients <span style={{color:'#8810f8'}}>Feedback</span></h2>
            <div className="row d-flex align-items-center">
                {
                    feedback.map(fb => <SingleFeedback fb={fb} key={fb._id}></SingleFeedback>)
                }
            </div>
        </section>
    );
};

export default FeedBack;