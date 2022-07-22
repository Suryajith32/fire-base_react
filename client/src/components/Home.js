// import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

import { AppBar, Box, Button,  CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import Card from '@mui/material/Card';
import CameraIcon from '@mui/icons-material/PhotoCamera';
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const  Home=()=> {
  const {user,logOut} = useUserAuth();
  console.log(user);
  const handleLogOut=async()=>{
    try {
      await logOut();
    } catch (error) {
      console.log(error)
    }
  }
  return (
<>

 
 <CssBaseline/>
 <AppBar position="relative">
   <Toolbar>
     <CameraIcon sx={{ mr: 2 }} />
     <Typography variant="h6" color="inherit" noWrap>
       Album layout
     </Typography>
   </Toolbar>
 </AppBar>
 <main>
   {/* Hero unit */}
   <Box
     sx={{
       bgcolor: 'background.paper',
       pt: 8,
       pb: 6,
     }}
   >
     <Container maxWidth="sm">
       <Typography
         component="h1"
         variant="h2"
         align="center"
         color="text.primary"
         gutterBottom
       >
         Album layout
       </Typography>
       <Typography variant="h5" align="center" color="text.secondary" paragraph>
         Something short and leading about the collection below—its contents,
         the creator, etc. Make it short and sweet, but not too short so folks
         don&apos;t simply skip over it entirely.
       </Typography>
       <Stack
         sx={{ pt: 4 }}
         direction="row"
         spacing={2}
         justifyContent="center"
       >
         <Button variant="contained">Main call to action</Button>
         <Button variant="outlined">Secondary action</Button>
       </Stack>
       &nbsp;
       <Button variant="contained" onClick={handleLogOut} disableElevation>
Logout
</Button>
     </Container>
   </Box>
   <Container sx={{ py: 8 }} maxWidth="md">
     {/* End hero unit */}
     <Grid container spacing={4}>
       {cards.map((card) => (
         <Grid item key={card} xs={12} sm={6} md={4}>
           <Card
             sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
           >
             <CardMedia
               component="img"
               sx={{
                 // 16:9
                 pt: '56.25%',
               }}
               image="https://source.unsplash.com/random"
               alt="random"
             />
             <CardContent sx={{ flexGrow: 1 }}>
               <Typography gutterBottom variant="h5" component="h2">
                 Heading
               </Typography>
               <Typography>
                 This is a media card. You can use this section to describe the
                 content.
               </Typography>
             </CardContent>
             <CardActions>
               <Button size="small">View</Button>
               <Button size="small">Edit</Button>
             </CardActions>
           </Card>
         </Grid>
       ))}
     </Grid>
   </Container>
 </main>
 {/* Footer */}
 <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
   <Typography variant="h6" align="center" gutterBottom>
     Footer
   </Typography>
   <Typography
     variant="subtitle1"
     align="center"
     color="text.secondary"
     component="p"
   >
     Something here to give the footer a purpose!
   </Typography>
   
 </Box>
 {/* End footer */}

</>

  )
}

export default Home