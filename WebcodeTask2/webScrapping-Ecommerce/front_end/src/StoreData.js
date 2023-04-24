import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Autocomplete, Box, CardActions, CircularProgress, Grid, Paper, TextField, } from "@mui/material";
import styled from "@emotion/styled";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { scrapDataApi } from "./global/global";

const StoreData = () => {
  const [storeData, setStoreData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(`${scrapDataApi}`);
      const data = await response.json();
      setStoreData(data);
    } catch (e) {
      console.error(e);
    }
  }

  // Get Filtered product data on Search button click
  const handleSearchOnClick = async() =>{
    try {
    const res = await fetch(`${scrapDataApi}`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({'search_text' : searchText}),
    });
    if(res.status===200){
      const data = await res.json();
      setStoreData(data);
    }
    else{
      alert("Data Not Found");
    }
    } catch (e) {
      console.error(e);
    }
  }

  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");

  const [filteredProduct, setFilteredProduct] = useState([...storeData]);
  useEffect(() => {
    setFilteredProduct([...storeData] );
  }, [ storeData ]);

  const productsPerPage = filteredProduct.slice(page * 10 - 10, page * 10);

  //code to run on pagination change
  const handleChange = (event, value) => {
    setPage(value);
  };

  //style for each card of product
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#fff" : "#999",
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  // console.log(storeData)

  if (storeData.length) {
    return (
      <Stack spacing={2}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignSelf: "center",
            width: 400,
          }}
        >
         <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        style={{width:"350px"}}
        options={storeData.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            value={searchText}
            onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
            onChange={(e) => setSearchText(e.target.value)}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
          <IconButton type="button" sx={{ p: "10px" }} 
            onClick={(e) => handleSearchOnClick()} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Grid container maxWidth={"100%"} spacing={1} columns={12}>
          {productsPerPage.map((product, index) => (
            <Grid
              item
              sx={{ my: 1 }}
              xs={12}
              sm={6}
              md={4}
              key={index}
            >
              <Item>
                <SingleProductData key={index} {...product} func={fetchData} />
              </Item>
            </Grid>
          ))}
        </Grid>

        <Pagination
          count={Math.ceil(filteredProduct.length / 10)}
          page={page}
          onChange={handleChange}
          style={{ marginInline: "auto" }}
        />
      </Stack>
    );
  } else return (
    <Box sx={{ display: 'flex' }} 
    alignItems="center"
    justifyContent="center"
    style={{ minHeight: '100vh' }}>
      <CircularProgress />
    </Box>
  );
};

const SingleProductData = ({
  title,
  img_link,
  price,
  final_price,
  rating,
  discount
}) => {  


  return (
    <Card sx={{height:500}}>
      <CardMedia component="img" sx={{ height:300}} alt={title} image={`${img_link}`} />
        <CardContent>
          <Typography
            gutterBottom
            height={125}
            variant="body2"
          >
            {title}
          </Typography>
        </CardContent>
        <CardActions sx={{mt:"auto", justifyContent:"space-between"}}>
        <Typography component="span" mx={1} varient="h6">
          {rating}
          </Typography>
          <Typography component="span" mx={1} varient="h6">
          {final_price}
          </Typography>
          <Typography component="span" color="text.secondary" mx={1} style={{textDecoration: 'line-through'}} varient="h6">
          {price}
          </Typography>
          <Typography component="span" mx={1} varient="h6">
          {discount}
          </Typography>
        
       </CardActions>
    </Card> 
  );
};

export default StoreData;
