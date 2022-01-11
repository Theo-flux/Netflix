import React from 'react'
import { Hero } from '../components'
import NavbarContainerSignupPage from '../containers/NavbarContainerSignupPage'
import FooterContainerSignin from '../containers/FooterContainerSignin'
import SigninformContainer from '../containers/SigninFormContainer'

function Signin(){
    return(
        <React.Fragment>
            <Hero.Container image='/images/misc/home.jpg'>
                <NavbarContainerSignupPage/>
                <SigninformContainer/>
            </Hero.Container>
            <FooterContainerSignin/>
        </React.Fragment>
    )
}

export default Signin