import './css/input.css'

function Notifikasi() {
    return (
        <>
            <div className="containerRoot flex flex-row h-screen bg-slate-200">

                {/* navigation Start  */}
                <div className='containerNav w-1/6 h-[100vh] justify-items-center flex flex-col mr-52 fixed bg-white'>
                    <div className='img flex justify-center items-center mt-5'>
                        <img src="/img/logoNavbar.png" alt="" className='w-[130px] h-[115px]' />
                    </div>
                    <div className="listNav text-white decoration list-none mt-[4vh]">
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
                            <button className='w-[18.3] h-full flex flex-row items-start justify-center  '>
                                <img src="/img/imgNavbar/dashboard 1.png" className='w-full h-[24px] mr-2' alt="" />
                                <p className='text-black '>dashboard</p>
                            </button>
                        </li>
                        <li className=' py-[0.5vh] mt-[5vh] ml-8  '>
                            <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                <img src="/img/imgNavbar/writer 1.png" className='w-full h-[24px] mr-2' alt="" />
                                <p className='text-black '>editor</p>
                            </button>
                        </li>
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
                            <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                <img src="/img/imgNavbar/jadwal.png" className='w-full h-[24px] mr-2' alt="" />
                                <p className=' text-black'>jadwal</p>
                            </button>
                        </li>
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 border-r-2 border-solid border-[rgba(16,92,140,1)]'>
                            <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                <img src="/img/imgNavbar/database 1.png" className='w-full h-[24px] mr-2' alt="" />
                                <p className=' text-black'>database</p>
                            </button>
                        </li>
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
                            <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                <img src="/img/imgNavbar/tentang kami.png" className='w-[24px] h-[24px] mr-2' alt="" />
                                <p className=' text-black'>tentang kami</p>
                            </button>
                        </li>
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
                            <button className='w-[18.3] h-full flex flex-row items-start justify-center'>
                                <img src="/img/imgNavbar/bantuan.png" className='w-full h-[24px] mr-2' alt="" />
                                <p className=' text-black'>bantuan</p>
                            </button>
                        </li>
                    </div>
                </div>
                {/* navigation End  */}


                <div className="containerIsi pl-32 mt-10 mb-20 ml-52 mr-0 bg-slate-200 ">

                    {/* top container */}
                    <div className="containerTop flex flex-row justify-between w-[70vw]">
                        <h1 className="text-3xl font-extrabold mr-auto my-auto">
                            Notifikasi
                        </h1>
                        <div className="containerInput mr-5 my-auto justify-center items-center flex">
                            <input type="text" placeholder='cari....' className="bg-white rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl" />
                        </div>
                        <div className="containerLogo flex flex-row w-32 mr-3 justify-center items-center">
                            <div className="containerBell  rounded-md bg-[rgba(16,92,140,1)] px-1 flex mx-[15px] p-1">
                                <img src="/img/imgDashboard/bell 4.png" alt="" className="h-[30px] w-[30px]" />
                            </div>
                            <div className="containerProfil">
                                <img src="/img/imgDashboard/Female Profile.png" alt="" className="w-[40px] h-[40px] " />
                            </div>
                        </div>
                    </div>
                    {/* Top container end*/}
                    <div className='content-center mt-20 w-full '>
                        <div className=" rounded overflow-hidden shadow-lg max-w-4xl m-auto mb-5 bg-white p-5 rounded-b-3xl rounded-t-3xl">
                            <table className='float-left w-10/12'>
                                <tr>
                                    <td rowSpan={2}><div className="containerBell size-16 rounded-full bg-[rgba(16,92,140,1)] px-1 flex items-center mx-[15px] p-1">
                                        <img src="/img/Notification.png" alt="" className=" m-auto" />
                                    </div>
                                    </td>
                                    <td><div className='font-bold text-2xl'>Kegiatan posyandu akan segera dimulai</div></td>
                                </tr>
                                <tr>
                                    <td><div className='text-base'>Ayo segera datang ke tempat, jangan lupa nomor antrianmu!</div></td>
                                </tr>
                            </table>
                            <div className='float-right'><img src="/img/Pencil.png" /></div>
                        </div>
                        <div className=" rounded overflow-hidden shadow-lg max-w-4xl m-auto mb-5 bg-white p-5 rounded-b-3xl rounded-t-3xl">
                            <table className='float-left w-10/12'>
                                <tr>
                                    <td rowSpan={2}><div className="containerBell size-16 rounded-full bg-[rgba(16,92,140,1)] px-1 flex items-center mx-[15px] p-1">
                                        <img src="/img/Notification.png" alt="" className=" m-auto" />
                                    </div>
                                    </td>
                                    <td><div className='font-bold text-2xl'>Kegiatan posyandu akan segera dimulai</div></td>
                                </tr>
                                <tr>
                                    <td><div className='text-base'>Ayo segera datang ke tempat, jangan lupa nomor antrianmu!</div></td>
                                </tr>
                            </table>
                            <div className='float-right'><img src="/img/Pencil.png" /></div>
                        </div>
                        <div className=" rounded overflow-hidden shadow-lg max-w-4xl m-auto mb-5 bg-white p-5 rounded-b-3xl rounded-t-3xl">
                            <table className='float-left w-10/12'>
                                <tr>
                                    <td rowSpan={2}><div className="containerBell size-16 rounded-full bg-[rgba(16,92,140,1)] px-1 flex items-center mx-[15px] p-1">
                                        <img src="/img/Notification.png" alt="" className=" m-auto" />
                                    </div>
                                    </td>
                                    <td><div className='font-bold text-2xl'>Kegiatan posyandu akan segera dimulai</div></td>
                                </tr>
                                <tr>
                                    <td><div className='text-base'>Ayo segera datang ke tempat, jangan lupa nomor antrianmu!</div></td>
                                </tr>
                            </table>
                            <div className='float-right'><img src="/img/Pencil.png" /></div>
                        </div>
<div className='bg-black text-white text-5xl m-auto text-center align-bottom size-12 rounded-full'>+</div>                        
                    </div>

                    
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

export default Notifikasi;