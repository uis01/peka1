import './css/input.css'

function IdentitasAnak() {
    return (
        <>
            <div className="containerRoot flex flex-row h-full bg-slate-200">

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
                            Database
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
                        <div class=" rounded overflow-hidden shadow-lg max-w-xl	m-auto bg-white py-5 rounded-b-3xl rounded-t-3xl">
                            <div class="font-bold text-4xl my-5 text-center text-blue-600">Identitas Anak</div>
                            <table className='w-9/12 m-auto border-separate border-spacing-5'>
                                <tr>
                                    <td colspan="2">
                                        <label className='text-base text-blue-600'>Nama Anak</label>
                                        <input className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl w-full mb-2" readOnly />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <label className='text-base text-blue-600'>NIK Anak</label>
                                        <input className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl w-full mb-2" readOnly />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='text-base text-blue-600'>Tempat</label>
                                        <input className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl w-full mb-2" readOnly />
                                    </td>
                                    <td>
                                        <label className='text-base text-blue-600'>Tanggal Lahir</label>
                                        <input className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl w-full mb-2" readOnly />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label className='text-base text-blue-600'>Gender</label>
                                        <input className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl max-w-52 mb-2" readOnly />
                                    </td>
                                    <td>
                                        <label className='text-base text-blue-600'>Golongan Darah</label>
                                        <input className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-t-xl rounded-b-xl max-w-52 mb-2" readOnly />
                                    </td>
                                </tr>
                            </table>
                            
                        </div>
                    </div>
                    <button className='bg-blue-900 text-white px-3 py-3 mt-5 rounded-t-xl rounded-b-xl float-right'>Riwayat Pengecekan</button>
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

export default IdentitasAnak;