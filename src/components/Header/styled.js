import styled from "styled-components"

export const Container = styled.div`
    background-color: #EDEDED;
    width: 100vw;
    display: flex;
    height: 6vh;
    align-items: center;
    justify-content: center;
    gap: 10vw;

    span {
        cursor: pointer;
        color: #4088CB;
        :hover {
            text-decoration: underline;
        }
    }
`