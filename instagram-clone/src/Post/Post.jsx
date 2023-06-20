import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Spacer,
  AspectRatio,
  Image,
  Input,
  Heading,
  Button,
  ModalContent,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Center,
} from "@chakra-ui/react";
import { BsThreeDots, BsBookmark } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { RiChat3Line } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import { db } from "../firebase/firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  deleteDoc,
  doc,
  serverTimestamp,
  addDoc,
  setDoc,
} from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import CommentsModal from "../Components/CommentsModal";

function Post({ post, postId, isLoading }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentUser } = useContext(AuthContext);
  const [newComment, setnewComment] = useState("");
  const [showComments, setShowComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState([]);
  const [isCommentModalOpen, setCommentModalOpen] = useState(false);

  const toggleCommentModal = () => {
    setCommentModalOpen(!isCommentModalOpen);
  };

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", postId, "likes"), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [postId]
  );

  // console.log(likes)

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === currentUser.uid) !== -1
      ),
    [likes, currentUser.uid]
  );

  const deletePost = (id) => {
    deleteDoc(doc(db, "posts", id));
    // console.log(id)
  };

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", postId, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setShowComments(snapshot.docs);
      }
    );
  }, [postId]);

  const likePost = async (id) => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", currentUser.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", currentUser.uid), {
        username: currentUser?.displayName,
      });
    }
  };

  // console.log("likes",likes.length)

  const postComment = async (id) => {
    if (newComment !== "") {
      await addDoc(collection(db, "posts", id, "comments"), {
        username: currentUser.displayName,
        profilePhoto: currentUser.photoURL,
        comment: newComment,
        timestamp: serverTimestamp(),
      });
    }

    setnewComment("");
  };

  console.log("sec", showComments);

  console.log(isLoading);

  return (
    <>
      <Box
        w="63%"
        m="auto"
        p="1rem 0"
        borderBottom="0.1px solid rgb(54,54,54)"
        key={post.post.id}
      >
        <Flex p="0.7rem 0.3rem">
          <Flex flex="1" gap="3" alignItems="center" flexWrap="wrap">
            <Avatar src={post.post.photoURL} size="sm" name="woman" />
            <Box>
              <Heading size="xs">{post.post.username}</Heading>
              <Text fontSize="xs">New Delhi</Text>
            </Box>
          </Flex>
          <Spacer />

          <Flex align="center">
            <Popover>
              <PopoverTrigger>
                {post.post.userId === currentUser.uid ? (
                  <Button
                    bg="black"
                    colorScheme="black"
                    _hover={{ color: "black" }}
                    p="0"
                  >
                 
                    <Icon
                      color="white"
                      as={BsThreeDots}
                      boxSize={5}
                      cursor="pointer"
                    />
                  </Button>
                ) : (
                  <Button
                    
                    bg="black"
                    colorScheme="black"
                    _hover={{ color: "black" }}
                    isDisabled={true}
                    p="0"
                  >
                   
                    <Icon
                      color="gray"
                      as={BsThreeDots}
                      boxSize={5}
                      cursor="pointer"
                    />
                  </Button>
                )}
              </PopoverTrigger>
              <PopoverContent w="12rem" bg="rgb(34,34,34)" border={"none"}>
                <PopoverBody textAlign="center" color="white" fontWeight={500}>
                <Text fontSize={"1.2em"}>Delete Post?</Text>
                  <Text fontSize={"0.8rem"} color="gray">Are you sure you want to Delete this post?</Text>
                </PopoverBody>
                {post.post.userId === currentUser.uid && (
                  <Button
                  m="0.6rem"
                    onClick={() => {
                      deletePost(postId);
                    }}
                    color="black"
                    _hover={{ bg: "red", color: "white" }}
                  >
                    Delete
                  </Button>
                )}
              </PopoverContent>
            </Popover>
          </Flex>
        </Flex>
        <AspectRatio ratio={3 / 3.8}>
          <Image
            loading="lazy"
            src={post.post.imageUrl}
            w="100px"
            borderRadius="5px"
            objectFit="cover"
          />
        </AspectRatio>

        <Flex p="0.7rem 0rem 0rem 0rem">
          <Box>
            {hasLiked ? (
              <Icon
                as={AiFillHeart}
                boxSize={7}
                color="#f56565"
                cursor="pointer"
                onClick={() => {
                  likePost(postId);
                }}
              />
            ) : (
              <Icon
                as={AiOutlineHeart}
                boxSize={7}
                cursor="pointer"
                onClick={() => {
                  likePost(postId);
                }}
              />
            )}

            <Icon
              as={RiChat3Line}
              cursor="pointer"
              boxSize="1.7rem"
              m="0 0.9rem"
              onClick={toggleCommentModal}
            />

            <Icon as={FiSend} cursor="pointer" boxSize={6} />
          </Box>
          <Spacer />
          <Box>
            <Icon as={BsBookmark} cursor="pointer" boxSize={6} />
          </Box>
        </Flex>
        <Box>
          <Text fontSize="sm" ml="0.2rem">
            {likes.length} likes
          </Text>
        </Box>

        <Flex>
          <Text fontSize="sm" ml="0.2rem">
            <b>{post.post.username}</b>
          </Text>
          <Text fontSize="sm" ml="0.5rem">
            {post.post.caption}
          </Text>
        </Flex>

        <Box>
          <Text fontSize="sm" fontWeight="200" ml="0.2rem">
            View all {showComments.length} comments
          </Text>
        </Box>

        <CommentsModal
          post={post.post}
          postId={postId}
          likes={likes}
          commentData={showComments}
          newComment={newComment}
          setnewComment={setnewComment}
          postComment={postComment}
          isOpen={isCommentModalOpen}
          onClose={toggleCommentModal}
        />
        <Box>
          {showComments.slice(0, 2).map((comment) => {
            return (
              <>
                <Text fontSize="xs" ml="0.2rem">
                  <b>{comment.data().username}</b> {comment.data().comment}
                </Text>
              </>
            );
          })}
        </Box>

        <Flex>
          <Input
            type="text"
            fontSize="sm"
            variant="unstyled"
            p="0.5rem"
            placeholder="Add a comment…"
            value={newComment}
            onChange={(e) => {
              setnewComment(e.target.value);
            }}
          />
          {newComment && (
            <Button
              fontSize="0.9rem"
              p="0"
              size="sm"
              colorScheme="none"
              color="blue.300"
              _hover={{ color: "white" }}
              onClick={() => {
                postComment(postId);
              }}
              disabled={!newComment}
            >
              Post
            </Button>
          )}
        </Flex>
      </Box>
    </>
  );
}

export default Post;
