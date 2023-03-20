import React, { useContext } from "react";
import { UsersDetailsContext } from "../context/UserDetails";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";




export function Users() {
  const [userData,setUserData,,setHeading] = useContext(UsersDetailsContext)
  userData.sort((a,b)=>parseInt(a.userId)-parseInt(b.userId))

  // function to delete user data
  const deleteUser = (userId) => {
  setUserData(userData.filter((obj)=>parseInt(obj.userId)===parseInt(userId)));
  }

  
  return (
    <Container component="main" maxWidth="lg">
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">User ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell align="center" colSpan={3}>Function</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((row) => (
            <TableRow
              key={row.userId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right" scope="row">
                {row.userId}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.uEmail}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell><Link to={`/profile/${row.userId}`} onClick={()=>(setHeading("Profile"))}><Button>Profile</Button></Link></TableCell>
              <TableCell><Link to={`/edit-user/${row.userId}`} ><Button>Edit</Button></Link></TableCell>
              <TableCell><Button onClick={()=>(deleteUser(row.userId))}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
    </Container>
    
  );
}


// export function Users() {
//   const [userData] = useContext(UsersDetailsContext)

//   return (
//     <div className="user-table">
//       <table>
//         <thead>
//           <tr>
//             <th>User ID</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Gender</th>
//           </tr>
//         </thead>
//         <tbody>
//           {
//             userData.map((user) => (
//               <tr key={user.userId}>
//                 <td>{user.userId}</td>
//                 <td>{user.name}</td>
//                 <td>{user.age}</td>
//                 <td>{user.gender}</td>
//               </tr>
//             ))
//           }
//         </tbody>
//       </table>
//     </div>
//   );
// }
