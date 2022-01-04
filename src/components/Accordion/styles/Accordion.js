import styled from 'styled-components'


export const Icon = styled.i`
    font-size: 1.8rem;
    // border: 1px solid magenta;   
    
    @media (min-width: 767px){
        font-size: 2.5rem;
    }
`

export const Title = styled.h1`
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: .5em;
    margin-top: 0;
    // border: 1px solid magenta;

    @media (min-width: 767px){
        font-size: 3rem;
    }
`

export const Question = styled.p`
    font-size: 1.2rem;

    @media (min-width: 767px){
        font-size: 1.65rem;
    }
    
`

export const Answer = styled.p`
    margin-top: .05em;
    background-color: #303030;
    color: #fff;
    padding: 1em;
    font-size: 1.2rem;

    @media (min-width: 767px){
        font-size: 1.65rem;
    }
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #303030;
    color: #fff;
    padding: 1em 1.5em;
`

export const Inner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: .5em 0;
    // border: 1px solid magenta;


`

export const Item = styled.div`
    margin: auto;
    width: 90%;
    max-width: 800px;
    // border: 1px solid magenta;

    @media (max-width: 767px){
        width: 100%;
        &{Inner}:last-of-child {
            margin: 0;
            border: 1px solid magenta;
        } 
    }
`

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 4em 0;
    border-bottom: 10px solid #222;
    // border: 1px solid magenta;
`

