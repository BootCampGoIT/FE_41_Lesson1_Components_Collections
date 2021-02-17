import styled from "styled-components";
import { colors } from "../../styles/colors/colors";
export const AuthFormStyled = styled.div`
  display: flex;
  justify-content: center;
  transform: translateY(50%);

  /* margin: 0 auto; */
  /* padding: 5px; */
  form {
    /* background-color: #ffffff; */
    width: 300px;
    border-radius: 5px;
    /* transform: translateY(50%); */
  }

  label {
    font-size: 12px;
    line-height: 20px;
    color: ${colors.text};
    margin-left: 10px;
  }

  input {
    height: 25px;
    width: 100%;
    color: ${colors.text};
    border: 1px solid ${colors.main};
    border-radius: 50pc;
    outline: none;
    margin-bottom: 10px;
    padding: 0 10px;
  }

  button {
    width: 100%;
    height: 30px;
    text-transform: uppercase;
    /* font-weight: ; */
    letter-spacing: 0.1em;
    color: white;
    background-color: ${colors.main};
    border: none;
    border-radius: 50pc;
    margin: 5px 0;
    /* padding: 5px; */
    cursor: pointer;
    outline: none;
  }

  button:hover,
  button:focus {
    background-color: ${colors.active};
  }
  .error {
    text-align: center;
    color: ${colors.attention};
  }
  .message {
    text-align: center;
    color: ${colors.text};
  }
`;
