import "./App.css";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  Spacer,
  Stack,
} from "@chakra-ui/react";
import NumButtons from "./components/NumButtons";
import { ResponsesProvider } from "./context/responsesContext";
import ResponseBox from "./components/ResponseBox";
import { useEffect } from "react";
import HowToPlay from "./components/HowToPlay";

function App() {
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  useEffect(() => {}, []);
  return (
    <ChakraProvider>
      <ResponsesProvider>
        <Flex h="100vh">
          <Box w="70px" h="10">
            <HowToPlay />
          </Box>
          <Spacer />
          <Box p={1}>
            <Center h="100vh">
              <Stack direction={"column"}>
                <Box>
                  <Heading>Bulls and Cows</Heading>
                  <NumButtons targetNum={randomNumber} />
                  <ResponseBox />
                </Box>
              </Stack>
            </Center>
          </Box>
          <Spacer />
          <Box w="180px" h="10" bg="red.500"></Box>
        </Flex>
      </ResponsesProvider>
    </ChakraProvider>
  );
}

export default App;
