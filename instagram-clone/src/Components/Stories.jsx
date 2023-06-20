import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Stories = () => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
  };

  const state = [
    { id: 1, image: "https://i.pinimg.com/originals/bc/27/13/bc2713a369730a7e1088e3d5d7618488.jpg", name: "patrick_b" },
    { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQ7-nzOpp0eX_gV-iedSJXGIV_DkaEAHOzmxAjzTKkA&usqp=CAU&ec=48600113", name: "t_shelby" },
    { id: 3, image: "https://www.transparentpng.com/thumb/tom-and-jerry/tom-cartoon-bros-images-16.png", name: "tom" },
    { id: 4, image: "https://pbs.twimg.com/profile_images/1372861551078735876/45Tnl6P-_400x400.jpg", name: "radhey_bhaiya" },
    { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5JKfDXPJ5ss0CFmDbhZFUSX3V3-gM5VZvbCthBkePw&usqp=CAU&ec=48600113", name: "thomas321" },
    { id: 6, image: "https://pbs.twimg.com/profile_images/1372861551078735876/45Tnl6P-_400x400.jpg", name: "radhey_bhaiya" },
    { id: 7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5JKfDXPJ5ss0CFmDbhZFUSX3V3-gM5VZvbCthBkePw&usqp=CAU&ec=48600113", name: "thomas321" },
    { id: 8, image: "https://pbs.twimg.com/profile_images/1372861551078735876/45Tnl6P-_400x400.jpg", name: "radhey_bhaiya" },
    { id: 9, image: "https://i.pinimg.com/originals/bc/27/13/bc2713a369730a7e1088e3d5d7618488.jpg", name: "patrick_b" },
    { id: 10, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQ7-nzOpp0eX_gV-iedSJXGIV_DkaEAHOzmxAjzTKkA&usqp=CAU&ec=48600113", name: "t_shelby" },
    { id: 11, image: "https://www.transparentpng.com/thumb/tom-and-jerry/tom-cartoon-bros-images-16.png", name: "tom" },
    { id: 12, image: "https://pbs.twimg.com/profile_images/1372861551078735876/45Tnl6P-_400x400.jpg", name: "radhey_bhaiya" },
    { id: 13, image: "https://i.pinimg.com/originals/bc/27/13/bc2713a369730a7e1088e3d5d7618488.jpg", name: "patrick_b" },
    { id: 14, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQ7-nzOpp0eX_gV-iedSJXGIV_DkaEAHOzmxAjzTKkA&usqp=CAU&ec=48600113", name: "t_shelby" },
    { id: 15, image: "https://www.transparentpng.com/thumb/tom-and-jerry/tom-cartoon-bros-images-16.png", name: "tom" },
    { id: 16, image: "https://pbs.twimg.com/profile_images/1372861551078735876/45Tnl6P-_400x400.jpg", name: "radhey_bhaiya" },
  ];
  return (
    <Box className="stories" p='0.9rem 1.5rem' w='95%' m='auto' mt='2rem' overflow='hidden'>
      <Slider {...settings}>
        {state.map((user) => (
           <Box className="stories__info" key={user.id} w='70%' cursor='pointer'>
    
           <VStack spacing={1}>
             <Box width='66px' height='66px' borderRadius='50%' overflow='hidden' p='2px' bg='linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)'>
               <Image src={user.image} alt="user" w='100%' h='100%' borderRadius='50%' overflow='hidden' p='2px' objectFit='cover' bg="black" />
             </Box>
             <Text className="stories__name" color='white' fontSize='0.7rem' mt='0.2rem'>{user.name}</Text>
           </VStack>

         </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Stories;



// import {Box,Flex,Image} from '@chakra-ui/react'
// import React from "react";

// const Stories = () => {
//   const state = [
//     { id: 1, image: "https://i.pinimg.com/originals/bc/27/13/bc2713a369730a7e1088e3d5d7618488.jpg", name: "patrick_b" },
//     { id: 2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrQ7-nzOpp0eX_gV-iedSJXGIV_DkaEAHOzmxAjzTKkA&usqp=CAU&ec=48600113", name: "t_shelby" },
//     { id: 3, image: "https://www.transparentpng.com/thumb/tom-and-jerry/tom-cartoon-bros-images-16.png", name: "tom" },
//     { id: 4, image: "https://pbs.twimg.com/profile_images/1372861551078735876/45Tnl6P-_400x400.jpg", name: "radhey_bhaiya" },
//     { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5JKfDXPJ5ss0CFmDbhZFUSX3V3-gM5VZvbCthBkePw&usqp=CAU&ec=48600113", name: "thomas321" },
//     { id: 4, image: "https://pbs.twimg.com/profile_images/1372861551078735876/45Tnl6P-_400x400.jpg", name: "radhey_bhaiya" },
//     { id: 5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY5JKfDXPJ5ss0CFmDbhZFUSX3V3-gM5VZvbCthBkePw&usqp=CAU&ec=48600113", name: "thomas321" },
//     { id: 4, image: "https://pbs.twimg.com/profile_images/1372861551078735876/45Tnl6P-_400x400.jpg", name: "radhey_bhaiya" },
//   ];
//   return (
//     <Flex className="stories" bg='var(--white)' p='0.9rem 0.6rem' w='100%' ml='1.8rem' mt='1.8rem' overflow='hidden'>
//       {state.map((user) => (
//         <Flex className="stories__info" key={user.id} flexDirection='column' alignItems='center' m='0 6px' cursor='pointer'>
//           <Box className="stories__img" width='66px' height='66px' borderRadius='50%' overflow='hidden' border='2px solid #f83a63' p='3px'>
//             <Box as='span' display='block' w='100%' h='100%' borderRadius='50%' overflow='hidden'>
//               <Image src={user.image} alt="user" w='100%' h='100%' objectFit='cover' />
//             </Box>
//           </Box>
//           <Box className="stories__name" fontSize='0.7rem' mt='0.4rem'>{user.name}</Box>
//         </Flex>
//       ))}
//     </Flex>
//   );
// };

// export default Stories;

