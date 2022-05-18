import React, { useEffect, useState, useRef } from "react";

function NavBar(props) {
  console.log(props);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div
            className="collapse navbar-collapse d-flex"
            id="navbarButtonsExample"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dashboard
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center ml-auto p-2">
              <button
                type="button"
                className="btn btn-link px-3 me-2"
                onClick={() => props.changeView("login")}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-primary me-3"
                onClick={() => props.changeView("userSignIn")}
              >
                Sign up for free
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
