import React from "react";
import {APIProvider} from '@vis.gl/react-google-maps';
import CustomMap from "./CustomMap";


const GoogleMap: React.FC = () => {
    const APIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';

    return (
        <APIProvider apiKey={APIKey}>
            <div className="flex justify-center items-center border-2 border-white" style={{ margin: '40px', height: 'calc(90vh - 40px)', width: 'calc(90vw - 40px)' }}>
                <CustomMap />
            </div>
        </APIProvider>
    );
}

export default GoogleMap;