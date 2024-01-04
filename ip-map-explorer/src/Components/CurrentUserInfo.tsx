import React, { useEffect, useState } from "react";
import { FaFlag, FaMapMarkerAlt } from "react-icons/fa"

const CurrentUserInfo: React.FC = () => {

    const [userIP, setUserIP] = useState('');
    const [userCountry, setUserCountry] = useState('');
    const [userRegion, setUserRegion] = useState('');
    const [userCity, setUserCity] = useState('');

    //Call the ip-api from the backend to retrieve ip, country, region and city of the current user
    useEffect(() => {
        fetch('http://localhost:3000/ipapi')
            .then((response) => response.json())
            .then((data) => {
            setUserIP(data.query);
            setUserCountry(data.country);
            setUserRegion(data.regionName);
            setUserCity(data.city);
            })
            .catch((error) => {
            console.error('Error fetching IP:', error);
            setUserIP('Invalid IP data');
            setUserCountry('Unknown');
            setUserRegion('Unknown');
            setUserCity('Unknown');
            });
        }, []);

    return (
        <div className="user-info border-2 border-white flex-wrap">
            <div className="info-section">
                <p className="text-white font-bold ml-2">
                    You have been connected from:
                </p>
            </div>
            <div className="info-section">
                <p className="text-white ml-2">
                    IP address: {userIP}
                </p>
            </div>
            <div className="info-section">
                <p className="text-white ml-2">
                    <span className="icon"><FaFlag /></span> Country: {userCountry}
                </p>
            </div>
            <div className="info-section">
                <p className="text-white ml-2">
                    <span className="icon"><FaMapMarkerAlt /></span> Region: {userRegion}
                </p>
            </div>
            <div className="info-section">
                <p className="text-white ml-2">
                    City: {userCity}
                </p>
            </div>
        </div>
    );
}

export default CurrentUserInfo;