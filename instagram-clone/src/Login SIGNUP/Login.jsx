import React from "react";
import { useState } from "react";
import "./Login.css"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";
import { RiFacebookBoxFill } from "react-icons/ri";
import {
  Container,
  Box,
  Image,
  Flex,
  Input,
  Button,
  Center,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
function Signup(props) {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  let hendleChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  let sendData = async (e) => {
    e.preventDefault();
    console.log(inputValue);
    let email = inputValue.email;
    let password = inputValue.password;

    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setError(true);
      setIsLoading(false);
      console.log(error);
    }
  };
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    // <Container  >
    <form>
      <Flex bg="rgb(250,250,250)">
        <Box w="50%" ml="17rem">
          <Image loading="lazy" src="https://media.gcflearnfree.org/content/633d944b3823fb02e84dce55_10_05_2022/Screen%20Shot%202022-10-10%20at%202.28.19%20PM.png" />
        </Box>
        <Box w="35%" mr="15rem" mt="2rem" padding={"1rem"}>
          <Box border="1px solid rgb(219,219,219)" padding="1rem">
            <Center>
              <Image
                w="55%"
                mb="1rem"
                src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
              />
            </Center>
            <Box padding={"0.3rem"}>
              <Input
                type="email"
                name="email"
                fontSize={"0.8rem"}
                color='black'
                placeholder="Phone number, username or email"
                onChange={hendleChange}
              />
            </Box>
            <Box padding={"0.3rem"}>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  name="password"
                  fontSize={"0.8rem"}
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  onChange={hendleChange}
                  color="black"
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    color="grey"
                    variant={"ghost"}
                    colorScheme="none"
                    _hover={{ color: 'blue.400' }}
                    onClick={handleClick}
                  >
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>

            <Center>
              <Box padding={"0.3rem"}>
                {
                  isLoading ? (<Button
                    isLoading
                    loadingText='Loading'
                    width="300px"
                    spinnerPlacement='start'
                    bg="rgb(76,181,249)"
                    _hover={{ bg: "rgb(0,149,246)" }}
                  >
                    Submit
                  </Button>) : (<Button
                    onClick={sendData}
                    width="300px"
                    bg="rgb(76,181,249)"
                    _hover={{ bg: "rgb(0,149,246)" }}
                  >
                    Login
                  </Button>)
                }
              </Box>
            </Center>

            <Center>
              <Text className="divider-login" mt="0.8rem" color="black">
                OR
              </Text>
            </Center>

            <Center>
              <Text mt="0.8rem" color="black" fontSize={"0.9rem"}>
                <Flex align={"center"}>
                  <RiFacebookBoxFill
                    fontSize={"1.3rem"}
                    color="rgb(0,149,246)"
                  />{" "}
                  Log in with Facebook
                </Flex>
              </Text>
            </Center>

            <Center>
              <Box p='1.5rem'>
                {error && <Text color='red' fontSize='0.8rem' fontWeight='500'>something went wrong</Text>}
              </Box>
            </Center>
            <Center>
              <Text mt="0.8rem" color="black" fontSize={"0.7rem"}>
                Forgot password?
              </Text>
            </Center>
          </Box>

          <Box border="1px solid rgb(219,219,219)" mt="0.6rem" padding="1.3rem">
            <Center>
              <Text color="black" fontSize={"0.9rem"}>
                Dont't have an account?{" "}
                <Link to="/signup">
                  <span style={{ color: "rgb(76,181,249)" }}>Signup</span>
                </Link>
              </Text>
            </Center>
          </Box>

          <Center>
            <Text fontSize="15px" mt="0.4rem" color="black">
              Get the app.
            </Text>
          </Center>

          <Flex padding={"1rem"}>
            <Box m="5px">
              <Image
                w="10rem"
                src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              ></Image>
            </Box>
            <Box m="5px">
              <Image
                w=" 10rem"
                height="2.8rem"
                src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </form>
  );
}

export default Signup;
