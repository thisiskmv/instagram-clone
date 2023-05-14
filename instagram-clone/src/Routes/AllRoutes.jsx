import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Post from '../Post/Post';
import HomeDummy from '../Components/HomeDummy';
import Login from '../Login SIGNUP/Signup';
import Signup from '../Login SIGNUP/Login';
import PrivateRoute from '../context/PrivateRoute';
function AllRoutes(props) {
    return (     
        <Routes>
        <Route path='/' element={<PrivateRoute><Post/></PrivateRoute>}/>
        <Route path="/homedumy" element={<PrivateRoute><HomeDummy/></PrivateRoute>} />
        <Route path='/signup' element={<Login/>}/>
        <Route path='/login' element={<Signup/>}/>
        </Routes>
    );
}

export default AllRoutes;