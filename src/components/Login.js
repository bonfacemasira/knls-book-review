import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({ username: "", password: "" });

  // function validateForm() {
  //     return email.length > 0 && password.length > 0;
  // }

  function handleChange(event) {
    const key = event.target.id;
    const value = event.target.value;

    setFormData({
      ...formData,
      [key]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(formData)
    axios
      .post("https://knls-book-review-backend.herokuapp.com/users/login", formData)
      .then((response) => {
        if (Object.values(response.data).length > 1) {
          alert("Login successful");
          navigate("/home");
        } else {
          alert("user doesn't exist");
        }
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      <div className="mb-3">
        <label>username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          id="username"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          id="password"
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            {" "}
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
