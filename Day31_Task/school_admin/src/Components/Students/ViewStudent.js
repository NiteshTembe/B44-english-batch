import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { studentsAPI } from "../../global";
export function ViewStudent() {
  const { id } = useParams();
  const [studentData, setStudentData] = useState(null);
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

  if (studentData) {
    return <StudentProfile data={studentData} />;
  } else return null;
}

function StudentProfile({ data }) {
  const navigate = useNavigate();

  return (
    
    <div className="container-fluid">
      {/* <!-- Page Heading --> */}
      <button type="button" className="btn btn-primary float-right" onClick={()=>navigate(-1)}>BACK</button>
      <h1 className="h3 mb-4 text-gray-800">Student Profile</h1>
      <div className="card h-100">
        <div className="card-header d-inline-flex align-items-center justify-content-center text-bg-dark">
          <h1 className="fs-4">
            {data.first_name} {data.last_name}
          </h1>
        </div>
        <div className="card-body">
          <div class="container">
            <div class="row card-text">
              <div class="col-sm-3">Email ID</div><div class="col-auto">: {data.email_id}</div>
            </div>
            <div class="row card-text">
              <div class="col-sm-3">Mobile No.</div><div class="col-auto">: {data.mobile_number}</div>
            </div>
            <div class="row card-text">
              <div class="col-sm-3">Gender</div><div class="col-auto">: {data.gender}</div>
            </div>
            <div class="row card-text">
              <div class="col-sm-3">Birth Date</div><div class="col-auto">: {data.dob}</div>
            </div>
            <div class="row card-text">
              <div class="col-sm-3">Address</div><div class="col-auto">: {data.address}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
