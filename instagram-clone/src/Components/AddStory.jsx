import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { CameraIcon } from "@heroicons/react/outline";
import {
  doc,
  updateDoc,
  collection,
  serverTimestamp,
  addDoc,
} from "firebase/firestore";

import { db, auth, storage } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import { useDispatch } from "react-redux";
import { SetAddStoryModal } from "../features/appSlice";
import Spinner from "react-spinkit";

function AddStory() {
  const [user] = useAuthState(auth);
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const modalContentRef = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!modalContentRef.current.contains(event.target)) {
        dispatch(
          SetAddStoryModal({
            addStoryIsOpen: false,
          })
        );
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const uploadStory = async () => {
    if (loading) return;
    setLoading(true);

    const storyRef = await addDoc(collection(db, "stories"), {
      userId: user.uid,
      username: user.displayName,
      profileImg: user.photoURL,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `stories/${storyRef.id}/image`);

    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "stories", storyRef.id), {
          image: downloadURL,
        });
      }
    );

    dispatch(
      SetAddStoryModal({
        addStoryIsOpen: false,
      })
    );
    setLoading(false);
    setSelectedFile(null);
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <AddPostWrapper>
      <ModalContentWrapper ref={modalContentRef}>
        <ContentContainer>
          {selectedFile ? (
            <img
              src={selectedFile}
              alt=""
              style={{
                objectFit: "contain",
                cursor: "pointer",
                maxHeight: 200,
                width: "100%",
                borderRadius: 5,
              }}
            />
          ) : (
            <CameraIcon
              onClick={() => filePickerRef.current.click()}
              style={{
                color: "#e53e3e",
                padding: 15,
                borderRadius: 9999,
                background: "#fed7d7",
                cursor: "pointer",
                height: 30,
              }}
            />
          )}

          {/* add photo */}
          <p
            style={{
              padding: 5,
              fontSize: 20,
              fontWeight: 800,
              color: "rgb(38 38 38)",
              textAlign: "center",
              border: 0,
            }}
          >
            Select a photo
          </p>
          {/* hidden Input */}
          <input
            ref={filePickerRef}
            type="file"
            hidden
            onChange={addImageToPost}
          />
          {/* FINAL SUBMIT BUTTON */}

          {loading ? (
            <Spinner
              name="ball-spin-fade-loader"
              color="purple"
              fadeIn="none"
            />
          ) : (
            <button
              type="submit"
              disabled={!selectedFile}
              onClick={uploadStory}
              className={selectedFile ? "selected" : "notSelected"}
            >
              POST
            </button>
          )}
        </ContentContainer>
      </ModalContentWrapper>
    </AddPostWrapper>
  );
}

export default AddStory;
const AddPostWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  z-index: 12;
`;
const ModalContentWrapper = styled.div`
  display: flex;
  margin: auto;
  background-color: #fff;
  width: 30%;
  height: 50vh;
  min-width: 300px;
  border-radius: 10px;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  > button {
    font-weight: 600;
    width: 60%;
    padding: 10px;
    cursor: pointer;
    margin-top: 5px;
    border: none;
    border-radius: 5px;
  }
`;