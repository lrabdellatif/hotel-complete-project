import React, { useState } from "react";
import axios from "axios";
import "../style/stylelogin.css";
import loginIllustration from "../images/328f58a2-3605-49c2-849c-bc9efa04f08e.jpeg";
import messageArrow from "../images/message.gif";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("❌ Passwords do not match");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/register", { email, password });
      alert("✅ Account created successfully! Please login.");
      window.location.href = "/login";
    } catch (err) {
      alert("❌ Register failed: " + err.response.data.error);
    }
  };

  return (
    <div className="container">
      <div className="main">
        <div className="illustration">
           <img src={loginIllustration} alt="Login illustration" style={{border: 'none', boxShadow: 'none'}} />
         </div>

        <div className="login">
          <form className="form" onSubmit={handleSubmit}>
            <h2 className="page-title">✨ Create Your Account ✨</h2>
            <p className="page-subtitle">Register to get started</p>

            <div className="inputForm">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="text"
                className="input"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="inputForm">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                className="input"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="inputForm">
              <i className="fa-solid fa-lock"></i>
              <input
                type="password"
                className="input"
                placeholder="Confirm Password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </div>

            <button type="submit" className="button-submit">Sign Up</button>
            <p className="p">
              Already have an account?{" "}
              <span className="span" onClick={() => (window.location.href = "/login")}>
                Sign In
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
