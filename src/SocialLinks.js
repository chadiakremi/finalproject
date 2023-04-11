import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Box from '@mui/material/Box';

function SocialLinks (){
    return (
        <Box style={{ display: 'flex', justifyContent: 'center', marginTop: '0px', padding: '15px' }}>
        <TwitterIcon/>
        <FacebookIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </Box>
    )
    }
    export default SocialLinks;