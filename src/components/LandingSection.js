import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    {/* Vertical Stack to Align Content */}
    <VStack spacing={4}>
      {/* Avatar Component */}
      <Avatar
        size="3xl"
        src="https://i.pravatar.cc/150?img=7"
        alt="Pete's Avatar"
      />
      {/* Greeting Heading */}
      <Heading as="h4" size="md" color="white">
        {greeting}
      </Heading>
      {/* Role Description Headings */}
      <Heading as="h1" size="3xl" color="gray.300">
        {bio1}
      </Heading>
      <Heading as="h1" size="3xl" color="gray.300">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;

