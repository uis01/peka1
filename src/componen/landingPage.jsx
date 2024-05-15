
import './css/landingPage.css';

// import logoImage from './img/logo.png'; 

function LandingPage() {
  return (
    <div className='container'>
        <div className='left'>
            <div className='btn'>
                <a href="#"><button className='up'>Register</button></a>
                <a href="#"><button className='up'>Login</button></a>
            </div>
            <div className="container1">
                <p className="text1">Selamat Datang di PEKA!</p>
                <p className="text2">Layanan Posyandu berbasis online yang bertujuan untuk memudahkan petugas maupun kader posyandu dalam menganalisis dan menginput data si Buah Hati</p>
                <button className="start">Mari Mulai</button>
            </div>
        </div>
        <div className='right'>
        <img src="img\logo.png"/>
        </div>
    </div>
  );
}

export default LandingPage;


