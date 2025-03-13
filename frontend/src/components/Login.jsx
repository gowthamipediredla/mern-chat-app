import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <VStack>
      <FormControl>
        <FormLabel id="email">Email</FormLabel>
        <Input
          value={email}
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <InputRightElement size="sm" h="100%">
            <Button
              px={30}
              py={1}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button colorScheme="blue" width="100%">
        Login
      </Button>
      <Button
        colorScheme="red"
        width="100%"
        variant="solid"
        onClick={() => {
          setEmail("guest@guest.com");
          setPassword(123456);
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Login;
