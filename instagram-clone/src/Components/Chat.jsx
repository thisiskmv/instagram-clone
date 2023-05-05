import React from 'react';
import {MdOutlineCall} from 'react-icons/md';
import {AiOutlineVideoCamera} from 'react-icons/ai';
import {RxInfoCircled} from 'react-icons/rx';
import Messages from './Messages';
import Input from './Input';
import { Box, Stack, Text, Image, Spacer, HStack, Icon, Avatar } from '@chakra-ui/react';

// function Chat(props) {
//     return (
//         <div className="chat">
//             <div className="userInfo">
//                 <span>User</span>
//                 <div className="chatIcons">
//                     <MdOutlineCall style={{padding:"0 0rem",fontSize:"1.7rem"}} />
//                     <AiOutlineVideoCamera style={{padding:"0 1.2rem",fontSize:"1.7rem"}} />
//                     <RxInfoCircled style={{padding:"0 0rem",fontSize:"1.7rem"}} />
//                 </div>
//             </div>
//             <Messages />
//             <Input />
//         </div>
//     );
// }

function Chat(){

    return (
        <>
            <Stack w='58%' border='0.1px solid rgba(190, 190, 190, 0.40)' height='95vh'>
                <Box display='flex' p='0.93rem 2rem' borderBottom='0.1px solid rgba(190, 190, 190, 0.40)'>
                    <Box display='flex' alignItems='center' gap={3}>
                        <Avatar 
                        size='xs'
                        src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
                         />
                        <Text as='span'>username</Text>
                    </Box>
                    <Spacer/>
                    <HStack spacing={15}>
                        <Icon as={MdOutlineCall} boxSize='1.6rem' />
                        <Icon as={AiOutlineVideoCamera} boxSize='1.6rem' />
                        <Icon as={RxInfoCircled} boxSize='1.6rem' />
                    </HStack>
                </Box>

                <Messages/>
                <Input/>
            </Stack>
        </>
    )
}

export default Chat;