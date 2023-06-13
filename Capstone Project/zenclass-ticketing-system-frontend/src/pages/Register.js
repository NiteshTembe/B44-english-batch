import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button } from "react-bootstrap";
import { ErrorMessageContainer } from "../components/ErrorMessageContainer";
import axios from "../api/axios";

// for validation using Yup
const formvalidationSchema = yup.object({
  user_name: yup
    .string()
    .min(3, "Enter minimum 3 letters")
    .required("Name is required"),
  user_role: yup
    .string()
    .min(3, "Enter minimum 3 letters")
    .required("Please Provide role to user"),
  email: yup
    .string()
    .required("Email is required")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Enter a Valid Email"),
  phone_number: yup
    .string()
    .min(10, "Enter minimum 10 digit")
    .max(13, "Number should not exceeds 13 digit(including '+')")
    .required("Phone Number is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#!@%&$]).{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export function Register() {

  const [ errMsg, setErrMsg ] = useState();
  const [ successMsg, setSuccessMsg ] = useState();

  // using formik to handle form
  const formik = useFormik({
    initialValues: {
      user_name: "",
      email: "",
      phone_number: "",
      user_role: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: formvalidationSchema,
    onSubmit: (signupData) => {
      handleSignUp(signupData);
    },
  });

  const roleOptions = [
    { value: "Student", label: "Student" },
    { value: "Admin", label: "Admin" },
  ];

  // submit function 
  const handleSignUp = async (signupData) => {
    setErrMsg("")
    setSuccessMsg("")
    try {
      const res = await axios.post('/users/signup', signupData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(function (response) {
          setSuccessMsg(response.data.message);
        })
        .catch(function (error) {
          setErrMsg(JSON.parse(error.request.response).message);
        });
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="container-custom mr-0 pr-0">
      {/* <!-- Outer Row --> */}
      <div className="row m-0">
        <div className="col-md-8">
          <div className="row zen-login-logo">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF6GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0wMy0wNVQwNTozNjoxMiswNTozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMDMtMTNUMTA6NTY6MDMrMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDMtMTNUMTA6NTY6MDMrMDU6MzAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YjA4NjllOWQtYmVkNC1mODQ5LWE1MmUtODBjNThjMzVlOTk5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFGOTJFRTE0NDE4RjExRTk5MERFRUYxQTM1QTI2Rjg3IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6QUY5MkVFMTQ0MThGMTFFOTkwREVFRjFBMzVBMjZGODciIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRjkyRUUxMTQxOEYxMUU5OTBERUVGMUEzNUEyNkY4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRjkyRUUxMjQxOEYxMUU5OTBERUVGMUEzNUEyNkY4NyIvPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiMDg2OWU5ZC1iZWQ0LWY4NDktYTUyZS04MGM1OGMzNWU5OTkiIHN0RXZ0OndoZW49IjIwMjAtMDMtMTNUMTA6NTY6MDMrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7T/cCtAAAMlklEQVR42u2df3BdRRXHkya0pE36A/uDoAJaQaBJ2ugMWBmBaUHB33Ys02GYATuCdrRWS2WQohSVYRAVtSMDBLFxkJEf1cFSB1AEYhmNFQGJUAsUaS0FWyj1N4iN35PZzZycnt1773v35d33cv74zr3v7t3Nvbufe3b37I80DA4ONpjGriwTDADLBAPAZACYDACTAWAyAEwGgMkAMBkAJgPAZACYDACTAWAyAExjC4Du7u6N0AOmutFtWQF4FRo01Y32ZAVgr2VaXWm7AWAAGAAGgAFgAJQBwF+g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"
              alt=""
            />
          </div>
          {errMsg?<div className="alert alert-danger" role="alert">{errMsg}</div> : ""}
          {successMsg?<div className="alert alert-success" role="alert">{successMsg}</div> : ""}
          <div className="row">
            <div className="col-md-12 d-flex flex-column justify-content-center align-items-center">
              <div className="col-md-6">
                <form onSubmit={formik.handleSubmit}>
                
                  <div className="form-group mt-2">
                    <label htmlFor="user_name" className="label-style mb-0">
                      Name
                    </label>
                    <div>
                      <input
                        className="form-control"
                        name="user_name"
                        placeholder="Type Users Fullname"
                        value={formik.values.user_name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.user_name && formik.errors.user_name ? (
                        <ErrorMessageContainer errMessage={formik.errors.user_name}/>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="user_role" className="label-style mb-0">
                      Role
                    </label>
                    <div>
                      <select
                        className="form-control"
                        placeholder="Select User Role"
                        value={formik.values.user_role}
                        onChange={(selectedOption) => {
                          formik.handleChange("user_role")(selectedOption);
                        }}
                        name="user_role"
                      >
                        <option value="" defaultValue>
                          Select Role
                        </option>
                        {roleOptions.map((role) => {
                          return (
                            <option key={role.value} value={role.value}>
                              {role.label}
                            </option>
                          );
                        })}
                      </select>
                      {formik.touched.user_role && formik.errors.user_role ? (
                        <ErrorMessageContainer errMessage={formik.errors.user_role}/>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="form-group mt-2">
                    <label htmlFor="phone_number" className="label-style mb-0">
                      Phone
                    </label>
                    <div>
                      <input
                        className="form-control"
                        name="phone_number"
                        placeholder="Eg: +919876543210 / 9876543210 "
                        value={formik.values.phone_number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.phone_number &&
                      formik.errors.phone_number ? (
                        <ErrorMessageContainer errMessage={formik.errors.phone_number}/>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="form-group mt-2">
                    <label htmlFor="email" className="label-style mb-0">
                      Email
                    </label>
                    <div>
                      <input
                        className="form-control"
                        name="email"
                        placeholder="Example : johndoe@mail.com"
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <ErrorMessageContainer errMessage={formik.errors.email}/>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="form-group mt-1">
                    <label htmlFor="password" className="label-style mb-0">
                      Password
                    </label>
                    <div>
                      <input
                        className="form-control"
                        name="password"
                        placeholder="Your password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <ErrorMessageContainer errMessage={formik.errors.password}/>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="form-group mt-1">
                    <label
                      htmlFor="confirm_password"
                      className="label-style mb-0"
                    >
                      Confirm Password
                    </label>
                    <div>
                      <input
                        className="form-control"
                        name="confirm_password"
                        placeholder="Enter same password as above"
                        type="password"
                        value={formik.values.confirm_password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.confirm_password &&
                      formik.errors.confirm_password ? (
                        <ErrorMessageContainer errMessage={formik.errors.confirm_password}/>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="col-md-12 btn btn-lg btn-block login-btn mt-4 mb-4"
                  >
                    Register
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-right pr-0">
          <img
            src="/media/login_img.cbed4040.png"
            className="img-class"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}



