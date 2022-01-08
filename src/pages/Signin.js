import React from 'react'
import { Hero } from '../components'
import NavbarContainerSigninPage from '../containers/NavbarContainerSigninPage'
import FooterContainerSignin from '../containers/FooterContainerSignin'
import SigninformContainer from '../containers/SigninFormContainer'

function Signin(){
    return(
        <React.Fragment>
            <Hero.Container image='/images/misc/home.jpg'>
                <NavbarContainerSigninPage/>
                <SigninformContainer/>
            </Hero.Container>
            <FooterContainerSignin/>
        </React.Fragment>
    )
}

export default Signin