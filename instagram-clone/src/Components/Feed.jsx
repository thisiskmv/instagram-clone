import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Box, Flex } from '@chakra-ui/react';
import LeftSidebar from './LeftSidebar';
import AddPost from '../Post/AddPost';
import Stories from './Stories';
import HomeStaticRightBar from './HomeStaticRightBar'

function Feed(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     const unsubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), (snapshot) => {
    //         setIsLoading(true);
    //         setPosts(
    //             snapshot.docs.map((doc) => ({
    //                 id: doc.id,
    //                 post: doc.data()
    //             }))
    //             );
    //             setIsLoading(false);
            
    //     });


    //     return () => {
    //         unsubscribe();
    //     };
    // }, []);
    

    useEffect(() => {
        let unsubscribe;
        try {
            // setIsLoading(true)
            unsubscribe = onSnapshot(
                query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
                (snapshot) => {
                    setPosts(
                        snapshot.docs.map((doc) => ({
                            id: doc.id,
                            post: doc.data()
                        }))
                    );
                }
            );

            setIsLoading(true)
        } catch (error) {
            // Handle the error
            console.log("An error occurred:", error);
            // setIsLoading(false)
        }
    
        return () => {
            try {
                unsubscribe();
            } catch (error) {
                // Handle the error
                console.log("An error occurred while unsubscribing:", error);
            }
        };
    }, []);
    


    return (
        <>

            <Flex w='100%' bg='black' color='white'>
                <Box w='20%'>
                    <LeftSidebar />
                </Box>
                <Box w='60%' >
                    <AddPost />

                    <Box overflow='hidden'>
                        <div style={{ display: 'flex', translate: `0px 0px`, transition: '1s' }}>
                            <Stories />
                        </div>
                    </Box>

                    {
                        posts.map((post) => {
                            return <Post post={post} postId={post.id} isLoading={isLoading} />
                        })
                    }

                </Box>
                <HomeStaticRightBar />
            </Flex>


        </>
    );
}

export default Feed;