import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShowAlertContext } from "../../context/AlertContext";
import { teachersAPI } from "../../global";
export function AddTeacher() {
  const [ fullName, setFullName ] = useState("");
  const [ staffId, setStaffId ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ mobileNo, setMobileNo ] = useState("");
  const [ gender, setGender ] = useState("");
  const [ address, setAddress ] = useState("");
  const [ birthDate, setBirthDate ] = useState("");
  const navigate = useNavigate();
  const [, setOpenAlert] = useContext(ShowAlertContext);

  const handlerSubmit = async (event) => {
    const newData = {
      full_name: fullName,
      staff_id: staffId,
      gender: gender,
      dob: birthDate,
      email_id: email,
      address: address,
      mobile_number: mobileNo,
    };
    const res = await fetch(`${teachersAPI}/teachers`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newData),
    });
    //  console.log(newData)
    if(res.status===201) {
      setOpenAlert({type:"success", msg:"Teacher Added Successfully !"});
      navigate("/teachers");
    }
  };

  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <h1 className="h3 mb-4 text-gray-800">Add Teacher</h1>
      <div className="col-lg-6 mx-auto">
        <form className="user" onSubmit={(e)=>e.preventDefault()}>
          <div className="form-group row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <input
                type="text"
                className="form-control form-control-user"
                id="fullname"
                placeholder="Full Name"
                required
                onChange={(e)=>setFullName(e.target.value)}
                value={fullName}
              />
            </div>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control form-control-user"
                id="staffid"
                placeholder="Staff ID"
                required
                onChange={(e)=>setStaffId(e.target.value)}
                value={staffId}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-user"
              id="emailid"
              required
              placeholder="Email Address"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group row">
            <div className="col-sm-6 mb-3 mb-sm-0">
            <input
              type="number"
              required
              className="form-control form-control-user"
              id="mobileNumber"
              placeholder="Mobile Number"
              min={1000000000}
              max={9999999999}
              onChange={(e)=>setMobileNo(e.target.value)}
                value={mobileNo}
            />
            </div>
            <div className="col-sm-6 mb-3">
            <input
              type="date"
              className="form-control form-control-user"
              id="birthdate"
              placeholder="Birth Date"
              value={birthDate}
              onChange={(e)=>setBirthDate(e.target.value)}
            />
          </div>
          </div>
          <div className="form-group">
          <label htmlFor="gender" className="col-sm-2 col-form-label">Gender : </label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="Female"
                  required
                  value="Female"
                  onClick={()=>setGender("Female")}
                />
                <label className="form-check-label" htmlFor="Female">
                  Female
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="Male"
                  value={"Male"}
                  onClick={()=>setGender("Male")}
                />
                <label className="form-check-label" htmlFor="Male">
                  Male
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="Other"
                  value="Other"
                  onClick={()=>setGender("Other")}
                />
                <label className="form-check-label" htmlFor="Other">
                  Other
                </label>
              </div>
          </div>
          
          <div className="form-group">
          <textarea className="form-control form-control-user" 
          placeholder="Contact Address" 
          id="address"
          value={address}
          onChange={(e)=>setAddress(e.target.value)}>
          </textarea>
          </div>
          <button onClick={()=>handlerSubmit()} className="btn btn-success btn-user btn-block">
            ADD TEACHER
          </button>
        </form>
      </div>
    </div>
  );
}
