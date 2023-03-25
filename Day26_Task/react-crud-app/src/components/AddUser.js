import React, { useContext, useState } from "react";
import {
  Button,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box, Container, createTheme } from "@mui/system";
import { ThemeProvider } from "styled-components";
import { ShowAlertContext } from "../context/AlertContext";
import { usersAPI } from "../global/global";
import { useNavigate } from "react-router-dom";

const theme = createTheme();
export function AddUser() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [userRole, setUserRole] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [, setOpenAlert] = useContext(ShowAlertContext);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newData = {
      username: userName,
      email_id: email,
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      address: address,
      mobile_number: mobileNumber,
      user_role: userRole,
    };
    const res = await fetch(`${usersAPI}/users`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newData),
    });
    if (res.status === 201) {
      setOpenAlert({ type: "success", msg: `User Added Successfully !` });
    } else {
      setOpenAlert({ type: "error", msg: res.statusText });
    }
    navigate("/users");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="form"
            method="POST"
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="username"
                  name="username"
                  value={userName}
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  onChange={(e) =>
                    setUserName(e.target.value.split(" ").join(""))
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  id="email"
                  value={email}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="first_name"
                  value={firstName}
                  label="first name"
                  name="first_name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="last_name"
                  value={lastName}
                  label="last name"
                  name="last_name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel id="gender-label">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="gender-label"
                    name="gender"
                    required
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <FormControlLabel
                      value="Female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="Male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="Other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  type="address"
                  id="address"
                  value={address}
                  label="Address"
                  name="address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  type="number"
                  id="mobile_number"
                  value={mobileNumber}
                  label="Mobile Number"
                  name="mobile_number"
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="user_role"
                  value={userRole}
                  label="User Role"
                  name="user_role"
                  onChange={(e) => setUserRole(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              color="success"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add User
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
