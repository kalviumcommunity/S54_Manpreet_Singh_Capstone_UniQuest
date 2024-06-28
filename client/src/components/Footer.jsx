import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { FaGithub } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <Box p={{ base: 5, md: 8 }} bg={'#232323'} maxW="5xl" marginInline="auto">
      <Stack
        spacing={{ base: 8, md: 0 }}
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
      >
        <Box maxW="300px">
          <Link href="#" isExternal>
            <Image w="300px" src={logo} alt="TemplatesKart" />
          </Link>
          <Text mt={2} color="gray.500" fontSize="md">
            Make the student life easier
          </Text>
        </Box>
        <HStack
          spacing={4}
          display={{ base: "none", sm: "flex" }}
          justifyContent={{ sm: "space-between", md: "normal" }}
        >
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              About
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink scrollTo="home">Homepage</CustomLink>
              <CustomLink scrollTo="about">About Us</CustomLink>
              <CustomLink scrollTo="faq">FAQ</CustomLink>
              <CustomLink scrollTo="contact">Contact Us</CustomLink>
            </VStack>
          </VStack>
        </HStack>
      </Stack>

      <Divider my={4} />

      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={3}
        justifyContent="space-between"
      >
        <Text fontSize="md">
          Built by{" "}
          <Link
            href="https://github.com/manpreetsingh04m/manpreetsingh04m"
            textDecoration="underline"
            _hover={{ textDecoration: "underline" }}
            isExternal
          >
            Manpreet Singh Arora
          </Link>
        </Text>
        <Stack spacing={2} direction={{ base: "column", md: "row" }}>
          <Button
            leftIcon={<FaGithub />}
            as={Link}
            href="https://github.com/manpreetsingh04m/manpreetsingh04m"
            rounded="md"
            colorScheme="gray"
          >
            Github Discussions
          </Button>
          <Button
            leftIcon={<BsDiscord />}
            as={Link}
            href="https://discord.com/users/1196514006941311026"
            rounded="md"
            color="white"
            bg="purple.500"
            _hover={{ bg: "purple.600" }}
          >
            Discord community
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

const CustomLink = ({ children, scrollTo, ...props }) => {
  const handleScroll = () => {
    const section = document.getElementById(scrollTo);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Link
      onClick={handleScroll}
      fontSize="sm"
      _hover={{ textDecoration: "underline" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Footer;
