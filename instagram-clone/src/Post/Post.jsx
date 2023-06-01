import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Spacer,
  AspectRatio,
  Image,
  Input,
  Heading,
  Button,
  ModalContent,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure
} from "@chakra-ui/react";
import { BsThreeDots, BsBookmark} from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { RiChat3Line } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import LeftSidebar from "../Components/LeftSidebar";
import RightSidebar from "../Components/RightSidebar";
import AddPost from "./AddPost";
import { db } from "../firebase/firebase";
import { collection, onSnapshot, orderBy, query,deleteDoc,doc } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import HomeStaticRightBar  from "../Components/HomeStaticRightBar"
function Post(props) {
 const{isOpen,onOpen,onClose} = useDisclosure()
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (snapshot) => {
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    post: doc.data()
                }))
            );
        });

        return () => {
            unsubscribe();
        };
    }, []);


    
      const deletePost = (id) => {
        deleteDoc(doc(db, "posts", id));
        console.log(id)
      };
    console.log(posts,"heyeyeye")
  
    return (
        <Flex w='100%' bg='black' color='white'>
            <Box w='20%'>
                <LeftSidebar />
            </Box>
            <Box w='60%' >
                <AddPost />
                {
                    posts.map(({ id, post }) => (
                        <Box w='63%' m='auto' p='1rem 0' borderBottom='0.1px solid rgb(54,54,54)' >
                            <Flex p='0.7rem 0.3rem'>
                                <Flex flex='1' gap='3' alignItems='center' flexWrap='wrap'>
                                    <Avatar src={post.photoURL} size='sm' name='woman' />
                                    <Box>
                                        <Heading size='xs'>{post.username}</Heading>
                                        <Text fontSize='xs'>New Delhi</Text>
                                    </Box>
                                </Flex>
                                <Spacer />
                                <Modal  isOpen={isOpen} onClose={onClose}>
                                    <ModalContent ml="7.5rem" w="10%" borderRadius={"1rem"}>
                                        <ModalHeader p="0"></ModalHeader>
                                        <ModalBody p="0">
                                        {post.userId === currentUser.uid && (                
                                        <Button onClick={()=>{deletePost(id)}}   _hover={{bg:"red",color:"white"}} w="100%">Delete</Button>  
                                          )}
                                        
                                     
                                        </ModalBody>
                                        <ModalFooter  p="0"></ModalFooter>
                                    </ModalContent>
                                </Modal>
                                <Flex align='center'>
                                    <Icon as={BsThreeDots} onClick={onOpen} boxSize={5} />
                                </Flex>
                            </Flex>
                            <AspectRatio ratio={3 / 3.8}>
                                <Image src={post.imageUrl} w='100px' borderRadius="5px" objectFit='cover' />
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
                                <Text fontSize='sm' ml='0.2rem'><b>{post.username}</b></Text>
                                <Text fontSize='sm' ml='0.5rem'>{post.caption}</Text>
                            </Flex>

                            <Box>
                                <Text fontSize='sm' fontWeight='200' ml='0.2rem'>View all 0 comments</Text>
                            </Box>

                            <Box>
                                <Input type='text' fontSize='sm' variant='unstyled' p='0.5rem' placeholder='Add a comment…' />
                            </Box>
                        </Box>
                    ))
                }
            </Box>
                <HomeStaticRightBar />
        </Flex>
    );
}

export default Post;
