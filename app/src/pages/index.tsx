import { Container, Box } from "@chakra-ui/layout";
import { NavBar } from "../components/NavBar";

const Index = () => {
  return (
    <>
      <NavBar />
      <Container centerContent>
        <Box fontWeight="semibold" p={16}>
          Hello World
        </Box>
      </Container>
    </>
  );
};

export default Index;
