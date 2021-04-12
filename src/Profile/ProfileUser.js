import React, {useRef} from 'react'
import "./ProfileUser.css";
import {Avatar} from '@material-ui/core';

function ProfileUser({user, isMe, profilePicDidChange, isFollowing, setFollowing}) {
    const inputFile = useRef(null);
    
    const upload = () => {
        inputFile.current.click();
    };

    const saveImage = (e) => {
        if (e.target.files[0]) {
            profilePicDidChange(e.target.files[0])
        }
    }
    
    const getImageSrc = () => {
        let imgSrc;
        if (user.image_path !== null && user.image_path !== "null") {
            imgSrc = "http://localhost:3001/images/"+user.image_path;
        } else {
            imgSrc = "";
        }
        return imgSrc;
    }

    return (
        <div className="profileUser">
            <div className={`profileUser_avatar ${isMe && "profileUser_avatar_editable"}`} onClick={isMe ? upload : null}>
                { isMe && <input id="image_upload" class="image_upload" type="file" ref={inputFile} onChange={saveImage} /> }
                <Avatar style={{ height: '70px', width: '70px' }} src={getImageSrc()} />
            </div>
            <div className="profileUser_body">
                <div className="profileUser_header">
                    <div className="profileUser_headerText">
                        <h3> 
                            {user.fname}{" "}
                        </h3>
                    </div>
                    <h4 className="profileUser_description">
                        {user.description}
                    </h4>
                </div>
            </div>
            {!isMe &&
            <button onClick={() => setFollowing(!isFollowing)}>  {isFollowing && 'Following'} {!isFollowing && 'Follow'} </button>
            }
        </div>
    )
}

export default ProfileUser
