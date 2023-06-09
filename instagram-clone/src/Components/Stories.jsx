import React from 'react';
import {Box,Flex,Text,VStack,HStack,Avatar} from '@chakra-ui/react'

function Stories(props) {
    return (
        <Box>
            <HStack p='2.2rem'>
                <VStack>
                    <Avatar border='3px solid rgb(255,102,16)' size='lg' src='https://i.pinimg.com/originals/bc/27/13/bc2713a369730a7e1088e3d5d7618488.jpg' />
                    <Text fontSize='0.7rem' fontWeight='500' color='whiteAlpha.900'>patrick</Text>
                </VStack>
                <VStack>
                <Avatar border='3px solid rgb(255,102,16)' size='lg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQ7-nzOpp0eX_gV-iedSJXGIV_DkaEAHOzmxAjzTKkA&usqp=CAU&ec=48600113' />
                    <Text fontSize='0.7rem' fontWeight='500' color='whiteAlpha.900'>thomas_s</Text>
                </VStack>
                <VStack>
                <Avatar border='3px solid rgb(255,102,16)' size='lg' src='https://www.transparentpng.com/thumb/tom-and-jerry/tom-cartoon-bros-images-16.png' />
                    <Text fontSize='0.7rem' fontWeight='500' color='whiteAlpha.900'>tom</Text>
                </VStack>
                <VStack>
                <Avatar border='3px solid rgb(255,102,16)' size='lg' src='https://pbs.twimg.com/profile_images/1372861551078735876/45Tnl6P-_400x400.jpg' />
                    <Text fontSize='0.7rem' fontWeight='500' color='whiteAlpha.900'>radhe_bhaiya</Text>
                </VStack>
                <VStack>
                <Avatar border='3px solid rgb(255,102,16)' size='lg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5JKfDXPJ5ss0CFmDbhZFUSX3V3-gM5VZvbCthBkePw&usqp=CAU&ec=48600113' />
                    <Text fontSize='0.7rem' fontWeight='500' color='whiteAlpha.900'>shelby</Text>
                </VStack>
            </HStack>
        </Box>
    );
}

export default Stories;