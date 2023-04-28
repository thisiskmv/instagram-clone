import React from 'react';
// import { Box, HStack, Image, Text, VStack ,Stack, Avatar, Spacer } from '@chakra-ui/react';

function Message(props) {
    return (
        <div className='message owner'>
            <div className="messageInfo">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" />
                {/* <span>Just Now</span> */}
            </div>
            <div className="messageContent">
                <p>Hello...</p>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="2ndperson" />
            </div>
        </div>
    );
}

// function Message(){
    
//     return (
//         <HStack gap='0.5rem' mb='0.5rem' direction='row-reverse' border='1px solid blue' className='owner'>
//             <VStack fontWeight='300' border='1px solid green'>
//                 <Image 
//                 boxSize='2rem'
//                 borderRadius='5rem'
//                 src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' 
//                 alt='profile' />
//                 {/* <Text as='span' fontSize='0.8rem'>just now</Text> */}
//             </VStack>
//             <VStack  maxWidth='80%' direction='column' gap='1.5rem' border='1px solid red'>

//                     <Text fontSize='0.8rem' bg='transparent' border='1px solid rgba(117, 114, 114, 0.842)' borderRadius='5rem' p='0.8rem 1rem' className='para' >Hello...</Text>
                

//                 {/* <Spacer/> */}

               
//                     <Image 
//                     flexDirection='start'
//                     boxSize='5rem'
//                     src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' 
//                     alt='secondPerson' />
               
//             </VStack>
//         </HStack>
//     )
// }

export default Message;