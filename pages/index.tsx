/* eslint-disable react/jsx-key */
import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} alignContent="center">
        Hello, I&apos;m a developer based in Ontario Canada.
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            James Harrison
          </Heading>
          <p>Software Developer</p>
        </Box>
      </Box>
    </Container>
  );
};
export default Page;
