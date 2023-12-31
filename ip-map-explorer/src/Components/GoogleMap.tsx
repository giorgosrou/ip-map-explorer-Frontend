import React from "react";
import {APIProvider} from '@vis.gl/react-google-maps';
import CustomMap from "./CustomMap";


const GoogleMap: React.FC = () => {
    const APIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';

    return (
        <APIProvider apiKey={APIKey}>
            <div className="h-screen w-screen flex justify-center items-center">
                <CustomMap />
            </div>
        </APIProvider>
    )
}

export default GoogleMap;