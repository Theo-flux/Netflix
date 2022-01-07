import styled from "styled-components";

export const Container = styled.section`
    background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 40%,rgba(0,0,0,0) 75%,rgba(0,0,0,.8) 100%),
        ${({image}) => `url(${image})`}; 
    background-color: #cccccc;
    height: 80vh;
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
    border-bottom: 8px solid #222;

    @media (min-width: 767px){
        height: 100vh; 
    }
`

export const Inner = styled.div`
    // border: 1px solid magenta;
    display: flex;
    flex-direction: column;
    gap: 6em;

    @media (min-width: 767px){
        gap: 8em; 
    }
`

export const Pane = styled.div`
    // border: 1px solid magenta;
    width: 100%;
    align-self: center;

    @media (min-width: 767px){
        width: 60%  
    }
`

export const Title = styled.h1`
    width: 80%;
    font-size: 1.7rem;
    margin: auto;
    text-align: center;
    color: #fff;
    
    @media (min-width: 767px){
        font-size: 3rem;
    }
`

export const SubTitle = styled.p`
    margin: auto;
    font-size: 1.2rem;
    margin-top: .5em;
    margin-bottom: .5em;
    text-align: center;
    color: #fff;

    @media (min-width: 767px){
        font-size: 1.8rem;
    }

`
