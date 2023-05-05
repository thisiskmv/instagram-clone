import React from 'react';
import {FaSistrix} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai'
import {MdOutlineExplore} from 'react-icons/md'
import {BiMoviePlay,BiUser} from 'react-icons/bi'
import {RiMessengerLine} from 'react-icons/ri';
import {FiHeart} from 'react-icons/fi'
import {TbSquareRoundedPlus} from 'react-icons/tb'
import {RxHamburgerMenu} from 'react-icons/rx'
import {Stack,Image, Button, Flex, VStack,Icon} from '@chakra-ui/react';


// function LeftSidebar(props) {
//     return (
//         <div id="left-container">
//             <div>
//                 {/* <h3>left sidebar(logo)</h3> */}
//                 <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-White-Dark-Background-Logo.wine.svg" alt="" />
//             </div>

//             <div className='left-sidebar-options'>
//                 <div>
//                     <div><AiFillHome style={{padding:"0 10px",fontSize:"28px"}} /></div>
//                     <h3> Home</h3>
//                 </div>
//                 <div>
//                     <div><FaSistrix style={{padding:"0 10px",fontSize:"30px"}}/></div>
//                     <h3>Search</h3>
//                 </div>
//                 <div>
//                     <div><MdOutlineExplore style={{padding:"0 10px",fontSize:"28px"}} /></div>
//                     <h3>Explore</h3>
//                 </div>
//                 <div>
//                     <div><BiMoviePlay style={{padding:"0 10px",fontSize:"28px"}} /></div>
//                     <h3>Reels</h3>
//                 </div>
//                 <div>
//                     <div><RiMessengerLine style={{padding:"0 10px",fontSize:"28px"}} /></div>
//                     <h3>Messages</h3>
//                 </div>
//                 <div>
//                     <div><FiHeart style={{padding:"0 10px",fontSize:"26px"}} /></div>
//                     <h3>Notifications</h3>
//                 </div>
//                 <div>
//                     <div><TbSquareRoundedPlus style={{padding:"0 10px",fontSize:"28px"}} /></div>
//                     <h3>Create</h3>
//                 </div>
//                 <div>
//                     <div><BiUser style={{padding:"0 10px",fontSize:"26px"}} /></div>
//                     <h3>Profile</h3>
//                 </div>
//                 <div>
//                     <div><RxHamburgerMenu style={{padding:"0 10px",fontSize:"26px"}} /></div>
//                     <h3>More</h3>
//                 </div>
//             </div>
//         </div>
//     );
// }

function LeftSidebar(){
    
    return (
        <>
            <Stack w="18%" h='100vh' direction='column'>
                <Flex height='6rem' >
                    <Image
                    mt='-1rem'
                    boxSize='8rem'
                    objectFit='contain'
                    blendMode='hard-light'
                    src='https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-White-Dark-Background-Logo.wine.svg' 
                    alt='logo' />
                </Flex>
                <VStack p='0 0.8rem'>
                    <Button leftIcon={<Icon as={AiFillHome} fontSize='1.7rem' mr='0.3rem' />} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{bg:"rgb(38,38,38)"}} borderRadius='0.5rem'>Home</Button>
                    <Button leftIcon={<Icon as={FaSistrix} fontSize='1.7rem' mr='0.3rem' />} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{bg:"rgb(38,38,38)"}} borderRadius='0.5rem'>Search</Button>
                    <Button leftIcon={<Icon as={MdOutlineExplore} fontSize='1.7rem' mr='0.3rem' />} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{bg:"rgb(38,38,38)"}} borderRadius='0.5rem'>Explore</Button>
                    <Button leftIcon={<Icon as={BiMoviePlay} fontSize='1.7rem' mr='0.3rem' />} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{bg:"rgb(38,38,38)"}} borderRadius='0.5rem'>Reels</Button>
                    <Button leftIcon={<Icon as={RiMessengerLine} fontSize='1.7rem' mr='0.3rem' />} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{bg:"rgb(38,38,38)"}} borderRadius='0.5rem'>Messages</Button>
                    <Button leftIcon={<Icon as={FiHeart} fontSize='1.7rem' mr='0.3rem' />} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{bg:"rgb(38,38,38)"}} borderRadius='0.5rem'>Notifications</Button>
                    <Button leftIcon={<Icon as={TbSquareRoundedPlus} fontSize='1.7rem' mr='0.3rem' />} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{bg:"rgb(38,38,38)"}} borderRadius='0.5rem'>Create</Button>
                    <Button leftIcon={<Icon as={BiUser} fontSize='1.7rem' mr='0.3rem' />} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{bg:"rgb(38,38,38)"}} borderRadius='0.5rem'>Profile</Button>
                    <Button leftIcon={<Icon as={RxHamburgerMenu} fontSize='1.7rem' mr='0.3rem' />} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{bg:"rgb(38,38,38)"}} borderRadius='0.5rem'>More</Button>
                </VStack>
            </Stack>
        </>
    )
}

export default LeftSidebar;