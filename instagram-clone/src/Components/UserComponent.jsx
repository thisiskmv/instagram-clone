import React from 'react';
import {FiEdit} from "react-icons/fi"
import {IoIosArrowDown} from "react-icons/io"
import "./Right.css"
function UserComponent(props) {
    return (
        <div style={{borderBottom:"1px solid grey",display:"flex",alignItems:"center",justifyContent:"center",justifyContent:"space-between"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"130px"}}>
            <h4 style={{marginRight:"5px",fontSize:"16px"}}>Users</h4>
            <IoIosArrowDown/>
            </div>
            <div style={{marginRight:"10px",fontSize:"28px"}} >
            <FiEdit/>
            </div>

        </div>
    );
}

export default UserComponent;