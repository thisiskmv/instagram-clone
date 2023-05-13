import React, { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { Box } from "@chakra-ui/react";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase";

function Messages(props) {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages);

  return (
    <Box
      bg="transparent"
      p="0.8rem"
      height="calc(100% - 10.1rem)"
      overflow="scroll"
      overflowX="hidden"
    >
      {messages.map((elm) => {
        return <Message messages={elm} key={elm.id} />;
      })}
    </Box>
  );
}

export default Messages;
