import { Button, ButtonGroup, Stack, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { ResponsesContext } from "../context/responsesContext";

const NumButtons = ({ targetNum }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);
  const [num4, setNum4] = useState(0);
  const [isDuplicate, setIsDuplicate] = useState(true);
  const { responses, responseDispatch } = useContext(ResponsesContext);
  useEffect(() => {
    if (isNumbersDuplicate()) {
      setIsDuplicate(true);
    } else {
      setIsDuplicate(false);
    }
  }, [num1, num2, num3, num4]);
  const setNumState = (setFunc) => {
    setFunc((prev) => {
      return prev < 9 ? prev + 1 : 0;
    });
  };
  const submit = () => {
    if (isNumbersDuplicate()) {
      setIsDuplicate(true);
    } else {
      setIsDuplicate(false);
      let BULL = -1;
      let COW = -2;
      const numberByUser = [num1, num2, num3, num4].join("");
      //TODO:Write the logic for populating bull and cow variable
      //targetNum contains the random number generated at the start of the app
      //targetNum will remain constant through the lifecycle of the application
      //numberByUser contains the number submitted by user
      //if you want to access the individual digits, use num1,num2,num3,num4
      //Write your code below

      //Dont change anything for now below this line
      responseDispatch({
        type: "addResponse",
        payload: {
          response: numberByUser,
          bull: BULL,
          cow: COW,
        },
      });
      console.log(responses);
    }
  };
  const isNumbersDuplicate = () => {
    const numArr = [num1, num2, num3, num4];
    if (numArr.length !== new Set(numArr).size) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <Stack direction={"row"}>
        <ButtonGroup
          marginLeft={"auto"}
          marginRight={"auto"}
          variant={"solid"}
          spacing={"3"}
        >
          <Button
            onClick={() => {
              setNumState(setNum1);
            }}
          >
            {num1}
          </Button>
          <Button
            onClick={() => {
              setNumState(setNum2);
            }}
          >
            {num2}
          </Button>
          <Button
            onClick={() => {
              setNumState(setNum3);
            }}
          >
            {num3}
          </Button>
          <Button
            onClick={() => {
              setNumState(setNum4);
            }}
          >
            {num4}
          </Button>
        </ButtonGroup>
        {isDuplicate ? (
          <Text fontSize="md" paddingTop={2} marginLeft={6} fontWeight={600}>
            No Duplicates allowed
          </Text>
        ) : (
          <Button variant={"outline"} marginLeft={6} onClick={submit}>
            Submit
          </Button>
        )}
      </Stack>
    </>
  );
};

export default NumButtons;
