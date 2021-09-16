import {
  Text,
  Stack,
  Flex,
  Heading,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Head from "next/head";
import Container from "../components/Container";
import UserContext from "../context/userContext";
import axios from "axios";

const Quote = () => {
  const { colorSecondary } = React.useContext(UserContext);
  const { colorMode } = useColorMode();

  const [randomQuote, setRandomQuote] = React.useState("");

  const fetchRandomQuote = () => {
    return axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((res) => {
        setRandomQuote(res.data.value || "No quotes found");
        // return res.data.value;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const generateQuote = () => {
    console.log("shit");
  };

  return (
    <>
      <Container>
        <Head>
          <title>Chucky</title>
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
            <Heading mb={2}>Random Chuck quote generator</Heading>
          </Flex>
          <Flex>
            <Text color={colorSecondary[colorMode]}>{randomQuote}</Text>
          </Flex>

          <Button
            onClick={() => {
              fetchRandomQuote();
            }}
          >
            Click Me!
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Quote;
