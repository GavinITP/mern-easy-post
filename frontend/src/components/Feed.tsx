import { useEffect, useState } from "react";

import { Flex, Text } from "@chakra-ui/react";
import BlogCard from "./BlogCard";

export interface BlogType {
  _id: string;
  title: string;
  description: string;
  createdAt: string;
}

const Feed = () => {
  const [blogs, setBlogs] = useState<BlogType[] | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(
        "https://gavinitp-mern-easy-post.onrender.com/api/blogs/"
      );
      const json = await res.json();

      if (res.ok) setBlogs(json);
    };

    fetchBlogs();
  });

  return (
    <Flex gap={6} direction="column">
      {blogs?.map(({ _id, title, description, createdAt }) => (
        <BlogCard
          _id={_id}
          title={title}
          description={description}
          createdAt={createdAt}
        />
      )) || <Text>No Post</Text>}
    </Flex>
  );
};

export default Feed;
