import React, { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, ButtonGroup, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { usersAPI } from "../global/global";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { ShowAlertContext } from "../context/AlertContext";
import ShowBackdrop from "./ShowBackdrop";

export function Users() {
  const [userData, setUserData] = useState(null);
  const [, setOpenAlert] = useContext(ShowAlertContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(`${usersAPI}/users`);
      const data = await response.json();
      setUserData(data);
    } catch (e) {
      console.error(e);
    }
  }

  // DELETE request using fetch with async/await
  async function deleteUser(id) {
    await fetch(`${usersAPI}/users/${id}`, { method: "DELETE" });
    setOpenAlert({ type: "success", msg: `UserID Deleted Successfully !` });
    fetchData();
  }

  if (userData)
    return (
      <Container component="main" maxWidth="100%">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell>{row.username}</TableCell>
                    <TableCell>{row.email_id}</TableCell>
                    <TableCell align="center">
                      <ButtonGroup variant="text">
                        <Button
                          onClick={() => navigate(`/profile/${row.id}`)}
                          color="info"
                          sx={{ mx: 1 }}
                        >
                          <AccountBoxIcon />
                        </Button>
                        <Button
                          onClick={() => navigate(`/edit-user/${row.id}`)}
                          color="secondary"
                          sx={{ mx: 1 }}
                        >
                          <EditIcon />
                        </Button>
                        <Button
                          onClick={() => deleteUser(row.id)}
                          color="error"
                          sx={{ mx: 1 }}
                        >
                          <DeleteIcon />
                        </Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    );
  else return <ShowBackdrop />;
}
