import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';




const mainFeaturedPost = {
  title: 'Employee Directory for AstroLabs',
  description:
    "Our Employee Directory is made with love, passion and hard work, we try to decifer all elements using latest technologies from ChatGTP.",
  image: 'https://astrolabs.com/wp-content/uploads/2023/03/About-Us-Header-scaled-1.jpg',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'The Beginning of coding with AstroLabs',
    date: 'Apr 18',
    description:
      'Learn how to code with professional instructor Danny without the need to have previous coding experience',
    image: 'https://pbs.twimg.com/profile_images/1276615882211393537/NZXIyayy_400x400.jpg',
    imageLabel: 'Image Text',
  },
  {
    title: 'Employee of the Month',
    date: 'APR 19',
    description:
      'Join us and learn how you can become a professional coder with AstroLabs, awarded certification will be attested in the ministryn of the United Arab Emirates.',
    image: 'https://astrolabs.com/wp-content/uploads/2023/03/Untitled-design-1-3-e1676286426779.png',
    imageLabel: 'Image Text',
  },
];




const theme = createTheme();

export default function AboutScreen() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{display: 'flex', padding:'30px', paddingBottom:'0px'}}>
       
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          
        </main>
      </Container>
     
    </ThemeProvider>
  );
}
