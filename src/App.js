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
  useColorModeValue,
} from "@chakra-ui/react";
import NumButtons from "./components/NumButtons";
import { ResponsesProvider } from "./context/responsesContext";
import ResponseBox from "./components/ResponseBox";
import { useEffect } from "react";
import HowToPlay from "./components/HowToPlay";
import Timer from "./components/Timer";
import Giveup from "./components/Giveup";

function generateUniqueFourDigitNumber() {
  let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let number = "";

  for (let i = 0; i < 4; i++) {
    let index = Math.floor(Math.random() * digits.length);
    number += digits[index];
    digits.splice(index, 1);
  }
  console.log(number);
  return number;
}

function App() {
  const randomNumber = generateUniqueFourDigitNumber();
  useEffect(() => {}, []);
  const bgImage =
    "url('https://images.pexels.com/photos/139399/bull-landscape-nature-mammal-139399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
  const bgColor = useColorModeValue("gr.200", "gray.700");
  const textColor = useColorModeValue("white.700", "gray.200");
  return (
    <ChakraProvider>
      <ResponsesProvider>
        <Flex
          height="100vh"
          alignItems="center"
          justifyContent="center"
          bgImage={bgImage}
          bgPos="center"
          bgSize="cover"
          bgBlendMode="overlay"
        >
          <Box w="70px" h="10" sx={{ paddingLeft: "150px" }}>
            <HowToPlay />
          </Box>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Box p={1}>
            <Center h="100vh">
              

              <Stack direction={"column"} gap={4}>
                <Box
                    borderWidth="1px"
                    borderRadius="md"
                    p={4}
                    boxShadow="lg"
                  >
                <Box>
                  <Heading color={"white"}>Bulls and Cows</Heading>
                </Box>
                <Box>
                  <NumButtons targetNum={randomNumber} />
                </Box>
                </Box>
                <Box sx={{ marginTop: -3 }}>
                  <ResponseBox />
                </Box>
              </Stack>
              
            </Center>
          </Box>
          <Spacer />
          <Box w="360px" h="10" sx={{ paddingRight: "150px" }}>
            <Stack dir={"column"}>
              <Timer />
              <Giveup targetNum={randomNumber} />
            </Stack>
            
          </Box>
        </Flex>
      </ResponsesProvider>
    </ChakraProvider>
  );
}

export default App;
