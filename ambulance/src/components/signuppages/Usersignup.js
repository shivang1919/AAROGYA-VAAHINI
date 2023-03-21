import React, { useState } from 'react'
// import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Usersignup = () => {
    const [udata, sdata] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""

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
        const { name, email, mobile, password, cpassword } = udata
        console.log(udata)
        const res = await fetch("https://aarogya-vaahini-api.vercel.app/api/users/register", {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, mobile, password, cpassword
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
            sdata({ ...udata, name: "", email: "", mobile: "", password: "", cpassword: "" });
        }

    }
    return (
        <div className="font-sans relative flex flex-col justify-center min-h-screen overflow-hidden h-full w-full bg-gray-400  backdrop-filter backdrop-blur-sm bg-opacity-5">
            <div className="w-full bg-[#1C2530] p-6 m-auto rounded-md border-2 border-gray-100 shadow-[0px_0px_40px_rgba(0,0,0,0.8)] shadow-zinc-400 lg:max-w-xl">
                <h1 className="text-3xl tracking-wider font-semibold text-center text-white">
                    WELCOME TO AAROGYA VAAHINI USER SIGN-UP
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="name"
                            className="block tracking-wider -mb-1 mt-4 text-lg font-semibold text-[#F7B661]"
                        >
                            Name
                        </label>
                        <input
                            type="name" onChange={adddata} value={udata.name} name="name"
                            className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:ring-offset-fuchsia-50 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Enter your name '
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="number"
                            className="block tracking-wider -mb-1 mt-4 text-lg font-semibold text-[#F7B661]"
                        >
                            Mobile Number
                        </label>
                        <input
                            type="text" onChange={adddata} value={udata.mobile} name="mobile"
                            className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:ring-offset-fuchsia-50 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Enter your mobile number '
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block tracking-wider -mb-1 mt-4 text-lg font-semibold text-[#F7B661]"
                        >
                            Email
                        </label>
                        <input
                            type="email" onChange={adddata} value={udata.email} name="email"
                            className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:ring-offset-fuchsia-50 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Enter your email '
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block tracking-wider -mb-1 mt-4 text-lg font-semibold text-[#F7B661]"
                        >
                            Password
                        </label>
                        <input
                            type="password" onChange={adddata} value={udata.password} name="password"
                            className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:ring-offset-fuchsia-50 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Enter your password'
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block tracking-wider -mb-1 mt-4 text-lg font-semibold text-[#F7B661]"
                        >
                            Confirm Password
                        </label>
                        <input
                            type="password" onChange={adddata} value={udata.password} name="cpassword"
                            className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:ring-offset-fuchsia-50 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Enter your confirmed password'
                        />
                    </div>

                    <div className="mt-6">
                        <button className="text-lg px-36 py-2 mx-20 tracking-wide text-white transition-colors duration-200 transform  bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none " onClick={senddata}>
                            SIGN UP
                        </button>
                    </div>
                </form>

                
            </div>
            <ToastContainer />
        </div>

    )
}

export default Usersignup
  // "proxy": "https://aarogya-vaahini-api.vercel.app",
