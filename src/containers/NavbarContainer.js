import { Navbar } from "../components";

function NavbarContainer(){
    return(
        <Navbar>
            <Navbar.Inner>
                <Navbar.Logo src='/images/misc/logo.svg' />
                <Navbar.Button>Sign up</Navbar.Button>
            </Navbar.Inner>
        </Navbar>
    )
}

export default NavbarContainer