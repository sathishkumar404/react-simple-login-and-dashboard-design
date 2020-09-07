import React, { Component } from 'react';
import { Link } from "react-router-dom";
class SideMenu extends Component {
    render() {
        return (
          <div>
            <div
              data-active-color="white"
              data-background-color=""
              className="app-sidebar "
              style={{ background: "#3b5998" }}
            >
              {/* main menu header*/}
              {/* Sidebar Header starts*/}
              <div className="sidebar-header bg-white">
                <div className="logo clearfix">
                  <a component={Link} to="/" className="logo-text float-left">
                    <div className="">
                      <img
                        src="app-assets/logo.png"
                        alt="logo.png"
                        width={"160"}
                        height={"65"}
                      />
                    </div>
                  </a>
                </div>
              </div>
              {/* Sidebar Header Ends*/}
              {/* / main menu header*/}
              {/* main menu content*/}
              <div
                className="sidebar-content"
                style={{ background: "#075379" }}
              >
                <div className="nav-container">
                  <ul
                    id="main-menu-navigation"
                    data-menu="menu-navigation"
                    data-scroll-to-active="true"
                    className="navigation navigation-main"
                  >
                    <li className=" nav-item">
                      <a component={Link} to="/dashboard">
                        <i className="ft-home" />
                        <span data-i18n className="menu-title">
                          Dashboard
                        </span>
                      </a>
                    </li>

                    <li className=" nav-item">
                      <a component={Link} to="/login">
                        <i className="ft-home" />
                        <span data-i18n className="menu-title">
                          Login
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* main menu content*/}
              <div className="sidebar-background" />
              {/* main menu footer*/}
              {/* include includes/menu-footer*/}
              {/* main menu footer*/}
            </div>

            <nav className="navbar bg-white navbar-expand-lg navbar-light bg-faded header-navbar">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button
                    type="button"
                    data-toggle="collapse"
                    className="navbar-toggle d-lg-none float-left"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <span className="d-lg-none navbar-right navbar-collapse-toggle">
                    <a
                      aria-controls="navbarSupportedContent"
                      className="open-navbar-container black"
                    >
                      <i className="ft-more-vertical" />
                    </a>
                  </span>
                  {/* <form role="search" className="navbar-form navbar-right mt-1">
              <div className="position-relative has-icon-right">
                <input type="text" placeholder="Search" className="form-control round" />
                <div className="form-control-position"><i className="ft-search" />
                </div>
              </div>
            </form> */}
                </div>
                <div className="navbar-container pd-9">
                  <div
                    id="navbarSupportedContent"
                    className="collapse navbar-collapse"
                  >
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Profile
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item" href="#">
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        );
    }
}

export default SideMenu;