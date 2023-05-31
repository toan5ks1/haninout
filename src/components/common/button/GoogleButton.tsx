import { FcGoogle } from "react-icons/fc";
import { Button, ButtonProps, Center, Text } from "@chakra-ui/react";

export default function GoogleButton(props: ButtonProps) {
  return (
    <Center>
      <Button
        w={"full"}
        maxW={"md"}
        variant={"outline"}
        leftIcon={<FcGoogle />}
        {...props}
      >
        <Center>
          <Text>Continue with Google</Text>
        </Center>
      </Button>
    </Center>
  );
}
