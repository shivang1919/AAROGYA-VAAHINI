/*global google*/
import React, { useState, useRef } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import Markero from "./Markero"

const mapStyles = {
    width: '100%',
    height: '100%'
};



var userda = JSON.parse(localStorage.getItem("userdata"));
console.log(userda?.updatedUser?.latitude)

const Usermap = (props) => {
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
        const [activeMarker, setActiveMarker] = useState({})
        const [selectedPlace, setSelectedPlace] = useState({});
        const [showingInfoWindow, setShowingInfoWindow] = useState(false);
        const [updateddri, setUpdateddri] = useState([])
        const onMarkerClick = (props, marker) => {
            setActiveMarker(marker);
            setSelectedPlace(props);
            setShowingInfoWindow(true);
            console.log(props)

        }
        const onInfoWindowClose = () => {
            setActiveMarker(null);
            setShowingInfoWindow(false);
        }
        const onMapClicked = () => {
            if (this.state.showingInfoWindow) {
                setActiveMarker(null);
                setShowingInfoWindow(false);
            }
        };



        return (
            <Map google={window.google}
                zoom={14}
                style={mapStyles}
                initialCenter={
                    {
                        lat: userda?.updatedUser?.latitude,
                        lng: userda?.updatedUser?.longitude
                    }
                }
            >
                <Marker
                    onClick={onMarkerClick}
                    position={{
                        lat: userda?.updatedUser?.latitude,
                        lng: userda?.updatedUser?.longitude
                    }}
                    name={userda?.updatedUser?.name}
                    mobile={userda?.updatedUser?.mobile}
                />

                {
                    driver?.map((e) => {
                        return (
                            // <Markero e={e} />
                            <Marker
                                onClick={onMarkerClick}
                                name={e?.name}
                                mobile={e?.mobile}
                                position={{
                                    lat: e?.latitude,
                                    lng: e?.longitude
                                }}
                                email={e?.email}
                                icon={{

                                    url: '/ambumarker.png',

                                    anchor: new google.maps.Point(17, 46),

                                    scaledSize: new google.maps.Size(37, 37)

                                }}

                            />
                            // <InfoWindow
                            //     marker={activeMarker}
                            //     onClose={onInfoWindowClose}
                            //     visible={showingInfoWindow}
                            // >
                            //     <div>
                            //         <h4>{selectedPlace.name}</h4>
                            //         <h4>{selectedPlace.mobile}</h4>
                            //     </div>
                            // </InfoWindow>

                        )
                    })
                }
                <InfoWindow
                    marker={activeMarker}
                    onClose={onInfoWindowClose}
                    visible={showingInfoWindow}

                >
                    <div>
                        <h4>{selectedPlace.name}</h4>
                        {/* <a href={"sms:{selectedPlace.mobile}"}></a> */}
                        <a href={`tel:${selectedPlace.mobile}`}>test</a>

                    </div>
                    <button >Connect to driver</button>
                </InfoWindow>


            </Map >
        )
    }





    console.log(driver)
    return (
        <>

            <div className='flex-row'>

                <div >
                    <Mappo />
                </div>
                <div className='flex flex:col items-center justify-center relative top-84vh'>
                    <button className="z-10 items-left text-lg w-48 py-2 tracking-wider text-white transition-colors duration-100 transform bg-red-800 rounded-md hover:bg-white focus:outline-none hover:text-red-800 hover:font-semibold " onClick={showdrivers}>
                        See availible drivers
                    </button>
                </div>

            </div>
        </>
    )

}



export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_MAPS_API
})(Usermap);



