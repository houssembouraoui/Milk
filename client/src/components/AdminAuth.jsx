import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminAuth = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const [pass, setPass] = useState(true);

  
  useEffect(() => {
    axios.get("http://localhost:5000/admin/login").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  let authenticate = () => {
    console.log(password, email);
    if (email === data.email && password === data.password) {
      props.changeView("admin page");
      console.log(props.view);
      console.log(pass);
    } else {
      setPass(false);
      console.log(props.view);
    }
  };

  return (
    <section className="">
      <div
        className="px-4 py-5 px-md-5 text-center text-lg-start"
        // style="background-color: hsl(0, 0%, 96%)"
      >
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                The best offer <br />
                <span className="text-primary">for your business</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                quibusdam tempora at cupiditate quis eum maiores libero
                veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                    </div>
                  </form>
                  {!pass && <p>wrong authentication</p>}
                </div>
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => authenticate()}
                  // style="padding-left: 2.5rem; padding-right: 2.5rem;"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminAuth;
