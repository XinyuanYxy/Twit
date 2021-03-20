import React from "react";
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PermidentityIcon from '@material-ui/icons/PermIdentity';

function Sidebar({currentPage}){
    return (
        <div className="sidebar">
            {/* twitter icon*/}
            <TwitterIcon className="sidebar_twitterIcon" />
            {/* twitter option*/}
            <SidebarOption active={currentPage === 0} Icon ={HomeIcon} text = "Home" path={"/"}/>
            <SidebarOption active={currentPage === 3} Icon ={SearchIcon} text = "Search" path={"search"}/>

            <SidebarOption active={currentPage === 2} Icon ={PermidentityIcon} text = "Profile" path={"profile"}/>

        </div>

    );
}

export default Sidebar;