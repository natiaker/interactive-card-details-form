import styled from "styled-components";

export const StyledForm = styled.form`
  max-width: 350px;
  margin: 91px auto 45px;
  label {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #21092f;
  }
  input {
    width: 100%;
    margin: 9px 8px 20px 0;
    padding: 11px 0 11px 16px;
    background: #ffffff;
    border: 1px solid #dfdee0;
    border-radius: 8px;
    font-size: 18px;
    line-height: 23px;
    &::placeholder {
      color: #21092f;
      opacity: 0.25;
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 20px;
  }
  @media screen and (min-width: 1068px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;

export const Button = styled.button`
  background-color: #21092f;
  color: white;
  border: none;
  border-radius: 8px;
  width: 100%;
  padding: 15px;
  margin-top: 28px;
  font-size: 18px;
  line-height: 23px;
  cursor: pointer;
`;
