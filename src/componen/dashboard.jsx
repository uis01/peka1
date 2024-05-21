import './css/input.css'
import { Link } from 'react-router-dom';

function Dashboard (){
    return (
        <>
            <div className="containerRoot flex flex-row h-full">
                
                {/* navigation Start  */}
                <div className='containerNav w-1/6 h-[100vh] justify-items-center flex flex-col static'>
                        <div className='img flex justify-center items-center mt-5'>
                            <img src="/img/logoNavbar.png" alt="" className='w-[130px] h-[115px]'/>
                        </div>
                        <div className="listNav text-white decoration list-none mt-[4vh]">
                            <li className=' py-[0.5vh] mt-[5vh] ml-8 border-r-2 border-solid border-[rgba(16,92,140,1)] '>
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
                                    <p className=' text-black'>jadwal</p>
                                </button>
                            </Link> 
                            </li>
                            <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
                            <Link to="/Database">
                                <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                    <img src="/img/imgNavbar/database 1.png" className='w-full h-[24px] mr-2' alt="" />
                                    <p className=' text-black'>database</p>
                                </button>
                            </Link>                          
                            </li>
                            <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
                            <Link to="/TentangKami">
                                <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                    <img src="/img/imgNavbar/tentang kami.png" className='w-[24px] h-[24px] mr-2' alt="" />
                                    <p className=' text-black'>tentang kami</p>
                                </button>
                            </Link>                           
                            </li>
                            <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
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


                
                <div className="containerIsi mt-10 mb-20 mr-0 ">

                    {/* top container */}
                    <div className="containerTop flex flex-row justify-between w-[70vw] mb-3 mt-5 ml-20">
                            <h1 className= "text-3xl font-bold mr-auto my-auto">
                            Dashboard
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

                    {/* mid dashboard*/}
                    <div className="containerMidDashboard mt-28 ">
                        <div className="container1 max-w-4xl h-36 m-auto mt-5 border-solid border-2 border-[rgba(16,92,140,1)] rounded-xl flex flex-col justify-center items-start text-4xl font-bold">
                            <h1 className='text-4xl font-bold ml-5'> Halo Bunda Sari</h1>
                            <h2 className='text-xl font-semibold ml-5'>Sudah siap untuk jalani hari ini?</h2>
                            <img src="/img/imgDashboard/gambar1.png" alt="" className='top-36 right-44 absolute h-[30vh]' />   
                        </div>

                        <div className="container1 p-2 max-w-4xl  m-auto mt-5 border-solid border-2 border-[rgba(16,92,140,1)] rounded-xl flex flex-col justify-center items-start">
                            <h1 className='font-bold text-2xl'>Perkembangan anak</h1>
                            <br />
                            <h2 className='font-medium text-lg'>tambahkan data mengenai deskripsi <br /> tentang perkembangan si buah hati </h2>
                            <button className='bg-[rgba(16,92,140,1)] p-2 absolute ml-96 border-solid border-[rgba(16,92,140,1)] border-2 rounded-3xl text-white'>
                                + Tambahkan data 
                            </button>
                            <img src="/img/imgDashboard/gambar2.png" alt="" className='max-h-max max-w-56 right-44 top-47 absolute ' />
                        </div>
                    </div>
                    
                    {/* mid dashboard end */}


<br />
                        {/* continerDown */}
                    <div className="ContainerDown text-white">
                        <div className="containerDown1 rounded-xl max-w-4xl bg-[rgba(16,92,140,1)] m-auto flex items-center p-2 mb-5">
                            <img src="/img/imgDashboard/gambar3.png" alt="" className='w-36 mr-2'/>
                            <div className="text">
                                <h1 className='text-xl font-semibold'>lorem</h1>
                                <p className='text-xs '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ea at repellendus, facere ut quod eaque amet ducimus neque, inventore, voluptates error dolores voluptatibus dolore? Voluptas sed facilis quaerat asperiores.</p>
                            </div>
                        </div>
                        
                        <div className="containerDown1 rounded-xl max-w-4xl bg-[rgba(16,92,140,1)] m-auto flex items-center p-2 mb-5">
                            <img src="/img/imgDashboard/gambar3.png" alt="" className='w-36 mr-2'/>
                            <div className="text">
                                <h1 className='text-xl font-semibold'>lorem</h1>
                                <p className='text-xs '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ea at repellendus, facere ut quod eaque amet ducimus neque, inventore, voluptates error dolores voluptatibus dolore? Voluptas sed facilis quaerat asperiores.</p>
                            </div>
                        </div>
                        
                
                    </div>
                    {/* downcontainer end*/}
                </div>
            </div>

            {/* footer */}
            <div className=" h-[6.3vh] w-full bg-[#0b598a] bottom-0 left-0 fixed flex justify-center items-center">
                <p className='text-slate-50'>2024 copyright PEKA.com</p>
            </div>
            {/* footerend*/}

        </>
    )
}


export default Dashboard;