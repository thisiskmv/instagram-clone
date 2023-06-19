import React, { useEffect, useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import { AiFillHome, AiOutlineHome } from 'react-icons/ai'
import { MdOutlineExplore } from 'react-icons/md'
import { BiMoviePlay, BiUser } from 'react-icons/bi'
import { RiMessengerLine } from 'react-icons/ri';
import { FiHeart } from 'react-icons/fi'
import { TbSquareRoundedPlus } from 'react-icons/tb'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Stack, Image, Button, Flex, VStack, Icon, Avatar, useDisclosure, Box, CircularProgress, Progress } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import AddPost from '../Post/AddPost';
import instalogo from '../Images/instalogo.svg';
import home from '../Images/home.svg'
import homeFilled from '../Images/homeFilled.svg'
import search from '../Images/search.svg'
import searchFill from '../Images/searchFill.svg'
import explore from '../Images/explore.svg'
import exploreFill from '../Images/exploreFill.svg'
import reels from '../Images/reels.svg'
import reelsFill from '../Images/reelsFill.svg'
import message from '../Images/message.svg'
import messageFill from '../Images/messageFill.svg'
import notification from '../Images/notification.svg'
import notificationFill from '../Images/notificationFill.svg'
import create from '../Images/create.svg'
import createFill from '../Images/createFill.svg'
import more from '../Images/more.svg'
import moreFill from '../Images/moreFill.svg'

function LeftSidebar() {
    const { currentUser } = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        setIsLoading(true);

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 500); // Set an appropriate delay or use a loading state from data fetching

        return () => {
            clearTimeout(timeout);
        };
    }, [location]);

    return (
        <>
            <Stack w="18%" h='100vh' direction='column' bg='black' borderRight='0.1px solid rgb(54,54,54)' position='fixed'>
                <Box position="fixed" top={0} left={0} right={0} zIndex={9999}>
                    {isLoading && (
                        <Progress value={60} size='xs' colorScheme='orange' isIndeterminate />
                    )}
                </Box>
                <Flex h='6rem' p='0 1.6rem' >
                    <Image
                        src={instalogo}
                        alt='logo' w='52%' />
                </Flex>
                <VStack p='0 0.8rem' spacing={4}>
                    <Button as={NavLink} to="/" leftIcon={<Image src={location.pathname === '/' ? homeFilled : home} p='0 0.5rem' />} onClick={() => setIsActive(true)} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{ bg: "rgb(38,38,38)" }} borderRadius='0.5rem'> Home </Button>
                    <Button as={NavLink} to="#" leftIcon={<Image src={location.pathname === '#' ? searchFill : search} p='0 0.5rem' />} onClick={() => setIsActive(true)} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{ bg: "rgb(38,38,38)" }} borderRadius='0.5rem'> Reels </Button>
                    <Button as={NavLink} to="#" leftIcon={<Image src={location.pathname === '#' ? exploreFill : explore} p='0 0.5rem' />} onClick={() => setIsActive(true)} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{ bg: "rgb(38,38,38)" }} borderRadius='0.5rem'> Explore </Button>
                    <Button as={NavLink} to="#" leftIcon={<Image src={location.pathname === '#' ? reelsFill : reels} p='0 0.5rem' />} onClick={() => setIsActive(true)} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{ bg: "rgb(38,38,38)" }} borderRadius='0.5rem'> Reels </Button>
                    <Button as={NavLink} to="/homedumy" leftIcon={<Image src={location.pathname === '/homedumy' ? messageFill : message} p='0 0.5rem' />} onClick={() => setIsActive(true)} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{ bg: "rgb(38,38,38)" }} borderRadius='0.5rem'> Messages </Button>
                    <Button as={NavLink} to="#" leftIcon={<Image src={location.pathname === '#' ? notificationFill : notification} p='0 0.5rem' />} onClick={() => setIsActive(true)} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{ bg: "rgb(38,38,38)" }} borderRadius='0.5rem'> Notifications </Button>
                    <Button as={NavLink} to="#" leftIcon={<Image src={location.pathname === '#' ? createFill : create} p='0 0.5rem' />} onClick={() => { setIsActive(true); onOpen(); }} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{ bg: "rgb(38,38,38)" }} borderRadius='0.5rem'> Create </Button>
                    <Button leftIcon={<Avatar src={currentUser.photoURL} size='xs' mr='0.3rem' ml='0.6rem' />} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{ bg: "rgb(38,38,38)" }} borderRadius='0.5rem'><Link to='/profile'>Profile</Link></Button>
                    <Button as={NavLink} to="#" leftIcon={<Image src={location.pathname === '#' ? moreFill : more} p='0 0.5rem' />} onClick={() => setIsActive(true)} fontSize='0.9rem' w='100%' justifyContent='flex-start' p='0.5rem' bg='transparent' color='white' border='none' _hover={{ bg: "rgb(38,38,38)" }} borderRadius='0.5rem'> More </Button>
                </VStack>
                <AddPost isOpen={isOpen} onClose={onClose} />
            </Stack>
        </>
    )
}

export default LeftSidebar;