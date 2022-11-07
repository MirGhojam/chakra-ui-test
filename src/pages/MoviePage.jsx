import { BellIcon, StarIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { SearchBar } from '../App';

const Stars = () => {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => (
          <StarIcon
            fontSize="xs"
            key={i}
            color={i < 4 ? 'yellow.400' : 'gray.300'}
          />
        ))}
    </Box>
  );
};

function MoviePage() {
  const commentArray = new Array(5).fill();
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Box>
      <SearchBar />
      <Box pt={20} bgColor="green.200">
        <Flex alignItems="center" py={4}>
          <Image
            src="https://tse4-mm.cn.bing.net/th/id/OIP-C.z9BuRjJyDNderuU-72fh6wHaK7?pid=PersonalBing&rs=1"
            w={100}
            h={160}
            objectFit="cover"
            borderRadius="md"
            mx={2}
          />
          <VStack alignItems="flex-start">
            <Text fontSize="2xl">Matrix: Revolution</Text>
            <Text>Matrix: Revolution (2006)</Text>
            <Text noOfLines={2}>
              some country/some genre/some date/some date
            </Text>
            <HStack>
              <Button colorScheme="green" size="sm">
                Wan'na watch
              </Button>
              <Button size="sm">Watched already</Button>
            </HStack>
          </VStack>
        </Flex>
      </Box>
      <Container maxW="container.lg">
        <Text fontSize="lg" my={4} color="gray.400">
          Introduction
        </Text>
        <Collapse startingHeight={80} in={show}>
          something happend to someone, something happend to someone, something
          happend to someone, something happend to someone something happend to
          someone, something happend to someone, something happend to someone,
          something happend to someone, something happend to someone, something
          happend to someone something happend to someone, something happend to
          someone, something happend to someone, something happend to someone,
          something happend to someone, something happend to someone something
          happend to someone, something happend to someone,
        </Collapse>
        <Button size="sm" onClick={handleToggle} mt="1rem">
          Show {show ? 'Less' : 'More'}
        </Button>
      </Container>
      <Divider h={2} />
      <VStack divider={<Divider />} mt={6}>
        {commentArray.map((i, idx) => (
          <Box key={idx} w="100%">
            <Flex align="center" mx={4}>
              <Avatar size="xs" />
              <Text mx={2} color="gray.500">
                John Doe
              </Text>
              <Stars />
              <Text mx={2} fontSize="xs" color="gray.300">
                2022-09-30 22:30:15
              </Text>
            </Flex>
            <Container maxW="container.lg">
              <Text textAlign="justify" mx={8} my={3}>
                this movie is good blah blah blah this movie is good blah blah
                blah this movie is good blah blah blah this movie is good blah
                blah blah this movie is good blah blah blah
              </Text>
              <Flex align="center" mx={8}>
                <BellIcon fontSize={18} color="gray.400" />
                <Text color="gray.400">58865</Text>
              </Flex>
            </Container>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default MoviePage;
