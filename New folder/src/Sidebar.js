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
import { Link } from "react-router-dom";

function Sidebar(){
    return (
        <div className="sidebar">
            {/* twitter icon*/}
            <TwitterIcon className="sidebar_twitterIcon" />
            {/* twitter option*/}
            <SidebarOption active Icon ={HomeIcon} text = "Home"/>
            <SidebarOption Icon ={SearchIcon} text = "Explore"/>
            <SidebarOption Icon ={Notification} text = "Notification"/>
            <SidebarOption Icon ={MailOutlineIcon} text = "Messages"/>
            <SidebarOption Icon ={BookmarkBorderIcon} text = "Bookmars"/>
            <SidebarOption Icon ={ListAltIcon} text = "Lists"/>
            <SidebarOption Icon ={PermidentityIcon} text = "Profile"/>
            <SidebarOption Icon ={MoreHorizIcon} text = "More"/>
            <Link to="/search">
                <SidebarOption Icon ={MoreHorizIcon} text = "Search" />
            </Link>
          
            {/* button -> twitter*/}
            <Button variant = "outlined" className="sidebar_tweet" fullWidth  > Tweet </Button>
            



        </div>

    );
}

export default Sidebar;