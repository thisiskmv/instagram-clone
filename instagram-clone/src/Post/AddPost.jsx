import { Box, Button, Center, Flex, Heading, Image, Input, Progress, Stack, Text, useDisclosure } from '@chakra-ui/react';
import React, { useContext, useRef, useState } from 'react';
import { storage, db } from '../firebase/firebase';
import { ref, getDownloadURL, uploadBytesResumable, getMetadata } from "firebase/storage";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { AuthContext } from '../context/AuthContext';
import { getStorage, uploadBytes } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import createPostIcon from '../Images/createPostIcon.svg'
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

    const inputRef = useRef();


    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }

    const handleUpload = () => {
        // fileInputRef.current.click();
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
                        timestamp: serverTimestamp(),
                        caption: caption,
                        imageUrl: url,
                        username: username,
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
        
    }

    return (
        // <Center>
        //     <Stack w='60%' mb='2rem' >
        //         <Heading>Add Post</Heading>
        //         <Input type='file' size='sm' onChange={handleChange} />
        //         <Input type='text' size='sm' variant='outline' placeholder='Write here Captions' value={caption} onChange={(e)=>{setCaption(e.target.value)}} />
        //         <Progress size='sm' hasStripe value={progress}  max='100' />
        //         <Button colorScheme='blue' size='sm' w='100%' onClick={handleUpload}>Add Post</Button>
        //     </Stack>
        // </Center>

        <>
        

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent bg='rgb(38,38,38)' w='30%' color='white' borderRadius="0.9rem" textAlign='center'>
                    <ModalHeader p='0.4em' borderBottom='0.1px solid rgba(190, 190, 190, 0.40)'>
                        <Text fontWeight='500' fontSize='1rem'>Create new post</Text>
                    </ModalHeader>
                    {/* <ModalCloseButton /> */}
                    <ModalBody>
                        <Box p='6.1rem 0'>
                            <Flex justify='center'>
                                <Image src={createPostIcon} />
                            </Flex>
                            <Text p='1rem' fontSize='1.2rem' fontWeight='400'>Drag photos and videos here</Text>
                            <Button onClick={()=>{inputRef.current.click()}} colorScheme='blue' borderRadius='0.5rem' size='sm'>Select From Computer</Button>
                            <Input 
                                type="file"
                                ref={inputRef}
                                hidden
                                onChange={handleChange}
                            />
                        </Box>
                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default AddPost;