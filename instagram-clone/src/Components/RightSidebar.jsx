import React from 'react';

import { IoIosArrowDown } from 'react-icons/io'
import { HStack, Icon, TabList, TabPanel, TabPanels, Tabs, Text, VStack, Tab, TabIndicator, Box, Avatar, Flex, Center } from '@chakra-ui/react';

function RightSidebar() {







    
    return (
        <>
            <Box w='24%' h='95vh' borderBottom='0.1px solid rgba(190, 190, 190, 0.40)'>
                <Center cursor='pointer' height='3.5rem'>
                    <Text color='white'>username</Text>
                    <Icon as={IoIosArrowDown} fontSize='1.5rem' />
                </Center>
                <HStack borderTop='0.1px solid rgba(190, 190, 190, 0.40)' w='100%'>
                    <Tabs align='start' variant="unstyled" w='100%'>
                        <TabList>
                            <Tab p='0.7rem' bg='transparent' color='white' fontSize='0.8rem'>PRIMARY</Tab>
                            <Tab p='0.7rem' bg='transparent' color='white' fontSize='0.8rem'>GENERAL</Tab>
                        </TabList>
                        <TabIndicator
                            mt="-1.5px"
                            height="1px"
                            bg="gray.200"
                            borderRadius="1px"
                        />
                        <TabPanels>
                            <TabPanel p='0' w='100%'>

                                <Box borderTop='0.1px solid rgba(190, 190, 190, 0.40)'>
                                    <HStack spacing={3} p='0.4rem 1rem' cursor='pointer' _hover={{ bg: "rgb(38,38,38)" }}>
                                        <Box>
                                            <Avatar size='lg' src='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
                                        </Box>
                                        <Box>
                                            <Text mb={-0.5}>username</Text>
                                            <Text fontSize={13}>Sent you a message</Text>
                                        </Box>
                                    </HStack>
                                    <HStack spacing={3} p='0.4rem 1rem' cursor='pointer' _hover={{ bg: "rgb(38,38,38)" }}>
                                        <Box>
                                            <Avatar size='lg' src='https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
                                        </Box>
                                        <Box>
                                            <Text mb={-0.5}>username</Text>
                                            <Text fontSize={13}>Sent you a message</Text>
                                        </Box>
                                    </HStack>
                                </Box>
                            </TabPanel>
                            <TabPanel>
                                <p>Private Chat</p>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </HStack>

            </Box>

        </>
    )

    }
    export default RightSidebar;