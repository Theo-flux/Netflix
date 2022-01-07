import { Container, Inner, Logo, ButtonLink, HomeLink } from './styles/Navbar'


function Navbar({ children }){
    return(
        <Container>{ children }</Container>
    )
}

Navbar.Inner = function NavbarInner({ children }){
    return <Inner> {children} </Inner>
}

Navbar.Logo = function NavbarLogo({ ...restProps }){
    return <Logo { ...restProps } />
}

Navbar.Link = function NavbarLink({ to, children }){
    return <HomeLink to={to}> { children } </HomeLink>
}

Navbar.Button = function NavbarButton({ to, children }){
    return <ButtonLink to={to}> { children }</ButtonLink>
}


export default Navbar