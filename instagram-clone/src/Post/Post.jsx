import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Container,
  Flex,
  Icon,
  Text,
  Spacer,
  AspectRatio,
  Image,
  Input,
  Heading,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { BsThreeDots, BsBookmark, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { RiChat3Line } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import LeftSidebar from "../Components/LeftSidebar";
import RightSidebar from "../Components/RightSidebar";
import AddPost from "./AddPost";
import { BiChat, BiLike, BiShare } from "react-icons/bi";
import { db } from "../firebase/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import HomeStaticRightBar  from "../Components/HomeStaticRightBar"
function Post(props) {

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

    return (
        <Flex bg="black">
            <LeftSidebar />
            <Box w='80%' ml='13rem' border='1px solid green'>
                <AddPost />
                {
                    posts.map(({ id, post }) => (
                        <Box w='58%' m='auto' border='1px solid coral' >
                            <Flex p='0.7rem 0.3rem'>
                                <Flex flex='1' gap='3' alignItems='center' flexWrap='wrap'>
                                    <Avatar src={post.imageUrl} size='sm' name='woman' />
                                    <Box>
                                        <Heading size='xs'>{post.username}</Heading>
                                        <Text fontSize='xs'>New Delhi</Text>
                                    </Box>
                                </Flex>
                                <Spacer />
                                <Flex align='center'>
                                    <Icon as={BsThreeDots} boxSize={5} />
                                </Flex>
                            </Flex>
                            <AspectRatio ratio={3 / 3.8}  >
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
