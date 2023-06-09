import styled, { css } from "styled-components";

export const CounterContainerStyle = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: calc(100vh - 30px);
`
export const CounterSpanStyle = styled.span`
  padding: 10px;
    min-width: 100px;
    width: auto;
    font-size: 30px;
    text-align: center;
    color: white;
`
export const CounterButtonStyle = styled.button`
 padding: 10px 30px;
 background: linear-gradient(134.59deg, rgba(255,255,255,0.05)7.23%,rgba(255,255,255,0.25)100%);
 border: 3px solid white;
 cursor: pointer;
 ${
    (props) => props.left? css`border-top-left-radius:9px;
                               border-bottom-left-radius:9px:`
                               :
                           css`border-top-right-radius:9px;
                               border-bottom-right-radius:9px:`

 }
`
