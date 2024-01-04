import React, {useEffect, useState} from "react";
import {Map, Marker} from '@vis.gl/react-google-maps';

const CustomMap: React.FC = () => {
    const [positionIP, setPositionIP] = useState({lat: 48.85, lng: 2.29});

    //Call the ip-api from the backend to retrieve ip, country, region and city of the current user
    useEffect(() => {
      fetch('https://ip-map-explorer-backend.onrender.com/ipapi')
        .then((response) => response.json())
        .then((data) => {
          setPositionIP({ lat: data.lat, lng: data.lon });
        })
        .catch((error) => {
          console.error('Error fetching IP:', error);
        });
    }, []);

    return(
        <>
            <Map
                  zoom={11.5}
                  center={positionIP}
                  gestureHandling={'greedy'}
                  disableDefaultUI={false}
              >
                <Marker position={positionIP} />
              </Map>
        </>
    );
};

export default CustomMap;