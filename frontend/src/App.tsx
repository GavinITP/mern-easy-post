import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Form from "./components/Form";

const App = () => {
  return (
    <Box bgColor="gray.50">
      <Navbar />
      <Container maxW="5xl">
        <Grid templateColumns="70% 30%" gap={10}>
          <GridItem>
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
