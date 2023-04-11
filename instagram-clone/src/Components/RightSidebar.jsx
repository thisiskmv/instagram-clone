import React from 'react';

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
            <h1 style={{color:"white"}}>User's</h1>
            {array.map((elm)=>{
                return <div style={{display:"flex"}}>
                    <img style={{borderRadius:"50%",width:"60px",marginLeft:"40px"}} src={elm.image} alt="" />
                    <p>{elm.name}</p>
                </div>
            })}

        </div>
    );
}

export default RightSidebar;