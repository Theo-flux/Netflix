import React from 'react'
import { Hero } from '../components'
import NavbarContainerSignupPage from '../containers/NavbarContainerSignupPage'
import FooterContainerSignin from '../containers/FooterContainerSignin'
import SignupformContainer from '../containers/SignupFormContainer'

function Signup(){
    return(
        <React.Fragment>
            <Hero.Container image='/images/misc/home.jpg'>
                <NavbarContainerSignupPage/>
                <SignupformContainer/>
            </Hero.Container>
            <FooterContainerSignin/>
        </React.Fragment>
    )
}

export default Signup