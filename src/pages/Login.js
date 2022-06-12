import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
// import { useHistory } from "react-router-dom";

import "../assets/scss/components/loginreg.scss";

import { loginHandler } from "../store/actions/auth/authAction";

function Login() {
  const [logReg, setLogReg] = useState("login");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authState = useSelector((state) => state.authReducer);

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    dispatch(loginHandler(user));
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    const user = {
      fullname: fullname,
      email: email,
      password: password,
    };
    await axios
      .post("http://localhost:8000/auth/register", user)
      .then((res) => {
        toast.success("User Created | Login to Contiue");
        setLogReg("login");
      })
      .catch((err) => {
        const res = JSON.parse(err.request.response);
        if (res.status === "failed") {
          toast.error(res.message);
        } else {
          toast.error(`${res.errors[0].msg}: ${res.errors[0].param}`);
        }
      });
  };
  const handleCta = (e) => {
    e.preventDefault();
    if (logReg === "login") {
      setLogReg("signup");
    } else {
      setLogReg("login");
    }
  };

  return (
    <div className="loginreg-wrapper">
      <div className="loginreg-wrapper-inner">
        <div className="col-1">
          <h1>Welcome To AstroXD</h1>
          <p>Your Journey Begins Here</p>
          <p>Space and Beyond</p>
        </div>
        <div className="col-2">
          <form className="loginreg-form">
            <div className="loginreg-title">
              <h4>{logReg === "login" ? "Login" : "Signup"}</h4>
            </div>
            {logReg === "login" ? (
              ""
            ) : (
              <div className="input_wrapper">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
            )}
            <div className="input_wrapper">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_wrapper">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {logReg === "login" ? (
              <button
                type="submit"
                className="loginreg-button"
                onClick={handleLogin}
                disabled={authState.loading ? true : false}
              >
                {authState.loading ? "Loading..." : "Login"}
              </button>
            ) : (
              <button
                type="submit"
                className="loginreg-button"
                onClick={handleSignup}
              >
                Sign Up
              </button>
            )}

            <div className="loginreg-links">
              <span>
                <button className="loginreg-cta" onClick={handleCta}>
                  {logReg === "login"
                    ? "Create an account?"
                    : "Already a member?"}
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
