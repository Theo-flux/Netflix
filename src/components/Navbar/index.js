import { Container, Inner, Logo, ButtonLink } from './styles/Navbar'


function Navbar({ children, ...restProps}){
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

Navbar.Button = function NavbarButton({ children, ...restProps }){
    return <ButtonLink to='/'> { children }</ButtonLink>
}


export default Navbar