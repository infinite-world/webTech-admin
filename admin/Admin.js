import React, { Component } from "react";
import AdminPaperbase from "./admin-paperbase/AdminPaperbase";
// import AdminCards from "./admin-cards/AdminCards";

class Admin extends Component {
  render() {
    return (
      <div>
        <AdminPaperbase />
        {/* <AdminCards /> */}
      </div>
    );
  }
}

export default Admin;
