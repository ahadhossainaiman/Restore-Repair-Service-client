import React from 'react';
import Footer from '../../Shere/Footer/Footer';
import Navbar from '../../Shere/Navebar/Navbar';
import FeedBack from '../Feedback/Feedback';
import OurTeam from '../OurTeam/OurTeam';
import ServiceExperience from '../ServiceExperience/ServiceExperience';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Services></Services>
            <ServiceExperience></ServiceExperience>
            <FeedBack></FeedBack>
            <OurTeam></OurTeam>
            <Contact></Contact>
            <Footer></Footer> 
        </div>
    );
};

export default Home;