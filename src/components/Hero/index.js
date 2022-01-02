import Navbar from '../Navbar/Navbar'
import { Inner, Container, Title, SubTitle, Pane } from './styles/Hero'


function Hero({children, ...restProps}){
    return(
        <Inner>
            {children}
        </Inner>
    )
}

Hero.Container = function HeroContainer({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Hero.Title = function HeroTitle({children}){
    return <Title>{children}</Title>
}

Hero.SubTitle = function HeroSubTitle({children}){
    return <SubTitle>{children}</SubTitle>
}

Hero.Pane = function HeroPane({children}){
    return <Pane>{children}</Pane>
}

export default Hero
