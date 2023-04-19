import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';




const footers = [
  {
    title: 'Company',
    description: ['Team', 'Join Us', 'Contact us', 'About AstroLabs'],
  },
  {
    title: 'Departments',
    description: [
      'Human Resources',
      'Sales',
      'Marketing',
      'Operations',
    
    ],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function Footer() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [0, 1],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Typography align={'center'} paddingTop={5}> 
        AstroLabs LLC. all Rights reservered 2023
          </Typography> 
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default Footer;

