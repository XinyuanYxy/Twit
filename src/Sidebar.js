import React from "react";
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PermidentityIcon from '@material-ui/icons/PermIdentity';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Sidebar({setUrl, currentPage}){
    const logout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }

    return (
        <div className="sidebar">
            {/* twitter icon*/}
            <TwitterIcon className="sidebar_twitterIcon" />
            {/* twitter option*/}
            <SidebarOption active={currentPage === 0} Icon ={HomeIcon} text = "Home" path={"/"} clickFunc={setUrl}/>
            <SidebarOption active={currentPage === 3} Icon ={SearchIcon} text = "Search" path={"search"} clickFunc={setUrl}/>

            <SidebarOption active={currentPage === 2} Icon ={PermidentityIcon} text = "Profile" path={"profile"} clickFunc={setUrl}/>
            <SidebarOption active={null} Icon={ExitToAppIcon} text="Logout" clickFunc={logout} />
        </div>

    );
}

export default Sidebar;