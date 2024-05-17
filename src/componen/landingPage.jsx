
import './css/landingPage.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Register from './register';


// import logoImage from './img/logo.png'; 

function LandingPage() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <div className='landingPage-container'>
        <div className='landingPage-left'>
            <div className='landingPage-btn'>
                <a href="#"><button onClick={() => navigateTo('/register')} className='up'>Register</button></a>
                <a href="#"><button onClick={() => navigateTo('/login')} className='down'>Login</button></a>
            </div>
            <div className="landingPage-container1">
                <p className="landingPage-text1">Selamat Datang di PEKA!</p>
                <p className="landingPage-text2">Layanan Posyandu berbasis online yang bertujuan untuk memudahkan petugas maupun kader posyandu dalam menganalisis dan menginput data si Buah Hati</p>
                <button className="landingPage-start">Mari Mulai</button>
            </div>
        </div>
        <div className='landingPage-right'>
        <img className='landingPage-image' src="img\logo.png"/>
        </div>
    </div>
  );
}

export default LandingPage;


