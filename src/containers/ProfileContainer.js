import { Hero, Profile } from '../components'
import NavbarContainer from './NavbarContainer'

function UserProfile({ users, setProfile }){
    return(
        <Hero.Container borderBottom='false' >
            <Hero>
                <NavbarContainer/>
            </Hero>

            <Profile>
                <Profile.Title>who's watching?</Profile.Title>
                <Profile.List>
                    {users.map((user) => 
                        <Profile.User onClick={() => setProfile({
                            userName: user.userName,
                            photoId: user.photoId
                        })}>
                            <Profile.Avatar src={user.photoId}/>
                            <Profile.Name>{user.userName}</Profile.Name>
                        </Profile.User>
                    )}
                </Profile.List>
            </Profile>
        </Hero.Container>
    )
}

export default UserProfile