import React, { useEffect, useState } from "react";
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
import { db } from "../firebase/firebase";
import { IoIosArrowDown } from "react-icons/io";

import {
  HStack,
  Icon,
  TabList,
  TabPanel,
  Input,
  TabPanels,
  Tabs,
  Text,
  VStack,
  Tab,
  TabIndicator,
  Box,
  Avatar,
  Flex,
  Center,
} from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
function RightSidebar() {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  const [username, setUserName] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const [chats, setChats] = useState([]);

  // const handleSearch = async () => {
  //   const q = query(
  //     collection(db, "users"),
  //     where("displayName", "==", username)
  //   );
  //   try {
  //     const querySnapshot = await getDocs(q);
  //     querySnapshot.forEach((doc) => {
  //       setUser(doc.data());
  //     });
  //   } catch (error) {
  //     setErr(true);
  //   }
  // };

  // const handleKey = (e) => {
  //   e.code === "Enter" && handleSearch();
  // };
  // const handleSelect = async () => {
  //   const combinedId =
  //     currentUser.uid > user.uid
  //       ? currentUser.uid + user.uid
  //       : user.uid + currentUser.uid;

  //   try {
  //     const res = await getDoc(doc(db, "chats", combinedId));

  //     if (!res.exists()) {
  //       await setDoc(doc(db, "chats", combinedId), { messages: [] });

  //       // create user chats
  //       await updateDoc(doc(db, "userChats", currentUser.uid), {
  //         [combinedId + ".userInfo"]: {
  //           uid: user.uid,
  //           displayName: user.displayName,
  //           photoURL: user.photoURL,
  //         },
  //         [combinedId + ".date"]: serverTimestamp(),
  //       });
  //       await updateDoc(doc(db, "userChats", user.uid), {
  //         [combinedId + ".userInfo"]: {
  //           uid: currentUser.uid,
  //           displayName: currentUser.displayName,
  //           photoURL: currentUser.photoURL,
  //         },
  //         [combinedId + ".date"]: serverTimestamp(),
  //       });
  //     }
  //   } catch (error) {}
  //   setUser(null);
  //   setUserName("");
  // };

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

  const chatSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <>
      <Box
        w="35%"
        h="95vh"
        borderBottom="0.1px solid rgb(54,54,54)"
        borderTop="0.1px solid rgb(54,54,54)"
        borderLeft="0.1px solid rgb(54,54,54)"
        bg='black'
      >
        <Center cursor="pointer" height="3.48rem">
          <Text color="white">{currentUser.displayName}</Text>
          <Icon as={IoIosArrowDown} fontSize="1.5rem" />
        </Center>

        <HStack borderTop="0.1px solid rgb(54,54,54)" w="100%">
          <Tabs align="start" variant="unstyled" w="100%">
            <TabList>
              <Tab p="0.7rem" bg="transparent" color="white" fontSize="0.8rem">
                PRIMARY
              </Tab>
              <Tab p="0.7rem" bg="transparent" color="white" fontSize="0.8rem">
                GENERAL
              </Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="1px"
              bg="gray.200"
              borderRadius="1px"
            />
            <TabPanels>
              <TabPanel p="0" w="100%">
                
                <Box borderTop="0.1px solid rgb(54,54,54)">
                  {Object.entries(chats)
                    ?.sort((a, b) => b[1].date - a[1].date)
                    .map((chat) => (
                      <HStack
                        key={chat[0]}
                        spacing={3}
                        p="0.4rem 1rem"
                        cursor="pointer"
                        _hover={{ bg: "rgb(38,38,38)" }}
                        onClick={() => chatSelect(chat[1].userInfo) }
                      >
                        <Box>
                          <Avatar size="lg" src={chat[1].userInfo.photoURL} />
                        </Box>

                        <Box>
                          <Text mb={-0.5}>{chat[1].userInfo.displayName}</Text>
                          <Text fontSize={13} fontWeight='500'>{chat[1].lastMessage?.text}</Text>
                        </Box>
                      </HStack>
                    ))}
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
  );
}
export default RightSidebar;
