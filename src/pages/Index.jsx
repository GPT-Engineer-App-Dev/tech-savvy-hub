import { Box, Button, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Header />
      <Box bg="gray.50" py={20}>
        <Container maxW="container.lg">
          <Stack direction={["column", "row"]} spacing={8} align="center">
            <Box flex={1}>
              <Heading as="h1" size="2xl" mb={4}>
                Find Top Software Talent on Particles
              </Heading>
              <Text fontSize="xl" mb={8}>
                Particles is the leading marketplace for finding pre-vetted software developers specializing in web technologies like React, Node, .NET, Go, and JavaScript.
              </Text>
              <Button colorScheme="blue" size="lg" rightIcon={<FaArrowRight />}>
                View Developers
              </Button>
            </Box>
            <Box flex={1}>
              <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlcnMlMjB3b3JraW5nfGVufDB8fHx8MTcxMzA0ODY0Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Software developers" rounded="md" shadow="md" />
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box py={20}>
        <Container maxW="container.lg">
          <Heading as="h2" size="xl" mb={12} textAlign="center">
            Why Hire on Particles?
          </Heading>
          <Stack direction={["column", "row"]} spacing={12}>
            <Box>
              <Box color="green.500" mb={2}>
                <FaCheckCircle size="2em" />
              </Box>
              <Heading as="h3" size="lg" mb={4}>
                Pre-Vetted Talent
              </Heading>
              <Text fontSize="lg">Every developer on Particles is pre-screened for technical skills and professionalism. Only the top talent is accepted.</Text>
            </Box>
            <Box>
              <Box color="green.500" mb={2}>
                <FaCheckCircle size="2em" />
              </Box>
              <Heading as="h3" size="lg" mb={4}>
                Wide Range of Skills
              </Heading>
              <Text fontSize="lg">From front-end frameworks to back-end languages, find experts in React, Node, .NET, Go, JavaScript and more.</Text>
            </Box>
            <Box>
              <Box color="green.500" mb={2}>
                <FaCheckCircle size="2em" />
              </Box>
              <Heading as="h3" size="lg" mb={4}>
                Easy Communication
              </Heading>
              <Text fontSize="lg">Built-in chat, video calling, and file sharing make it easy to communicate with your hired developers.</Text>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
