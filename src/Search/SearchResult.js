import React from 'react'
import "./SearchResult.css";
import { Avatar} from '@material-ui/core';
import {Link} from "react-router-dom";

function SearchResult({user, displayProfile}) {

    const getImageSrc = () => {
        let imgSrc;
        if (user.avatar_image_path !== null && user.avatar_image_path !== "null") {
            imgSrc = "http://localhost:3001/images/"+user.avatar_image_path;
        } else {
            imgSrc = "";
        }
        return imgSrc;
    }

    return (
        <Link to={'profile'} className='link'>
            <div className="searchResult">
                <div className="searchResult_avatar">
                    <Avatar style={{ height: '70px', width: '70px' }} src={getImageSrc()} onClick={()=>displayProfile(user)}/>
                </div>
                <div className="searchResult_body">
                    <div className="searchResult_header">
                        <div className="searchResult_headerText">
                            <h3 onClick={()=>displayProfile(user)}> 
                                {user.fname}{" "} <span className="searchResult_headerUsername">
                                    {'@'}{user.username}
                                    </span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SearchResult
