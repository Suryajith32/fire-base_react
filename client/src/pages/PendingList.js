import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import companyDataServices from '../services/company.services'
import approvedDataServices from '../services/approved'
import declinedDataServices from '../services/declined'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, ownerDocument, ownerWindow, TextField } from '@mui/material';
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
    // const [duser, setDuser]= React.useState([])
    const [disable, setDisable] = React.useState(false); //For disabling the button after click//
    const [open, setOpen] = React.useState(false);  

    React.useEffect(() => {
        getUser();
       }, [])
       
       const getUser=async()=>{
        const data = await companyDataServices.getAllUser();
        console.log(data.docs)
        setUser(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
      }
      //for viewing the data in dialog box//
      const handleClickOpen = async(id) => {
        // const singleData =await companyDataServices.getAuser(id)
        // const Datas = singleData._document.data.value.mapValue.fields
        // console.log(Datas)
        // setDuser(singleData.map((doc)=>({...doc.data(), id: doc.id})))
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };    


      const declineHandler =async(id)=>{
        const auser =await companyDataServices.getAuser(id)
        const declinelist = auser._document.data.value.mapValue.fields
        console.log(declinelist)

        await declinedDataServices.addUser(declinelist)
        await companyDataServices.deleteUser(id)
      }
      const approveHandler = async(id) =>{
        const auser =await companyDataServices.getAuser(id)
        const owner = auser._document.data.value.mapValue.fields
       const result= Object.keys(owner).map((key)=>owner[key])
        // const datauser = JSON.pars(owner)
        console.log(auser.doc)
        // const myArr = JSON.parse(result);
        // console.log(myArr)
       
       
        await approvedDataServices.addUser(owner)
        await companyDataServices.deleteUser(id)
      
        setDisable(true)
        
      }

  return (
    <>
   <DashBoard/>
   <h1>PENDING LIST</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">View</TableCell>
            <TableCell align="right">Decline</TableCell>
            <TableCell align="right">Approve</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((doc,index) => (
            <TableRow
              key={doc.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {doc.companyname}
              </TableCell>
              <TableCell align="right">{doc.name}</TableCell>
              <TableCell align="right">{<Button  variant="outlined" onClick={(e)=>handleClickOpen(doc.id)}>View</Button>}</TableCell>
              <TableCell align="right">{<Button color='error' onClick={(e)=>declineHandler(doc.id)} variant="outlined">Decline</Button>}</TableCell>
              
            <TableCell align="right">{<Button color='success'  disabled={disable} onClick={(e)=>approveHandler(doc.id )} variant="outlined">Accept</Button>}</TableCell>
    
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {user.map((doc,index) => (
    <Dialog
    key={doc.id}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
             <h4>Name : {doc.id}</h4>
             <h4>Company name : {doc.companyname}</h4> 
             <h4>Email : {doc.email}</h4>
             <h4>Phone : {doc.phone}</h4>
             <h4>Address : {doc.address}</h4>
             <h4>Name : {doc.name}</h4>
             <h4>Name : {doc.name}</h4>
             <h4>Name : {doc.name}</h4>
             <h4>Name : {doc.name}</h4>
             <h4>Name : {doc.name}</h4>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    ))}
    
    </>
   
  );
}
