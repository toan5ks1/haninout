import React from "react";
import { Image } from "@chakra-ui/react";

const CameraFilter = ({ boxShadow = false }: { boxShadow?: boolean }) => {
  return (
    <Image
      alt="bg-identity"
      position="absolute"
      top={{ base: 8, md: 12, lg: 14 }}
      left="50%"
      width="90%"
      height="auto"
      transform="translateX(-50%)"
      src="/assets/images/bg-identity.svg"
      objectFit="cover"
      boxShadow={boxShadow ? "0px 0px 0px 100px rgba(0, 0, 0, 0.8)" : "none"}
      rounded={{ base: "16", sm: "24", md: "26" }}
    />
  );
};

export default CameraFilter;
