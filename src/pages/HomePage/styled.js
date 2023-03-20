import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`


export const PostContainer = styled.div`
    height: 250px;
    margin-top: 10px;
    textarea {
        width: 364px;
        height: 131px;
        background: #EDEDED;
        border-radius: 12px;
        border: none;
        display: block;
        margin-bottom: 15px;
        padding-left: 20px;
        padding-top: 10px;
        word-break: break-word;
    }

    button {
    width: 365px;
    height: 51px;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    border-radius: 27px;
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    cursor: pointer;
  }

`