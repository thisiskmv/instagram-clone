import React, { useContext } from 'react';
import { BsThreeDots, BsBookmark } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiChat3Line } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { Box, Text, Flex, useDisclosure, Button, Image, AspectRatio, HStack, Avatar, Heading, Spacer, Icon, Input, Center } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { AuthContext } from '../context/AuthContext';


// function CommentsModal({ isOpen, onClose }) {

//     const { currentUser } = useContext(AuthContext);

//     return (
//         <>
//             <Modal
//                 isCentered
//                 onClose={onClose}
//                 isOpen={isOpen}
//                 motionPreset='slideInBottom'
//                 size='4xl'
//             >
//                 <ModalOverlay />
//                 <ModalContent>
//                     <ModalHeader></ModalHeader>

//                     <ModalBody p='0'>
//                         <AspectRatio ratio={16 / 9} >
//                             <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKMEhy8-UzW5IylOvuqyvXtkcMJNQc8XKf3fK_J4nu1w&usqp=CAU&ec=48600113' />
//                             <Box overflow="hidden" >

//                                 <Flex h='100%'>

//                                     <Box w='100%'>
//                                         <HStack p='1rem' spacing={3}>
//                                             <Avatar src={currentUser.photoURL} size='sm' />
//                                             <Text fontWeight='600'>{currentUser.displayName}</Text>
//                                         </HStack>

//                                     </Box>
//                                 </Flex>

//                             </Box>

//                         </AspectRatio>


//                     </ModalBody>
//                     <ModalFooter>


//                     </ModalFooter>
//                 </ModalContent>
//             </Modal>
//         </>
//     );
// }

// export default CommentsModal;

function CommentsModal({ isOpen, onClose, commentData, post, newComment, setnewComment, postComment, postId, likes }) {
    const { currentUser } = useContext(AuthContext);

    console.log("Comment Data", commentData);

    return (
        <Modal
            isCentered
            onClose={onClose}
            isOpen={isOpen}
            motionPreset='slideInBottom'
            size='5xl'
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader p='0'></ModalHeader>
                <ModalBody p='0'>
                    <Flex>
                        <AspectRatio ratio={4 / 3.7} w='60%'>
                            <Image w='55%' h='100%' src={post.imageUrl} />
                        </AspectRatio>


                        <Box overflow="hidden" w='40%' border='0.1px solid rgb(54,54,54)' bg='black' color='white' >
                            <Flex p='0.7rem 0.3rem' borderBottom='0.1px solid rgb(54,54,54)'>
                                <Flex flex='1' gap='3' alignItems='center' flexWrap='wrap'>
                                    <Avatar src={currentUser.photoURL} size='sm' />
                                    <Box>
                                        <Heading size='xs'>{currentUser.displayName}</Heading>
                                        <Text fontSize='xs'>New Delhi</Text>
                                    </Box>
                                </Flex>
                                <Spacer />
                                <Flex align='center'>
                                    <Icon as={BsThreeDots} boxSize={5} cursor='pointer' />
                                </Flex>
                            </Flex>

                            <Box bg="transparent"
                                p="0.8rem"
                                h="calc(90vh - 11rem)"
                                overflow="scroll"
                                overflowX="hidden"
                                sx={{
                                    '&::-webkit-scrollbar': {
                                        width: '16px',
                                        borderRadius: '8px',
                                        backgroundColor: `rgba(0, 0, 0, 0.05)`,
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        backgroundColor: `rgba(0, 0, 0, 0.05)`,
                                    },
                                }}>

                                {
                                    commentData.length === 0 ? <Center><Text fontSize='1.2rem' fontWeight='500'>No Comments!</Text></Center> : commentData.map((comment) => {
                                        return <HStack p='0.5rem 0' >
                                            <Avatar size='sm' src={comment.data().profilePhoto} />
                                            <Box>
                                                <Text fontSize='0.8rem' ml='0.2rem'>
                                                    <b>{comment.data().username}</b>  {comment.data().comment}
                                                </Text>
                                                <Text color='gray' fontSize='0.69rem' fontWeight='500' ml='0.5rem'>Reply  &nbsp;  See translate</Text>
                                            </Box>

                                            <Spacer />

                                            <Box>
                                                <Icon as={AiOutlineHeart} boxSize={3} cursor='pointer' />
                                            </Box>
                                        </HStack>
                                    })
                                }
                            </Box>

                            <Box p='0.7rem' borderTop='0.1px solid rgb(54,54,54)' borderBottom='0.1px solid rgb(54,54,54)'>
                                <Flex>
                                    <Box>

                                        <Icon as={AiOutlineHeart} boxSize={7} cursor='pointer' />


                                        <Icon as={RiChat3Line} cursor='pointer' boxSize='1.7rem' m="0 0.9rem" />



                                        <Icon as={FiSend} cursor='pointer' boxSize={6} />
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <Icon as={BsBookmark} cursor='pointer' boxSize={6} />
                                    </Box>
                                </Flex>
                                <Box>
                                    <Text fontSize='sm' ml='0.2rem'>{likes.length} likes</Text>
                                </Box>
                            </Box>
                            <Flex>
                                <Input type='text' fontSize='sm' variant='unstyled' p='0.5rem' placeholder='Add a comment…' value={newComment} onChange={(e) => { setnewComment(e.target.value) }} />
                                {newComment && <Button fontSize='0.9rem' m='0 0.6rem' p='0' size='sm' colorScheme="none" color='blue.300' _hover={{ color: "white" }} onClick={() => { postComment(postId) }} disabled={!newComment} >Post</Button>}
                            </Flex>
                        </Box>
                    </Flex>
                </ModalBody>
                <ModalFooter p='0'></ModalFooter>
            </ModalContent>
        </Modal>
    );
}

export default CommentsModal;
