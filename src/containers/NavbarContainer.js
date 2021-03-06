import { Navbar } from "../components";
import { Routers } from '../constants/Routers'

function NavbarContainer(){
    return(
        <Navbar>
            <Navbar.Inner>
                <Navbar.Link to={Routers.HOME}>
                    <Navbar.Logo src='/images/misc/logo.svg' />
                </Navbar.Link>
            </Navbar.Inner>
        </Navbar>
    )
}

export default NavbarContainer