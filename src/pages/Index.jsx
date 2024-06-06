import { Container, VStack } from "@chakra-ui/react";
import MetricsDashboard from "../components/MetricsDashboard";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <MetricsDashboard />
      </VStack>
    </Container>
  );
};

export default Index;