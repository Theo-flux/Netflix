import { Container, List, User, Title, Avatar, Name } from './styles/Profile'

function Profile({ children, ...restProps }){
    return(
        <Container { ...restProps }> { children } </Container>
    )
}

Profile.List = function ProfileList( { children, ...restProps }){
    return <List { ...restProps }> { children } </List>
}

Profile.User = function ProfileUser( { children, ...restProps }){
    return <User { ...restProps }> { children } </User>
}

Profile.Title = function ProfileTitle( { children, ...restProps }){
    return <Title { ...restProps }> { children } </Title>
}

Profile.Avatar = function ProfileAvatar( { src, ...restProps }){
    return <Avatar src={src ? `/images/users/${src}.png` : `images/misc/loading.gif`} { ...restProps }/>
}

Profile.Name = function ProfileName( { children, ...restProps }){
    return <Name> { children } </Name>
}

export default Profile  

