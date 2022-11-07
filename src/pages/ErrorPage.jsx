import { ArrowBackIcon, NotAllowedIcon } from '@chakra-ui/icons';
import { Button, Center, Text } from '@chakra-ui/react';
import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <Center flexDir="column" h="70vh">
      <NotAllowedIcon w={100} h={100} color="red.500" />
      <Text fontSize={20} mt={30} fontFamily="monospace" textAlign="center">
        Sorry, an unexpected error has occured
      </Text>
      <Text mt={6} fontSize={20} fontFamily="monospace">
        {error.statusText || error.message}
      </Text>
      <Button mt={6} onClick={() => navigate(-1)} leftIcon={<ArrowBackIcon />}>
        return
      </Button>
    </Center>
  );
}

export default ErrorPage;
