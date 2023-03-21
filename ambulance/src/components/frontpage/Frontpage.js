import React from 'react';
import { NavLink } from 'react-router-dom'
export default function Frontpage() {

    return (

        <div className="bg-right bg-no-repeat font-sans relative flex flex-col justify-center min-h-screen overflow-hidden h-full w-full bg-gray-400  backdrop-filter backdrop-blur-sm bg-opacity-5 ">
            <h1 className="text-right text-7xl tracking-wider font-semibold font-serif text-red-600 mr-20 mb-70 ">
                Aarogya<span className="text-7xl tracking-wider font-semibold font-serif text-white ml-4 mb-8">Vahini</span>
            </h1>
            <div className="mb-32">
                <p className="pFont text-start fixed ml-60 text-7xl tracking-wider font-semibold text-center text-white mt-16">
                    24/7
                </p>
                <p className="pFont text-start fixed ml-24 text-5xl tracking-wider font-extrabold text-center text-white mt-40 mb-20">
                    <span className="text-red-600">Emergency </span>Service
                </p>
                <p className="pFont text-start fixed text-2xl tracking-wider font-semibold text-center text-white mt-72 ml-20">
                    Now get your ambulance at<br></br> your footstep.
                </p>
                    <div className="items-left content-start mt-32 mr-auto">
                        <NavLink to="users/login/">

                            <button className="text-lg w-48 py-2 tracking-wider text-white transition-colors duration-100 transform bg-blue-800 rounded-md hover:bg-white focus:outline-none hover:text-black hover:font-semibold ml-32 mr-4 mt-64">
                            
                                USER LOGIN
                            </button>
                        </NavLink>
                        <NavLink to="drivers/login/">
                            <button className="items-left text-lg w-48 py-2 tracking-wider text-white transition-colors duration-100 transform bg-blue-800 rounded-md hover:bg-white focus:outline-none hover:text-black hover:font-semibold">
                                DRIVER LOGIN
                            </button>
                        </NavLink>
                    </div>

            </div>
        </div>
    );
}