import "../assets/css/login.css";
import usrImg from "../assets/images/user.png";

import { useState, useEffect, useRef } from "react";
function Login() {
  const [Loginuser, setLoginUser] = useState();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const users = [
    {
      id: 1,
      username: "Arifa",
      email: "test@gmail.com",
      password: "123456",
    },
    {
      id: 2,
      username: "Shaz",
      email: "user2@hotmail.com",
      password: "1527393",
    },
  ];

  ///Email Validation////

  const refEmail = useRef(null);
  const refSpan = useRef(null);
  const refSpan2 = useRef(null);
  const regex = new RegExp(
    '^(([^<>()[\\]\\\\.,;:\\s@\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\"]+)*)|' +
      '(\\".+\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])' +
      "|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$"
  );

  useEffect(() => {
    const emailInput = refEmail.current;
    const emailSpan = refSpan.current;

    const passSpan = refSpan2.current;
    if (regex.test(userName)) {
      emailSpan.classList.add("validIcon");
      emailSpan.classList.remove("inValidIcon");
      emailInput.classList.remove("bounce");
    } else {
      emailSpan.classList.add("inValidIcon");
      emailSpan.classList.remove("validIcon");
      emailInput.classList.add("bounce");
      setTimeout(function () {
        emailInput.classList.remove("bounce");
      }, 10000);
    }
  }, [userName]);

  ////Password Validation////

  // useEffect(() => {
  //   let loginBtn = document.querySelector(".login_btn");

  //   if (password !== "" && password == userPassword) {
  //     passSpan.classList.add("validIcon");
  //     passSpan.classList.remove("inValidIcon");
  //     loginBtn.classList.remove("hide");
  //   } else if (password !== "" && password != userPassword) {
  //     passSpan.classList.add("inValidIcon");
  //     passSpan.classList.remove("validIcon");
  //     loginBtn.classList.add("hide");
  //   }
  // }, [password]);

  ///Form Submit//
  const handleSubmitForm = (e) => {
    const emailInput = refEmail.current;
    const emailSpan = refSpan.current;

    const passSpan = refSpan2.current;
    e.preventDefault();

    // const userFiltered = users.filter((usr) => {
    //   return usr.email === userName && usr.password === password;
    // });
    // if (userFiltered.length > 0) {
    //   setUserPassword(userFiltered[0].password);
    // } else {
    //   emailSpan.classList.add("inValidIcon");
    //   emailSpan.classList.remove("validIcon");
    //   emailInput.classList.add("bounce");
    //   setTimeout(function () {
    //     emailInput.classList.remove("bounce");
    //   }, 1000);
    // }

    if (userName !== "" && password !== "") {
      const userFiltered = users.filter((usr) => {
        return usr.email === userName && usr.password === password;
      });
      if (userFiltered.length > 0) {
        localStorage.setItem("loggedUser", JSON.stringify(userFiltered[0]));

        window.location.href = "/dashboard";
      } else {
        emailSpan.classList.add("inValidIcon");
        emailSpan.classList.remove("validIcon");
        emailInput.classList.add("bounce");
        passSpan.classList.add("inValidIcon");
        passSpan.classList.remove("validIcon");
        setTimeout(function () {
          emailInput.classList.remove("bounce");
        }, 1000);
      }
    } else {
      alert("Please enter valid email Id");
      alert("Please enter password");
    }
  };
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("loggedUser"));
  };

  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="user_card">
          <div className="d-flex justify-content-center">
            <div className="brand_logo_container">
              <img src={usrImg} className="brand_logo" alt="Logo" />
            </div>
          </div>
          <div className="d-flex justify-content-center form_container loginForm">
            <form onSubmit={handleSubmitForm}>
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  id="email"
                  ref={refEmail}
                  className="form-input input_user"
                  placeholder="username"
                  required
                  onKeyUp={(e) => setUserName(e.target.value)}
                />
                <span className="emailSpan" ref={refSpan}>
                  {/* <i className="fa fa-check-circle"></i> */}
                </span>
              </div>

              <div className="input-group mb-2">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  name=""
                  className="form-input input_pass"
                  placeholder="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="emailSpan" ref={refSpan2}></span>
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customControlInline"
                  />
                  {/* <label className="custom-control-label">Remember me</label> */}
                </div>
              </div>
              <div className="d-flex justify-content-center mt-3 login_container">
                <button type="submit" name="button" className="btn login_btn">
                  Login
                </button>
              </div>
            </form>
          </div>

          <div className="mt-4">
            <div className="d-flex justify-content-center links">
              Please enter loggin details{" "}
            </div>
            <div className="d-flex justify-content-center links"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
