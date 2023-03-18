import React from 'react';
import {NavLink} from 'react-router-dom'
export default function Frontpage() {

    return (
        <div className="bg-right bg-no-repeat font-sans relative flex flex-col justify-center min-h-screen overflow-hidden h-full w-full bg-gray-400  backdrop-filter backdrop-blur-sm bg-opacity-5 ">
            <div className="w-full bg-[#1C2530] p-6 m-auto rounded-md border-2 border-gray-100 shadow-[0px_0px_40px_rgba(0,0,0,0.8)] shadow-zinc-400 lg:max-w-xl">
                <h1 className="text-3xl tracking-wider font-semibold text-center text-white">
                   AAROGYA VAHINI
                </h1>
                <form className="my-6 flex justify-center flex-col place-items-center">
                    
                    <div className="mt-6">
                        <NavLink to="users/login/">
                        <button className="text-lg px-36 py-2 tracking-wider text-white transition-colors duration-100 transform bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none">
                            LOGIN AS A USER
                        </button>
                        </NavLink>
                    </div>

                    <div className="mt-6">
                        <NavLink to="drivers/login/">
                        <button className="text-lg px-36 pr-32 py-2 tracking-wider text-white transition-colors duration-100 transform bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none">
                            LOGIN AS A DRIVER 
                        </button>
                        </NavLink>
                    </div>

                    
                </form>

                
            </div>
        </div>
    );
}