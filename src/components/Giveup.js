import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Heading,
    Stack
  } from "@chakra-ui/react";

const Giveup = ({targetNum}) => {
    const [gaveUp, setGaveUp] = useState(false);
    useEffect(() => {
        if (gaveUp === true) {
          // Use setTimeout to reload the page after 5 seconds
          const timeoutId = setTimeout(() => {
            window.location.reload();
          }, 5000);
      
          // Clear the timeout when the component unmounts
          return () => clearTimeout(timeoutId);
        }
      }, [gaveUp]);
      
    return (
        <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={5}
        borderRadius="lg"
        boxShadow="lg"
        bgGradient="linear(to-r, blue.600, blue.900)"
        color="white"
        width="150px"
      >
        {!gaveUp &&
        <Button onClick={()=>{setGaveUp(true);}}>
            Give Up!
        </Button>
        }
        {gaveUp &&
            <Stack flexDirection="column">
                <Heading as="h2" size="lg" mb={4}>
                Target number: {targetNum}
                </Heading>
                <Button onClick={()=>{window.location.reload();}}>
                    New Game
                </Button>
            </Stack>
            
        }
        
    </Box>);
};
export default Giveup;