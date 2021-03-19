import React from 'react';
import './SidebarOption.css'


function SidebarOption ({active,text, Icon, page, clickFunc}){
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`} onClick={() => clickFunc(page)}>
            <Icon />
            <h2>{text}</h2>
        </div>

    );
}

export default SidebarOption