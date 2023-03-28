import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { studentsAPI } from "../../global";
export function ListStudents() {
  const [studentData, setStudentData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(`${studentsAPI}/students`);
      const data = await response.json();
      setStudentData(data);
      // console.log(data);
    } catch (e) {
      console.error(e);
    }
  }

   // DELETE request using fetch with async/await
   async function deleteStudent(id) {
    await fetch(`${studentsAPI}/students/${id}`, { method: "DELETE" });
    fetchData();
  }

  if (studentData) {
    return (
      <div className="container-fluid text-start">
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-4 text-gray-800">List Students</h1>
        <div className="table-responsive">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email ID</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.first_name}</td>
                  <td>{student.last_name}</td>
                  <td>{student.email_id}</td>
                  <td className="text-center">
                    <button type="button" className="btn btn-info mx-1" onClick={()=>navigate(`/student/${student.id}`)}>Info</button>
                    <button type="button" className="btn btn-warning mx-1" onClick={()=>navigate(`/student/edit/${student.id}`)}>Edit</button>
                    <button type="button" className="btn btn-danger mx-1" onClick={()=>deleteStudent(student.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else return null;
}
