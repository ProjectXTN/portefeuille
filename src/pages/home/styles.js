import styled from "styled-components";

export const Title = styled.div`
    position: absolute;
    left: 39%;
    top: 50%;
    width: 25%;
    text-align: center;
    color: #000;

    color: #111;
    padding: 18px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 5px;
    opacity: 0.8;
    background-color: rgba(196, 196, 196, 0.70);
    border-radius: 22px;

`

export const TitleSecondary = styled.div`
    position: absolute;
    left: 39%;
    top: 60%;
    width: 25%;
    text-align: center;
    color: #000;

    color: #111;
    padding: 18px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 5px;
    opacity: 0.8;
    background-color: rgba(196, 196, 196, 0.70);
    border-radius: 22px;

`

export const ImageProfile = styled.img`
    width: 50%;
    border-radius: 50%;
`

export const ContainerRepos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    div{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        text-align: center;
        margin: 1rem;
        justify-content: center;
        align-items: center;
    }

    a{
        text-align: center;
        text-decoration: none;
        cursor:pointer;
        font-size: 22px;
        color: #DAA520;

        &:hover{
            opacity: 0.6;
        }

    }

    p{
        color: #FFFFFF;
        font-size: 16px
    }

    img{
        margin: 5rem;
    }
`

export const ContainerWrapper = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        color: #FFFFFF;
    }

`

export const ContainerSkills = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width:50%;

    div{
        width: 30%;
        text-align: center;
    }

    img{
        margin-top: 10px;
    }
` 