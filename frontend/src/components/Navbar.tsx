import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Flex bgColor="black" color="white" h="5rem" alignItems="center">
      <Container maxW="5xl">
        <Flex>
          <Flex gap="0.5rem">
            <ChatIcon boxSize={30} />
            <Text fontSize="xl" fontWeight="bold">
              Easy Blog
            </Text>
          </Flex>

          <Spacer />

          <Flex gap="30px">
            <Button colorScheme="pink" variant="link">
              Sign in
            </Button>
            <Button colorScheme="pink">Sign up</Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Navbar;
