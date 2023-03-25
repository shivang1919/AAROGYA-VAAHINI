
import React, { useState } from 'react'
// import axios from 'axios'
import {  useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Usersignup = () => {
    const navigate = useNavigate();
    const [udata, sdata] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: "",
        aadhar: ""

    });
    const adddata = (e) => {
        const { name, value } = e.target;
        sdata(() => {
            return {
                ...udata,
                [name]: value
            }
        })
    }
    const senddata = async (e) => {
        e.preventDefault();
        const { name, email, mobile, password, cpassword,aadhar } = udata
        console.log(udata)
        const res = await fetch("https://aarogya-vaahini-api.vercel.app/api/users/register", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, mobile, password, cpassword,aadhar
            })
        })
        const data = await res.json();
        console.log(data);
        if (res.status === 400 || !data) {
            toast.warn("inavalid details", {
                position: "top-center"
            })
        } else {
            // alert("data successfully added");
            toast.success("data successfully added", {
                postition: "top-center"
            })
            sdata({ ...udata, name: "", email: "", mobile: "", password: "", cpassword: "",aadhar:"" });
            navigate("/")
        }

    }
    return (

        <div className='w-full h-screen flex backdrop-filter backdrop-blur-sm bg-opacity-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[720px] shadow-2xl shadow-white-900 sm:max-w-[1200px] bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] rounded-lg'>
                <div className='w-full h-[720px] hidden md:block'>
                    <img className='w-full h-full rounded-lg' src="/user_Img1.jpg" alt="/" />
                </div>
                <div className='p-4 flex flex-col justify-around'>
                    <form className=''>
                        <h2 className='text-4xl font-bold tracking-wide text-center mb-8 text-[#00fff6]'>USER SIGN-UP</h2>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="name" className='text-white font-semibold text-xl tracking-wide'>Name <span className='text-red-500 text-xl'>*</span></label>
                            <input className='border focus:border-2 p-2 mr-2 rounded-md mt-2 focus:outline-none focus:ring focus:ring-opacity-90 focus:border-blue-500' placeholder='Name' type="name" onChange={adddata} value={udata.name} name="name" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="number" className='text-white text-xl font-semibold tracking-wide'>Mobile Number <span className='text-red-500'>*</span></label>
                            <input className='border focus:border-2 p-2 mr-2 rounded-md mt-2 focus:outline-none focus:ring focus:ring-opacity-90 focus:border-blue-500' placeholder='Mobile Number' type="text" onChange={adddata} value={udata.mobile} name="mobile" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="email" className='text-white text-xl font-semibold tracking-wide'>Email <span className='text-red-500'>*</span></label>
                            <input className='border focus:border-2 p-2 mr-2 rounded-md mt-2 focus:outline-none focus:ring focus:ring-opacity-90 focus:border-blue-500' placeholder='Email' type="email" onChange={adddata} value={udata.email} name="email" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="password" className='text-white text-xl font-semibold tracking-wide'>Password <span className='text-red-500'>*</span></label>
                            <input className='border focus:border-2 p-2 mr-2 rounded-md mt-2 focus:outline-none focus:ring focus:ring-opacity-90 focus:border-blue-500' placeholder='Password' type="password" onChange={adddata} value={udata.password} name="password" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="password" className='text-white text-xl font-semibold tracking-wide'>Confirm Password <span className='text-red-500'>*</span></label>
                            <input className='border focus:border-2 p-2 mr-2 rounded-md mt-2 focus:outline-none focus:ring focus:ring-opacity-90 focus:border-blue-500' placeholder='Confirm Password' type="password" onChange={adddata} value={udata.cpassword} name="cpassword" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="password" className='text-white text-xl font-semibold tracking-wide'>AADHAR NUMBER <span className='text-red-500'>*</span></label>
                            <input className='border focus:border-2 p-2 mr-2 rounded-md mt-2 focus:outline-none focus:ring focus:ring-opacity-90 focus:border-blue-500' placeholder='Enter your 12 digit aadhar number' type="text" onChange={adddata} value={udata.aadhar} name="aadhar" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <button className='w-60 py-2 my-4  hover:bg-[#241c1bb2] rounded-md bg-[#00FFF6] text-xl font-semibold tracking-normal hover:text-white' onClick={senddata}>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>

    )
}

export default Usersignup
  // "proxy": "https://aarogya-vaahini-api.vercel.app",
