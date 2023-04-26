import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

const MyButton = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return (
    <Button
      size="md"
      bg={"blue.400"}
      color={"white"}
      variant="solid"
      _hover={{
        bg: "blue.500",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default MyButton;
