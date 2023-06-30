import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";

const Form = () => {
  return (
    <Box bgColor="white" boxShadow="base" rounded="md" px={10} py={8}>
      <Heading size="lg" mb={5}>
        New blog
      </Heading>

      <FormControl>
        <FormLabel>Blog Title</FormLabel>
        <Input type="email" placeholder="Blog title..." mb={5} />

        <FormLabel>Description</FormLabel>
        <Textarea placeholder="Blog Description..." mb={10} />

        <Button colorScheme="pink" mx="auto">
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default Form;
