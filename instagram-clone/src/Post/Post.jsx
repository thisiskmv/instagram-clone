import React from 'react';
import { Avatar, Box, Container, Flex, Icon, Text, Spacer, AspectRatio, Image, Input } from '@chakra-ui/react';
import {BsThreeDots,BsBookmark} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai'
import {RiChat3Line} from 'react-icons/ri';
import {FiSend} from 'react-icons/fi';

function Post(props) {

    return (
        <Box w='58%' border='1px solid green'>
            <Box w='60%' m='auto' border='1px solid coral'>
                <Flex p='0.7rem 0.3rem'>
                    <Flex>
                        <Avatar src='https://img.freepik.com/premium-vector/pretty-hijab-woman-side-profile-with-colorful-flower-bouquet_185694-1105.jpg' size='sm' name='woman'  />
                        <Text ml={3} color='white'>username</Text>
                    </Flex>
                    <Spacer />
                    <Flex align='center'>
                    <Icon as={BsThreeDots} boxSize={5} />
                    </Flex>
                </Flex>
                <AspectRatio ratio={3/3.8}  >
                    <Image src='https://i.pinimg.com/originals/a0/a8/52/a0a8525cebb5e096f034e0b8b3a690eb.jpg' w='100px' borderRadius="5px" objectFit='cover' />
                </AspectRatio>

                <Flex p='0.7rem 0rem 0rem 0rem'>
                    <Box>
                        <Icon as={AiOutlineHeart} boxSize={7} />
                        <Icon as={RiChat3Line} boxSize='1.7rem' m="0 0.9rem" />
                        <Icon as={FiSend} boxSize={6} />
                    </Box>
                    <Spacer />
                    <Box>
                        <Icon as={BsBookmark} boxSize={6} />
                    </Box>
                </Flex>
                <Box>
                    <Text fontSize='sm' ml='0.2rem'>0 likes</Text>
                </Box>

                <Flex>
                    <Text fontSize='sm' ml='0.2rem'><b>username</b></Text>
                    <Text fontSize='sm' ml='0.5rem'>for Captions</Text>
                </Flex>

                <Box>
                    <Text fontSize='sm' fontWeight='200' ml='0.2rem'>View all 0 comments</Text>
                </Box>

                <Box>
                    <Input type='text' fontSize='sm' variant='unstyled' p='0.5rem' placeholder='Add a comment…' />
                </Box>
            </Box>
        </Box>
    );
}

export default Post;