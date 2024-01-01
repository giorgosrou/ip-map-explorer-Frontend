import React, {useEffect, useState} from "react";
import {Map} from '@vis.gl/react-google-maps';

const CustomMap: React.FC = () => {
    const [positionIP, setPositionIP] = useState({lat: 53.54, lng: 10});
    const [userIP, setUserIP] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/getip')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text(); // Try parsing as text first
            })
            .then(text => {
                try {
                    const data = JSON.parse(text); // Try parsing as JSON
                    setUserIP(data.ip);
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                    setUserIP('Invalid IP data');
                }
            })
            .catch(error => {
                console.error('Error fetching IP:', error);
            });
    }, []);

    return(
        <>
            <Map
                zoom={9.2}
                center={positionIP}
                gestureHandling={'greedy'}
                disableDefaultUI={false}
            />
            <p className="text-black"> {userIP}</p>
        </>


    );
};

export default CustomMap;