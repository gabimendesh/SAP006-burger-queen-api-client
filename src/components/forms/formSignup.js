import React from 'react';
import { Link } from 'react-router-dom';
import validate from '../../validateInfo';
import useForm from '../../useForm';

const FormSignup = ({ submitForm }) => {
  const {
    handleChange, values, handleSubmit, errors,
  } = useForm(submitForm, validate);
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Cadastre-se
        </h1>
        <div className="form-inputs">
          <input
            id="username"
            className="form-input"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className="form-inputs">
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Enter your username"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="form-inputs">
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="form-inputs">
          <input
            className="form-input"
            type="password"
            name="password2"
            placeholder="Confirme sua senha"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
        <span className="form-input-login">
          Ja tem conta? <Link to="/">Faça login</Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
