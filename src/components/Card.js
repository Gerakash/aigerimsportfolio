import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      borderRadius="md"
      overflow="hidden"
      boxShadow="lg"
      bg="white"
      _hover={{ transform: "scale(1.05)", transition: "0.3s ease-in-out" }}
    >
      {/* Project Image */}
      <Image src={imageSrc} alt={title} objectFit="cover" />

      {/* Card Content */}
      <VStack align="start" spacing={4} p={4}>
        {/* Project Title */}
        <Heading as="h3" size="md" color="black">
          {title}
        </Heading>
        
        {/* Project Description */}
        <Text color="gray.600" fontSize="sm">
          {description}
        </Text>

        {/* Call-to-Action */}
        <HStack color="blue.500" fontWeight="bold" cursor="pointer">
          <Text>See More</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x"/>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;

