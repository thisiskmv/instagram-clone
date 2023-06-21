import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Post from '../Post/Post';
import HomeDummy from '../Components/HomeDummy';
import Login from '../Login SIGNUP/Signup';
import Signup from '../Login SIGNUP/Login';
import PrivateRoute from '../context/PrivateRoute';
import Chat from '../Components/Chat';
import ProfilePage from '../Components/Profile/ProfilePage';
import Feed from '../Components/Feed';

function AllRoutes(props) {
    return (     
        <Routes>
        <Route path='/' element={<PrivateRoute><Feed/></PrivateRoute>}/>
        <Route path="/messages" element={<PrivateRoute><HomeDummy/></PrivateRoute>} />
        <Route path='/signup' element={<Login/>}/>
        <Route path='/login' element={<Signup/>}/>
        <Route path='/profile' element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
        </Routes>
    );
}

export default AllRoutes;