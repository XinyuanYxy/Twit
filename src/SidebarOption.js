import React from 'react';
import './SidebarOption.css'
import {Link} from "react-router-dom";


function SidebarOption ({active,text, Icon, path, clickFunc}){
    return (
        <Link className="link" to={path} onClick={clickFunc}>
            <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
                <Icon />
                <h2>{text}</h2>
            </div>
        </Link>

    );
}

export default SidebarOption