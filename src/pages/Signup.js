import React from 'react'
import { Hero } from '../components'
import NavbarContainerSigninPage from '../containers/NavbarContainerSigninPage'
import FooterContainerSignin from '../containers/FooterContainerSignin'
import SignupformContainer from '../containers/SignupFormContainer'

function Signup(){
    return(
        <React.Fragment>
            <Hero.Container image='/images/misc/home.jpg'>
                <NavbarContainerSigninPage/>
                <SignupformContainer/>
            </Hero.Container>
            <FooterContainerSignin/>
        </React.Fragment>
    )
}

export default Signup