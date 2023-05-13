import { useContext } from 'react';
import './App.css';
import HomeDummy from './Components/HomeDummy';
import Login from './Login SIGNUP/Login';
import Signup from './Login SIGNUP/Signup';
import { Navigate } from 'react-router-dom';
import {Routes,Route} from 'react-router-dom'
import { AuthContext } from './context/AuthContext';
import Search from './Components/Search';

function App() {
  const {currentUser}=useContext(AuthContext)
  console.log(currentUser)
  const PrivateRoute=({children})=>{
    if(currentUser){
      return children
    }else {
      return <Navigate to='/login'/>
    }
  }
  return (
    <div className="App">
  
      <Routes>
        <Route path='/' element={<PrivateRoute><HomeDummy/></PrivateRoute>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>

    </div>
  );
}

export default App;
