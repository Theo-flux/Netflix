import styled from 'styled-components'


export const Item = styled.div`
    display: flex;
    border-bottom: 10px solid #222;
    // border: 1px solid blue;
`

export const Inner = styled.div`
    margin:2em auto;
    width: 100%;
    // border: 1px solid blue;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    @media (min-width: 600px){
        flex-direction: ${({direction}) => direction};
        justify-content: space-between;
    }
`

export const Title = styled.h1`
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
    margin-top: 0;
    margin-bottom: .5em; 
    line-height: 1.1;


    @media (min-width: 600px){
        font-size: 2.5rem;
        text-align: left;
    }
`

export const SubTitle = styled.p`
    font-size: 1rem;
    text-align: center;
    line-height: normal;
    margin: 0 auto;
    
    // border: 1px solid magenta;

    @media (min-width: 600px){
        font-size: 1.5rem;
        text-align: left;
    }
`

export const Image = styled.img`
    max-width: 100%;
    height: auto;
    // border: 1px solid magenta;
`

export const Pane = styled.div`
    width: 90%;
    padding: 0 3em;

    @media (min-width: 600px){
        width: 45%;
        padding: 0;
    }
`

export const Container = styled.section`
    background-color: black;

    @media (max-width: 600px){
        ${Inner}:last-of-type p{
            margin-bottom: 2em;
            
        }

    }
`