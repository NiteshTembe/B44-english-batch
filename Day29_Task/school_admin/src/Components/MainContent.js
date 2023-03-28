import React, { useState } from "react";
import { Footer } from "./Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./Dashboard/Dashboard";
import { Page404 } from "./Pages/Page404";
import { PageBlank } from "./Pages/PageBlank";
import { ListTeachers } from "./Teachers/ListTeachers";
import { AddTeacher } from "./Teachers/AddTeacher";
import { EditTeacher } from "./Teachers/EditTeacher";
import { ListStudents } from "./Students/ListStudents";
import { AddStudent } from "./Students/AddStudent";

import { Link } from "react-router-dom";
import { EditStudent } from "./Students/EditStudent";
import { ViewStudent } from "./Students/ViewStudent";
import { ViewTeacher } from "./Teachers/ViewTeacher";
import ShowAlert from "./ShowAlert";

export function MainContent() {
  const [sideNavStyle, setSideNavStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );
  const sideToggleHandler = () => {
    if (
      sideNavStyle ===
      "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
    )
      setSideNavStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      );
    else
      setSideNavStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
  };

  return (
    <>
      <ul className={sideNavStyle} id="accordionSidebar">
        {/* <!-- Sidebar - Brand --> */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">School Admin</div>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Users</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTeacher"
            aria-expanded="true"
            aria-controls="collapseTeacher"
          >
            <i className="fa-solid fa-person-chalkboard"></i>
            <span>Teachers</span>
          </a>
          <div
            id="collapseTeacher"
            className="collapse"
            aria-labelledby="headingStudent"
            data-bs-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Teachers Management:</h6>
              <Link className="collapse-item" to="/teachers">
                List Teachers
              </Link>
              <Link className="collapse-item" to="/add-teacher">
                Add Teacher
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link dropdown-toggle"
            href="/"
            data-bs-toggle="collapse"
            data-bs-target="#collapsestudent"
            aria-expanded="true"
            aria-controls="collapseStudent"
          >
            <i className="fa fa-users" aria-hidden="true"></i>
            <span>Students</span>
          </a>
          <div
            id="collapsestudent"
            className="collapse"
            aria-labelledby="headingStudent"
            data-bs-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Students Management:</h6>
              <Link className="collapse-item" to="/students">
                List Students
              </Link>
              <Link className="collapse-item" to="/add-student">
                Add Student
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            onClick={sideToggleHandler}
            id="sidebarToggle"
          ></button>
        </div>
      </ul>

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            {/* <!-- Sidebar Toggle (Topbar) --> */}
            <button
              id="sidebarToggleTop"
              onClick={sideToggleHandler}
              className="btn btn-link d-md-none rounded-circle mr-3"
            >
              <i className="fa fa-bars"></i>
            </button>

            {/* <!-- Topbar Search --> */}
            <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control bg-light border-0 small"
                  placeholder="Search for..."
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>

            {/* <!-- Topbar Navbar --> */}
            <ul className="navbar-nav ml-auto">
              {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
              <li className="nav-item dropdown no-arrow d-sm-none">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="searchDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={sideToggleHandler}
                >
                  <i className="fas fa-search fa-fw"></i>
                </a>
                {/* <!-- Dropdown - Messages --> */}
                <div
                  className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown"
                  style={{ margin: 0 }}
                >
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-search fa-sm"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>

              <div className="topbar-divider d-none d-sm-block"></div>

              {/* <!-- Nav Item - User Information --> */}
              <li className="nav-item dropdown no-arrow">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="userDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                    Admin
                  </span>
                  <img
                    className="img-profile rounded-circle"
                    src="img/undraw_profile.svg"
                    alt=""
                  />
                </a>
                {/* <!-- Dropdown - User Information --> */}
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                  style={{ margin: 0 }}
                >
                  <a className="dropdown-item" href="/">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                    Profile
                  </a>
                  <a className="dropdown-item" href="/">
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                    Settings
                  </a>
                  <div className="dropdown-divider"></div>
                  <a
                    className="dropdown-item"
                    href="/"
                    data-bs-toggle="modal"
                    data-bs-target="#logoutModal"
                  >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </nav>
          <ShowAlert />
          {/* End of Topbar */}
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/teachers" element={<ListTeachers />} />
            <Route exact path="/add-teacher" element={<AddTeacher />} />
            <Route path="/teacher/:id" element={<ViewTeacher />} />
            <Route path="/teacher/edit/:id" element={<EditTeacher />} />
            <Route exact path="/students" element={<ListStudents />} />
            <Route exact path="/add-student" element={<AddStudent />} />
            <Route path="/student/:id" element={<ViewStudent />} />
            <Route path="/student/edit/:id" element={<EditStudent />} />
            <Route exact path="/page-404" element={<Page404 />} />
            <Route exact path="/page-blank" element={<PageBlank />} />
            <Route path="/*" element={<Navigate replace to="/page-404" />} />
          </Routes>
          
          
          {/* /.container-fluid */}
        </div>
        {/* Footer */}
        <Footer />
      </div>

      {/* <!-- Scroll to Top Button--> */}
      <button
        className="scroll-to-top rounded"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <i className="fas fa-angle-up"></i>
      </button>

      {/* <!-- Logout Modal--> */}
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="/login">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
