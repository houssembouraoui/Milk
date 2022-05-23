import axios from "axios";
import { use } from "express/lib/router";
import React, { useState } from "react";

const LogIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [role, setRole] = useState("");
  const [pass, setPass] = useState(true);
  let getData = (role) => {
    setRole(role);
    axios
      .get("http://localhost:5000/user/login", {
        params: { email, password, role },
      })
      .then((result) => {
        console.log(result.data, "fetched");
        // console.log(role, "el rolo ");

        setCurrentUser(result.data);
        console.log("el currento utilisatoré ", currentUser);
      });
  };
  let login = () => {
    if (currentUser.email === email && currentUser.password === password) {
      props.changeView(role);
      console.log("sucess");
    } else {
      setPass(false);
    }
  };

  return (
    <div className="create">
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form>
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>
                <div className="form-outline mb-3">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    onChange={(e) => {
                      getData(e.target.value);
                    }}
                  >
                    <option value>Open this select menu</option>
                    <option value="analyse">Agent Analyse</option>
                    <option value="facture">Agent Facture</option>
                    <option value="reception">Agent Reception</option>
                    <option value="fournisseur">Fournisseur</option>
                  </select>
                </div>
                {!pass && <p>wrong authentication</p>}

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">
                    Forgot password?
                  </a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    // style="padding-left: 2.5rem; padding-right: 2.5rem;"
                    onClick={() => login()}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a href="#!" className="link-danger">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
