import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import CopyrightFooter from "./CopyrightFooter";
import { Routes, Route, Navigate } from "react-router-dom";
import { Users } from "./Users";
import { AddUser } from "./AddUser";
import { Profile } from "./Profile";
import { EditUser } from "./EditUser";
import { Page404 } from "./Page404";

export function MainContent() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<Navigate replace to="/users" />} />
          <Route path="/users" element={<Users />} />
          <Route path="/create-user" element={<AddUser />} />
          <Route path="/edit-user/:userId" element={<EditUser />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/*" element={<Navigate replace to="/404" />} />
        </Routes>
      </Container>

      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <CopyrightFooter sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}
