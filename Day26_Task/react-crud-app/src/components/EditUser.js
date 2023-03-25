import React, { useContext, useEffect, useState } from "react";
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
import { Box, Container } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import { usersAPI } from "../global/global";
import { ShowAlertContext } from "../context/AlertContext";
import ShowBackdrop from "./ShowBackdrop";

export function EditUser() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [, setOpenAlert] = useContext(ShowAlertContext);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${usersAPI}/users/${userId}`);
        if (response.status === 200) {
          const data = await response.json();
          setUserData(data);
        } else {
          setOpenAlert({ type: "warning", msg: "Data Not Available!" });
          navigate("/users");
        }
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [userId, navigate, setOpenAlert]);

  if (userData) {
    return <EditUserDetails data={userData} id={userId} />;
  } else {
    return <ShowBackdrop />;
  }
}

const EditUserDetails = ({ data, id }) => {
  const [, setOpenAlert] = useContext(ShowAlertContext);
  const navigate = useNavigate();
  const [userName, setUserName] = useState(data.username);
  const [email, setEmail] = useState(data.email_id);
  const [firstName, setFirstName] = useState(data.first_name);
  const [lastName, setLastName] = useState(data.last_name);
  const [gender, setGender] = useState(data.gender);
  const [address, setAddress] = useState(data.address);
  const [userRole, setUserRole] = useState(data.user_role);
  const [mobileNumber, setMobileNumber] = useState(data.mobile_number);

  //function to save edited data
  const handleSubmit = async (event) => {
    event.preventDefault();
    let updatedData = {
      username: userName,
      email_id: email,
      first_name: firstName,
      last_name: lastName,
      gender: gender,
      address: address,
      mobile_number: mobileNumber,
      user_role: userRole,
    };
    let res = await fetch(`${usersAPI}/users/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedData),
    });
    // let res1 = await res.json()
    //  console.log(res)
    if (res.status === 200) {
      setOpenAlert({
        type: "success",
        msg: `User ID ${id} Edited Successfully !`,
      });
    } else {
      setOpenAlert({ type: "error", msg: res.statusText });
    }

    navigate("/users");
  };
  return (
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
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
