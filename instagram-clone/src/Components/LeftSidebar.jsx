import React from 'react';
import {FaSistrix} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai'
import {MdOutlineExplore} from 'react-icons/md'
import {BiMoviePlay,BiUser} from 'react-icons/bi'
import {RiMessengerLine} from 'react-icons/ri';
import {FiHeart} from 'react-icons/fi'
import {TbSquareRoundedPlus} from 'react-icons/tb'
import {RxHamburgerMenu} from 'react-icons/rx'
import {Stack,Image, Button, Flex, VStack,Icon, Avatar} from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function LeftSidebar(){
    const {currentUser} =useContext(AuthContext)
    console.log("faizan bhadwa",currentUser)
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
                    <Button leftIcon={<Icon as={AiFillHome} fontSize='1.7rem' mr='0.3rem' />} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{bg:"rgb(38,38,38)"}} borderRadius='0.5rem'><Link to="/">Home</Link></Button>
                    <Button leftIcon={<Icon as={FaSistrix} fontSize='1.7rem' mr='0.3rem' />} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{bg:"rgb(38,38,38)"}} borderRadius='0.5rem'>Search</Button>
                    <Button leftIcon={<Icon as={MdOutlineExplore} fontSize='1.7rem' mr='0.3rem' />} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{bg:"rgb(38,38,38)"}} borderRadius='0.5rem'>Explore</Button>                   
                    <Button leftIcon={<Icon as={BiMoviePlay} fontSize='1.7rem' mr='0.3rem' />} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{bg:"rgb(38,38,38)"}} borderRadius='0.5rem'>Reels</Button>                   
                    <Button leftIcon={<Icon as={RiMessengerLine} fontSize='1.7rem' mr='0.3rem' />} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{bg:"rgb(38,38,38)"}} borderRadius='0.5rem'><Link to="/homedumy"> Messages</Link></Button>
                    <Button leftIcon={<Icon as={FiHeart} fontSize='1.7rem' mr='0.3rem' />} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{bg:"rgb(38,38,38)"}} borderRadius='0.5rem'>Notifications</Button>
                    <Button leftIcon={<Icon as={TbSquareRoundedPlus} fontSize='1.7rem' mr='0.3rem' />} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{bg:"rgb(38,38,38)"}} borderRadius='0.5rem'>Create</Button>
                    <Button leftIcon={<Avatar src={currentUser.photoURL} size='xs' mr='0.3rem' />} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{bg:"rgb(38,38,38)"}} borderRadius='0.5rem'>Profile</Button>
                    <Button leftIcon={<Icon as={RxHamburgerMenu} fontSize='1.7rem' mr='0.3rem' />} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{bg:"rgb(38,38,38)"}} borderRadius='0.5rem'>More</Button>
                    <Button onClick={()=>signOut(auth)} style={{background:"white",color:"black"}}>Log Out</Button>
                </VStack>
            </Stack>
        </>
    )
}

export default LeftSidebar;