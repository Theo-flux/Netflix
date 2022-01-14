import React, { useState } from "react"

import UserProfile from "./ProfileContainer"
import FooterContainer from './FooterContainer'

function BrowseContainer(){
    const users = [
        {
            userName: 'Victor',
            photoId: '1'
        },

        {
            userName: 'Phil',
            photoId: '2'
        },

        {
            userName: 'Luthor',
            photoId: '3'
        },

        {
            userName: 'Peter',
            photoId: '4'
        },
    ]

    const [profile, setProfile] = useState({})

    return profile.userName ?
        (
            <React.Fragment>
                <p style={{color:'white'}}>{profile.userName}</p>
                <p>{profile.photoId}</p>
                <FooterContainer/>
            </React.Fragment>
        )
        
        :
        
        (
            <UserProfile users={users} setProfile={setProfile} />
        )
}

export default BrowseContainer