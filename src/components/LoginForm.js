import React from "react";
import "./LoginForm.css";

export default function LoginForm(props) {
  return (
    <div className="form-box">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <label htmlFor="inputPassword5" className="form-label">
        Password
      </label>
      <input
        type="password"
        id="inputPassword5"
        className="form-control"
        aria-labelledby="passwordHelpBlock"
      />
      <button
        type="button"
        className="btn btn-primary login-button"
        onClick={props.toDashBoard}
      >
        Login
      </button>
    </div>
  );
}
