
import './css/login.css';

// import logoImage from './img/logo.png'; 

function Login() {
  return (
    <div className='containerLogin'>
        <div className='left'>
            {/* <div className='btn'>
                <a href="#"><button className='up'>Register</button></a>
                <a href="#"><button className='up'>Login</button></a>
            </div> */}
            <div className="container1">
                <p className="text1">Login</p>
                <label htmlFor="username">Username or Email</label><br />
                <input type="text" placeholder='Masukkan nama pengguna atau email anda'/><br />
                <label htmlFor="password">Password</label><br />
                <input type="text" placeholder='Masukkan password anda'/><br />
                {/* <p className="text2">Layanan Posyandu berbasis online yang bertujuan untuk memudahkan petugas maupun kader posyandu dalam menganalisis dan menginput data si Buah Hati</p> */}
                <button className="start">LOGIN</button>
            </div>
        </div>
        <div className='right'>
          <img src="img\icon.png"/>
        </div>
    </div>
  );
}

export default Login;


