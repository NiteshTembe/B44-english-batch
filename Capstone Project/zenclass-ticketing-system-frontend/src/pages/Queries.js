import React from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Queries = () => {
  return (
    <>
      <Navbar navTitle="My Queries" />
      <Sidebar />
      <MainBox />
    </>
  );
};

const MainBox = () => {
  return (
    <div
      className="container-fluid"
      style={{ paddingLeft: "80px", marginTop: "100px" }}
    >
      ...
      <Routes>
        <Route exact path="/create" element={<QueryCreate />}></Route>
        <Route exact path="/" element={<QueryMainPage />}></Route>
      </Routes>
    </div>
  );
};

const QueryMainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      home
      <Button onClick={() => navigate("/queries/create")}>Create Query</Button>
    </div>
  );
};

const QueryCreate = () => {
  return (
    <div>
      <form
        className="d-flex justify-content-center flex-column mt-2"
        autocomplete="off"
      >
        <div className="containerLabel">Topic</div>
        <div className="inputContainer">
          <label htmlFor="category" className="label-style mb-0">
            Category
          </label>
          <div>
            <select
              className="formInputs"
              name="category"
              fdprocessedid="ij6mi"
            >
              <option label="--- Select Category---"></option>
              <option value="1" index="0" label="Zen-Class Doubt"></option>
              <option value="2" index="1" label="Placement Related"></option>
              <option value="3" index="2" label="Coordination Related"></option>
              <option value="4" index="3" label="Pre-Bootcamp Related"></option>
            </select>
          </div>
          <label htmlFor="language" className="label-style mb-0">
            Prefered Voice Communication Language
          </label>
          <div>
            <select
              className="formInputs"
              name="language"
              fdprocessedid="gyfyfe"
            >
              <option label="--- Select Language---"></option>
              <option value="1" index="0" label="English"></option>
              <option value="2" index="1" label="Hindi"></option>
              <option value="3" index="2" label="Tamil"></option>
            </select>
          </div>
        </div>
        <div className="horizontal__rule"></div>
        <div className="containerLabel">Details</div>
        <div className="inputContainer">
          <label htmlFor="title" className="label-style mb-0">
            Query Title
          </label>
          <div>
            <input
              className="formInputs"
              name="title"
              placeholder="Enter the query title"
              type="text"
              value=""
              fdprocessedid="lpmac"
            />
          </div>
          <label htmlFor="description" className="label-style mb-0">
            Query Description
          </label>
          <textarea
            className="formInputs"
            rows="5"
            name="description"
            type="text"
            placeholder="Enter the Description"
          ></textarea>
        </div>
        <div className="horizontal__rule"></div>
        <div className="containerLabel">
          Your available Time ? ( Ours : 9:00 AM - 7:00 PM )
        </div>
        <div className="inputContainer">
          <label htmlFor="startTime" className="label-style mb-0">
            From
          </label>
          <div>
            <input
              className="formInputs"
              name="startTime"
              type="time"
              max="19:00"
              value="09:00"
            />
          </div>
          <label htmlFor="endTime" className="label-style mb-0">
            Till
          </label>
          <div>
            <input
              className="formInputs"
              name="endTime"
              type="time"
              max="19:00"
              value="19:00"
            />
          </div>
        </div>
        <div className="horizontal__rule"></div>
        <div className="containerLabel">Attachments (Optional)</div>
        <div className="d-flex">
          <div className="attachments__body">
            <div type="file" className="add__attachment">
              <img src="/Icons/attachmentAdd.svg" alt="add attachments" />
            </div>
          </div>
        </div>
        <div className="horizontal__rule"></div>
        <div className="d-flex justify-content-end">
          <button
            type="reset"
            className="btn cancel-btn"
            fdprocessedid="my5qam"
          >
            Cancel
          </button>
          <div className="lastBtns">
            <button
              type="submit"
              className="btn submit-btn"
              fdprocessedid="ytp5yp"
              style={{backgroundColor: "rgb(75, 13, 186)", color: "white", padding: "0px 24px"}}
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Queries;
