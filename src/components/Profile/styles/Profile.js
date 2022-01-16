import styled from 'styled-components'

export const Container = styled.section`
    // border: 1px solid magenta;   
    margin: 1em auto;
    
`

export const List = styled.div`
    // border: 1px solid red;
    width: 90%;
    margin:2em auto;


`

export const ListContent = styled.div`
    // border: 1px solid yellow;
    width: 65%;
    max-width: 400px;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2em;
    flex-wrap: wrap;

    @media (min-width: 767px){
        max-width: 373px;
        justify-content: flex-start;
    }
`

export const User = styled.div`
    // border: 1px solid pink;
    width: 100px;
    height: 100px;
    margin-bottom: 1em;

`

export const Title = styled.p`
    text-align: center;
    color: #757575;
    font-size: 1rem;

`

export const Avatar = styled.img`
    max-width: 100%;
    height: auto;
    // border: 1px solid red;
`

export const Name = styled.p`
    color: #757575;
    text-align: center;
    font-weight: bold;
    font-size: .875rem;
`