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
          <Heading size="lg" color="pink.500">
            title
          </Heading>

          <Spacer />

          <IconButton aria-label="Search database" icon={<DeleteIcon />} />
        </Flex>
      </CardHeader>

      <CardBody>
        <Text>description</Text>
        <Text>Timestamps</Text>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
