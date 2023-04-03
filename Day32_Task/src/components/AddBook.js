import React, { useContext } from "react";
import {
  Button,
  CssBaseline,
  Grid,
  TextField,
} from "@mui/material";
import { Box, Container} from "@mui/system";
// import { ShowAlertContext } from "./context/AlertContext";
import { useNavigate } from "react-router-dom";
import { API } from "../global";
import { useFormik } from "formik";
import * as yup from "yup";
import { BookDataContext } from "../context/BookDataContext";

const bookvalidationSchema = yup.object({
  title: yup.string().required("Book Title Should Not Be Empty !"),
  imgUrl: yup
    .string()
    .min(4, "Need a longer poster !")
    .required("Please Add Book Poster Image URL !"),
  rating: yup
    .number("Please Enter Rating Between 1 to 10 !")
    .min(1, "Please Enter Rating Between 1 to 10 !")
    .max(10, "Please Enter Rating Between 1 to 10 !")
    .required("Book Rating is Needed !"),
  desc: yup
    .string()
    .min(20, "Summary should be grater than 20 Characters !")
    .required("Plese Write minimum 20 characters about Book !"),
  trailer: yup
    .string()
    .min(4, "Need a longer trailer !")
    .required("Please add YT trailer about Book !"),
});

export function AddBook() {
  const navigate = useNavigate();
  const [, setOpen] = useContext(BookDataContext)

  const formik = useFormik({
    initialValues: {
      title: "",
      imgUrl: "",
      rating: "",
      desc: "",
      trailer: "",
    },
    validationSchema: bookvalidationSchema,
    onSubmit: (newBook) => {
      //console.log("onSubmit Newbook Data", newBook);
      addNewBook(newBook);
    },
  });

  const addNewBook = async (newBook) => {
    // console.log(newBook)
    const res = await fetch(`${API}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newBook),
    });
    if (res.status === 201) {
      setOpen({ type: "success", msg: `Book Added Successfully !` });
    } else {
      setOpen({ type: "error", msg: res.statusText });
    }
    navigate("/");
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
            onSubmit={formik.handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="title"
                  value={formik.values.title}
                  fullWidth
                  id="title"
                  label="Book Title"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.title && formik.errors.title ? true : false}
                  helperText={formik.touched.title && formik.errors.title ? formik.errors.title : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="imgUrl"
                  value={formik.values.imgUrl}
                  label="Book Poster"
                  name="imgUrl"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.imgUrl && formik.errors.imgUrl ? true : false}
                  helperText={formik.touched.imgUrl && formik.errors.imgUrl ? formik.errors.imgUrl : ""}
                />
              </Grid>
              <Grid item xs={8}>
                <TextField
                  required
                  fullWidth
                  id="trailer"
                  value={formik.values.trailer}
                  label="YT Trailer Path"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.trailer && formik.errors.trailer ? true : false}
                  helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : ""}
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  type="number"
                  required
                  max={10}
                  id="rating"
                  value={formik.values.rating}
                  label="Rating"
                  name="rating"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.rating && formik.errors.rating ? true : false}
                  helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating : ""}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  id="desc"
                  value={formik.values.desc}
                  label="Description"
                  name="desc"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.desc && formik.errors.desc ? true : false}
                  helperText={formik.touched.desc && formik.errors.desc ? formik.errors.desc+(20-formik.values.desc.length)+" more" : ""}
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
              Add Book
            </Button>
          </Box>
        </Box>
      </Container>
  );
}
