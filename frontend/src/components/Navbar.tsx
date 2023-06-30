import { Button, Container, Flex, Spacer, Text } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Flex bgColor="black" color="white" h="4.5rem" alignItems="center" mb={14}>
      <Container maxW="5xl">
        <Flex>
          <Flex gap="0.5rem" alignItems="center">
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
