import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

const Member = ({member}) => {
    return (
        <div className="col-md-4 text-center">
            <img className="img-fluid mb-3" src={member.img} alt=""/>
            <h3>{member.member}</h3>
            <h6>{member.profession}</h6>
            <p> <FontAwesomeIcon style={{color:'#8810f8'}} icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Member;