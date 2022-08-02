import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import companyDataServices from '../services/company.services'
import { Button } from '@mui/material';
import DashBoard from '../components/DashBoard'
 

export default function DenseTable() {

    const [user, setUser]= React.useState([])
    const [viewUser, setViewUser]= React.useState([])
    React.useEffect(() => {
        getUser();
       }, [])
       
       const getUser=async()=>{
        const data = await companyDataServices.getAllUser();
        console.log(data.docs)
        setUser(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
      }
      const viewHandler =async(id)=>{
        const auser =await companyDataServices.getAuser(id);
        const viewData = auser._document.data.value.mapValue.fields
        console.log(viewData.toArray)
      
      }
      // const approveHandler = async(id) =>{
      //   await companyDataServices.getAuser(id)
        
      // }

  return (
    <>
   <DashBoard/>
   <h1>APPLICANT LIST</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">View</TableCell>
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
             
              <TableCell align="right">{<Button color='primary' variant="outlined" onClick={(e)=>viewHandler(doc.id)}>View</Button>}</TableCell>
              <TableCell align="right">{<Button color='warning' variant="outlined">Pending</Button>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
   
  );
}
