import { Hero } from '../components'
import NavbarContainerSigninPage from './NavbarContainerSigninPage'
import OptFormContainer from './OptFormContainer'

function HeroContainer(){
    return(
        <Hero.Container image='/images/misc/home.jpg' borderBottom='true'>
            <Hero>
                <NavbarContainerSigninPage/>

                <Hero.Pane>
                    <Hero.Title>Unlimited movies, TV shows, and more.</Hero.Title>
                    <Hero.SubTitle>Watch anywhere. Cancel anytime.</Hero.SubTitle>
                    <OptFormContainer/>
                </Hero.Pane>
            </Hero>
        </Hero.Container>
    )
}

export default HeroContainer