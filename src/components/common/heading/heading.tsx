import { Heading } from "@chakra-ui/react";
import React from "react";

const MyHeading = ({ lineHeight, fontSize, children, ...rest }: any) => {
  return (
    <Heading
      lineHeight={lineHeight || "32px"}
      fontSize={fontSize || 21}
      {...rest}
    >
      {children}
    </Heading>
  );
};

export default MyHeading;
