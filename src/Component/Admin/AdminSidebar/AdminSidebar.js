import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../setting.svg';

const AdminSidebar = () => {
    return (
        <div className="p-3">
            <Link className="navbar-brand mb-5" to="/"><img style={{width: "150px"}} src={logo} alt=""/></Link>
            <Link to="/"><h6>Home</h6></Link>
            <Link to="/allorder"><h6>Service List</h6></Link>
            <Link to="/addservice"><h6>Add Service</h6></Link>
            <Link to="/makeadmin"><h6>Make Admin</h6></Link>
            <Link to="/manageService"><h6>Manage Service</h6></Link>
        </div>
    );
};

export default AdminSidebar;