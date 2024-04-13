import { Box, Container, Flex, Spacer, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Container maxW="container.lg">
        <Flex align="center">
          <Link as={RouterLink} to="/" fontWeight="bold" fontSize="xl">
            Particles
          </Link>
          <Spacer />
          <Link as={RouterLink} to="/developers" fontWeight="medium">
            Developers
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
