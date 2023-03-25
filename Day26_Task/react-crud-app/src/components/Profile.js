import { Grid, SvgIcon, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShowAlertContext } from "../context/AlertContext";
import { usersAPI } from "../global/global";
import ShowBackdrop from "./ShowBackdrop";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { HorizontalRule } from "@mui/icons-material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EditIcon from "@mui/icons-material/Edit";

export function Profile() {
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
    return <ProfileDetails data={userData} />;
  } else {
    return <ShowBackdrop />;
  }
}

function ProfileDetails({ data }) {
  const navigate = useNavigate();

  return (
    <Card sx={{ minWidth: 275, marginTop: 8, textAlign: "center" }}>
      <CardActions>
        <Button onClick={() => navigate(-1)} color="info">
          <SvgIcon fontSize="small">
            <ArrowBackIosIcon />
          </SvgIcon>
          Back
        </Button>
      </CardActions>

      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <AccountCircleIcon sx={{ width: 100, height: 100 }} />
        </Typography>
        <Typography variant="h4" color="info">
          {data.first_name} {data.last_name}
        </Typography>
        <Typography sx={{ mb: 2 }} color="text.secondary">
          {data.user_role}
        </Typography>
        <Typography variant="body2"> Basic Details</Typography>
        <HorizontalRule />
        <Grid container spacing={2} sx={{ textAlign: "left", mb: 2 }}>
          <Grid item xs={6}>
            {" "}
            UserName{" "}
          </Grid>{" "}
          <Grid item xs={6}>
            : {data.username}
          </Grid>
          <Grid item xs={6}>
            {" "}
            Email Id{" "}
          </Grid>{" "}
          <Grid item xs={6}>
            : {data.email_id}
          </Grid>
          <Grid item xs={6}>
            {" "}
            Mobile Number{" "}
          </Grid>{" "}
          <Grid item xs={6}>
            : {data.mobile_number}
          </Grid>
        </Grid>
        <Typography variant="body2"> Contact Details</Typography>
        <HorizontalRule />
        <Grid container spacing={2} sx={{ textAlign: "left" }}>
          <Grid item xs={6}>
            {" "}
            Gender{" "}
          </Grid>{" "}
          <Grid item xs={6}>
            : {data.gender}
          </Grid>
          <Grid item xs={6}>
            {" "}
            Address{" "}
          </Grid>{" "}
          <Grid item xs={6}>
            : {data.address}
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => navigate(`/edit-user/${data.id}`)}
          color="secondary"
        >
          <SvgIcon fontSize="small">
            <EditIcon />
          </SvgIcon>
          Edit Profile
        </Button>
      </CardActions>
    </Card>
  );
}
