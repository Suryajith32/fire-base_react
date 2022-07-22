import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import userDataServices from '../services/user.services'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { useUserAuth } from '../context/UserAuthContext'


export default function BasicTable() {
     

    const [user, setUser]= React.useState([])
    React.useEffect(() => {
     getUser();
    }, [])
    const {logOut} = useUserAuth();

    const getUser=async()=>{
      const data = await userDataServices.getAllUser();
      console.log(data.docs)
      setUser(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    }
    const deleteHandler =async(id)=>{
        await userDataServices.deleteUser(id);
        getUser();
    }
    const handleLogOut=async()=>{
      try {
        await logOut();
      } catch (error) {
        console.log(error)
      }
    }
    
  return (
<>
<Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>
        <Button color="inherit" onClick={handleLogOut}>Logout</Button>
      </Toolbar>
    </AppBar>
  </Box>


    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>No.</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((doc, index) => (
            <TableRow
              key={doc.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell >{index + 1}</TableCell>
              <TableCell component="th" scope="row">
                {doc.email}
              </TableCell>
              <TableCell >{doc.fname}</TableCell>
              <TableCell align="right"><Button onClick={(e)=>deleteHandler(doc.id )}><DeleteIcon/></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
