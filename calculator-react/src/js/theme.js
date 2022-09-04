import React from "react";

const Theme = () => {
    return ( 
        <div className="theme">
            <div className="theme_count ">
                <span>1 2 3</span>
                <input type="range" min="1" max="3" defaultValue="1" id="slider" className="slider " />
            </div>
        </div>
    );
}
 
export default Theme;