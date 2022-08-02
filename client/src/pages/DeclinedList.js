import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import declinedDataServices from '../services/declined'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import DashBoard from '../components/DashBoard'



function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

 

export default function DenseTable() {

  const [user, setUser]= React.useState([])
  const [open, setOpen ] = React.useState(false)
  React.useEffect(() => {
    getUser();
   }, [])
   
   const getUser=async()=>{
    const data = await declinedDataServices.getAllUser();
    // const aData =data.docs
    console.log(data.docs)
    // const datauser = JSON.stringify(aData)
    // const myArr = JSON.parse(datauser)
 
    
    console.log("hi")
    setUser(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    // setUser(datauser.docs.map((doc)=>({...doc.data(), id: doc.id})))
    // console.log(datauser)
    // Object.keys(aData).map((key)=>aData[key])
   
  }
  const deleteHandler=async(id)=>{
    try {
      await declinedDataServices.deleteUser(id)
     
      setOpen(true)
      
      
    } catch (error) {
      alert('Erroe Occured')
    }

  }
  const handleClose = () => {
    setOpen(false)
  }
       
  

  return (
    <>
   <DashBoard/>
   <h1>DECLINED LIST</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">View</TableCell>
            <TableCell align="right">Decline</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((doc,index) => (
            <TableRow
              key={doc.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {JSON.stringify(doc.companyname)}
              </TableCell>
              <TableCell align="right"> {JSON.stringify(doc.name)}</TableCell>
              <TableCell align="right">{<Button  variant="outlined">View</Button>}</TableCell>
              <TableCell align="right">{<Button color='error' onClick={(e)=>deleteHandler(doc.id)}  variant="outlined">Delete</Button>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >

                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Deleted Seccesfully
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                      ok
                    </Button>
                  </DialogActions>
                </Dialog>
    </>
   
  );
}
