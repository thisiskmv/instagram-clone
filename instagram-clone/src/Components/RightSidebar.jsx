import React from 'react';
import UserComponent from './UserComponent';
import "./Right.css"
function RightSidebar(props) {
    let array=[
        {image:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",name:"pankaj Bhadwa bsdiwala"},
        {image:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",name:"pankaj Bhadwa bsdiwala"},
        {image:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",name:"pankaj Bhadwa bsdiwala"},
        {image:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",name:"pankaj Bhadwa bsdiwala"},
        {image:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",name:"pankaj Bhadwa bsdiwala"},
        {image:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",name:"pankaj Bhadwa bsdiwala"},
        {image:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",name:"pankaj Bhadwa bsdiwala"},
        {image:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",name:"pankaj Bhadwa bsdiwala"}
    ]
    return (
        <div className='right-sidebar' >
            {/* <h1 style={{color:"white"}}>User's</h1> */}
            <UserComponent/>
            {array.map((elm)=>{
                return <div style={{display:"flex",marginTop:"20px",gap:"20px"}}>
                    <img style={{borderRadius:"50%",width:"50px",height:"50px",marginLeft:"40px"}} src={elm.image} alt="" />
                    <div style={{marginTop:"-15px"}}>
                    <p>{elm.name}</p>
                    <p style={{color:"grey",marginTop:"-15px"}}>you sent a messeage</p>
                    </div>
                </div>
            })}

        </div>
    );
}

export default RightSidebar;