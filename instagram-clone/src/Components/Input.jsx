import React, { useContext, useRef, useState } from "react";
import { TbPhoto } from "react-icons/tb";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { GrEmoji } from "react-icons/gr";
import {FiMic} from 'react-icons/fi'
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase/firebase";
import { Button, Icon, InputGroup, InputLeftElement, InputRightElement, Text } from "@chakra-ui/react";
function Input(props) {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const inputRef = useRef();

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImg(e.target.files[0]);
    }
  };

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img);
      uploadTask.on(
        (error) => {
          //   setError(true)
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    setText("");
    setImg(null);
  };



  return (
    <div className="inputdiv">

      <div className="input">
        <Icon as={GrEmoji}
          fontSize="1.6rem" cursor="pointer" m='0 0.7rem'
        />
        <input
          type="text"
          value={text}
          placeholder="Message..."
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        {text ? 
          <Button p='0.7rem 0' size='xs' colorScheme="none" color='blue.300' _hover={{ color: "white", fontWeight: '600' }} onClick={handleSend}><Text fontSize='0.9rem'>Send</Text></Button> 
          :
          <div className="send">
            <Icon as={FiMic} fontSize='1.4rem' cursor='pointer' />
            <Icon as={TbPhoto} onClick={() => { inputRef.current.click() }} fontSize='1.7rem' cursor='pointer' />
            <input type="file" ref={inputRef} hidden onChange={handleChange} id="fileimg" />
            <Icon as={AiOutlineHeart} fontSize="1.7rem" cursor="pointer" />
          </div>
        }
      </div>
    </div>
  );
}

export default Input;

