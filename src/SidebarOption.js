import React from 'react';
import './SidebarOption.css'


function SidebarOption ({active,text, Icon, path, clickFunc}){
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`} onClick={() => clickFunc(path)}>
            <Icon />
            <h2>{text}</h2>
        </div>

    );
}

export default SidebarOption