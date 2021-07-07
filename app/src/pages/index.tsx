import { Container, Box } from "@chakra-ui/layout";
import { withUrqlClient } from "next-urql";
import { NavBar } from "../components/NavBar";
import { useTodosQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  const [{ data }] = useTodosQuery();
  return (
    <>
      <NavBar />
      <Container centerContent>
        <Box fontWeight="semibold" p={16}>
          Hello World
        </Box>
        {!data
          ? null
          : data.todos.map((todo) => (
              <div key={todo.id}>{todo.description}</div>
            ))}
      </Container>
    </>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
