import React, { useContext, useEffect, useState } from 'react';
import { AspectRatio, Avatar, Box, Button, Flex, Grid, GridItem, HStack, Heading, Icon, Image, Skeleton, Text, VStack, useDisclosure } from '@chakra-ui/react'
import { AuthContext } from '../../context/AuthContext';
import LeftSidebar from '../LeftSidebar';
import settings from '../../Images/settings.svg'
import { HiOutlinePlus } from 'react-icons/hi'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { db } from '../../firebase/firebase'
import { BsGrid3X3, BsBookmark } from 'react-icons/bs'
import { BiMoviePlay } from 'react-icons/bi'
import { FaUserTag } from 'react-icons/fa'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { collection, getDocs, query, where } from 'firebase/firestore';

function ProfilePage(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { currentUser } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);

    const [allPost, setAllPost] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            if (currentUser) {
                const q = query(
                    collection(db, 'posts'),
                    where('username', '==', currentUser.displayName)
                );

                try {
                    const querySnapshot = await getDocs(q);

                    // Get the documents from the querySnapshot and sort them by a specific property
                    const sortedPosts = querySnapshot.docs
                        .map((doc) => doc.data())
                        .sort((a, b) => b.timestamp - a.timestamp); // Replace 'timestamp' with the actual property to sort by

                    setAllPost(sortedPosts);
                    setIsLoading(true)
                } catch (error) {
                    // Handle error
                    console.error('Error fetching posts:', error);
                    // setIsLoading(false)
                }
            }
        };

        fetchPosts();
    }, [currentUser]);
    console.log(allPost)

    return (

        <>
            <Flex w='100%' bg='black' color='white' >
                <Box w='20%'>
                    <LeftSidebar />
                </Box>
                <Box w='90%' p='2rem 5rem' bg='black'>
                    <Flex direction='column' h='100%' >
                        <Flex p='0' >
                            <Box p='0.5rem 3.5rem'>
                                <Avatar src={currentUser.photoURL} size='2xl' />
                            </Box>

                            <Box p='0 4.5rem' >
                                <Flex >
                                    <Text fontSize='1.2rem'>{currentUser.displayName}</Text>
                                    <Box m='0 1rem'>
                                        <Button bg='white' color='black' size='sm' p='0 0.9rem'>Edit Profile</Button>&nbsp;&nbsp;
                                        <Button bg='white' color='black' size='sm' p='0 0.9rem'>Ad tools</Button>
                                    </Box>
                                    <Image src={settings} onClick={onOpen} cursor='pointer' />
                                </Flex>

                                <Flex mt='1rem' justify='space-between' w='90%'>
                                    <Text><Text as='span' fontWeight='600'>{allPost.length}</Text> posts</Text>
                                    <Text><Text as='span' fontWeight='600'>563</Text> followers</Text>
                                    <Text><Text as='span' fontWeight='600'>202</Text> following</Text>
                                </Flex>

                                <Box mt='1rem'>
                                    <Text fontSize='0.8rem' color='darkgray'>Bio</Text>
                                </Box>
                            </Box>
                        </Flex>
                        <Flex>
                            <VStack m='2.5rem 2rem' spacing={3} >
                                <Icon as={HiOutlinePlus} color='rgb(115,115,115)' bg='rgb(18,18,18)' p='1rem' boxSize='5rem' borderRadius='50%' />
                                <Text fontSize='0.8rem' fontWeight='600'>New</Text>
                            </VStack>
                        </Flex>

                        <Box flex='1' overflow='auto' borderTop='0.5px solid rgb(54,54,54)'>
                            {/* Your scrollable content goes here */}

                            <Flex justify='center' gap={4} p='0.4rem 0'>
                                <Button leftIcon={<BsGrid3X3 size='0.8rem' />} fontSize='0.9rem' colorScheme='black'>POSTS</Button>
                                <Button leftIcon={<BiMoviePlay size='1.1rem' />} fontSize='0.9rem' colorScheme='black'>REELS</Button>
                                <Button leftIcon={<BsBookmark size='0.8rem' />} fontSize='0.9rem' colorScheme='black'>SAVED</Button>
                                <Button leftIcon={<FaUserTag />} fontSize='0.9rem' colorScheme='black'>TAGGED</Button>
                            </Flex>

                            {
                                isLoading ? (
                                    <Grid gridTemplateColumns='repeat(3, 1fr)' gap={1}>
                                        {allPost.map((post) => (
                                            <GridItem key={post.id}>
                                                <AspectRatio ratio={1}>
                                                    <Image src={post.imageUrl} alt="" />
                                                </AspectRatio>
                                            </GridItem>
                                        ))}
                                    </Grid>
                                ) : (
                                    <Grid gridTemplateColumns='repeat(3, 1fr)' gap={1}>
                                        <Skeleton height='19.3rem' startColor='rgb(18,18,18)' endColor='rgb(34,34,34)' />
                                        <Skeleton height='19.3rem' startColor='rgb(18,18,18)' endColor='rgb(34,34,34)' />
                                        <Skeleton height='19.3rem' startColor='rgb(18,18,18)' endColor='rgb(34,34,34)' />
                                    </Grid>
                                )
                            }
                        </Box>
                    </Flex>
                </Box>
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent bg='rgb(38,38,38)' w='30%' color='white' borderRadius="0.9rem" textAlign='center'>
                    <ModalHeader p='0'>
                    </ModalHeader>

                    <ModalBody p='0 0'>
                        <Button bg='rbg(38,38,38)' p='1.5rem 0' fontSize='0.9rem' borderRadius='0.9rem 0.9rem 0 0' borderBottom='0.1px solid rgb(54,54,54)' w='100%' _hover={{ bg: "rgb(38,38,38)" }}>Apps and websites</Button>
                        <Button bg='rbg(38,38,38)' p='1.5rem 0' fontSize='0.9rem' borderRadius='0' borderBottom='0.1px solid rgb(54,54,54)' w='100%' _hover={{ bg: "rgb(38,38,38)" }}>Professional account</Button>
                        <Button bg='rbg(38,38,38)' p='1.5rem 0' fontSize='0.9rem' borderRadius='0' borderBottom='0.1px solid rgb(54,54,54)' w='100%' _hover={{ bg: "rgb(38,38,38)" }}>QR code</Button>
                        <Button bg='rbg(38,38,38)' p='1.5rem 0' fontSize='0.9rem' borderRadius='0' borderBottom='0.1px solid rgb(54,54,54)' w='100%' _hover={{ bg: "rgb(38,38,38)" }}>Notifications</Button>
                        <Button bg='rbg(38,38,38)' p='1.5rem 0' fontSize='0.9rem' borderRadius='0' borderBottom='0.1px solid rgb(54,54,54)' w='100%' _hover={{ bg: "rgb(38,38,38)" }}>Settings and privacy</Button>
                        <Button bg='rbg(38,38,38)' p='1.5rem 0' fontSize='0.9rem' borderRadius='0' borderBottom='0.1px solid rgb(54,54,54)' w='100%' _hover={{ bg: "rgb(38,38,38)" }}>Supervision</Button>
                        <Button bg='rbg(38,38,38)' p='1.5rem 0' fontSize='0.9rem' borderRadius='0' borderBottom='0.1px solid rgb(54,54,54)' w='100%' _hover={{ bg: "rgb(38,38,38)" }} onClick={() => signOut(auth)}>Log out</Button>
                        <Button bg='rbg(38,38,38)' p='1.5rem 0' fontSize='0.9rem' borderRadius='0 0 0.9rem 0.9rem' borderBottom='0.1px solid rgb(54,54,54)' w='100%' _hover={{ bg: "rgb(38,38,38)" }} onClick={onClose}>Cancel</Button>
                    </ModalBody>

                    <ModalFooter p='0'>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ProfilePage;