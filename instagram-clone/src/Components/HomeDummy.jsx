import React from 'react';
import LeftSidebar from './LeftSidebar';
import Chat from './Chat';
import RightSidebar from './RightSidebar';
import Post from '../Post/Post'
import { Box, Flex } from '@chakra-ui/react';


function HomeDummy(props) {
    return (
        <div id="home-container" style={{ backgroundColor: "rgb(18,18,18)", margin: "auto" }}>
            <div className="home-child-container">
                <LeftSidebar />
                <Box w='80%' h='auto' m='0.98rem auto' mr='1rem'>
                    <Flex m='auto' w='85%'>
                        <RightSidebar />
                        <Chat />
                    </Flex>
                </Box>
            </div>
        </div>

        // <Flex w='100%' border='1px solid coral'>
        //     <Box w='20%' borderRight='1px solid coral'>
        //         <LeftSidebar />
        //     </Box>
        //     <Box w='80%'>
        //         <Flex direction='column' h='100%' border='1px solid yellow'>
        //             <Box flex='1' overflow='auto'>
        //                 <RightSidebar />
        //                 <Chat />
        //             </Box>
        //         </Flex>
        //     </Box>
        // </Flex>
    );
}

export default HomeDummy;