import {
  Box,
  chakra,
  Flex,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.600", "gray.200")}
    >
      <Flex
        w={"100vw"}
        p={5  }
        borderTop={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        direction="column"
        align={"center"}
        justify={"center"}
        position="relative"
      >
        <Text fontSize={12} align={"center"} color={"gray.500"}>
          ©2023 Haninou
        </Text>
        {/* <Text align={"center"} fontSize={12} color={"gray.500"}>
          Tầng 10, Tòa nhà Pearl 5, số 5 Lê Quý Đôn, phường Võ Thị Sáu, Quận 3,
          Thành phố Hồ Chí Minh
        </Text> */}
        <Stack
          direction={"row"}
          spacing={6}
          position="absolute"
          right={8}
          bottom={2}
        >
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Flex>
    </Box>
  );
}
