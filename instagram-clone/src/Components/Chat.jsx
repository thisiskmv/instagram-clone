import React, { useContext, useEffect, useState } from 'react';
import {MdOutlineCall} from 'react-icons/md';
import {AiOutlineVideoCamera} from 'react-icons/ai';
import {RxInfoCircled} from 'react-icons/rx';
import Messages from './Messages';
import Input from './Input';
import { Box, Stack, Text, Image,Heading, Spacer, HStack, Icon, Avatar ,Center,Button} from '@chakra-ui/react';
import {RiTelegramLine} from "react-icons/ri"
import { ChatContext } from '../context/ChatContext';

 
 

// function Chat(){
//     const{data}=useContext(ChatContext)
//     const[flag,setFlag]=useState(true)
//     console.log(data)
//     useEffect(()=>{
//         // if(data.chatId==="null"){
//         //     setFlag(false)
//         // }else {
//         //     setFlag(true)
//         // }
//     },[])
   
//     return (
//         <>
//            {
//             flag ?  <Stack w='58%' border='0.1px solid rgba(190, 190, 190, 0.40)' height='95vh'>
//             <Box display='flex' p='0.93rem 2rem' borderBottom='0.1px solid rgba(190, 190, 190, 0.40)'>
//                 <Box display='flex' alignItems='center' gap={3}>
//                     <Avatar 
//                     size='xs'
//                     src={data.user?.photoURL}
//                      />
//                     <Text as='span'>{data.user?.displayName}</Text>
                  
//                 </Box>
//                 <Spacer/>
//                 <HStack spacing={15}>
//                     <Icon as={MdOutlineCall} boxSize='1.6rem' />
//                     <Icon as={AiOutlineVideoCamera} boxSize='1.6rem' />
//                     <Icon as={RxInfoCircled} boxSize='1.6rem' />
//                 </HStack>
//                 </Box>
//              <Messages/>
//             <Input/>
//         </Stack> : <Stack w='58%' border='0.1px solid rgba(190, 190, 190, 0.40)' height='95vh'>
//                <Heading mt="15rem" ml="15rem">No chats start a chat</Heading>          
//         </Stack> 
//            }
//         </>
//     )
// }

// export default Chat;
function Chat() {
    const { data } = useContext(ChatContext);
    const[flag,setFlag]=useState(false)
    useEffect(() => {
      if (data.chatId === "null") {
        setFlag(false);
      } else {
        setFlag(true);
      }
    }, [data.chatId]);
  
    return (
      <>
        {flag ? (
          <Stack w='58%' border='0.1px solid rgba(190, 190, 190, 0.40)' height='95vh'>
            <Box display='flex' p='0.93rem 2rem' borderBottom='0.1px solid rgba(190, 190, 190, 0.40)'>
              <Box display='flex' alignItems='center' gap={3}>
                <Avatar size='xs' src={data.user?.photoURL} />
                <Text as='span'>{data.user?.displayName}</Text>
              </Box>
              <Spacer />
              <HStack spacing={15}>
                <Icon as={MdOutlineCall} boxSize='1.6rem' />
                <Icon as={AiOutlineVideoCamera} boxSize='1.6rem' />
                <Icon as={RxInfoCircled} boxSize='1.6rem' />
              </HStack>
            </Box>
            <Messages />
            <Input />
          </Stack>
        ) : (
          <Stack w='58%' border='0.1px solid rgba(190, 190, 190, 0.40)' height='95vh'>
            <Center><Heading mt="9rem"><RiTelegramLine color="grey" fontSize={"11rem"} /></Heading></Center>   
            <Center><Heading  color="grey" >Your Messages</Heading></Center>
            <Center><h1  style={{color:"grey"}} >Send private photos and messages to a friend or group.</h1></Center>
            <Center ><Button mt="1rem" colorScheme='blue'>Send Message</Button></Center>
          </Stack>
        )}
      </>
    );
  }
  
  export default Chat;
  