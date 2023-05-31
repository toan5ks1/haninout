import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Stack,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FormErrorMessage,
  Icon,
  InputLeftElement,
  useDisclosure,
} from "@chakra-ui/react";
import { useCallback } from "react";
import { AtSignIcon } from "@chakra-ui/icons";
import MyButton from "~/components/common/button/MyButton";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import VerifyOTPModal from "~/components/modal/VerifyOPTModal";
import router from "next/router";
import { trpc } from "~/utils/trpc";
import { zodResolver } from "@hookform/resolvers/zod";
import FacebookButton from "~/components/common/button/FacebookButton";
import GoogleButton from "~/components/common/button/GoogleButton";
import { ISignUp, signUpSchema } from "~/common/validation/auth_validation";
import PasswordField from "~/components/common/form/field/PasswordField";
import { signIn } from "next-auth/react";

export default function SignupCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISignUp>({
    resolver: zodResolver(signUpSchema),
  });

  const userCreator = trpc.userRouter.signup.useMutation();

  const handleSignup = useCallback(
    async (data: ISignUp) => {
      const result = await userCreator.mutateAsync(data);
      if (result.status === 201) {
        router.push("/");
      }
    },
    [userCreator, router]
  );

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
          p={[6, 8]}
        >
          <Stack spacing={4}>
            <FormControl id="username" isInvalid={Boolean(errors.username)}>
              <FormLabel>Username</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={FaUser} color="gray.300" />
                </InputLeftElement>
                <Input placeholder="Example" {...register("username")} />
              </InputGroup>
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>

            <FormControl id="email" isInvalid={Boolean(errors.email)}>
              <FormLabel>Email address</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AtSignIcon color="gray.300" />
                </InputLeftElement>
                <Input placeholder="Example@gmail.com" {...register("email")} />
              </InputGroup>
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl id="password" isInvalid={Boolean(errors.password)}>
              <FormLabel>Password</FormLabel>
              <PasswordField
                placeholder="Enter password"
                register={register("password")}
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            <FormControl
              id="confirm-password"
              isInvalid={Boolean(errors.confirmPassword)}
            >
              <FormLabel>Confirm password</FormLabel>
              <PasswordField
                placeholder="Retype password"
                register={register("confirmPassword")}
              />
              <FormErrorMessage>
                {errors.confirmPassword?.message}
              </FormErrorMessage>
            </FormControl>
          </Stack>

          <Stack spacing={2} py={6}>
            <MyButton
              loadingText="Submitting"
              onClick={handleSubmit(handleSignup)}
            >
              Sign up
            </MyButton>
            <Stack pt={2}>
              <GoogleButton
                onClick={() => signIn("google", { callbackUrl: "/" })}
              />
              <FacebookButton />
            </Stack>
          </Stack>

          <Stack direction={"row"} align={"start"} justify={"space-between"}>
            <Text align={"center"}>Already a user?</Text>
            <Link color={"blue.400"}>Login</Link>
          </Stack>
        </Box>
        <VerifyOTPModal isOpen={isSubmitting} onClose={onClose} />
      </Stack>
    </Flex>
  );
}
