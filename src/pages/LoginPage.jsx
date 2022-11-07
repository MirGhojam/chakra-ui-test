import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/user';

function LoginPage() {
  const navigate = useNavigate();
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleAccount = e => setAccount(e.target.value);
  const handlePassword = e => setPassword(e.target.value);
  const handleSubmit = () => {
    if (account.trim().length > 0 && password.trim().length > 0) {
      dispatch(
        setUser({
          account,
          password,
        })
      );
      navigate('/');
    }
  };

  return (
    <Box>
      <Box
        zIndex="99"
        padding="2"
        position="fixed"
        shadow="md"
        w="100%"
        bgColor="white"
        display="flex"
      >
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          color="black"
          leftIcon={<ArrowBackIcon />}
        >
          back
        </Button>
      </Box>
      <Center pt="100px">
        <Stack spacing={6}>
          <FormControl isRequired isInvalid={account?.trim() === ''}>
            <FormLabel>Account</FormLabel>
            <Input size="lg" value={account} onChange={handleAccount} />
            <FormErrorMessage>Account cannot be empty</FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={password?.trim() === ''}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePassword}
            />
            <FormErrorMessage>Password cannot be empty</FormErrorMessage>
          </FormControl>
          <Button onClick={handleSubmit} colorScheme="purple">
            Submit
          </Button>
        </Stack>
      </Center>
    </Box>
  );
}

export default LoginPage;
