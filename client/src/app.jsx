import React, { useEffect, useState } from "react";
import AdminAuth from "./components/AdminAuth.jsx";
import Footer from "./layouts/footer.jsx";

import Home from "./components/home.jsx";
import LogIn from "./components/login.jsx";

import NavBar from "./layouts/navBar.jsx";
import SignUp from "./components/signUp.jsx";
import axios from "axios";
import AdminPage from "./components/adminPage.jsx";
import AdminNav from "./components/adminNav.jsx";

const App = () => {
  let [view, setView] = useState("home");

  let changeView = (view) => {
    setView(view);
  };

  return (
    <>
      {view !== "admin page" ? (
        <NavBar changeView={changeView} />
      ) : (
        <AdminNav />
      )}
      {view === "home" && <Home />}
      {view === "login" && <LogIn />}
      {view === "adminLogIn" && (
        <AdminAuth changeView={changeView} view={view} />
      )}
      {view === "userSignIn" && <SignUp />}
      {view === "admin page" && <AdminPage />}

      <Footer changeView={changeView} />
    </>
  );
};
export default App;

// ReactDOM.render(<App />, document.getElementById("app"));
