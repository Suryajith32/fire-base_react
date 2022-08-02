
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import {UserAuthContextProvider} from './context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import DashBoard from './components/DashBoard';
import ApplicationList from './pages/ApplicationList'
import ApprovedList from './pages/ApprovedList';
import DeclinedList from './pages/DeclinedList';
import BookingSlot from './pages/BookingSlot';
import PendingList from './pages/PendingList'
// import Demo from './pages/Demo'



function App() {
  return (
    <div className="App">
      <Router>
        <UserAuthContextProvider>
          
        <Routes>
          <Route exact path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          <Route  path='/signup' element={<SignUp/>}/>
          <Route  path='/signin' element={<SignIn/>}/>
          <Route  path='/dashboard' element={<DashBoard/>}/>
          {/* <Route  path='/demo' element={<Demo/>}/> */}
         
          <Route  path='/dashboard/applicationlist' element={<ApplicationList/>}/>
          <Route  path='/dashboard/pendinglist' element={<PendingList/>}/>
          <Route  path='/dashboard/approved' element={<ApprovedList/>}/>
          <Route  path='/dashboard/declined' element={<DeclinedList/>}/>
          <Route  path='dashboard/bookingslot' element={<BookingSlot/>}/>
          
        </Routes>
        </UserAuthContextProvider>
      </Router>
      
    </div>
  );
}

export default App;
