import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Form from "./components/Form";

const App = () => {
  return (
    <Box minH="100vh" bgColor="gray.50">
      <Navbar />
      <Container maxW="5xl">
        <Grid templateColumns={{ base: "100%", lg: "65% 35%" }} gap={10}>
          <GridItem order={{ base: "1", lg: "0" }}>
            <Feed />
          </GridItem>

          <GridItem>
            <Form />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
