import React from 'react'
import { Hero } from '../components'
import NavbarContainer from '../containers/NavbarContainer'
import FooterContainerSignin from '../containers/FooterContainerSignin'
import SigninformContainer from '../containers/SigninFormContainer'

function Signin(){
    return(
        <React.Fragment>
            <Hero.Container image='/images/misc/home.jpg'>
                <NavbarContainer/>
                <SigninformContainer/>
            </Hero.Container>
            <FooterContainerSignin/>
        </React.Fragment>
    )
}

export default Signin