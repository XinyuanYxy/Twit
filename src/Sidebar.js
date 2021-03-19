import React from "react";
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import Notification from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermidentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import {Button} from '@material-ui/core';


function Sidebar({setPage, currentPage}){
    return (
        <div className="sidebar">
            {/* twitter icon*/}
            <TwitterIcon className="sidebar_twitterIcon" />
            {/* twitter option*/}
            <SidebarOption active={currentPage === 0} Icon ={HomeIcon} text = "Home" page={0} clickFunc={setPage}/>
            <SidebarOption active={currentPage === 3} Icon ={SearchIcon} text = "Search" page={3} clickFunc={setPage}/>
            {/*<SidebarOption Icon ={Notification} text = "Notification"/>*/}
            {/*<SidebarOption Icon ={MailOutlineIcon} text = "Messages"/>*/}
            <SidebarOption active={currentPage === 2} Icon ={PermidentityIcon} text = "Profile" page={2} clickFunc={setPage}/>
            
          
            {/* button -> twitter*/}
            {/*<Button variant = "outlined" className="sidebar_tweet" fullWidth  > Tweet </Button>*/}
            



        </div>

    );
}

export default Sidebar;