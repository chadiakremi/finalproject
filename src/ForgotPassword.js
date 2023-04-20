import React from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";
import Button from '@mui/material/Button';


const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '30px',
  paddingTop: "30px",
  paddingRight: "10px",
  paddingLeft: '10px',
 
 
}
const handleSubmit = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  
  // Send email to Battleroyale1945@gmail.com
  fetch('/Forgot-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  })
  .then(response => {
    if (response.ok) {
      // Show a success message to the user
      alert('Email sent successfully!');
    } else {
      // Show an error message to the user
      alert('Wrong email !!');
    }
  })
  .catch(error => {
    // Show an error message to the user
    alert('Wrong email !!');
    console.error(error);
  });
};

function ForgotPassword(){
return(
  <div style={{width: '100%'}}>
  <Box style={{ margin: '20px auto 0', width: '80%' }}>
  <form onSubmit={handleSubmit} style={formStyle}>
    <Grid item xs={12}>
      <TextField
        required
        fullWidth
        id="email"
        label="What is your registered Email Address?"
        name="email"
        autoComplete="email"
        sx={{ width: '100%' }}
      />
    </Grid>
    <Button type="submit" variant="contained" style={{ display: 'flex', justifyContent: 'center', margin: '20px auto 0' }}>Submit</Button>
  </form>
</Box>
</div>

)
}
export default ForgotPassword;