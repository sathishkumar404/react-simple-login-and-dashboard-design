import React, { Component } from 'react';
import { Formik, Field, Form } from "formik";
import './login.css';import { Link } from "react-router-dom";

class Login extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
          <div className="container-fluid ">
            <div className="row bg-white ">
              <div className="col-md-3 ">
                <img
                  src="app-assets/logo.png"
                  alt="logo.png"
                  className="img-fluid "
                  width={150}
                  height={100}
                />
              </div>
            </div>

            <div className="row login-container ">
              <div
                className="col-md-8 col-md-offset-3    "
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div style={{ textAlign: "start" }}>
                  <form>
                    <div className="form-group">
                      <h3>Welcome to Eolas International Group</h3>
                      <h5>Auditing Products Qualify globally</h5>
                    </div>

                    <div className="form-group wd-420">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email *"
                        value=""
                      />
                    </div>
                    <div className="form-group wd-420">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Your Password *"
                        value=""
                      />
                    </div>
                    <div className="form-group">
                      <div className="recover-pass">
                        <a href="/dashboard">

                           <button
                          
                          className="btn btn-primary btn-round btn-lg"
                        >
                          LOGIN
                        </button>

                        </a>

                       
                      </div>
                    </div>
                    <div className="form-group">
                      <a href="#" className="ForgetPwd">
                        Forget Password?
                      </a>
                    </div>

                    <div className="form-group">
                      <a href="#" className="ForgetPwd">
                        Register for New Account
                      </a>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-4  " style={{ paddingRight: 0 }}>
                <img
                  src="app-assets/login.png"
                  alt="login.png"
                  className="img-responsive "
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            </div>

            <div className="row bg-white ">
              <div className="col-md-12 " style={{ padding: 30 }}>
                <div class="d-flex justify-content-start">
                  <p style={{ paddingLeft: 80 }}>
                    2018 @ All rights reserved &nbsp;&nbsp; |
                  </p>
                  <p>
                    
                    <a class="dropdown-item" href="#">
                      Terms of service |
                    </a>
                  </p>
                  <p>
                    
                    <a class="dropdown-item" href="#">
                      privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Login;