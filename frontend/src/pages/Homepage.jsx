import React from "react";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Homepage = () => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        bg="white"
        padding={3}
        borderRadius={3}
        margin="40px 0 15px 0"
        w="100%"
      >
        <Text fontSize="xl" fontWeight="bold">
          Talk-A-tive
        </Text>
      </Box>
      <Box bg="white " w="100%" padding={3} borderRadius={3}>
        <Tabs variant="soft-rounded" isFitted defaultIndex={0}>
          <TabList>
            <Tab>Login</Tab>
            <Tab>Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
