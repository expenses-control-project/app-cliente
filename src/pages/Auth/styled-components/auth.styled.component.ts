import styled from "styled-components";

export const Element1 = styled.div`
    content: '';
    position: absolute;
    filter: blur(1px);
    border-bottom: 1px solid #32CACD;
    border-right: 1px solid #32CACD;
    border-bottom-right-radius: 1rem;   
    width: 15rem;
    height: 10rem;
    transform: rotate(0deg);
    top: 0;
    left: 0;
    &:before {
        content: '';
        position: absolute;
        filter: blur(1px);
        border-bottom: 1px solid #82CC19;
        border-right: 1px solid #82CC19;
        border-bottom-right-radius: 1rem;   
        width: 19rem;
        height: 10rem;
        transform: rotate(0deg);
        top: -30px;
        left: -30px;
    }
`;

export const Element2 = styled.div`
    content: '';
    position: absolute;
    filter: blur(1px);
    border-top: 1px solid #32CACD;
    border-left: 1px solid #32CACD;
    border-top-left-radius: 1rem;
    width: 15rem;
    height: 10rem;
    transform: rotate(0deg);
    bottom: 0px;
    right: 0px;
    &:before {
        content: '';
        position: absolute;
        filter: blur(1px);
        border-top: 1px solid #82CC19;
        border-left: 1px solid #82CC19;
        border-top-left-radius: 1rem;
        width: 17rem;
        height: 8rem;
        transform: rotate(0deg);
        bottom: 0;
        right: 0;
    }
`;

