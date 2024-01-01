import React, {useEffect, useState} from "react";
import {Map} from '@vis.gl/react-google-maps';

const CustomMap: React.FC = () => {
    const [positionIP, setPositionIP] = useState({lat: 53.54, lng: 10});
    const [userIP, setUserIP] = useState('');

    useEffect(() => {
        fetch('http://localhost:3000/getip')
          .then((response) => response.text())
          .then((text) => {
            try {
              const data = JSON.parse(text);
              setUserIP(data.ip);
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
            <Map
                zoom={11.5}
                center={positionIP}
                gestureHandling={'greedy'}
                disableDefaultUI={false}
            />
            <p className="text-white font-bold ml-2"> Your current IP address is: {userIP}</p>
        </>


    );
};

export default CustomMap;