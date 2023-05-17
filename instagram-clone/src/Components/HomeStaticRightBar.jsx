import React, { useContext, useEffect, useState } from "react";
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

function RightSidebar() {
 const{currentUser} =useContext(AuthContext)

  return (
    <>
      <Box
        w="24%"
        h="95vh"
        borderBottom="0.1px solid rgba(190, 190, 190, 0.40)"
      >
       <Flex alignItems={"center"} justifyContent={"center"}  mt="3rem"><Avatar ml="0rem" mr="0.8rem"  src={currentUser.photoURL}/>
       <Text>{currentUser.displayName}</Text>
       <Text ml="4rem" color="yellow">Switch</Text>
       </Flex>

       <Flex justifyContent={"space-between"} mt="1rem" color="grey">
        <Text ml="0.5rem">Suggest for you</Text>
        <Text mr="0.5rem">See All</Text>
       </Flex>





       <VStack>
       <Flex alignItems={"center"} justifyContent={"center"}  mt="1.5rem"><Avatar ml="0rem"  mr="0.8rem"  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80"/>
       <Text >{currentUser.displayName}</Text>
       <Text ml="8.2rem" color="yellow">Follow</Text>
       </Flex>
       <Flex alignItems={"center"} justifyContent={"center"}  mt="1.5rem"><Avatar ml="0rem"  mr="0.8rem"  src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVufGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
       <Text >PankajSin</Text>
       <Text ml="8.2rem" color="yellow">Follow</Text>
       </Flex>
       <Flex alignItems={"center"} justifyContent={"center"}  mt="2rem"><Avatar ml="0rem"  mr="0.8rem"  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=2000"/>
       <Text >Shubham</Text>
       <Text ml="8.2rem" color="yellow">Follow</Text>
       </Flex>
       <Flex alignItems={"center"} justifyContent={"center"}  mt="2rem"><Avatar ml="0rem"  mr="0.8rem"  src="https://thumbs.dreamstime.com/b/handsome-young-black-man-serious-expression-face-45080832.jpg"/>
       <Text >RoshanSih</Text>
       <Text ml="8.2rem" color="yellow">Follow</Text>
       </Flex>
       <Flex alignItems={"center"} justifyContent={"center"}  mt="2rem"><Avatar ml="0rem"  mr="0.8rem"  src="https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg"/>
       <Text >Dipansuvr</Text>
       <Text ml="8.2rem" color="yellow">Follow</Text>
       </Flex>
       </VStack>
       
        
      </Box>
    </>
  );
}
export default RightSidebar;
