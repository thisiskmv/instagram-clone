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
  Spacer,
} from "@chakra-ui/react";
import { AuthContext } from "../context/AuthContext";

function RightSidebar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Box
        w="30%"
        h="100vh"
    
        mt="3.5rem"
      >
        <Box w="80%" ml="2rem">
          <HStack>
            <HStack spacing={4}>
              <Avatar src={currentUser.photoURL} />
              <Text>{currentUser.displayName}</Text>
            </HStack>
            <Spacer />
            <Box>
              <Text fontSize={"0.8rem"} color="blue.400">
                Switch
              </Text>
            </Box>
          </HStack>

          <Flex justifyContent={"space-between"} mt="1rem">
            <Text color="grey " fontSize={"0.8rem"}>
              Suggested for you
            </Text>
            <Text color="white" fontSize={"0.8rem"} fontWeight={"400"}>
              See All
            </Text>
          </Flex>

          <Box mt="1.5rem">
            <HStack mt="1rem">
              <Avatar
                size="sm"
                src="https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=600"
              />

              <Box>
                <Text fontSize={"0.8rem"}>Pankaj partap singh bisht</Text>
                <Text fontSize={"0.8rem"} color="grey">
                  Followed by faizan04 + 8 others
                </Text>
              </Box>
              <Spacer />
              <Box>
                <Text fontSize={"0.8rem"} color="blue.400">
                  Follow
                </Text>
              </Box>
            </HStack>

            <HStack mt="1rem">
              <Avatar
                size="sm"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&w=1000&q=80"
              />

              <Box>
                <Text fontSize={"0.8rem"}>thisiskmv</Text>
                <Text fontSize={"0.8rem"} color="grey">
                  Followed by kmv +4 others
                </Text>
              </Box>
              <Spacer />
              <Box>
                <Text fontSize={"0.8rem"} color="blue.400">
                  Follow
                </Text>
              </Box>
            </HStack>
            <HStack mt="1rem">
              <Avatar
                size="sm"
                src="https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />

              <Box>
                <Text fontSize={"0.8rem"}>Faizan khan</Text>
                <Text fontSize={"0.8rem"} color="grey">
                  Followed by kmv + 9 others
                </Text>
              </Box>
              <Spacer />
              <Box>
                <Text fontSize={"0.8rem"} color="blue.400">
                  Follow
                </Text>
              </Box>
            </HStack>
            <HStack mt="1rem">
              <Avatar
                size="sm"
                src="https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=600"
              />

              <Box>
                <Text fontSize={"0.8rem"}>Roshan ghuu</Text>
                <Text fontSize={"0.8rem"} color="grey">
                  Followed by Shubham + 4 others
                </Text>
              </Box>
              <Spacer />
              <Box>
                <Text fontSize={"0.8rem"} color="blue.400">
                  Follow
                </Text>
              </Box>
            </HStack>
            <HStack mt="1rem">
              <Avatar
                size="sm"
                src="https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />

              <Box>
                <Text fontSize={"0.8rem"}>Shubham chaubhay</Text>
                <Text fontSize={"0.8rem"} color="grey">
                  Followed by Muskan thapa + 3 others
                </Text>
              </Box>
              <Spacer />
              <Box>
                <Text fontSize={"0.8rem"} color="blue.400">
                  Follow
                </Text>
              </Box>
            </HStack>
          </Box>
          <Box>
            <Text mt="1rem" fontSize={"0.65rem"} color="grey">
              About.Help.Press.Api.jobs.Privacy.Terms.Location.Language.MetaVarified
            </Text>
          </Box>
          <Box>
            <Text mt="0.5rem" fontSize={"0.70rem"} color="grey">
              @ 2023 INSTAGRAM FROM META
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default RightSidebar;
