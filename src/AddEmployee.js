import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '30px',
  paddingTop: "30px",
  paddingRight: "300px",
  paddingLeft: '300px',
}



function AddEmployee() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [department, setDepartment] = React.useState('');
  const [nationality, setNationality] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [position, setPosition] = React.useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    
    // Send email to Battleroyale1945@gmail.com
    fetch('/add-employee', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
    .then(response => {
      if (response.ok) {
        // Show a success message to the user
        alert('You have added an employee successfully!');
      } else {
        // Show an error message to the user
        alert('there is a problem!! please try again later.');
      }
    })
    .catch(error => {
      // Show an error message to the user
      alert('there is a problem!! please try again later.');
      console.error(error);
    });
  };
  

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <TextField
        required
        id="name"
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        fullWidth
      />
      <TextField
        required
        id="lastName"
        label="Last Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        fullWidth
      />
      <TextField
        required
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        fullWidth
      />
      <TextField
        id="department"
        label="Department"
        value={department}
        onChange={(event) => setDepartment(event.target.value)}
        fullWidth
      />
      <TextField
        id="nationality"
        label="Nationality"
        value={nationality}
        onChange={(event) => setNationality(event.target.value)}
        fullWidth
      />
      <TextField
        id="phone"
        label="Phone Number"
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        fullWidth
      />
      <TextField
        id="position"
        label="Position"
        value={position}
        onChange={(event) => setPosition(event.target.value)}
        fullWidth
      />
      <Button type="submit" variant="contained" style={{marginTop:'20px'}}>Submit</Button>
    </form>
  );
}

export default AddEmployee;
