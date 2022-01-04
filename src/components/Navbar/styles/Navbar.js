import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.nav`
    display: flex;
    width: 100%;
    padding: 2em 0;
    // border: 1px solid magenta;
`

export const Inner = styled.div`
    width: 90%;
    margin: auto;
    max-width: 1300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border: 1px solid magenta;
`

export const Logo = styled.img`
    max-width: 90px;
    height: auto;

    @media (min-width: 767px){
        max-width: 130px;
    }
`

export const ButtonLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    font-size: .9rem;
    background-color: #E50914;
    padding: .5em .8em;
    border-radius: 4px;

    @media (min-width: 767px){
        font-size: 1rem;
    }

`

