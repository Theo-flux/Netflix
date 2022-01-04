import JumbotronContainer from "../containers/JumbotronContainer"
import FooterContainer from "../containers/FooterContainer"
import AccordionContainer from "../containers/AccordionContainer"
import HeroContainer from "../containers/HeroContainer"

function Home(){
    return(
        <>
            <HeroContainer/>
            <JumbotronContainer/>
            <AccordionContainer/>
            <FooterContainer/>
        </>
    )
}

export default Home
