import React from "react";
import Container from "../components/Container";
import Head from "next/head";
import { Text, useColorMode, Heading, Flex, Stack } from "@chakra-ui/react";

function Blog() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <>
      <Container>
        <Head>
          <title>Blog</title>
        </Head>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          px={2}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading mb={2}>Hello World</Heading>
            <Text color={colorSecondary[colorMode]}>This would be a blog.</Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

export default Blog;
