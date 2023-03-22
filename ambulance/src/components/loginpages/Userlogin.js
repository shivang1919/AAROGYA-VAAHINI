import React,{useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useGeoLocation from '../hooks/useGeoLocation';
export default function Userlogin() {
    const geolocation = useGeoLocation()
    const navigate=useNavigate();
    
    const [logdata, setdata] = useState({
        email:"",
        password:""
    })
    // const {account,setAccount} = useContext(LoginContext);
    const adddata = (e)=>{
        const{name,value} = e.target;
        setdata(() => {
            return {
                ...logdata,
                [name]:value
            }

        })
    }
    const senddata = async(e) => {
        var latitude = geolocation.coordinates.lat
        var longitude = geolocation.coordinates.lng
        e.preventDefault();
        console.log("I am here")
        const{email,password} = logdata;
        const res = await fetch("http://localhost:8000/api/users/login",{
            method: "POST",
            headers:{
                "content-Type": "application/json"                
            },
            body: JSON.stringify({
                email,password,
                latitude:latitude,
                longitude:longitude,
            })
        })
        const data = await res.json();
        console.log(data);
        localStorage.setItem("userdata",JSON.stringify( data));
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
        <div className="font-sans relative flex flex-col justify-center min-h-screen overflow-hidden h-full w-full bg-gray-400  backdrop-filter backdrop-blur-sm bg-opacity-5">
            <div className="w-full bg-[#1C2530] p-6 m-auto rounded-md border-2 border-gray-100 shadow-[0px_0px_40px_rgba(0,0,0,0.8)] shadow-zinc-400 lg:max-w-xl">
                <h1 className="text-3xl tracking-wider font-semibold text-center text-white">
                   WELCOME TO AAROGYA VAAHINI  USER LOGIN
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-lg tracking-wider -mb-1 mt-4 font-semibold text-[#F7B661]"
                        >
                            Email
                        </label>
                        <input
                            type="email" onChange={adddata} value={logdata.email} name="email"
                            className="block w-full px-4 py-2 mt-2 text-black-700 bg-white border rounded-md focus:ring-offset-fuchsia-50 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Enter your Email '
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-lg tracking-wider -mb-1 mt-4 font-semibold text-[#F7B661]"
                        >
                            Password
                        </label>
                        <input
                            type="password" onChange={adddata} value={logdata.password} name="password"
                            className="block w-full px-4 py-2 mt-2 text-p bg-white border rounded-md focus:border-blue-700 focus:ring-offset-fuchsia- focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Enter your Password '
                        />
                    </div>
                    
                    <div className="mt-6">
                        <button className="text-lg px-40 py-2 mx-20 tracking-wide text-white transition-colors duration-200 transform  bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none" onClick={senddata}>
                            Login
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-sm tracking-wider text-center text-zinc-100 mx-20">
                    {" "}
                    Don't have an account?{" "}
                    <div className="mt-6">
                        <NavLink to="/users/login/users/register">
                        <button className="text-lg px-36 py-2 tracking-wider text-white transition-colors duration-100 transform bg-blue-700 rounded-md hover:bg-blue-800 focus:outline-none">
                            Sign Up
                        </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}