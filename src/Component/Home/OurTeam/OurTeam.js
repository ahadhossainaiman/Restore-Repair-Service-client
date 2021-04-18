import React from 'react';
import member1 from '../../../images/team_6.jpg'
import member2 from '../../../images/team_7-1.jpg'
import member3 from '../../../images/team_8.jpg'
import Member from './Member/Member';

const OurTeam = () => {
    const teamMember = [
        {
            member:"Alexender Gary",
            profession:"CEO & FOUNDER",
            img:member1
        },
        {
            member:"Mellissa Munoz",
            profession:"CHIEF ENGINEER",
            img:member2
        },
        {
            member:"John Abraham",
            profession:"Techinical Manger",
            img:member3
        },
    ]
    return (
        <section id="member">
            <div className="container">
                <h1 className="text-center mb-5">Our Awesome <span style={{color:'#8810f8'}}>Team</span></h1>
                <p className="text-center  text-dark mb-5">Meet with our qualified and expert team. We are specialized in our individual field. We have enough skill and tested. That’s why you’re getting the quality repair services.</p>
                <div className="row">
                    {
                    teamMember.map(member => <Member member={member} key={member.member}></Member>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OurTeam;