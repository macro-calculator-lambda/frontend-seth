import styled, { css, createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    background: #FCF9FB;
    font-family: 'Muli', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  p {
    font-size: 1.6rem;
  }

  li {
    font-size: 1.5rem;
  }
`;

export const Container = styled.div`
  margin: 4rem auto 0;
  max-width: 1200px;

  ${props =>
    props.textCenter &&
    css`
      text-align: center;
    `};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${props =>
    props.center &&
    css`
      justify-content: center;
      align-items: center;
    `};
`;

export const FlexItem = styled.div`
  margin: 2rem;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const FormContainer = styled.div`
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  background: #fff;
  padding: 1rem 0 3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  border: 0;
  padding: 0.85rem 0.9rem;
  border-bottom: 0.3rem solid #181718;
  display: block;
  margin: 0 auto 2.5rem;
  font-size: 1.4rem;
  transition: 0.3s all ease-in-out;
  &:focus {
    outline: none;
    border-bottom: 0.3rem solid #8a42a9;
  }
`;

export const SelectContainer = styled.div`
  margin: 0 0 2.5rem;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  display: inline-block;
  margin-bottom: 0.8rem;
`;

export const Select = styled.select`
  display: block;
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
  line-height: 1.3;
  padding: 0.8em 1.1em 0.8em 0.6em;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 2px 0 0px rgba(0, 0, 0, 0.09);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;

  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
  background-position: right 0.5rem top 50%, 0 0;
  /* icon size, then gradient */
  background-size: 0.65em auto, 100%;

  &:hover {
    border-color: #888;
  }

  /* Focus style */
  &:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(138, 66, 169, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }

  &:disabled {
    color: graytext;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
      linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  }

  &:disabled:hover {
    border-color: #aaa;
  }
`;

export const Option = styled.option`
  font-weight: normal;
`;

export const Button = styled.button`
  padding: 0.8rem 2rem
  font-size: 1.6rem;
  border-radius: 4px;
  border: 0;
  font-weight: bold;
  background: #6F6FFF;
  color: #fff;
  transition: 0.24s opacity ease-in;

  &:hover {
    cursor: pointer;
    opacity: 0.75;
  }

  ${props =>
    props.danger &&
    css`
      background: #ff4d4d;
    `};

    ${props =>
      props.white &&
      css`
        background: #fff;
        color: #333;
      `};
`;

export const Card = styled.div`
  box-shadow: 0 15px 28px 0 rgba(0, 0, 0, 0.35);
  background: #fff;
  border-radius: 5px;
  padding: 2rem 2.5rem;
  margin: 1.5rem 0 0;
`;

export const CardList = styled.ul`
  padding-left: 0;
  list-style: none;
  margin-bottom: 3rem;
`;
