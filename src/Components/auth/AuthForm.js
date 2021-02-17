import React, { useState } from "react";
// import { AuthFormStyled } from "./AuthFormStyled";

const initialState = {
  email: "",
  password: "",

  error: "",
};

const AuthForm = () => {
  const [state, setState] = useState({ ...initialState });

  const onHandleChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    // <AuthFormStyled>
      <form onSubmit={onHandleSubmit}>
        <label>
          Електронна пошта
          <input
            type='text'
            name='email'
            value={state.email}
            onChange={onHandleChange}
          />
        </label>
        <label>
          Пароль
          <input
            type='password'
            name='password'
            value={state.password}
            onChange={onHandleChange}
          />
        </label>

        <button type='submit'>Зареєструватись</button>
      </form>
    // </AuthFormStyled>
  );
};

export default AuthForm;
