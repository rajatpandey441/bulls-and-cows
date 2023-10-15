import "./App.css";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  ChakraProvider,
  Container,
  Heading,
  Stack,
} from "@chakra-ui/react";
import NumButtons from "./components/NumButtons";
import { ResponsesProvider } from "./context/responsesContext";
import ResponseBox from "./components/ResponseBox";
import { useEffect } from "react";

function App() {
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  useEffect(() => {}, []);
  return (
    <ChakraProvider>
      <ResponsesProvider>
        <Center h="100vh">
          <Stack direction={"column"}>
            <Heading>Bulls and Cows</Heading>
            <NumButtons targetNum={randomNumber} />
            <ResponseBox />
          </Stack>
        </Center>
      </ResponsesProvider>
    </ChakraProvider>
  );
}

export default App;
