import React, {useEffect, useState} from "react";
import {Map} from '@vis.gl/react-google-maps';

const CustomMap: React.FC = () => {
    const [position, setPosition] = useState({lat: 53.54, lng: 10})

    return(
        <Map
            zoom={9.2}
            center={position}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
        />
    )
}

export default CustomMap