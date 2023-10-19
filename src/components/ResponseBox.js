import React, { useContext, useEffect } from "react";
import { ResponsesContext } from "../context/responsesContext";
import {
  Box,
  Container,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const ResponseBox = () => {
  const { responses } = useContext(ResponsesContext);
  useEffect(() => {
    console.log(responses);
  }, [responses]);
  return (
    <Box
      width={400}
      height={400}
      bgGradient="linear(to-r, #A67C52, #4D2E00)"
      boxShadow={"2xl"}
      rounded={"md"}
      marginTop={5}
      maxHeight="400px"
      overflowY="auto"
    >
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color={"white"} textAlign={"center"}>
                Guessed Number
              </Th>
              <Th color={"white"}>Bull</Th>
              <Th color={"white"}>Cow</Th>
            </Tr>
          </Thead>
          <Tbody>
            {responses.map((item, i) => {
              return (
                <Tr key={i}>
                  <Td color={"white"} textAlign={"center"}>
                    {item.response}
                  </Td>
                  <Td color={"white"}>{item.bull}</Td>
                  <Td color={"white"}>{item.cow}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ResponseBox;
