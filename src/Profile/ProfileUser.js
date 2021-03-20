import React from 'react'
import "./ProfileUser.css";
import {Avatar} from '@material-ui/core';

function ProfileUser({user}) {

    return (
        <div className="profileUser">
            <div className="profileUser_avatar">
                <Avatar style={{ height: '70px', width: '70px' }} src={"images/"+user.avatar}/>
            </div>
            <div className="profileUser_body">
                <div className="profileUser_header">
                    <div className="profileUser_headerText">
                        <h3> 
                            {user.displayname}{" "}
                        </h3>
                    </div>
                    <h4 className="profileUser_description">
                        {user.description}
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default ProfileUser
