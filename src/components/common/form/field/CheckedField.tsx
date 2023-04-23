import { CheckIcon } from "@chakra-ui/icons";
import {
  ComponentWithAs,
  Icon,
  IconProps,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

interface CheckedFieldProps extends InputGroupProps {
  icon?: IconType | ComponentWithAs<"svg", IconProps>;
}

const CheckedField = (props: CheckedFieldProps) => {
  const { icon, children, ...rest } = props;
  return (
    <InputGroup {...rest}>
      {icon && (
        <InputLeftElement pointerEvents="none">
          <Icon as={icon} color="gray.300" />
        </InputLeftElement>
      )}
      {children}
      <InputRightElement>
        <CheckIcon color="green.500" />
      </InputRightElement>
    </InputGroup>
  );
};

export default CheckedField;
