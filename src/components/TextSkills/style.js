import styled, { css } from "styled-components";

export const Image = styled.img`

    margin-top: 10px;
    width: 95%;
    cursor: pointer;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
    filter: gray;


    ${({variant}) => variant !== "primary" && css`
    margin-top: 10px;
    width: 100%;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    -webkit-filter: none;
    filter: none;

`}
`