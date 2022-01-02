import React from 'react'
import {Container, Item, Inner, Title, SubTitle, Image, Pane} from './styles/Jumbotron'

function Jumbotron({children, direction = 'row', ...restProps}){
    return(
        <Item {...restProps}>
            <Inner direction = {direction}>
                {children}
            </Inner>
        </Item>
    )

}


// Jumbotron Container
Jumbotron.Container = function JumbotronContainer({children,  ...restProps}){
    return <Container {...restProps} >{children}</Container>
    
}

// Title component 
Jumbotron.Title = function JumbotronTItle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

// subtutle component
Jumbotron.SubTitle = function JumbotronSubTItle({children, ...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}

// Image component
Jumbotron.Image = function JumbotronImage({...restProps}){
    return <Image {...restProps} />
}

// Pane component
Jumbotron.Pane = function JumbotronPane({children}){
    return <Pane>{children}</Pane>
}

// &#8212;
export default Jumbotron