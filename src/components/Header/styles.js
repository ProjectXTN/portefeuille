import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    background-color: rgba(196, 196, 196, 0.11);
    width: 100%;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);   
    position: fixed;
    top: 0;
    z-index: 1000;

`

export const Container = styled.div`
    width:100%;
    max-width: 80%;
    height: 47px;


    display:flex;
    justify-content: space-between;
    align-item: center;
    margin; 0 auto;
    z-index: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Img = styled.img`
    width: 15%;
    min-width: 55px;
    cursor:pointer;
`

export const A = styled.a`
    text-decoration: none;
    font-size: 17px;
    margin-right: 3rem;
    color: rgb(255, 255, 255);

    &:hover{
        color: rgb(218,165,32);
    }


    ${({variant}) => variant !== "primary" && css`
        border: 1px solid #5F9EA0;
        border-radius: 22px;
        padding: 10px 15px;
        background-color: #5F9EA0;
        opacity: 0.7;

        &:hover{
            background-color: #FFF;
            color: #111;
        }
    `}
`