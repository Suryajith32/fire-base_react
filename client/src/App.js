
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';
import {UserAuthContextProvider} from './context/UserAuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import DashBoard from './components/DashBoard';

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
        </Routes>
        </UserAuthContextProvider>
      </Router>
      
    </div>
  );
}

export default App;
