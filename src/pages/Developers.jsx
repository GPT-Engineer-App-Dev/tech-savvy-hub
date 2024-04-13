import { Box, Button, Container, Heading, HStack, Tag, Text, VStack } from "@chakra-ui/react";

const developers = [
  {
    name: "John D.",
    location: "San Francisco, CA",
    specialties: ["React", "Node.js", "JavaScript"],
  },
  {
    name: "Sarah K.",
    location: "New York, NY",
    specialties: ["Angular", "TypeScript", ".NET"],
  },
  {
    name: "Michael R.",
    location: "Chicago, IL",
    specialties: ["Vue.js", "Go", "GraphQL"],
  },
  {
    name: "Jessica T.",
    location: "Austin, TX",
    specialties: ["React", "Node.js", "TypeScript"],
  },
  {
    name: "David W.",
    location: "Seattle, WA",
    specialties: [".NET", "C#", "Angular"],
  },
  {
    name: "Emily H.",
    location: "Boston, MA",
    specialties: ["JavaScript", "React", "GraphQL"],
  },
  {
    name: "Daniel S.",
    location: "Los Angeles, CA",
    specialties: ["Go", "Node.js", "React"],
  },
  {
    name: "Olivia P.",
    location: "Portland, OR",
    specialties: ["TypeScript", "Vue.js", "Node.js"],
  },
  {
    name: "James L.",
    location: "Denver, CO",
    specialties: ["Angular", "TypeScript", ".NET"],
  },
  {
    name: "Sophia R.",
    location: "Atlanta, GA",
    specialties: ["JavaScript", "React", "Node.js"],
  },
];

const Developers = () => {
  return (
    <Box py={10}>
      <Container maxW="container.lg">
        <Heading size="xl" mb={8}>
          Available Developers
        </Heading>
        <VStack spacing={4} align="stretch">
          {developers.map((dev, index) => (
            <Box key={index} bg="gray.100" p={4} rounded="md">
              <Heading size="md">{dev.name}</Heading>
              <Text>{dev.location}</Text>
              <HStack spacing={2} mt={2}>
                {dev.specialties.map((spec, index) => (
                  <Tag key={index} size="md" variant="subtle" colorScheme="blue">
                    {spec}
                  </Tag>
                ))}
              </HStack>
              <Button mt={4} colorScheme="blue">
                Message
              </Button>
            </Box>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Developers;
