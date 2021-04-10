import React from "react";
import './Sidebar.css';
import axios from './api/axios';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PermidentityIcon from '@material-ui/icons/PermIdentity';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
}
export default class Sidebar extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="sidebar">
                {/* twitter icon*/}
                <div className="sidebar_iconContainer">
                    <img src="logo.png" className="sidebar_twitterIcon" />
                </div>
                {/* twitter option*/}
                <SidebarOption active={this.props.currentPage === 0} Icon ={HomeIcon} text = "Home" path={"/"}/>
                <SidebarOption active={this.props.currentPage === 3} Icon ={SearchIcon} text = "Search" path={"search"}/>

                <SidebarOption active={this.props.currentPage === 2} Icon ={PermidentityIcon} text = "Profile" path={"profile/me"}/>

                <SidebarOption active={null} Icon={ExitToAppIcon} text="Logout" clickFunc={logout} path={"/"}/>

            </div>

        );
    }
}