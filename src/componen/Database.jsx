import './css/input.css'

function Database () {
    return (
        <>
        <div className="containerRoot flex flex-row h-full ">

            {/* navigation Start  */}
            <div className='containerNav w-1/6 h-[100vh] justify-items-center flex flex-col mr-52 fixed'>
                    <div className='img flex justify-center items-center mt-5'>
                        <img src="/img/logoNavbar.png" alt="" className='w-[130px] h-[115px]'/>
                    </div>
                    <div className="listNav text-white decoration list-none mt-[4vh]">
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 border-r-2 border-solid border-[rgba(16,92,140,1)] '>
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
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
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


            <div className="containerIsi pl-32 mt-10 mb-20 ml-52 mr-0">

                        {/* top container */}
                        <div className="containerTop flex flex-row justify-between w-[70vw]">
                            <h1 className= "text-3xl font-extrabold mr-auto my-auto">
                            Database
                            </h1>
                            <div className="containerInput mr-5 my-auto justify-center items-center flex">
                                <input type="text" placeholder='cari....' className="bg-slate-200 rounded-sm outline-0 h-5 px-5 py-5 rounded-lg"/>
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
                        <div className='content-center mt-20 mr-5'>
                                <select name="filter" id="#" className='bg-blue-900 text-white px-3 py-1 rounded-full float-right mb-5'>
                                    <option value="">Filter by</option>
                                    <option value="">A-Z</option>
                                    <option value="">Z-A</option>
                                </select>

                                <table className='w-full text-center table-auto border-collapse border border-slate-400 mt-2 px-4 py-4'>
                                    <tr>
                                    <th className='border border-slate-300 px-1 py-4'>No</th>
                                    <th className='border border-slate-300 px-1 py-4'>Nama Pengguna</th>
                                    <th className='border border-slate-300 px-1 py-4'>Nomor Kartu Keluarga</th>
                                    <th className='border border-slate-300 px-1 py-4'>Identitas Anak</th>
                                    </tr> 
                                    <tr>
                                        <td className='border border-slate-300 px-1 py-4'>1</td>
                                        <td className='border border-slate-300 px-1 py-4'>Adam</td>
                                        <td className='border border-slate-300 px-1 py-4'>1234567890</td>
                                        <td className='border border-slate-300 px-1 py-4'><button className='bg-blue-900 text-white px-3 py-1 rounded-full'>click here</button></td>
                                    </tr>  
                                    <tr>
                                        <td className='border border-slate-300 px-1 py-4'>2</td>
                                        <td className='border border-slate-300 px-1 py-4'>Adam</td>
                                        <td className='border border-slate-300 px-1 py-4'>1234567890</td>
                                        <td className='border border-slate-300 px-1 py-4'><button className='bg-blue-900 text-white px-3 py-1 rounded-full'>click here</button></td>
                                    </tr>
                                    <tr>
                                        <td className='border border-slate-300 px-1 py-4'>3</td>
                                        <td className='border border-slate-300 px-1 py-4'>Adam</td>
                                        <td className='border border-slate-300 px-1 py-4'>1234567890</td>
                                        <td className='border border-slate-300 px-1 py-4'><button className='bg-blue-900 text-white px-3 py-1 rounded-full'>click here</button></td>
                                    </tr>
                                    <tr>
                                        <td className='border border-slate-300 px-1 py-4'>4</td>
                                        <td className='border border-slate-300 px-1 py-4'>Adam</td>
                                        <td className='border border-slate-300 px-1 py-4'>1234567890</td>
                                        <td className='border border-slate-300 px-1 py-4'><button className='bg-blue-900 text-white px-3 py-1 rounded-full'>click here</button></td>
                                    </tr>
                                    <tr>
                                        <td className='border border-slate-300 px-1 py-4'>5</td>
                                        <td className='border border-slate-300 px-1 py-4'>Adam</td>
                                        <td className='border border-slate-300 px-1 py-4'>1234567890</td>
                                        <td className='border border-slate-300 px-1 py-4'><button className='bg-blue-900 text-white px-3 py-1 rounded-full'>click here</button></td>
                                    </tr>
                                    <tr>
                                        <td className='border border-slate-300 px-1 py-4'>6</td>
                                        <td className='border border-slate-300 px-1 py-4'>Adam</td>
                                        <td className='border border-slate-300 px-1 py-4'>1234567890</td>
                                        <td className='border border-slate-300 px-1 py-4'><button className='bg-blue-900 text-white px-3 py-1 rounded-full'>click here</button></td>
                                    </tr>
                                    <tr>
                                        <td className='border border-slate-300 px-1 py-4'>7</td>
                                        <td className='border border-slate-300 px-1 py-4'>Adam</td>
                                        <td className='border border-slate-300 px-1 py-4'>1234567890</td>
                                        <td className='border border-slate-300 px-1 py-4'><button className='bg-blue-900 text-white px-3 py-1 rounded-full'>click here</button></td>
                                    </tr>
                                </table>    
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

export default Database;