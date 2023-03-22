import React from 'react'

const Usermap = () => {
    const showdrivers = async(e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:8000/api/drivers/getavailabledrivers",{
            method: "GET",
            headers:{
                "content-Type": "application/json"                
            },
        })
        const data = await res.json();
        console.log(data)
        localStorage.setItem("availibledriver",JSON.stringify(data))
    }
    return (
        <div >
            <button className="bg-blue-500 items-center hover:bg-blue-700 justify-center text-white font-bold py-2 px-4 rounded" onClick={showdrivers}>
                Button
            </button>
        </div>
    )
}

export default Usermap
