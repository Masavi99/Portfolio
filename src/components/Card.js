import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      align="start"
      backgroundColor="white"
      borderRadius="md"
      boxShadow="md"
      overflow="hidden"
      spacing={4}
    >
      <Image src={imageSrc} alt={title} objectFit="cover" width="100%" />
      <VStack p={4} align="start" spacing={2}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color="gray.600" fontSize="sm">
          {description}
        </Text>

        <HStack spacing={2} align="center" color="black">
          <Text fontSize="sm" fontWeight="bold">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>

      </VStack>
    </VStack>
  );
};


export default Card;
