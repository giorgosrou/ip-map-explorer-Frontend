import React, {useEffect, useState} from "react";
import {Map, Marker} from '@vis.gl/react-google-maps';
import UserInfo from "./UserInfo";

const CustomMap: React.FC = () => {
    const [positionIP, setPositionIP] = useState({lat: 48.85, lng: 2.29});
    const [userIP, setUserIP] = useState('');
    const [userCountry, setUserCountry] = useState('');
    const [userRegion, setUserRegion] = useState('');
    const [userCity, setUserCity] = useState('');

    //Currently not used - Call the api.ipify api from the backend to retrieve ip - ip-api is used instead
    // useEffect(() => {
    //     fetch('http://localhost:3000/getip')
    //       .then((response) => response.text())
    //       .then((text) => {
    //         try {
    //           const data = JSON.parse(text);
    //           setUserIP(data.ip);
    //         } catch (error) {
    //           console.error('Error parsing JSON:', error);
    //           setUserIP('Invalid IP data');
    //         }
    //       })
    //       .catch((error) => {
    //         console.error('Error fetching IP:', error);
    //       });
    //   }, []);

    //Call the ip-api api from the backend to retrieve ip, country, region and city
    useEffect(() => {
      fetch('http://localhost:3000/ipapi')
        .then((response) => response.text())
        .then((text) => {
          try {
            const data = JSON.parse(text);
            setUserIP(data.query);
            setUserCountry(data.country)
            setUserRegion(data.regionName)
            setUserCity(data.city)
            setPositionIP({lat: data.lat, lng: data.lon})
          } catch (error) {
            console.error('Error parsing JSON:', error);
            setUserIP('Invalid IP data');
          }
        })
        .catch((error) => {
          console.error('Error fetching IP:', error);
        });
    }, []);

    return(
        <>
            < UserInfo userIP = {userIP} userCountry= {userCountry} userRegion={userRegion} userCity= {userCity}/>
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