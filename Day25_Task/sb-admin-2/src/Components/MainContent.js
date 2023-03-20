import React from "react";
import { Footer } from "./Footer";
import { TopNavbar } from "./TopNavbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "./Dashboard/Dashboard";
import { Buttons } from "./Buttons/Buttons";
import { Cards } from "./Cards/Cards";
import { UtilityColors } from "./Utilities/UtilityColors";
import { UtilityBorder } from "./Utilities/UtilityBorder";
import { UtilityAnimation } from "./Utilities/UtilityAnimation";
import { UtilityOther } from "./Utilities/UtilityOther";
import { Page404 } from "./Pages/Page404";
import { PageBlank } from "./Pages/PageBlank";
import { Tables } from "./Tables";
import { Charts } from "./Charts";

export function MainContent() {
  return (
    <>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopNavbar />
          {/* End of Topbar */}
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/buttons" element={<Buttons />} />
            <Route exact path="/cards" element={<Cards />} />
            <Route exact path="/utility-color" element={<UtilityColors />} />
            <Route exact path="/utility-border" element={<UtilityBorder />} />
            <Route
              exact
              path="/utility-animation"
              element={<UtilityAnimation />}
            />
            <Route exact path="/utility-other" element={<UtilityOther />} />
            <Route exact path="/page-404" element={<Page404 />} />
            <Route exact path="/page-blank" element={<PageBlank />} />
            <Route exact path="/tables" element={<Tables />} />
            <Route exact path="/charts" element={<Charts />} />
            <Route path="/*" element={ <Navigate replace to="/page-404" /> }/>   
          </Routes>

          {/* /.container-fluid */}
        </div>
        {/* Footer */}
        <Footer />
      </div>

      {/* <!-- Scroll to Top Button--> */}
      <button
        className="scroll-to-top rounded"
        onClick={() =>{
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
        }
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
