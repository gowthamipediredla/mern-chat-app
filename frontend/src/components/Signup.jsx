import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  VStack,
  InputGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordShow = () => setShowPassword(!showPassword);
  const submitHandler = () => {};
  return (
    <VStack>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="Enter password"
            onChange={(e) => setName(e.target.value)}
            type={showPassword ? "text" : "password"}
          />
          <InputRightElement>
            <Button onClick={handlePasswordShow} px={30}>
              {showPassword ? "hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup>
          <Input
            placeholder="confirm password"
            onChange={(e) => setName(e.target.value)}
            type={showPassword ? "text" : "password"}
          />
          <InputRightElement size="sm">
            <Button onClick={handlePasswordShow} px={30}>
              {showPassword ? "hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Upload your picture</FormLabel>
        <Input
          placeholder="confirm password"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl>
        <Input
          type="file"
          accept="image/*"
          onChange={(e) => postDetails(e.target.files[0])}
          p="1.5"
        />
      </FormControl>
      <Button colorScheme="blue" width="100%" onClick={submitHandler}>
        Sign Up
      </Button>
    </VStack>
  );
};

export default Signup;
