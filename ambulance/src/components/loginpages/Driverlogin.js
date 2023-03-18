import React from 'react';
import {NavLink} from 'react-router-dom'
export default function Driverlogin() {
    return (
        <div className="relative bg-[#1C2530] flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full bg-[#1C2530] p-6 m-auto rounded-md border-2 border-gray-500 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-white">
                   WELCOME TO AAROGYA VAAHINI
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-[#F7B661]"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:border-blue-700 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-[#F7B661]"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-p bg-white border rounded-md focus:border-blue-700 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    
                    <div className="mt-6">
                        <button className=" px-40 py-2 mx-20 tracking-wide text-white transition-colors duration-200 transform  bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-purple-600">
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-semibold  text-center text-zinc-300">
                    {" "}
                    Don't have an account?{" "}
                    <div className="mt-6">
                        <NavLink to="drivers/register">
                        <button className=" px-40 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none focus:bg-purple-600">
                            Sign Up
                        </button>
                        </NavLink>
                    </div>
                </p>
            </div>
        </div>
    );
}