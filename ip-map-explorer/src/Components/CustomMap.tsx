import React from "react";
import {Map} from '@vis.gl/react-google-maps';

const CustomMap: React.FC = () => {
    return(
        <Map
            zoom={9}
            center={{lat: 53.54, lng: 10}}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
        />
    )
}

export default CustomMap