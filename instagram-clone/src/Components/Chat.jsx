import React, { useContext, useEffect, useState } from 'react';
import {MdOutlineCall} from 'react-icons/md';
import {AiOutlineVideoCamera} from 'react-icons/ai';
import {RxInfoCircled} from 'react-icons/rx';
import Messages from './Messages';
import Input from './Input';
import { Box, Stack, Text, Image, Spacer, HStack, Icon, Avatar } from '@chakra-ui/react';

import { ChatContext } from '../context/ChatContext';

 


function Chat(){
    const{data}=useContext(ChatContext)
console.log("hiii",data)
    return (
        <>
            <Stack w='58%' border='0.1px solid rgba(190, 190, 190, 0.40)' height='95vh'>
                <Box display='flex' p='0.93rem 2rem' borderBottom='0.1px solid rgba(190, 190, 190, 0.40)'>
                    <Box display='flex' alignItems='center' gap={3}>
                        <Avatar 
                        size='xs'
                        src={data.user?.photoURL}
                         />
                        <Text as='span'>{data.user?.displayName}</Text>
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