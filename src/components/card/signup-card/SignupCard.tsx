import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FormErrorMessage,
  Icon,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  AtSignIcon,
  UnlockIcon,
  ViewIcon,
  ViewOffIcon,
} from "@chakra-ui/icons";
import MyButton from "~/components/common/button/MyButton";
import { useForm } from "react-hook-form";
import useSignup from "~/hooks/useSignup";
import { FaUser } from "react-icons/fa";
import VerifyOTPModal from "~/components/modal/VerifyOPTModal";

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false);
  const { signup, isLoading, isError, isSuccess, error } = useSignup();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignup = (data: any) => {
    console.log(data);
    signup({ data: data }, "mock api enpoint");
    onOpen();
  };

  return (
    <Flex
      h="100%"
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} w={"md"}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl
              id="username"
              isRequired
              isInvalid={Boolean(errors.username)}
            >
              <FormLabel htmlFor="username">User name</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={FaUser} color="gray.300" />
                </InputLeftElement>
                <Input
                  placeholder="example"
                  type="text"
                  {...register("username", { required: true })}
                />
              </InputGroup>
              <FormErrorMessage>Hãy nhập user name của bạn</FormErrorMessage>
            </FormControl>
            <FormControl
              id="email"
              isRequired
              isInvalid={Boolean(errors.email)}
            >
              <FormLabel>Email address</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AtSignIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  placeholder="example@gmail.com"
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
              </InputGroup>
              {errors.email && (
                <FormErrorMessage>
                  {errors.email.type === "required" && "Hãy nhập email của bạn"}
                  {errors.email.type === "pattern" && "Email không hợp lệ"}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              id="password"
              isRequired
              isInvalid={Boolean(errors.password)}
            >
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Remember it"
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  })}
                />
                <InputLeftElement pointerEvents="none">
                  <UnlockIcon color="gray.300" />
                </InputLeftElement>
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              {errors.password && (
                <FormErrorMessage>
                  {errors.password.type === "required" &&
                    "Hãy nhập password của bạn"}
                  {errors.password.type === "pattern" &&
                    `
                  The password must contain at least: one uppercase letter,
                  one lowercase letter,
                  one digit,
                  and must be at least 8 characters long.
                  `}
                </FormErrorMessage>
              )}
            </FormControl>
            <Stack spacing={10} pt={2}>
              <MyButton
                loadingText="Submitting"
                onClick={handleSubmit(handleSignup)}
              >
                Sign up
              </MyButton>
            </Stack>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Text align={"center"}>Already a user?</Text>
              <Link color={"blue.400"}>Login</Link>
            </Stack>
          </Stack>
        </Box>
        <VerifyOTPModal isOpen={isOpen} onClose={onClose} />
      </Stack>
    </Flex>
  );
}
