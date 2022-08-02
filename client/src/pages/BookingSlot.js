import React, { Component } from 'react'
import './demo.css'
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Dialog from '../components/Dialog';
import Paper from '@mui/material/Paper';
import DashBoard from '../components/DashBoard'
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


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
export default class demo extends Component {
    constructor() {

        super();
          this.state = {
          seat: [
            '1','2','3',
            '4','5','6',
            '7','8','9',
            '10','11','12',
            '13','14','15',
            '16','17','18',
            '19','20','21',
            '22','23','24',
          ],
          seatAvailable: [
            
          ],
          seatReserved: [],
          
        }
      }
      state ={
        isOpen: false
      }
      
      onClickData(seat) {

        

        if(this.state.seatReserved.indexOf(seat) > -1 ) {
          this.setState({
            
            seatAvailable: this.state.seatAvailable.concat(seat),
            seatReserved: this.state.seatReserved.filter(res => res != seat)
          })
        } else {
          this.setState({
            isOpen: true,
            seatReserved: this.state.seatReserved.concat(seat),
            seatAvailable: this.state.seatAvailable.filter(res => res != seat)
          })
        }
      }
      
  render() {
    return (
        <div>
           <DashBoard/>
        <h1>SLOTS</h1>
        <DrawGrid 
          seat = { this.state.seat }
          available = { this.state.seatAvailable }
          reserved = { this.state.seatReserved }
          onClickData = { this.onClickData.bind(this) }
          
          />
         <button onClick={(e)=> this.setState({isOpen: true})}>ok</button>
         <Dialog isOpen={this.state.isOpen} onClose={(e)=> this.setState({isOpen: false})}>
        
                  <div className="box3">
      <h1 className="justify-content-center">ghfgjhfhjhfj   </h1>
                  </div>

      </Dialog>
      </div>
    )
  }
}

class DrawGrid extends React.Component {
  render() {
    return (
        <>
       <div className="container">
        <h2></h2>
        <table className="grid">
          <tbody>
              <tr>
                { this.props.seat.map( row =>
                  <td 
                    className={this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                    key={row} 
                    onClick = {e => this.onClickSeat(row)}>
                      {row} 
                    </td>) }
                     
             </tr>
              
          </tbody>
          
        </table>
       
        
        {/* <AvailableList available = { this.props.available } />
        <ReservedList reserved = { this.props.reserved } /> */}
       </div>
       
     </>
    )
  }
  
  onClickSeat(seat) {
  
    this.props.onClickData(seat);
  }
}
// class BookingSlot extends Component {
//   render() {
//     return (
//       <div className='app'>
      
//       </div>
//     )
//   }
// }




