import React, { useContext, useState } from "react";
import {
  Button,
  CssBaseline,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
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
import { UsersDetailsContext } from "../context/UserDetails";
import { useNavigate } from "react-router-dom";

const theme = createTheme();
export function AddUser() {
  const [userData, setUserData] = useContext(UsersDetailsContext);
  const [fname, setFname] = useState("");
  const [uid, setUid] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  // handleClickOpen and handleClose functions for buttons in alert dialog box
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    navigate("/users");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let maxid = 0;
    const data = new FormData(event.currentTarget);
    if (userData.length > 0) {
      const ids = userData.map((object) => {
        return parseInt(object.userId);
      });
      maxid = Math.max(...ids);
    }

    setUserData([...userData,{
        userId: maxid + 1,
        name: data.get("firstName"),
        uEmail: data.get("email"),
        gender: data.get("gender"),
      },
    ]);
    handleClickOpen();
    setEmail("");
    setFname("");
    setGender("");
    setUid("");
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
                  required
                  autoFocus
                  fullWidth
                  type="number"
                  value={uid}
                  id="userId"
                  label="User ID"
                  name="userId"
                  autoComplete="user-id"
                  onChange={(e) => setUid(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  value={fname}
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  onChange={(e) => setFname(e.target.value)}
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add User
            </Button>
            {/* Dialog box will open when form submitted */}
            <Dialog
              open={open}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"User Successfully Created"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Do you want to create more users
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button onClick={handleClose}>Yes</Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
