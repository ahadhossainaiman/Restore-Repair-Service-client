import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../setting.svg';

const Sidebar = () => {
    return (
        <div className="p-3">
            <Link className="navbar-brand mb-5" to="/"><img style={{width: "150px"}} src={logo} alt=""/></Link>
            <Link to="/order"><h6>Order</h6></Link>
            <Link to="/servicelist"><h6>Service List</h6></Link>
            <Link to="/review"><h6>Review</h6></Link>
        </div>
    );
};

export default Sidebar;