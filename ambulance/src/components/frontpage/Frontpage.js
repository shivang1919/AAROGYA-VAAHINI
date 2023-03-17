import React from 'react';
import {NavLink} from 'react-router-dom'
export default function Frontpage() {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                   AAROGYA VAHINI
                </h1>
                <form className="mt-6">
                    
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            LOGIN AS A USER
                        </button>
                    </div>

                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            LOGIN AS A DRIVER 
                        </button>
                    </div>

                    
                </form>

                
            </div>
        </div>
    );
}