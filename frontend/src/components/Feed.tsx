import { Flex } from "@chakra-ui/react";
import BlogCard from "./BlogCard";

const Feed = () => {
  return (
    <Flex gap={6} direction="column">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </Flex>
  );
};

export default Feed;
