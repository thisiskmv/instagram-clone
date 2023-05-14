import React, { useState } from "react";
import "./Signup.css"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { RiFacebookBoxFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Container,
  FormControl,
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

function Login(props) {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const[email,setEmail]=useState("")
  const[displayName,setDisplayName]=useState("")
  const[password,setPassword]=useState("")
  const[file,setFile]=useState("")
  let sendData = async (e) => {
    e.preventDefault();

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setError(true);
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName: displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box w="40%" margin=" auto" >
        <FormControl >
      <Box
        w="65%"
        padding="2rem"
        margin="10px auto"
        border="1px solid rgb(219,219,219)"
      >
        <Box>
          <Center>
         
            <Image
              w="60%"
              src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
            />
          </Center>
        </Box>

        <Center width="100%">
          <Text mb="1rem" fontWeight="500" color="darkgrey" textAlign="center">
            Sign up to see photos and videos from your friends.
          </Text>
        </Center>

        <Center>
          <Button
            leftIcon={<RiFacebookBoxFill fontSize={"1.5rem"} />}
            w="95.5%"
            bg="rgb(76,181,249)"
            _hover={{ bg: "rgb(0,149,246)" }}
          >
            Log in with Facebook
          </Button>
        </Center>

        <Center>
          <Text className="divider-signup" mt="0.8rem" mb="0.8rem" color="blackAlpha.800">
            OR
          </Text>
        </Center>

        <Box padding={"0.3rem"}>
          <Input
            type="text"
            name="email"
            fontSize={"0.8rem"}
            placeholder="Phone number or email"
            color="black"
            onChange={(e)=>{setEmail(e.target.value)}}
          />
        </Box>
        <Box padding={"0.3rem"}>
          <Input
            type="text"
            name="username"
            fontSize={"0.8rem"}
            placeholder="Username"
            color="black"
            onChange={(e)=>{setDisplayName(e.target.value)}}
          />
        </Box>

        <Box padding={"0.3rem"}>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              name="password"
              color="black"
              fontSize={"0.8rem"}
              type={show ? "text" : "password"}
              placeholder="Password"
              onChange={(e)=>{setPassword(e.target.value)}}
            
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" color="grey" variant={"ghost"}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>
        <Box padding={"0.3rem"}>
          <Input
            type="file"
            name="file"
            fontSize={"0.8rem"}
            color="black"
            onChange={(e)=>{setFile(e.target.files[0])}}
          />
        </Box>

        <Box padding="0.5rem">
          <Center>
            <Text
              textAlign="center"
              fontSize={"0.75rem"}
              color="blackAlpha.700"
            >
              People who use our service may have uploaded your contact
              information to Instagram. Learn More
            </Text>
          </Center>

          <Center>
            <Text
              textAlign="center"
              fontSize={"0.75rem"}
              mt="1rem"
              color="blackAlpha.700"
            >
              By signing up, you agree to our Terms , Privacy Policy and Cookies
              Policy .
            </Text>
          </Center>
        </Box>

        <Box>
          <Button
            bg="rgb(0,149,246)"
            _hover={{ bg: "rgb(76,181,249)" }}
            p="0.5rem"
            width="100%"
            type="submit"
            onClick={sendData}
          >
            Sign up
          </Button>

          {error && <h3>something went wrong</h3>}
        </Box>
      </Box>
      <Box>
        <Box
          border="1px solid rgb(219,219,219)"
          w="65%"
          margin=" auto"
          mt="0.6rem"
          padding="1.3rem"
        >
          <Center>
            <Text color="black" fontSize={"0.9rem"}>
             Have an account?{" "}
              <Link to="/login">
                <span style={{ color: "rgb(76,181,249)" }}>Login</span>
              </Link>
            </Text>
          </Center>
        </Box>
      </Box>

      <Center>
        <Text fontSize="15px" mt="0.4rem" color="black">
          Get the app.
        </Text>
      </Center>

      <Flex padding={"1rem"} w="65%" margin=" auto">
        <Box m="5px">
          <Image
            w="10rem"
            src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
          ></Image>
        </Box>
        <Box m="5px">
          <Image
            w=" 10rem"
            height="2.7rem"
            src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
          />
        </Box>
      </Flex>
    </FormControl>
    </Box>
  );
}

export default Login;
