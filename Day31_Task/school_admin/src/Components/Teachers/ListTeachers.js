import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { teachersAPI } from "../../global";
export function ListTeachers() {
  const [teacherData, setTeacherData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(`${teachersAPI}/teachers`);
      const data = await response.json();
      setTeacherData(data);
      // console.log(data);
    } catch (e) {
      console.error(e);
    }
  }

   // DELETE request using fetch with async/await
   async function deleteTeacher(id) {
    await fetch(`${teachersAPI}/teachers/${id}`, { method: "DELETE" });
    fetchData();
  }

  if (teacherData) {
    return (
      <div className="container-fluid text-start">
        {/* <!-- Page Heading --> */}
        <h1 className="h3 mb-4 text-gray-800">List Teachers</h1>
        <div className="table-responsive">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Staff ID</th>
                <th>Full Name</th>
                <th>Email ID</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {teacherData.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.staff_id}</td>
                  <td>{teacher.full_name}</td>
                  <td>{teacher.email_id}</td>
                  <td className="text-center">
                    <button type="button" className="btn btn-info mx-1" onClick={()=>navigate(`/teacher/${teacher.id}`)}>Info</button>
                    <button type="button" className="btn btn-warning mx-1" onClick={()=>navigate(`/teacher/edit/${teacher.id}`)}>Edit</button>
                    <button type="button" className="btn btn-danger mx-1" onClick={()=>deleteTeacher(teacher.id)}>Delete</button>
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
