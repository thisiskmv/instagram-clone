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
    useDisclosure,
    Skeleton, SkeletonCircle, SkeletonText
} from "@chakra-ui/react";
import { BsThreeDots, BsBookmark } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiChat3Line } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { db } from "../firebase/firebase";
import { collection, onSnapshot, orderBy, query, deleteDoc, doc, serverTimestamp, addDoc, setDoc } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";



function Post({ post, postId, isLoading }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { currentUser } = useContext(AuthContext);
    const [newComment, setnewComment] = useState('');
    const [showComments, setShowComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState([]);


    useEffect(() =>
        onSnapshot(collection(db, "posts", postId, "likes"), (snapshot) =>
            setLikes(snapshot.docs)
        ), [postId]);

    // console.log(likes)

    useEffect(() =>
        setHasLiked(
            likes.findIndex((like) => like.id === currentUser.uid) !== -1
        ), [likes, currentUser.uid]);


    const deletePost = (id) => {
        deleteDoc(doc(db, "posts", id));
        // console.log(id)
    };


    useEffect(() => {
        onSnapshot(
            query(
                collection(db, "posts", postId, "comments"),
                orderBy("timestamp", "desc")
            ),
            (snapshot) => {
                setShowComments(snapshot.docs);
            }
        );
    }, [postId]);

    const likePost = async (id) => {
        if (hasLiked) {
            await deleteDoc(doc(db, "posts", id, "likes", currentUser.uid));
        } else {
            await setDoc(doc(db, "posts", id, "likes", currentUser.uid), {
                username: currentUser?.displayName,
            });
        }
    };

    // console.log("likes",likes.length)


    const postComment = async (id) => {
        if (newComment !== "") {
            await addDoc(collection(db, "posts", id, "comments"), {
                username: currentUser.displayName,
                comment: newComment,
                timestamp: serverTimestamp(),
            });
        }

        setnewComment("");
    };

    // console.log("sec", showComments)

    console.log(isLoading)


    const storiesData = [
        {
            avatar: 'https://i.pinimg.com/originals/bc/27/13/bc2713a369730a7e1088e3d5d7618488.jpg',
            name: 'patrick',
        },
        {
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQ7-nzOpp0eX_gV-iedSJXGIV_DkaEAHOzmxAjzTKkA&usqp=CAU&ec=48600113',
            name: 'thomas_s',
        },
        {
            avatar: 'https://www.transparentpng.com/thumb/tom-and-jerry/tom-cartoon-bros-images-16.png',
            name: 'tom',
        },
        {
            avatar: 'https://pbs.twimg.com/profile_images/1372861551078735876/45Tnl6P-_400x400.jpg',
            name: 'radhe_bhaiya',
        },
        {
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5JKfDXPJ5ss0CFmDbhZFUSX3V3-gM5VZvbCthBkePw&usqp=CAU&ec=48600113',
            name: 'shelby',
        }
    ]

    return (

        <>
            <Box w='63%' m='auto' p='1rem 0' borderBottom='0.1px solid rgb(54,54,54)' key={post.post.id} >

                <Flex p='0.7rem 0.3rem'>
                    <Flex flex='1' gap='3' alignItems='center' flexWrap='wrap'>
                        <Avatar src={post.post.photoURL} size='sm' name='woman' />
                        <Box>
                            <Heading size='xs'>{post.post.username}</Heading>
                            <Text fontSize='xs'>New Delhi</Text>
                        </Box>
                    </Flex>
                    <Spacer />
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalContent ml="7.5rem" w="10%" borderRadius={"1rem"}>
                            <ModalHeader p="0"></ModalHeader>
                            <ModalBody p="0">
                                {post.post.userId === currentUser.uid && (
                                    <Button onClick={() => { deletePost(postId) }} _hover={{ bg: "red", color: "white" }} w="100%">Delete</Button>
                                )}
                            </ModalBody>
                            <ModalFooter p="0"></ModalFooter>
                        </ModalContent>
                    </Modal>
                    <Flex align='center'>
                        <Icon as={BsThreeDots} onClick={onOpen} boxSize={5} cursor='pointer' />
                    </Flex>
                </Flex>
                <AspectRatio ratio={3 / 3.8}>
                    <Image loading="lazy" src={post.post.imageUrl} w='100px' borderRadius="5px" objectFit='cover' />
                </AspectRatio>

                <Flex p='0.7rem 0rem 0rem 0rem'>
                    <Box>
                        {hasLiked ? (
                            <Icon as={AiFillHeart} boxSize={7} color='#f56565' cursor='pointer' onClick={() => { likePost(postId) }} />
                        ) : (
                            <Icon as={AiOutlineHeart} boxSize={7} cursor='pointer' onClick={() => { likePost(postId) }} />
                        )}

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

                <Flex>
                    <Text fontSize='sm' ml='0.2rem'><b>{post.post.username}</b></Text>
                    <Text fontSize='sm' ml='0.5rem'>{post.post.caption}</Text>
                </Flex>

                <Box>
                    <Text fontSize='sm' fontWeight='200' ml='0.2rem'>View all {showComments.length} comments</Text>
                </Box>

                <Box>
                    {
                        showComments.map((comment) => {
                            return <>
                                <Text fontSize='xs' ml='0.2rem'>
                                    <b>{comment.data().username}</b> &nbsp; {comment.data().comment}
                                </Text>
                            </>
                        })
                    }
                </Box>

                <Flex>
                    <Input type='text' fontSize='sm' variant='unstyled' p='0.5rem' placeholder='Add a comment…' value={newComment} onChange={(e) => { setnewComment(e.target.value) }} />
                    {newComment && <Button fontSize='0.9rem' p='0' size='sm' colorScheme="none" color='blue.300' _hover={{ color: "white" }} onClick={() => { postComment(postId) }} disabled={!newComment} >Post</Button>}
                </Flex>

            </Box>
        </>
    );
}

export default Post;
