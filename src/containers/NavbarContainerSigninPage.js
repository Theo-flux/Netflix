import { Navbar } from "../components";
import { Routers } from '../constants/Routers'

function NavbarContainerSigninPage(){
    return(
        <Navbar>
            <Navbar.Inner>
                <Navbar.Link to={Routers.HOME}>
                    <Navbar.Logo src='/images/misc/logo.svg' />
                </Navbar.Link>
                <Navbar.Button to={Routers.SIGN_IN}>Sign In</Navbar.Button>
            </Navbar.Inner>
        </Navbar>
    )
}

export default NavbarContainerSigninPage