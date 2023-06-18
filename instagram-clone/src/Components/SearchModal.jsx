import React, { useState, useEffect } from "react";
import {RiTelegramLine} from "react-icons/ri"
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Box,
  HStack,
  Avatar,
  Input,
  Heading,
  Center,
  Flex,
  InputLeftAddon,
  InputGroup
} from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react'
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  serverTimestamp,
  setDoc,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase/firebase";
import {useNavigate} from "react-router-dom"

function SearchModal({ isOpen, onClose }) {
  const navigate=useNavigate()
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const [username, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(true);
  const [chats, setChats] = useState([]);
  
  const config = {
    initialColorMode: 'black',
    useSystemColorMode: false,
  }
  const theme = extendTheme({ config })
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
      if(user!==username){
        setErr(false)
        console.log(err,"false")
      }else{
        setErr(true)
        console.log(err,"true")
      }
    } catch (error) {
      setErr(true);
   
    }
  };

console.log("users",user)
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };
  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        // create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {}
    // setUser(null);
    setUserName("");
    onClose()
  };

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);

  // const chatSelect = (u) => {
  //   dispatch({ type: "CHANGE_USER", payload: u });
  // };
  return (
    <Modal theme={theme} onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent bg="rgb(18,18,18)" color="white">
        <ModalHeader></ModalHeader>
        <ModalCloseButton textAlign={"left"} />
        <ModalBody>
            <InputGroup>
            <InputLeftAddon bg="transparent" w="0rem" border={"none"} children='To:' />
          <Input
          
            placeholder="Search..."
            value={username}
            onKeyDown={handleKey}
            variant="ghost"
             bg="rgb(18,18,18)"
            onChange={(e) => setUserName(e.target.value)}
          />
          </InputGroup>

          <Center>
            <Box w="100%" p="1rem 0" borderTop="0.1px solid rgba(190, 190, 190, 0.40)">
             
              {user ? (
                <HStack
                  spacing={3}
                  p="0.4rem 1rem"
                  cursor="pointer"
                  
                  _hover={{ bg: "rgb(38,38,38)" }}
                  
                  onClick={handleSelect}
                >
                  <Box>
                    <Avatar size="lg" src={user.photoURL} />
                  </Box>
                  <Box>
                    <Text mb={-0.5}>{user.displayName}</Text>
                    <Text fontSize={13}>Sent you a message</Text>
                  </Box>
                </HStack>
              ) : (
              <>
              {  err ? "" :  <Center><Text color="red" fontWeight={"500"}>User not found!</Text></Center>  }
                <Box>
                <Center><Heading mt="1rem"><RiTelegramLine color="grey" fontSize={"4rem"} /></Heading></Center>
              <Text fontSize={"1.5rem"}  textAlign={"center"}>Search here for chat</Text>
              </Box>
              </>
                
              )}
            </Box>
          </Center>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SearchModal;
