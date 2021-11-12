import React from "react";
import "./registeration.css";
import { Grid, Paper, Avatar, Checkbox  } from "@material-ui/core";
import {
  FormControlLabel,
  TextField,
  Button,
  
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { CheckBox } from "@mui/icons-material";
function Registeration() {
  const paperstyle = {
    padding: 20,
    hright: "70vh",
    width: "270px",
    margin: "40px auto",
    color:'white',
    background:'rgb(0,0,0,0.8)',
  };
  const avtarsyle = { background: "red" };
  return (
    <div className="container" style={{ position: "absolute" }}>
      <Grid align="center">
        <Paper elevation={10} style={paperstyle}>
          <Avatar style={avtarsyle}>
            <LockOutlinedIcon style={avtarsyle}></LockOutlinedIcon>
          </Avatar>

          <h3 style={{ marginBottom: 20 }}>Sign In</h3>

          <TextField
            style={{ marginBottom: 20 ,background:'rgb(255,255,255,0.3)'}}
            label="Email"
            fullWidth
            variant="outlined"
          />
          <TextField
            style={{ marginBottom: 20,background:'rgb(255,255,255,0.3)' }}
            label="Password"
            fullWidth
            type="password"
            variant="outlined"
          />

          <FormControlLabel  style={{align:'left'}}
            control={<CheckBox name="checkedB" color="primary" />}
            label="Remember me"
          />
          
          <Button type="submit"  style={{width:'100%',marginTop:"20px",background:'red',color:'white'}} fullwidth color='primary'  >Sign In</Button>
        </Paper>
      </Grid>
    </div>
  );
}

export default Registeration;
