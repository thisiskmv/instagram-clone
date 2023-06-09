import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Stack,
  Avatar,
  Spacer,
} from "@chakra-ui/react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
function Message({ messages }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const [just, setJust] = useState(0);
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({
      behaviour: "smooth",
    });
  }, [messages]);
  console.log("meaashahe", messages);

  useEffect(() => {
    setInterval(() => {
      setJust((prev) => prev + 1);
    }, 60000);
  }, []);
  return (
    <div
      ref={ref}
      className={`message  ${
        messages.senderId === currentUser.uid && "owner"
      } `}
    >
      <div className="messageInfo">
        <Image
          src={
            messages.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt="profile"
        />
        {/* {console.log("time",messages.date.seconds)} */}
        {/* <Text as='span' fontSize='0.8rem' fontWeight='600'>{just === 0 ? "Just Now" : just + "m ago"}</Text> */}
      </div>
      <div className="messageContent">
        <p>{messages.text}</p>
        {messages.img && <img src={messages.img} alt="" />}
      </div>
    </div>

  );
}

export default Message;
