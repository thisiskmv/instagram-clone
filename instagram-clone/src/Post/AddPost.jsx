import { AspectRatio, Avatar, Box, Button, Center, Flex, HStack, Heading, Icon, Image, Input, Progress, Stack, Text, Textarea, useDisclosure } from '@chakra-ui/react';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { storage, db } from '../firebase/firebase';
import { ref, getDownloadURL, uploadBytesResumable, getMetadata } from "firebase/storage";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { AuthContext } from '../context/AuthContext';
import { getStorage, uploadBytes } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import createPostIcon from '../Images/createPostIcon.svg'
import { BsArrowLeft } from 'react-icons/bs'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'



function AddPost({ isOpen, onClose }) {
    const { currentUser } = useContext(AuthContext);
    const [caption, setCaption] = useState('');
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState(null);
    const [showSecondModal, setShowSecondModal] = useState(false);

    const handleNext = () => {
        setShowSecondModal(true)
    }

    const handleClose = () => {
        setShowSecondModal(false);
        onClose();
    }

    const inputRef = useRef();

    useEffect(() => {
        return () => {
            // Clean up the object URL when the component is unmounted
            if (image !== null) {
                URL.revokeObjectURL(image);
            }
        };
    }, [image]);


    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    }

    const handleUpload = () => {
        const storage = getStorage();
        const storageRef = ref(storage, `images/${image.name}`);
        console.log(storageRef);

        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on('state_changed', (snapshot) => {
            const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
        }, (error) => {
            console.log(error);
            alert(error.message);
        }, async () => {
            try {
                const url = await getDownloadURL(storageRef);
                const username = currentUser && currentUser.displayName ? currentUser.displayName : '';
                console.log(currentUser);
                console.log(currentUser.displayName);
                if (username) {
                    await addDoc(collection(db, 'posts'), {
                        userId: currentUser.uid,
                        timestamp: serverTimestamp(),
                        caption: caption,
                        imageUrl: url,
                        username: username,
                        photoURL: currentUser?.photoURL === null ? "./user.png" : currentUser?.photoURL,
                    });
                } else {
                    throw new Error("Invalid username");
                }
            } catch (error) {
                console.log(error);
                // Handle the error and provide appropriate feedback to the user
            }
        });

        setCaption('');
        setImage(null);



        // console.log(inputRef.current.click())
    }

    const handleModalClose = () => {
        if (image !== null) {
            URL.revokeObjectURL(URL.createObjectURL(image));
            setImage(null); // Reset the image state
        }
        onClose(); // Close the modal
    };

    return (

        <>


            <Modal onClose={handleModalClose} size='3xl' isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent bg='rgb(38,38,38)' w='30%' color='white' borderRadius="0.9rem" textAlign='center'>
                    <ModalHeader p='0.4em' borderBottom='0.1px solid rgba(190, 190, 190, 0.40)'>
                        <Text fontWeight='500' fontSize='1rem'>Create new post</Text>
                    </ModalHeader>
                    <ModalBody p='0' >
                        <Box>
                            {image === null ? (
                                <Box p='6.1rem 0'>
                                    <Flex justify='center'>
                                        <Image src={createPostIcon} />
                                    </Flex>
                                    <Text p='1rem' fontSize='1.2rem' fontWeight='400'>Drag photos and videos here</Text>
                                    <Button onClick={() => { inputRef.current.click() }} colorScheme='blue' borderRadius='0.5rem' size='sm'>Select From Computer</Button>
                                    <Input
                                        type="file"
                                        ref={inputRef}
                                        hidden
                                        accept="image/*, video/*"
                                        onChange={handleChange}
                                    />
                                </Box>
                            ) : (
                                <ModalContent bg='rgb(38,38,38)' color='white' borderRadius="0.9rem" textAlign='center'>
                                    <ModalHeader p='0.4em' borderBottom='0.1px solid rgba(190, 190, 190, 0.40)'>
                                        <Flex justify='space-between' p='0.2rem 0.5rem'>
                                            <Icon as={BsArrowLeft} boxSize='1.7rem' cursor='pointer' onClick={handleModalClose} />
                                            <Text textAlign='center' fontSize='1rem'>Create new post</Text>
                                            <Text textAlign='right' fontSize='0.9rem' color='blue.300' _hover={{ color: "white" }} cursor='pointer' onClick={() => { handleUpload(); onClose();}} >Share</Text>
                                        </Flex>
                                    </ModalHeader>

                                    <ModalBody p='0'>
                                        <AspectRatio ratio={16 / 9} >
                                            {image !== null && (
                                                <Box overflow="hidden" >
                                                    {image.type.includes('image') ? (
                                                        <Flex h='100%'>
                                                            <Image borderRadius='0 0 0 0.9rem' w='55%' h='100%' src={URL.createObjectURL(image)} alt="Preview" objectFit='cover' />
                                                            <Box w='100%'>
                                                                <HStack p='1rem' spacing={3}>
                                                                    <Avatar src={currentUser.photoURL} size='sm' />
                                                                    <Text fontWeight='600'>{currentUser.displayName}</Text>
                                                                </HStack>
                                                                <Textarea p='0 1rem' variant='ghost' bg='transparent' size='md' placeholder='Write a caption...' w='100%' h='50%' value={caption} onChange={(e)=>{setCaption(e.target.value)}} />
                                                            </Box>
                                                        </Flex>
                                                    ) : (
                                                        <video src={URL.createObjectURL(image)} controls />
                                                    )}
                                                </Box>
                                            )}
                                        </AspectRatio>


                                    </ModalBody>

                                </ModalContent>
                            )}
                        </Box>

                    </ModalBody>
                    <ModalFooter p='0' borderRadius='0.9rem'>

                    </ModalFooter>
                </ModalContent>
            </Modal>


            {/* <Modal onClose={handleClose} isOpen={showSecondModal} size='3xl' isCentered>
                <ModalOverlay />
                <ModalContent bg='rgb(38,38,38)'  color='white' borderRadius="0.9rem" textAlign='center'>
                    <ModalHeader p='0.4em' borderBottom='0.1px solid rgba(190, 190, 190, 0.40)'>
                        <Flex justify='space-between' p='0.2rem 0.5rem'>
                            <Icon as={BsArrowLeft} boxSize='1.7rem' cursor='pointer'  />
                            <Text textAlign='center' fontSize='0.9rem'>Create new post</Text>
                            <Text textAlign='right' fontSize='0.9rem' color='blue.300' _hover={{ color: "white" }} cursor='pointer' onClick={handleNext}>Share</Text>
                        </Flex>
                    </ModalHeader>

                    <ModalBody>
                        <Text>Testing</Text>
                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal> */}
        </>
    );
}

export default AddPost;