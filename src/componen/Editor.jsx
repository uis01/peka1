import './css/input.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


function Editor () {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <>
        <div className="containerRoot flex flex-row h-full bg-slate-200">

            {/* navigation Start  */}
            <div className='containerNav w-1/6 h-[100vh] justify-items-center flex flex-col static'>
                    <div className='img flex justify-center items-center mt-5'>
                        <img src="/img/logoNavbar.png" alt="" className='w-[130px] h-[115px]'/>
                    </div>
                    <div className="listNav text-white decoration list-none mt-[4vh]">
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 '>
                            <Link to="/Dashboard">
                                <button className='w-[18.3] h-full flex flex-row items-start justify-center  '>
                                    <img src="/img/imgNavbar/dashboard 1.png" className='w-full h-[24px] mr-2' alt="" />
                                    <p className='text-black '>dashboard</p>
                                </button>
                            </Link>  
                        </li>
                        <li className=' py-[0.5vh] mt-[5vh] ml-8 border-r-2 border-solid border-[rgba(16,92,140,1)] '> 
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


            <div className="containerIsi ml-3">

                        {/* top container */}
                        <div className="containerTop flex flex-row justify-between w-[70vw] mb-3 mt-5">
                            <h1 className= "text-3xl font-bold mr-auto my-auto">
                            Editor
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
                        <div className='flex flex-row'>
                            <div className='flex flex-col w-full '>
                                <div className=' h-32 w-full flex  items-center'>
                                        <input type="text" placeholder='' className="bg-white rounded-sm outline-0 border border-[rgba(16,92,140,1)] h-5 w-2/3 py-5 ml-2 rounded-t-xl rounded-b-xl"/>
                                </div>
                                <div className=''>
                                    <div className=' h-80 w-full flex  items-center'>
                                        <input type="text" placeholder='' className="bg-white rounded-sm outline-0 border border-[rgba(16,92,140,1)] w-2/3 pb-[40vh] ml-2 rounded-t-xl rounded-b-xl"/>
                                    </div>
                                    
                                </div>
                            </div>

                            <div className='flex flex-col items-center justify-center'>
                                <div className="flex flex-col items-center justify-end p-5 bg-[rgba(16,92,140,1)] rounded-lg shadow-md">
                                    <h2 className="mb-4 text-lg font-semibold text-white">Upload Gambar</h2>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                                    />
                                    {preview && (
                                        <div className="mt-4">
                                            <img
                                                src={preview}
                                                alt="Preview"
                                                className="max-w-xs rounded-md shadow-md"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                        {/* content end  */}

            </div>


        {/* footer */}
        <div className=" h-[6.3vh] w-full bg-[#0b598a] bottom-0 left-0 absolute flex justify-center items-center">
            <p>2024 copyright PEKA.com</p>
        </div>
        {/* footerend*/}

        </div>
        </>

    )
}

export default Editor;