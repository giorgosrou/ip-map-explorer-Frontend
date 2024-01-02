import React from "react";
import { FaFlag, FaMapMarkerAlt } from "react-icons/fa"

type UserInfoProps = {
    userIP?: string;
    userCountry?: string;
    userRegion?:string;
    userCity?: string;
}

const UserInfo = ({
    userIP = '',
    userCountry = '',
    userRegion = '',
    userCity = ''
}: UserInfoProps) => {
    return (
        <div className="user-info">
            <div className="info-section">
                <p className="text-white font-bold ml-2">
                    IP address: {userIP}
                </p>
            </div>
            <div className="info-section">
                <p className="text-white font-bold ml-2">
                    <span className="icon"><FaFlag /></span> Country: {userCountry}
                </p>
            </div>
            <div className="info-section">
                <p className="text-white font-bold ml-2">
                    <span className="icon"><FaMapMarkerAlt /></span> Region: {userRegion}
                </p>
            </div>
            <div className="info-section">
                <p className="text-white font-bold ml-2">
                    City: {userCity}
                </p>
            </div>
        </div>
    );
}

export default UserInfo;