import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';
import { API } from "./globle";


const formvalidationSchema = yup.object({
  username: yup
    .string()
    .required("Please Provide Email Address")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Enter valid Email"),
  password: yup
    .string()
    .min(8, "Minimum 8 Characters Required")
    .max(12, "")
    .required("Password should not be greater than 12 characters")
    .matches(
      /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#!@%&$]).{8,}$/,
      "Enter valid password"
    ),
});

export function Login() {

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: formvalidationSchema,
    onSubmit: (loginData) => {
      checkLogin(loginData);
    },
  });

  const checkLogin = (loginData) => {
    console.log("loginData :", loginData);
    fetch(`${API}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((data) => data.json())
      .then((response) => console.log(response));
  };

  return (
    
    <div className="container">
      {/* <!-- Outer Row --> */}
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                <div className="col-xl">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="user was-validate">
                      <div className="form-group my-2">
                        <input
                          type="email"
                          className="form-control form-control-user"
                          id="username"
                          name="username"
                          value={formik.values.username}
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                       
                            
    
                         {formik.touched.username && formik.errors.username ?  <small id="emailHelp" class="text-danger">
          {formik.errors.username}
        </small>  : ""}

                      </div>
                      <div className="form-group my-2">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          value={formik.values.password}
                          className="form-control form-control-user"
                          placeholder="Password"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ?  <small id="passwordHelp" class="text-danger">
          {formik.errors.password}
        </small>  : ""}
                      </div>
                      
                      <button className="btn btn-primary btn-user btn-block" type="submit">Submit</button>
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link className="small" to="/forgot-password">
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" to="/register">
                        Create an Account!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
