import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Fuse from 'fuse.js'


import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'EmployeeID', width: 110 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 110,
    editable: true,

  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 110,
    editable: true,
  },
  {
    field: 'Department',
    headerName: 'Department',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'Nationality',
    headerName: 'Nationality',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'Email ID',
    headerName: 'Email ID',
    type: 'string',
    width: 110,
    editable: true,
  },
  {
    field: 'Job title',
    headerName: 'Job title',
    type: '',
    width: 110,
    editable: true,
  },
  {
    field: 'Date of Joining',
    headerName: 'Date of Joining',
    type: 'date',
    width: 180,
    editable: true,
    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>
      </div>
    ),
  },


  {

    renderCell: (params) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Tooltip title="Edit">
          <IconButton>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>

      </div>
    )
  },


];

const rows_initial = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', },
  { id: 4, lastName: 'Stark', firstName: 'Arya', },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', },
  { id: 6, lastName: 'Melisandre', firstName: null, },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', },
];

const options = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.3,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: [
    "firstName",
    "lastName"
  ]
};



export default function GridScreen() {

  const [rows, setRows] = React.useState(rows_initial)

  const handleSearch = (evt) => {

    const fuse = new Fuse(rows, options);

    // Change the pattern
    const pattern = evt.target.value

    console.log(rows_initial)
    console.log(fuse.search(pattern).map((obj)=>obj.item)  || rows_initial)

    let matches;

    matches = fuse.search(pattern).map((obj)=>obj.item);
    let newRows = [];
    
    if(matches.length === 0) {
      newRows = rows_initial;
    } else {
      newRows = matches;
    }

    setRows(
      newRows
    )

  }

  return (
    <Container>
      <Paper>
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                onChange={handleSearch}
                placeholder="Search by email address, phone number, or Employee ID"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
              />
            </Grid>
            <Grid item>
              <Button href='./Add-Employee' variant="contained" sx={{ mr: 1 }}>
                Add Employee
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
        <Box sx={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick

          />
        </Box>
      </Paper>
    </Container>
  );

}