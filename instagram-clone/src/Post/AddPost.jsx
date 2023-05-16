import { Box, Button, Center, Heading, Input, Progress, Stack } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { storage, db } from '../firebase/firebase';
import { ref, getDownloadURL, uploadBytesResumable, getMetadata } from "firebase/storage";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { AuthContext } from '../context/AuthContext';
import { getStorage, uploadBytes } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function AddPost() {
    const {currentUser} = useContext(AuthContext);
    const [caption,setCaption] = useState('');
    const [progress,setProgress] = useState(0);
    const [image,setImage] = useState(null);

    const handleChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
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
    

    // const handleUpload = async () => {
    //     const storage = getStorage();
    //     const storageRef = ref(storage, `images/${image.name}`);
    //     console.log(storageRef);
    
    //     const uploadTask = uploadBytesResumable(storageRef, image);
    
    //     try {
    //         await uploadTask;
    
    //         const metadata = await getMetadata(storageRef);
    //         if (!metadata) {
    //             // Create 'images' folder
    //             const imagesRef = ref(storage, 'images/');
    //             await uploadBytes(imagesRef.child('.placeholder'), new Blob());
    
    //             const downloadUrl = await getDownloadURL(imagesRef);
    //             const imageUrl = await getDownloadURL(ref(imagesRef, image.name));
    
    //             await addDoc(collection(db, 'posts'), {
    //                 timestamp: serverTimestamp(),
    //                 caption: caption,
    //                 imageUrl: imageUrl,
    //                 username: currentUser,
    //             });
    //         } else {
    //             const downloadUrl = await getDownloadURL(storageRef);
    //             await addDoc(collection(db, 'posts'), {
    //                 timestamp: serverTimestamp(),
    //                 caption: caption,
    //                 imageUrl: downloadUrl,
    //                 username: currentUser,
    //             });
    //         }
    
    //         setCaption('');
    //         setImage(null);
    //     } catch (error) {
    //         console.log(error);
    //         alert(error.message);
    //     }
    // };
    

    // const handleUpload = () => {
    //     const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
    //     console.log(uploadTask);

    //     uploadTask.on(
    //         "state_changed",
    //         (snapshot) => {
    //             const progress = Math.round(
    //                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //             );
    //             setProgress(progress);
    //         },
    //         (error) => {
    //             console.log(error);
    //             alert(error.message);
    //         },
    //         () => {
    //             firebase.storage()
    //             .ref('images')
    //             .child(image.name)
    //             .getDownloadURL()
    //             .then(url => {
    //                 db.collection('posts').add({
    //                     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //                     caption: caption,
    //                     imageUrl: url,
    //                     username: currentUser,   
    //                 })
    //             })
    //         }
    //     )

    //     setCaption('')
    //     setImage(null);
    // }

    return (
        <Center>
            <Stack w='60%' mb='2rem' >
                <Heading>Add Post</Heading>
                <Input type='file' size='sm' onChange={handleChange} />
                <Input type='text' size='sm' variant='outline' placeholder='Write here Captions' value={caption} onChange={(e)=>{setCaption(e.target.value)}} />
                <Progress size='sm' hasStripe value={progress}  max='100' />
                <Button colorScheme='blue' size='sm' w='100%' onClick={handleUpload}>Add Post</Button>
            </Stack>
        </Center>
    );
}

export default AddPost;


// import firebase from 'firebase/compat/app';
// import 'firebase/compat/storage'; // import storage module from compat package
// import 'firebase/compat/firestore'; // import firestore module from compat package
// import { useContext, useState, useEffect } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { Button, Center, Heading, Input, Progress, Stack } from '@chakra-ui/react';

// function AddPost() {
//     const { currentUser } = useContext(AuthContext);
//     const [caption, setCaption] = useState('');
//     const [progress, setProgress] = useState(0);
//     const [image, setImage] = useState(null);
//     const db = firebase.firestore();
//     const storage = firebase.storage(); // create a storage instance

//     const handleChange = (e) => {
//         if (e.target.files[0]) {
//             setImage(e.target.files[0]);
//         }
//     };

//     const handleUpload = () => {
//         const uploadTask = storage.ref(`images/${image.name}`).put(image); // use storage instance to get a reference to the file
//         console.log(uploadTask);

//         uploadTask.on(
//             "state_changed",
//             (snapshot) => {
//                 const progress = Math.round(
//                     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//                 );
//                 setProgress(progress);
//             },
//             (error) => {
//                 console.log(error);
//                 alert(error.message);
//             },
//             () => {
//                 uploadTask.snapshot.ref
//                     .getDownloadURL() // get the download URL for the file
//                     .then(url => {
//                         db.collection('posts').add({
//                             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//                             caption: caption,
//                             imageUrl: url,
//                             username: currentUser.email // use currentUser's email as username
//                         })
//                     })
//             }
//         )

//         setCaption('')
//         setImage(null);
//     }

//     useEffect(() => {
//         // your code here
//     }, [currentUser]);

//     return (
//         <Center>
//             <Stack w='60%' mb='2rem' >
//                 <Heading>Add Post</Heading>
//                 <Input type='file' size='sm' onChange={handleChange} />
//                 <Input type='text' size='sm' variant='outline' placeholder='Write here Captions' value={caption} onChange={(e) => { setCaption(e.target.value) }} />
//                 <Progress size='sm' hasStripe value={progress} max='100' />
//                 <Button colorScheme='blue' size='sm' w='100%' onClick={handleUpload}>Add Post</Button>
//             </Stack>
//         </Center>
//     );
// }

// export default AddPost;
