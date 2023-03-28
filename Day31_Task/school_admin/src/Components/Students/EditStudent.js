import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShowAlertContext } from "../../context/AlertContext";
import { studentsAPI } from "../../global";
export function EditStudent() {
  const {id} = useParams();
  const [ studentData, setStudentData] = useState(null);
  useEffect(() => {
    fetchData();
    async function fetchData() {
      try {
        const response = await fetch(`${studentsAPI}/students/${id}`);
        const data = await response.json();
        setStudentData(data);
        // console.log(data);
      } catch (e) {
        console.error(e);
      }
    }
  }, [id]);

  
if(studentData){
  return (<EditStudentDetail data={studentData}/>)
}
else return null
 
}

function EditStudentDetail({data}){
  // console.log(data)
  const [ firstName, setFirstName ] = useState(data.first_name);
  const [ lastName, setLastName ] = useState(data.last_name);
  const [ email, setEmail ] = useState(data.email_id);
  const [ mobileNo, setMobileNo ] = useState(data.mobile_number);
  const [ gender, setGender ] = useState(data.gender);
  const [ address, setAddress ] = useState(data.address);
  const [ birthDate, setBirthDate ] = useState(data.dob);
  const navigate = useNavigate();
  const [, setOpenAlert] = useContext(ShowAlertContext);


  const handlerSubmit = async (event) => {
    const updatedData = {
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      dob: birthDate,
      email_id: email,
      address: address,
      mobile_number: mobileNo,
    };
    const res = await fetch(`${studentsAPI}/students/${data.id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    // console.log(JSON.stringify(updatedData))
    if(res.status===200){
      setOpenAlert({type:"success", msg:`Student ${data.id} Edited Successfully !`});
      navigate("/students")
    }
  };

  return (
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <button type="button" className="btn btn-primary float-right" onClick={()=>navigate(-1)}>BACK</button>
      <h1 className="h3 mb-4 text-gray-800">Edit Student</h1>
      <div className="col-lg-6 mx-auto">
        <form className="user" onSubmit={(e)=>e.preventDefault()}>
          <div className="form-group row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <input
                type="text"
                className="form-control form-control-user"
                id="firstname"
                placeholder="First Name"
                required
                onChange={(e)=>setFirstName(e.target.value)}
                value={firstName}
              />
            </div>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control form-control-user"
                id="lastname"
                placeholder="Last Name"
                required
                onChange={(e)=>setLastName(e.target.value)}
                value={lastName}
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
                  defaultChecked={gender==="Female" ? true : false}
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
                  defaultChecked={gender==="Male" ? true : false}
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
                  defaultChecked={gender==="Other" ? true : false}
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
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
}