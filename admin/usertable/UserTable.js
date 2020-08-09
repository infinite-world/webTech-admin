import React, { Fragment, Component } from "react";
import {
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import AdminHeader from "../admin-header/AdminHeader";
import "./UserTable.scss";

class UserTable extends Component {
  render() {
    return (
      <React.Fragment>
        <AdminHeader />
        <form
          class="form-inline md-form mr-auto mb-4"
          style={{ marginLeft: "11px" }}
        >
          <input
            class="form-control mr-sm-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            class="btn aqua-gradient btn-rounded btn-sm my-0"
            type="submit"
            style={{ textShadow: "2px 2px 4px #000000" }}
          >
            Search
          </button>
        </form>
        {/* Table content satrt */}

        <div id="userTable-full-cover">
          <MDBTable striped id="user-tabel-cover">
            <MDBTableHead>
              <tr id="header-top-row">
                <th className="header-color">Owner</th>
                <th className="header-color">Number</th>
                <th className="header-color">Adress</th>
                <th className="header-color">Shop Name</th>
                <th className="header-color">Status</th>
                <th className="header-color"></th>
                <th className="header-color">Response</th>
                <th className="header-color"></th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {/* First Completed Row */}

              <tr>
                <td>
                  <textarea placeholder="Owner Name" />
                </td>
                <td>
                  <textarea placeholder="Phone Number" />
                </td>
                <td>
                  <textarea placeholder="Adress" />
                </td>
                <td>
                  <textarea placeholder="Shope Name" />
                </td>
                <td>
                  <textarea placeholder="Status" />
                </td>
                <td>
                  <MDBBtn gradient="purple">Accept</MDBBtn>
                </td>
                <td>
                  <MDBBtn gradient="aqua">Block</MDBBtn>
                </td>
                <td>
                  <MDBBtn gradient="peach">
                    <MDBIcon far icon="trash-alt" />
                  </MDBBtn>
                </td>
              </tr>

              {/* First Row ended */}

              <tr>
                <td>
                  <textarea placeholder="Owner Name" />
                </td>
                <td>
                  <textarea placeholder="Phone Number" />
                </td>
                <td>
                  <textarea placeholder="Adress" />
                </td>
                <td>
                  <textarea placeholder="Shope Name" />
                </td>
                <td>
                  <textarea placeholder="Status" />
                </td>
                <td>
                  <MDBBtn gradient="purple">Accept</MDBBtn>
                </td>
                <td>
                  <MDBBtn gradient="aqua">Block</MDBBtn>
                </td>
                <td>
                  <MDBBtn gradient="peach">
                    <MDBIcon far icon="trash-alt" />
                  </MDBBtn>
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
        {/* Table content finish */}
      </React.Fragment>
    );
  }
}

export default UserTable;
