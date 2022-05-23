import React, { useEffect, useState } from "react";

import Footer from "./layouts/footer.jsx";
import AdminAuth from "./components/AdminAuth.jsx";
import Home from "./components/home.jsx";
import LogIn from "./components/login.jsx";
import NavBar from "./layouts/navBar.jsx";
import AddUser from "./components/addUser.jsx";
import axios from "axios";
import AdminPage from "./components/adminPage.jsx";
import AdminNav from "./layouts/adminNav.jsx";
import Analyse from "./components/analyse.jsx";

const App = () => {
  let [view, setView] = useState("home");

  let changeView = (view) => {
    setView(view);
  };

  return (
    <>
      {view.includes("admin") ? (
        <AdminNav view={view} changeView={changeView} />
      ) : (
        <NavBar view={view} changeView={changeView} />
      )}
      {view === "home" && <Home />}
      {view === "login" && <LogIn changeView={changeView} />}
      {view === "adminLogIn" && (
        <AdminAuth changeView={changeView} view={view} />
      )}
      {view === "admin add" && <AddUser />}
      {view === "admin page" && (
        <AdminPage changeView={changeView} view={view} />
      )}

      {view === "analyse" && <Analyse />}

      <Footer changeView={changeView} />
    </>
  );
};
export default App;
