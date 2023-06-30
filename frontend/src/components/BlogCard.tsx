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

const BlogCard = () => {
  return (
    <Card>
      <CardHeader>
        <Flex>
          <Heading fontWeight="bold" size="lg" color="pink.500">
            Card title
          </Heading>

          <Spacer />

          <IconButton aria-label="Search database" icon={<DeleteIcon />} />
        </Flex>
      </CardHeader>

      <CardBody>
        <Text mb={5}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi fugiat
          dolores velit repellendus iure similique nesciunt quidem natus. Neque,
          perferendis.
        </Text>
        <Text color="gray.500">1 min. ago</Text>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
