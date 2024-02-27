import React from "react";
import { Box, Button, Container, Heading, Input, InputGroup, InputRightElement, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { FaSearch, FaTrophy } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box as="header" borderBottom="1px" borderColor="gray.200" pb={4} mb={4}>
        <Heading as="h1" size="lg" mb={2}>
          Triplealms Africa
        </Heading>
        <Text fontSize="lg" fontWeight="semibold">
          Contest and awards
        </Text>
        <Stack direction="row" spacing={4} mt={4}>
          <Button variant="link">Home</Button>
          <Button variant="link">Contest</Button>
          <Button variant="link">Privacy Policy</Button>
          <Button variant="link">Rules And Regulations</Button>
          <Button variant="link">Terms And Conditions</Button>
        </Stack>
      </Box>

      <VStack spacing={4} align="stretch" mb={8}>
        <Box>
          <Text fontSize="xl">Tripleams African concepts is the number 1. African promoter located in Nigeria.</Text>
          <Text fontSize="2xl" fontWeight="bold" mt={2}>
            Stand A Chance To Win ₦
          </Text>
        </Box>
        <Stack direction="row" spacing={4}>
          <Button colorScheme="blue" leftIcon={<FaTrophy />}>
            Enter Contest
          </Button>
          <Button variant="outline">SEE WINNING CONTESTANTS</Button>
        </Stack>
      </VStack>

      <InputGroup mb={8}>
        <Input placeholder="Search For Contestants" />
        <InputRightElement children={<FaSearch />} />
      </InputGroup>

      <Heading as="h2" size="md" mb={4}>
        Top Three Contestants
      </Heading>
      <SimpleGrid columns={3} spacing={10} mb={8}>
        {["Loveth Momodu", "Victoria Onochie", "Halima Ibrahim"].map((name) => (
          <VStack key={name} spacing={2}>
            <Text>{name}</Text>
            <Button variant="outline" size="sm">
              View Contestant
            </Button>
          </VStack>
        ))}
      </SimpleGrid>

      <Heading as="h2" size="md" mb={4}>
        New Contestants
      </Heading>
      <SimpleGrid columns={4} spacing={10} mb={8}>
        {["Chinedu Eze", "Imran Mubarak Kayode 2", "Elijah Luken", "Adesuwa Adeyemi"].map((name) => (
          <VStack key={name} spacing={2}>
            <Text>{name}</Text>
            <Button variant="outline" size="sm">
              View Contestant
            </Button>
          </VStack>
        ))}
      </SimpleGrid>

      <Box as="footer" borderTop="1px" borderColor="gray.200" pt={4}>
        <Text align="center">Contest and awards</Text>
        <Text align="center">All rights reserved</Text>
      </Box>
    </Container>
  );
};

export default Index;
