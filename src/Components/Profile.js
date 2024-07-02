import React from 'react';
import "./Profile.css";
import profileimg from "../DMJPiUa.png";
//import { colors } from '@mui/material';
const ProfilePage = () => {
  return (
    <div className="profile-page">
      <header className="header">
        <img src={profileimg} className='profile-image' alt="" />
        <h1 className="name">Sahil Lavingia</h1>
        <h3 className="title">Founder, Gumroad & Flexile</h3>
      </header>
      <main className="main">
        <section className="about">
          <h3>About</h3>
          <p className='about-text'>
            Sahil Lavingia is the founder and CEO of Gumroad. He solo-founded Gumroad in 2011 and raised $10M+ from Kleiner Perkins, Lowercase Capital, First Round Capital, Naval Ravikant, Max Levchin, and others. Prior to starting Gumroad, Sahil was employee #2 at Pinterest. He is also a VC at his rolling fund, shi.vc which invests in early stage companies, including HelloSign (acquired by Dropbox), Lambda School, Figma, Notion, Clubhouse and many more. Lavingia is also author of the book "The Minimalist Entrepreneur".
          </p>
        </section>
        <section className="qna">
            <div className='qna-bar'  >
            <input type="text" placeholder="Ask me any question" className="qna-input" />
            <i className="fas fa-phone call-icon"></i>
            </div>
          
          <a className="start-talking-button">Start Talking </a>
        </section>
      </main>
    </div>
  );
};

export default ProfilePage;
