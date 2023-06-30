import { Container, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <Navbar />
      <Container maxW="5xl">
        <Grid templateColumns="repeat(6, 1fr)" columnGap="10">
          <GridItem colSpan={4}>
            <Feed />
          </GridItem>

          <GridItem colSpan={2}>
            <Form />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default App;
