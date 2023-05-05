import React from 'react';
import Message from './Message';
import { Box } from '@chakra-ui/react';

function Messages(props) {
    return (
        // <div className='messages'>
        //     <Message />
        //     <Message />
        //     <Message />
        //     <Message />
        //     <Message />
        // </div>

        <Box bg='transparent' p='0.8rem' height='calc(100% - 10.1rem)' overflow='scroll' overflowX='hidden'>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </Box>
    );
}

export default Messages;