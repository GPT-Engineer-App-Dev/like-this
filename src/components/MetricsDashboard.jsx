import React from 'react';
import { Box, Text, VStack, HStack, Stat, StatLabel, StatNumber, StatHelpText, StatGroup, Progress, Flex, Spacer } from "@chakra-ui/react";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['Apr 5', 'Apr 7', 'Apr 9', 'Apr 11', 'Apr 13', 'Apr 15', 'Apr 17', 'Apr 19', 'Apr 21', 'Apr 23', 'Apr 25', 'Apr 27', 'Apr 29', 'May 1', 'May 3'],
  datasets: [
    {
      label: 'Bytes stored',
      data: [37.25, 37.25, 37.25, 37.25, 37.25, 37.25, 37.25, 37.25, 37.25, 37.25, 37.25, 37.25, 37.25, 74.51, 93.82],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Billable metrics (per day)',
    },
  },
};

const MetricsDashboard = () => {
  return (
    <Box p={5} bg="gray.800" color="white" borderRadius="md" boxShadow="md">
      <Text fontSize="xl" mb={4}>Billable Metrics</Text>
      <Box bg="gray.700" p={4} borderRadius="md">
        <Text mb={2} fontSize="sm" color="gray.400">These metrics are estimates (updated every 24 hours) and are not an accurate reflection of your bill</Text>
        <StatGroup>
          <Stat>
            <StatLabel>Bytes stored</StatLabel>
            <StatNumber>93.82GB</StatNumber>
            <StatHelpText>Current</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Object count</StatLabel>
            <StatNumber>52K</StatNumber>
            <StatHelpText>Current</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Bandwidth sent</StatLabel>
            <StatNumber>92.1GB</StatNumber>
            <StatHelpText>Total</StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Requests</StatLabel>
            <StatNumber>73K</StatNumber>
            <StatHelpText>Total</StatHelpText>
          </Stat>
        </StatGroup>
        <Box mt={4}>
          <Line data={data} options={options} />
        </Box>
      </Box>
    </Box>
  );
};

export default MetricsDashboard;