/*global google*/
import React, { useState } from 'react'
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
// let iconMarker = new window.google.maps.MarkerImage(
//     "https://img.lovepik.com/element/45000/6349.png_300.png",
//     null, /* size is determined at runtime */
//     null, /* origin is 0,0 */
//     null, /* anchor is bottom center of the scaled image */
//     new window.google.maps.Size(32, 32)
// );
const mapStyles = {
    width: '80%',
    height: '80%'
};


var userda = JSON.parse(localStorage.getItem("userdata"));
console.log(userda.updatedUser.latitude)

const Usermap = () => {
    const [driver, setDriver] = useState([])
    const showdrivers = async (e) => {
        e.preventDefault();
        const res = await fetch("https://aarogya-vaahini-api.vercel.app/api/drivers/getavailabledrivers", {
            method: "GET",
            headers: {
                "content-Type": "application/json"
            },
        })
        const dridata = await res.json();
        setDriver(dridata?.availableDriver)
        return dridata

        // localStorage.setItem("availibledriver",JSON.stringify(dridata))
    }
    function Mappo() {
        const [activeMarker, setActiveMarker] = useState(null)
        const handleActiveMarker = (marker) => {
            if (marker === activeMarker) {
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
                {
                    driver?.map((e) => {
                        return (
                            <Marker position={{
                                lat: e?.latitude,
                                lng: e?.longitude
                            }}
                            icon={{

                                url: '/ambulance_marker.jpg',
                        
                                anchor: new google.maps.Point(17, 46),
                        
                                scaledSize: new google.maps.Size(37, 37)
                        
                            }}
                            // icon={iconMarker}
                            />
                        )
                    })


                }




            </Map>
        )
    }



    console.log(driver)
    return (
        <>

            <div className='flex-row'>
                <div>
                    <button className="bg-blue-500 items-center z-10 position:relative  hover:bg-blue-700 justify-center text-white font-bold py-2 px-4 rounded mt-75px" onClick={showdrivers}>
                        Button
                    </button>
                </div>
                <div className='position-relative'>
                    <Mappo />
                </div>

            </div>
        </>
    )

}

export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_MAPS_API
})(Usermap);