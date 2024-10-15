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

export const ContainerViewAuth = styled.div`
    @media (max-height: 624px) {
        overflow: hidden;
        overflow-y: scroll;
    }
`
export const NombreInput = styled.input`
    border-top-left-radius: 1.4rem;
    border-top-right-radius: 0.5rem;
    @media (max-width: 576px) {
        border-top-left-radius: 1.4rem;
        border-top-right-radius: 1.4rem;
    }`

export const ApellidoInput = styled.input`
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 1.4rem;
    @media (max-width: 576px) {
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
}`
