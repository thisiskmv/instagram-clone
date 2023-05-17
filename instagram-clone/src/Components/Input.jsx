import React, { useContext, useRef, useState } from 'react';
import { TbPhoto } from 'react-icons/tb';
import { FiHeart } from 'react-icons/fi';
import { GrEmoji } from 'react-icons/gr';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { v4 as uuid } from "uuid"
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '../firebase/firebase';
function Input(props) {
  const [text, setText] = useState("")
  const [img, setImg] = useState(null)
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const fileInputRef = useRef(null);

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
  };

  const handleSend = async () => {

    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img)
      uploadTask.on(

        (error) => {
          //   setError(true)
          console.log(error)
        },
        () => {

          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL
              }),
            })
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
      })
    }
    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text
      },
      [data.chatId + ".date"]: serverTimestamp()
    })
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text
      },
      [data.chatId + ".date"]: serverTimestamp()
    })
    setText("")
    setImg(null)
  }
  return (
    <div className="inputdiv">
      <div className='input'>
        <GrEmoji style={{ fontSize: "2rem", cursor: "pointer", paddingRight: "1rem" }} />
        <input type="text" value={text} placeholder='Message...' onChange={(e) => { setText(e.target.value) }} />
        <div className="send">

          <TbPhoto onClick={handleFileButtonClick} style={{ fontSize: "2rem", cursor: "pointer" }} />
          <input type="file" ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange} id='fileimg' />
          <FiHeart style={{ fontSize: "1.8rem", cursor: "pointer" }} />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Input;

{/* <button onClick={handleFileButtonClick}>Select File</button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      /> */}