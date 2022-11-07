import React, { useRef } from 'react';
import {
  Input,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Divider,
  HStack,
  Image,
  Text,
  VStack,
  Container,
  Tag,
  Drawer,
  useDisclosure,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Flex,
  Avatar,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import { DragHandleIcon, HamburgerIcon, StarIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from './features/user';

const StarRating = () => {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => (
          <StarIcon key={i} color={i < 4 ? 'yellow.400' : 'gray.300'} />
        ))}
      <Box as="span" ml="1" color="yellow.400" fontSize="sm">
        7.5
      </Box>
    </Box>
  );
};

const FilmCards = ({ src, title, onClick }) => {
  const arr = new Array(20).fill();
  return (
    <Box w="92vw" overflowX="scroll" className="filmcards">
      <HStack spacing="14px">
        {arr.map((i, idx) => (
          <Box key={idx} minW="100px" onClick={onClick}>
            <Image src={src} objectFit="cover" w="100px" h="150px" />
            <Text mt="1" fontSize="sm" noOfLines={1}>
              {title}
            </Text>
            <StarRating />
          </Box>
        ))}
      </HStack>
    </Box>
  );
};

const FilmList = ({ onClick }) => {
  const arr = new Array(30).fill();
  return (
    <VStack spacing="20px" divider={<Divider />} mt="6">
      {arr.map((i, idx) => (
        <Box
          key={idx}
          display="flex"
          px="6"
          alignItems="center"
          onClick={onClick}
        >
          <Image
            src="https://tse4-mm.cn.bing.net/th/id/OIP-C.z9BuRjJyDNderuU-72fh6wHaK7?pid=PersonalBing&rs=1"
            borderRadius="2xl"
            h="140px"
            w="90px"
          />
          <Container maxW="container.lg">
            <Text fontSize="xl">Matrix (1998)</Text>
            <StarRating />
            <Text noOfLines={2} mt="2">
              1998/some actors/some directors/blah blah blah/some film factory
            </Text>
            <Tag mt="2" size="lg">
              you might like it
            </Tag>
          </Container>
        </Box>
      ))}
    </VStack>
  );
};

export function SearchBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const naviagte = useNavigate();
  const user = useSelector(state => state.user);
  const {
    isOpen: isLogoutOpen,
    onOpen: onOpenLogout,
    onClose: onCloseLogout,
  } = useDisclosure();
  const cancelRef = useRef();
  const dispatch = useDispatch();
  const onExit = () => {
    dispatch(clearUser());
    onCloseLogout();
  };
  return (
    <Box
      zIndex="99"
      padding="4"
      position="fixed"
      shadow="md"
      w="100%"
      bgColor="white"
      display="flex"
    >
      <Button variant="outline" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Divider orientation="vertical" w="2" />
      <Input placeholder="Search movies by name" size="md" type="search" />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader
            onClick={() => {
              naviagte('/login');
            }}
          >
            <Flex alignItems="center">
              <Avatar />
              <Text mx="2">{user?.account ?? 'Login'}</Text>
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Button
              onClick={() => {
                naviagte('/');
                onClose();
              }}
              variant="link"
              leftIcon={<DragHandleIcon />}
            >
              Home
            </Button>
          </DrawerBody>
          <DrawerFooter>
            {user?.account && (
              <Button
                colorScheme="purple"
                mr={3}
                onClick={() => {
                  onClose();
                  onOpenLogout();
                }}
              >
                Exit
              </Button>
            )}
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <AlertDialog
        leastDestructiveRef={cancelRef}
        onClose={onCloseLogout}
        isOpen={isLogoutOpen}
        blockScrollOnMount={false}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Are you wanna logout?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>you need to login again next time</AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onCloseLogout}>
                No
              </Button>
              <Button colorScheme="purple" ml={3} onClick={onExit}>
                Yes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}

function App() {
  const navigate = useNavigate();

  const onOpenMovie = () => {
    navigate('/movies');
  };

  return (
    <Box>
      <SearchBar />
      <Box py="80px" bgColor="white">
        <Tabs variant="unstyled">
          <TabList>
            <Tab
              _selected={{ color: 'gray.900' }}
              color="gray.400"
              fontSize="md"
            >
              Cinima Hot
            </Tab>
            <Divider orientation="vertical" h="8" alignSelf="center" />
            <Tab
              _selected={{ color: 'gray.900' }}
              color="gray.400"
              fontSize="md"
            >
              App hot
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <FilmCards
                title="Matrix: Revolution"
                src="https://tse4-mm.cn.bing.net/th/id/OIP-C.z9BuRjJyDNderuU-72fh6wHaK7?pid=PersonalBing&rs=1"
                onClick={onOpenMovie}
              />
            </TabPanel>
            <TabPanel>
              <FilmCards
                title="Matrix"
                src="https://tse4-mm.cn.bing.net/th/id/OIP-C.L-BlLPvjY6VUlKwWOa-c4gHaLH?pid=PersonalBing&rs=1"
                onClick={onOpenMovie}
              />
            </TabPanel>
          </TabPanels>
        </Tabs>
        <FilmList onClick={onOpenMovie} />
      </Box>
    </Box>
  );
}

export default App;
