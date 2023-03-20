import React, { useContext, useState } from "react";
import { Button, CssBaseline, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import { UsersDetailsContext } from "../context/UserDetails";
import { useNavigate, useParams } from "react-router-dom";
export function EditUser(){
    const { userId } = useParams();
    const [ userData, setUserData ] = useContext(UsersDetailsContext)
    const navigate = useNavigate();
    
    const [data] = userData.filter(object => {
        return parseInt(object.userId)===parseInt(userId)
    });
    // console.log(data)
    const [ fname, setFname ] = useState(data.name)
    const [ email, setEmail ] = useState(data.uEmail)
    const [ gender, setGender ] = useState(data.gender)
    


 const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newData = userData.filter((object)=>parseInt(object.userId)!==parseInt(userId))
    console.log(newData)
    setUserData([...newData,
        {
            userId : userId,
            name : data.get('firstName'),
            uEmail : data.get('email'),

            gender : data.get('gender')
        }])
        
  navigate("/users");
  };
    return(
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" method="POST" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            
            <Grid container spacing={2}>
                
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  value={fname}
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  onChange={(e)=>(setFname(e.target.value))}
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
                    onChange={(e)=>(setGender(e.target.value))}
                >
                    <FormControlLabel value="Female" control={<Radio />} label="Female"/>
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
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
                  onChange={(e)=>(setEmail(e.target.value))}
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
    )
}