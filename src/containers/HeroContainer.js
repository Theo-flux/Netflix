import { Hero } from '../components'
import NavbarContainer from './NavbarContainer'
import OptFormContainer from './OptFormContainer'
import OpFormContainer from './OptFormContainer'

function HeroContainer(){
    return(
        <Hero.Container image='/images/misc/home-bg.jpg'>
            <Hero>
                <NavbarContainer/>

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