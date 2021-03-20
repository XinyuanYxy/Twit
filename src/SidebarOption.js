import React from 'react';
import './SidebarOption.css'
import {Link} from "react-router-dom";


function SidebarOption ({active,text, Icon, path}){
    return (
        <Link className="link" to={path}>
            <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
                <Icon />
                <h2>{text}</h2>
            </div>
        </Link>

    );
}

export default SidebarOption