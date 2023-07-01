import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newBlog = { title, description };

    const res = await fetch(
      "https://gavinitp-mern-easy-post.onrender.com/api/blogs/",
      {
        method: "POST",
        body: JSON.stringify(newBlog),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(res);
  };

  return (
    <Box bgColor="white" boxShadow="base" rounded="md" px={10} py={8}>
      <Heading size="lg" mb={5}>
        New blog
      </Heading>

      <FormControl>
        <FormLabel>Blog Title</FormLabel>
        <Input
          type="text"
          placeholder="Blog title..."
          mb={5}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />

        <FormLabel>Description</FormLabel>
        <Textarea
          placeholder="Blog Description..."
          mb={10}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setDescription(e.target.value);
          }}
        />

        <Button onClick={handleSubmit} colorScheme="pink" mx="auto">
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default Form;
