import './css/input.css'
import { Link } from 'react-router-dom';
function Bantuan () {
    return (
        <>
        <div className="containerRoot flex flex-row h-full bg-slate-200">
            {/* navigation Start  */}
            <div className='containerNav w-1/6 h-[100vh] justify-items-center flex flex-col static'>
                        <div className='img flex justify-center items-center mt-5'>
                            <img src="/img/logoNavbar.png" alt="" className='w-[130px] h-[115px]'/>
                        </div>
                        <div className="listNav text-white decoration list-none mt-[4vh]">
                            <li className=' py-[0.5vh] mt-[5vh] ml-8  '>
                                <Link to="/Dashboard">
                                    <button className='w-[18.3] h-full flex flex-row items-start justify-center  '>
                                        <img src="/img/imgNavbar/dashboard 1.png" className='w-full h-[24px] mr-2' alt="" />
                                        <p className='text-black '>dashboard</p>
                                    </button>
                                </Link>  
                            </li>
                            <li className=' py-[0.5vh] mt-[5vh] ml-8  '> 
                                <Link to="/Editor">
                                    <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                        <img src="/img/imgNavbar/writer 1.png" className='w-full h-[24px] mr-2' alt="" />
                                        <p className='text-black '>editor</p>
                                    </button>
                                </Link>                          
                            </li>
                            <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
                            <Link to="/Jadwal">
                                <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                    <img src="/img/imgNavbar/jadwal.png" className='w-full h-[24px] mr-2' alt="" />
                                    <h2 className=' text-black'>jadwal</h2>
                                </button>
                            </Link> 
                            </li>
                            <li className=' py-[0.5vh] mt-[5vh] ml-8  '>
                            <Link to="/Database">
                                <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                    <img src="/img/imgNavbar/database 1.png" className='w-full h-[24px] mr-2' alt="" />
                                    <h2 className=' text-black'>database</h2>
                                </button>
                            </Link>                          
                            </li>
                            <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
                            <Link to="/TentangKami">
                                <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                    <img src="/img/imgNavbar/tentang kami.png" className='w-[24px] h-[24px] mr-2' alt="" />
                                    <h2 className=' text-black'>tentang kami</h2>
                                </button>
                            </Link>                           
                            </li>
                            <li className=' py-[0.5vh] mt-[5vh] ml-8 border-r-2 border-solid border-[rgba(16,92,140,1)]'>
                                <Link to="/Bantuan">
                                    <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                        <img src="/img/imgNavbar/bantuan.png" className='w-full h-[24px] mr-2' alt="" />
                                        <p className=' text-black'>bantuan</p>
                                    </button>
                                </Link>                          
                            </li>        
                        </div>    
            </div>
            {/* navigation End  */}

            <div className="containerIsi ml-3 mb-20 flex flex-nowrap flex-col">
                {/* top container */}
                <div className="containerTop flex flex-row justify-between w-[70vw] mb-3 mt-5">
                    <h1 className= "text-3xl font-bold mr-auto my-auto">
                    Bantuan
                    </h1>
                    <div className="containerInput mr-5 my-auto justify-center items-center flex">
                        <input type="text" placeholder='cari....' className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl"/>
                    </div>
                    <div className="containerLogo flex flex-row w-32 mr-3 justify-center items-center">
                        <div className="containerBell  rounded-md bg-[rgba(16,92,140,1)] px-1 flex mx-[15px] p-1">
                            <img src="/img/imgDashboard/bell 4.png" alt="" className="h-[30px] w-[30px]"/>
                        </div>
                        <div className="containerProfil">
                            <img src="/img/imgDashboard/Female Profile.png" alt="" className="w-[40px] h-[40px] " />
                        </div>
                    </div>          
                </div>
                {/* Top container end*/}

                {/* content  */}
                <div className='w-[80vw]'>
                    <div className=" flex justify-center items-center text-2xl font-bold">
                        <h1>Frequently Asked Questions</h1>
                    </div>
                    <br />
                    <div className=" flex">
                        <div className='border  w-1/2'>
                            <h1 className='font-bold'>Apa yang harus saya lakukan pertama kali untuk dapat mengakses dan menggunakan website ini?</h1>
                            <li className=' font-light'>Website kami dapat dioperasikan di mobile maupun desktop, akan tetapi kami lebih menyarankan anda untuk mengakses dan menggunakan website ini pada tampilan desktop untuk memudahkan anda dalam bekerja dengan layar yang luas. 
                            </li>
                            <li className=' font-light'>
                            Jika anda belum memiliki akun, silahkan daftarkan diri anda melalui fitur register yang dapat diakses melalui tombol register di pojok kanan atas saat anda membuka website kami puntuk pertama kali.
                            </li>
                            
                        </div>
                        <div className='border  w-1/2'>
                            <h1 className='font-bold'>Bagaimana cara saya melihat daftar klien (orang tua balita) yang telah mendaftar secara online?</h1>
                            <li className=' font-light'>Anda dapat mengakses menu Jadwal yang telah kami sediakan di berbagai halaman website kami. Lalu pada halaman Jadwal, anda dapat menekan tombol Kegiatan yang akan membawa anda menuju halaman daftar klien akan melakukan cek rutin. Tersedia berbagai informasi, di antaranya tanggal pendaftaran, nama anak, nomor antrian, dan lain-lain.
                            </li>
                        </div>
                    </div>
                    <br />
                    <div className=" flex">
                        <div className=' ml-2 w-1/2'>
                            <h1 className='font-bold'>Bagaimana saya dapat menambahkan data anak/ balita melalui website ini?</h1>
                            <li className=' font-light'>Anda dapat pergi ke halaman dashboard, dan klik tombol tambah data (+) pada perkembangan anak, lalu website akan mengarahkan anda ke halaman perkembangan anak dimana anda akan memilih nama anak/ balita yang telah didaftarkan oleh orang tuanya, selanjutnya anda dapat mengisi data-data yang diperlukan
                            </li>
                        </div>
                        <br />
                        <div className=' ml-2 w-1/2'>
                            <h1 className='font-bold'>Apakah terdapat fitur-fitur lain yang memudahkan kami, para petugas posyandu/ kader dalam menjalankan tugas?</h1>
                            <li className=' font-light'>Ada, kami menyediakan fitur-fitur lain, seperti tambah artikel dimana anda dapat menuliskan artikel mengenai bidang kesehatan dan nutrisi anak. Selain itu, kami menyediakan fitur notifikasi, dimana anda dapat mengirimkan suatu pesan kepada orang tua balita yang telah mendaftarkan diri di aplikasi PEKA yang tersedia untuk platform mobile. 
                            </li>
                        </div>
                    </div>
                    
                </div>
                {/* content end  */}
            </div>

            {/* footer */}
            <div className=" h-[6.3vh] w-full bg-[#0b598a] bottom-0 left-0 fixed flex justify-center items-center">
                <p className='text-slate-50'>2024 copyright PEKA.com</p>
            </div>
            {/* footerend*/}
        </div>
        </>
    )
}

export default Bantuan;