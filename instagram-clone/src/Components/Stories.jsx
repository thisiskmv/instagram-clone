import {Box,Flex,Image} from '@chakra-ui/react'
import React from "react";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "https://i.pinimg.com/originals/bc/27/13/bc2713a369730a7e1088e3d5d7618488.jpg", name: "patrick_b" },
    { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQ7-nzOpp0eX_gV-iedSJXGIV_DkaEAHOzmxAjzTKkA&usqp=CAU&ec=48600113", name: "t_shelby" },
    { id: 3, image: "https://www.transparentpng.com/thumb/tom-and-jerry/tom-cartoon-bros-images-16.png", name: "tom" },
    { id: 4, image: "https://pbs.twimg.com/profile_images/1372861551078735876/45Tnl6P-_400x400.jpg", name: "radhey_bhaiya" },
    { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5JKfDXPJ5ss0CFmDbhZFUSX3V3-gM5VZvbCthBkePw&usqp=CAU&ec=48600113", name: "thomas321" },
    { id: 4, image: "https://pbs.twimg.com/profile_images/1372861551078735876/45Tnl6P-_400x400.jpg", name: "radhey_bhaiya" },
    { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5JKfDXPJ5ss0CFmDbhZFUSX3V3-gM5VZvbCthBkePw&usqp=CAU&ec=48600113", name: "thomas321" },
    { id: 4, image: "https://pbs.twimg.com/profile_images/1372861551078735876/45Tnl6P-_400x400.jpg", name: "radhey_bhaiya" },
  ]);
  return (
    <Flex className="stories" bg='var(--white)' p='0.9rem 0.6rem' w='100%' ml='1.8rem' mt='1.8rem' overflow='hidden'>
      {state.map((user) => (
        <Flex className="stories__info" key={user.id} flexDirection='column' alignItems='center' m='0 6px' cursor='pointer'>
          <Box className="stories__img" width='66px' height='66px' borderRadius='50%' overflow='hidden' border='2px solid #f83a63' p='3px'>
            <Box as='span' display='block' w='100%' h='100%' borderRadius='50%' overflow='hidden'>
              <Image src={user.image} alt="user" w='100%' h='100%' objectFit='cover' />
            </Box>
          </Box>
          <Box className="stories__name" fontSize='0.7rem' mt='0.4rem'>{user.name}</Box>
        </Flex>
      ))}
    </Flex>
  );
};

export default Stories;