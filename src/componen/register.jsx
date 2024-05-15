
// import React from 'react';
import './css/register.css';
export default function Register(){
    return(
        <>
        <div className="container">
    <img src="img\login.png"/>
    <div className='form'>
      <p className='text1'>Daftar</p>
      <p className='text2'>Silahkan isi identitas Bunda !</p>
      <form action="" method="">
        <label htmlFor="email">Email</label><br/>
        <input type="text" name="email" id="email" required/><br/>
        <label htmlFor="username">Username</label><br/>
        <input type="text" name="username" id="username" required/><br/>
        <label htmlFor="password">Password</label><br/>
        <input type="password" name="password" id="password" required/><br/>
        <label htmlFor="konfirmasiPassword">Konfirmasi Password</label><br/>
        <input type="password" name="konfirmasiPassword" id="konfirmasiPassword" required/><br/>
        <label htmlFor="alamat">Alamat</label><br/>
        <input type="text" name="alamat" id="alamat" required/><br/>
        <label htmlFor="noHp">Nomor Handphone</label><br/>
        <input type="number" name="noHp" id="noHp" required/><br/>
        <input type="submit" className='btn' id='submit' value="Daftar"/><br/>
      </form>
      <p className='text3'>Sudah punya akun? <a href="#">Masuk sekarang</a></p>
    </div>
    
</div>
        </>
    )
}