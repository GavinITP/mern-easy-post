import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";

import { BlogType } from "./Feed";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

const BlogCard = ({ _id, title, description, createdAt }: BlogType) => {
  const handleDelete = async (_id: string) => {
    const res = await fetch(
      "https://gavinitp-mern-easy-post.onrender.com/api/blogs/" + _id,
      {
        method: "DELETE",
      }
    );

    const json = await res.json();
    console.log(json);
  };

  return (
    <Card key={_id}>
      <CardHeader>
        <Flex>
          <Heading fontWeight="bold" size="md" color="pink.500">
            {title}
          </Heading>

          <Spacer />

          <IconButton
            aria-label="Search database"
            icon={<DeleteIcon />}
            onClick={() => {
              handleDelete(_id);
            }}
          />
        </Flex>
      </CardHeader>

      <CardBody>
        <Text mb={5}>{description}</Text>
        <Text color="gray.500">
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </Text>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
