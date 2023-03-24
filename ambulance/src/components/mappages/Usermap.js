/*global google*/
import React,{useState} from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const mapStyles = {
    width: '80%',
    height: '80%'
};

const showdrivers = async (e) => {
    e.preventDefault();
    const res = await fetch("https://aarogya-vaahini-api.vercel.app/api/drivers/getavailabledrivers", {
        method: "GET",
        headers: {
            "content-Type": "application/json"
        },
    })
    const dridata = await res.json();
    return dridata

    // localStorage.setItem("availibledriver",JSON.stringify(dridata))
}
var driverda = showdrivers()
console.log(driverda)

var userda = JSON.parse(localStorage.getItem("userdata"));
console.log(userda.updatedUser.latitude)
function Mappo() {
    const [activeMarker,setActiveMarker] = useState(null)
    const handleActiveMarker = (marker)=>{
        if(marker === activeMarker){
            return;
        }
        setActiveMarker(marker)
    }
    const handleOnLoad = (map) => {
        const bounds = new google.maps
    }
    return (
        <Map google={window.google}
            zoom={14}
            style={mapStyles}
            initialCenter={
                {
                    lat: userda.updatedUser.latitude,
                    lng: userda.updatedUser.longitude
                }
            }
        >
            <Marker position={{
                lat: userda.updatedUser.latitude,
                lng: userda.updatedUser.longitude
            }}
                name={userda.updatedUser.name}
            >
            </Marker>
            {/* {
                driverda.availibleDriver.map((e)=>{
                    <Marker 
                    position={{lat:driverda[e].latitude,lng:driverda[e].longitude}}
                    />

                    
                })
            } */}
        
            

        </Map>
    )
}
const Usermap = () => {



    return (
        <>

            <div className='flex-row'>
                <div className='position-relative'>
                    <Mappo />
                </div>
                <div>
                    <button className="bg-blue-500 items-center z-10 position:relative  hover:bg-blue-700 justify-center text-white font-bold py-2 px-4 rounded mt-75px" onClick={showdrivers}>
                        Button
                    </button>
                </div>

            </div>
        </>
    )
    // return (
    //     <>
    //         <Map />
    //         <div >
    //             <button className="bg-blue-500 items-center hover:bg-blue-700 justify-center text-white font-bold py-2 px-4 rounded" onClick={showdrivers}>
    //                 Button
    //             </button>
    //         </div>
    //     </>
    // )
}

export default GoogleApiWrapper({
    // apiKey: process.env.GOOGLE_MAPS_API
})(Usermap);