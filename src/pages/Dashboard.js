import React, { Component } from "react";
import SideMenu from "../components/SideMenu";
import PieChart from "../components/PieChart";
import Card from "../components/Card";
import Footer from "../components/Footer";
import './login.css';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <main>
          <SideMenu />

          <div>
            <div className="main-panel ">
              <div className="main-content ">
                <div className="content-wrapperbg-grey">
                  <div class="row ">
                    <div class="col-md-8 col-sm-12 pd-10">
                      <div
                        class=""
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          padding: 15,
                        }}
                      >
                        <h1>Dashboard </h1>
                        <span> </span>

                        <button class="btn-round btn btn-info  " style={{paddingLeft:10}}>
                          {" "}
                          All Projects
                        </button>
                      </div>

                      <div class="">
                        <PieChart />
                      </div>

                      <div>
                        <div class="">
                          <div class="card">
                            <div class="card-header">
                              <h5 class="mb-0 card-title">Daily Diet</h5>
                            </div>
                            <div class="card-body">
                              <p class="card-text">
                                Some quick example text to build on the card.
                              </p>
                            </div>
                            <ul class="list-group">
                              <li class="justify-content-between list-group-item">
                                Protein Milk{" "}
                                <span class="white float-right bg-primary badge badge-secondary badge-pill">
                                  4
                                </span>
                              </li>
                              <li class="justify-content-between list-group-item">
                                Oz Water{" "}
                                <span class="white float-right bg-info badge badge-secondary badge-pill">
                                  2
                                </span>
                              </li>
                              <li class="justify-content-between list-group-item">
                                Vegetable Juice{" "}
                                <span class="white float-right bg-warning badge badge-secondary badge-pill">
                                  6
                                </span>
                              </li>
                              <li class="justify-content-between list-group-item">
                                Sugar Free Jello-O{" "}
                                <span class="white float-right bg-success badge badge-secondary badge-pill">
                                  1
                                </span>
                              </li>
                              <li class="justify-content-between list-group-item">
                                Protein Meal{" "}
                                <span class="white float-right bg-danger badge badge-secondary badge-pill">
                                  3
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-4 col-sm-12 full-height-vh m-0 ">
                      <div
                        class=" card "
                        style={{ background: "#f3f3f3", padding: 0 }}
                      >
                        <div class="row line">
                          <div
                            class="col-6 "
                            style={{
                              borderRightColor: "red",
                              borderRightWidth: 3,
                            }}
                          >
                            <div class=" card-body">
                              <div class="media">
                                <div
                                  class="d-flux media-body"
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                  }}
                                >
                                  <span
                                    style={{
                                      textAlign: "start",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Departments
                                  </span>
                                  <p style={{ color: "blue" }}>
                                    Add Departments
                                  </p>
                                  <h1
                                    class="mb-1"
                                    style={{
                                      alignSelf: "center",
                                      fontWeight: 500,
                                    }}
                                  >
                                    278
                                  </h1>

                                  <h4 style={{ alignSelf: "center" }}>
                                    New Projects
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            class="col-6 "
                            style={{
                              borderRightColor: "red",
                              borderRightWidth: 3,
                            }}
                          >
                            <div class=" card-body">
                              <div class="media">
                                <div
                                  class="d-flux media-body"
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                  }}
                                >
                                  <span
                                    style={{
                                      textAlign: "start",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Clients
                                  </span>
                                  <p style={{ color: "blue" }}>
                                    Add New Clients
                                  </p>
                                  <h1
                                    class="mb-1"
                                    style={{
                                      alignSelf: "center",
                                      fontWeight: 500,
                                    }}
                                  >
                                    278
                                  </h1>

                                  <h4 style={{ alignSelf: "center" }}>
                                    In Total
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row line">
                          <div
                            class="col-6 "
                            style={{
                              borderRightColor: "red",
                              borderRightWidth: 3,
                            }}
                          >
                            <div class=" card-body">
                              <div class="media">
                                <div
                                  class="d-flux media-body"
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                  }}
                                >
                                  <span
                                    style={{
                                      textAlign: "start",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Departments
                                  </span>
                                  <p style={{ color: "blue" }}>
                                    Add Departments
                                  </p>
                                  <h1
                                    class="mb-1"
                                    style={{
                                      alignSelf: "center",
                                      fontWeight: 500,
                                    }}
                                  >
                                    278
                                  </h1>

                                  <h4 style={{ alignSelf: "center" }}>
                                    New Projects
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            class="col-6 "
                            style={{
                              borderRightColor: "red",
                              borderRightWidth: 3,
                            }}
                          >
                            <div class=" card-body" style={{ marginTop: 45 }}>
                              <div class="media">
                                <div
                                  class="d-flux media-body"
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "end",
                                    justifyContent: "center",
                                  }}
                                >
                                  <span
                                    style={{
                                      textAlign: "start",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {" "}
                                  </span>
                                  <p style={{ color: "blue" }}> </p>
                                  <h1
                                    class="mb-1"
                                    style={{
                                      alignSelf: "center",
                                      fontWeight: 500,
                                    }}
                                  >
                                    278
                                  </h1>

                                  <h4 style={{ alignSelf: "center" }}>
                                    In Total
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row line">
                          <div
                            class="col-6 "
                            style={{
                              borderRightColor: "red",
                              borderRightWidth: 3,
                            }}
                          >
                            <div class=" card-body">
                              <div class="media">
                                <div
                                  class="d-flux media-body"
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                  }}
                                >
                                  <span
                                    style={{
                                      textAlign: "start",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Departments
                                  </span>
                                  <p style={{ color: "blue" }}>
                                    Add Departments
                                  </p>
                                  <h1
                                    class="mb-1"
                                    style={{
                                      alignSelf: "center",
                                      fontWeight: 500,
                                    }}
                                  >
                                    278
                                  </h1>

                                  <h4 style={{ alignSelf: "center" }}>
                                    New Projects
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            class="col-6 "
                            style={{
                              borderRightColor: "red",
                              borderRightWidth: 3,
                            }}
                          >
                            <div class=" card-body" style={{ marginTop: 45 }}>
                              <div class="media">
                                <div
                                  class="d-flux media-body"
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "end",
                                    justifyContent: "center",
                                  }}
                                >
                                  <span
                                    style={{
                                      textAlign: "start",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    {" "}
                                  </span>
                                  <p style={{ color: "blue" }}> </p>
                                  <h1
                                    class="mb-1"
                                    style={{
                                      alignSelf: "center",
                                      fontWeight: 500,
                                    }}
                                  >
                                    278
                                  </h1>

                                  <h4 style={{ alignSelf: "center" }}>
                                    In Total
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div
                            class="col-6 "
                            style={{
                              borderRightColor: "red",
                              borderRightWidth: 3,
                            }}
                          >
                            <div class=" card-body">
                              <div class="media">
                                <div
                                  class="d-flux media-body"
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                  }}
                                >
                                  <span
                                    style={{
                                      textAlign: "start",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Departments
                                  </span>
                                  <p style={{ color: "blue" }}>
                                    Add Departments
                                  </p>
                                  <h1
                                    class="mb-1"
                                    style={{
                                      alignSelf: "center",
                                      fontWeight: 500,
                                    }}
                                  >
                                    278
                                  </h1>

                                  <h4 style={{ alignSelf: "center" }}>
                                    New Projects
                                  </h4>
                                </div>
                              </div>

                              <div class="media">
                                <div
                                  class="d-flux media-body"
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                  }}
                                >
                                  <h1
                                    class="mb-1"
                                    style={{
                                      alignSelf: "center",
                                      fontWeight: 500,
                                    }}
                                  >
                                    278
                                  </h1>

                                  <h4 style={{ alignSelf: "center" }}>
                                    New Projects
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            class="col-6 "
                            style={{
                              borderRightColor: "red",
                              borderRightWidth: 3,
                            }}
                          >
                            <div class=" card-body" style={{ marginTop: 60 }}>
                              <div class="media ">
                                <div
                                  class="d-flux media-body mt-12"
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "end",
                                    justifyContent: "center",
                                  }}
                                >
                                  <h1
                                    class="mb-1"
                                    style={{
                                      alignSelf: "center",
                                      fontWeight: 500,
                                    }}
                                  >
                                    278
                                  </h1>

                                  <h4 style={{ alignSelf: "center" }}>
                                    In Total
                                  </h4>
                                </div>
                              </div>

                              <div class="media">
                                <div
                                  class="d-flux media-body"
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "start",
                                  }}
                                >
                                  <h1
                                    class="mb-1"
                                    style={{
                                      alignSelf: "center",
                                      fontWeight: 500,
                                    }}
                                  >
                                    278
                                  </h1>

                                  <h4 style={{ alignSelf: "center" }}>
                                    New Projects
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
