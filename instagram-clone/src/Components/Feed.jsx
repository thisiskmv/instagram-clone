import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/firebase';
import { Box, Flex, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
import LeftSidebar from './LeftSidebar';
import AddPost from '../Post/AddPost';
import Stories from './Stories';
import HomeStaticRightBar from './HomeStaticRightBar'


function Feed(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let unsubscribe;

        const fetchData = async () => {
            try {
                setIsLoading(true);
                unsubscribe = onSnapshot(
                    query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
                    (snapshot) => {
                        setPosts(
                            snapshot.docs.map((doc) => ({
                                id: doc.id,
                                post: doc.data(),
                            }))
                        );
                        setIsLoading(false);
                    }
                );
            } catch (error) {
                // Handle the error
                console.log("An error occurred:", error);
                setIsLoading(false);
            }
        };

        fetchData();

        return () => {
            try {
                unsubscribe();
            } catch (error) {
                // Handle the error
                console.log("An error occurred while unsubscribing:", error);
            }
        };
    }, []);

    console.log(isLoading)



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
                        isLoading ? (
                            <Box borderRadius='0.5rem' padding='6' boxShadow='lg' bg='rgb(48,48,48)' w='63%' m='auto'>
                                <SkeletonCircle size='10' startColor='rgb(18,18,18)' endColor='rgb(34,34,34)' />
                                <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='2' startColor='rgb(18,18,18)' endColor='rgb(34,34,34)' />&nbsp;
                                <Skeleton height='500px' startColor='rgb(18,18,18)' endColor='rgb(34,34,34)' />
                            </Box>
                        ) : (
                            <>
                                {
                                    posts.map((post) => {
                                        return <Post post={post} postId={post.id} isLoading={isLoading} />
                                    })
                                }
                            </>
                        )
                    }

                </Box>
                <HomeStaticRightBar />
            </Flex>


        </>
    );
}

export default Feed;