import React from 'react';
import {NavLink} from 'react-router-dom'
export default function Frontpage() {

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-transparent rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-white ">
                   AAROGYA VAHINI
                </h1>
                <form className="mt-6">
                    
                    <div className="mt-6">
                        <NavLink to="users/login/">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            LOGIN AS A USER
                        </button>
                        </NavLink>
                    </div>

                    <div className="mt-6">
                        <NavLink to="drivers/login/">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            LOGIN AS A DRIVER 
                        </button>
                        </NavLink>
                    </div>

                    
                </form>

                
            </div>
        </div>
    );
}