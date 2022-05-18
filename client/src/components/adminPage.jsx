import React from "react";

const AdminPage = (props) => {
  console.log(props.view);
  return (
    <>
      <div>this is the admin page</div>

      {/* <button onClick={props.changeView("admin add")}>add user</button> */}
    </>
  );
};

export default AdminPage;
