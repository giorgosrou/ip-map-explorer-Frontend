import React from "react";
import { Tilt } from 'react-tilt'
const logo = require ("../Assets/worldmap.png")


const Logo: React.FC = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" options={{ max : 40 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa5">
                    <img style={{paddingTop: '1px'}} alt='logo' src={logo}/>
                </div>
            </Tilt>
        </div>

    )
}

export default Logo;