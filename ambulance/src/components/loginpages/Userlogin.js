import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useGeoLocation from '../hooks/useGeoLocation';
export default function Userlogin() {
    const geolocation = useGeoLocation()
    const navigate = useNavigate();

    const [logdata, setdata] = useState({
        email: "",
        password: ""
    })
    // const {account,setAccount} = useContext(LoginContext);
    const adddata = (e) => {
        const { name, value } = e.target;
        setdata(() => {
            return {
                ...logdata,
                [name]: value
            }

        })
    }
    const senddata = async (e) => {
        var latitude = geolocation.coordinates.lat
        var longitude = geolocation.coordinates.lng
        e.preventDefault();
        console.log("I am here")
        const { email, password } = logdata;
        const res = await fetch("https://aarogya-vaahini-api.vercel.app/api/users/login", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password,
                latitude: latitude,
                longitude: longitude,
            })
        })
        const data = await res.json();
        console.log(data);
        localStorage.setItem("userdata", JSON.stringify(data));
        if (res.status === 400 || !data) {
            console.log("invalid details");
            toast.warn("invalid details", {
                position: 'top-center'
            })
        } else {
            console.log("data valid")
            // setAccount(data)
            toast.success("login done successfully", {
                position: "top-center"
            })
            setdata({ ...logdata, email: "", password: "" });
            navigate("/users/login/users/map")
        }


    }
    return (

        <div className='w-full h-screen flex backdrop-filter backdrop-blur-sm bg-opacity-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[540px] shadow-2xl shadow-white-900 sm:max-w-[950px] bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50] rounded-lg'>
                <div className='w-full h-[540px] hidden md:block'>
                    <img className='w-full h-full rounded-lg' src="/user_Img1.jpg" alt="/" />
                </div>
                <div className='p-4 flex flex-col justify-around'>
                    <form className=''>
                        <h2 className='text-4xl font-bold tracking-wide text-center mb-8 text-[#00fff6]'>USER LOGIN</h2>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="email" className='text-white font-semibold text-xl tracking-wide'>Email <span className='text-red-500 text-xl'>*</span></label>
                            <input className='border focus:border-2 p-2 mr-2 rounded-md mt-2 focus:outline-none focus:ring focus:ring-opacity-90 focus:border-blue-500' placeholder='Email' type="email" onChange={adddata} value={logdata.email} name="email" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="password" className='text-white text-xl font-semibold tracking-wide'>Password <span className='text-red-500'>*</span></label>
                            <input className='border focus:border-2 p-2 mr-2 rounded-md mt-2 focus:outline-none focus:ring focus:ring-opacity-90 focus:border-blue-500' placeholder='Password' type="password" onChange={adddata} value={logdata.password} name="password" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <button className='w-60 py-2 my-4  hover:bg-[#241c1bb2] rounded-md bg-[#00FFF6] text-xl font-semibold tracking-normal hover:text-white' onClick={senddata}>Login</button>
                            <p className='text-center text-white'>Don't have an account?</p>
                            <NavLink to="/users/login/users/register">
                                <button className='w-60 py-2 my-4  hover:bg-[#241c1bb2] rounded-md bg-[#00FFF6] text-xl font-semibold tracking-normal hover:text-white'>Sign Up</button>
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>

    );
}