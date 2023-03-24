/*global google*/
import React,{useState} from 'react'
import { Marker, InfoWindow } from 'google-maps-react';

const Markero = ({ e }) => {
    const [activeMarker, setActiveMarker] = useState({})
    const [selectedPlace, setSelectedPlace] = useState({});
    const [showingInfoWindow, setShowingInfoWindow] = useState(false);
    const onMarkerClick = (props, marker) => {
        setActiveMarker(marker);
        setSelectedPlace(props);
        setShowingInfoWindow(true);
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
        <div>
            <Marker
                onClick={onMarkerClick}
                name={e?.name}
                mobile={e?.mobile}
                position={{
                    lat: e?.latitude,
                    lng: e?.longitude
                }}
                icon={{

                    url: '/ambulance_marker.jpg',

                    anchor: new google.maps.Point(17, 46),

                    scaledSize: new google.maps.Size(37, 37)

                }}

            />
            <InfoWindow
                marker={activeMarker}
                onClose={onInfoWindowClose}
                visible={showingInfoWindow}
            >
                <div>
                    <h4>{selectedPlace.name}</h4>
                    <h4>{selectedPlace.mobile}</h4>
                </div>
            </InfoWindow>
        </div>
    )
}

export default Markero
