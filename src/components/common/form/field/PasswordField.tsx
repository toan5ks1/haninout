import { UnlockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Input,
  InputProps,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";

interface PasswordField extends InputProps {
  register: UseFormRegisterReturn;
}

const PasswordField = ({ register, ...props }: PasswordField) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputGroup>
      <Input
        type={showPassword ? "text" : "password"}
        {...register}
        {...props}
      />
      <InputLeftElement pointerEvents="none">
        <UnlockIcon color="gray.300" />
      </InputLeftElement>
      <InputRightElement h={"full"}>
        <Button
          variant={"ghost"}
          onClick={() => setShowPassword((showPassword) => !showPassword)}
        >
          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordField;
