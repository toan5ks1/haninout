import { CloseIcon } from "@chakra-ui/icons";
import {
  FormLabel,
  HStack,
  FormControl,
  Input,
  IconButton,
  FormErrorMessage,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useFormContext } from "react-hook-form";
import BankAutoComplete from "../auto-complete/BankAutoComplete";

const BankAccountForm = ({
  index,
  onRemove,
}: {
  index: number;
  onRemove: any;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <HStack align="center">
        <FormLabel htmlFor={`account-${index + 1}`} m={0}>
          Tài khoản {index + 1}
        </FormLabel>
        {index !== 0 && (
          <IconButton
            variant="ghost"
            colorScheme="red"
            size="xs"
            icon={<CloseIcon />}
            aria-label="delete-account"
            onClick={() => onRemove(index)}
          />
        )}
      </HStack>
      {/* <HStack spacing={4} id={`account-${index + 1}`}> */}
      <Stack direction="row">
        <FormControl
          isRequired
          // @ts-ignore
          isInvalid={Boolean(errors.paymentMethod?.account[index]?.accountName)}
        >
          <Input
            {...register(`paymentMethod.account.${index}.accountName`, {
              required: true,
            })}
            placeholder="Tên người thụ hưởng (Chủ tài khoản)"
          />
          <FormErrorMessage>Hãy nhập tên người thụ hưởng</FormErrorMessage>
        </FormControl>

        <FormControl
          id="bank"
          isRequired
          // @ts-ignore
          isInvalid={Boolean(errors.paymentMethod?.account[index]?.bank)}
        >
          <BankAutoComplete
            name={`paymentMethod.account.${index}.bank`}
            register={register}
          />
          <FormErrorMessage>Hãy chọn một ngân hàng</FormErrorMessage>
        </FormControl>
      </Stack>

      <HStack spacing={4}>
        <FormControl
          id="phone"
          isRequired
          // @ts-ignore
          isInvalid={Boolean(errors.paymentMethod?.account[index]?.accountNo)}
        >
          <Input
            placeholder="Số tài khoản"
            type="number"
            {...register(`paymentMethod.account.${index}.accountNo`, {
              required: true,
            })}
          />
          <FormErrorMessage>Hãy nhập số tài khoản</FormErrorMessage>
        </FormControl>

        <FormControl
          id="phone"
          isRequired
          // @ts-ignore
          isInvalid={Boolean(errors.paymentMethod?.account[index]?.branch)}
        >
          <Input
            placeholder="Chi nhánh"
            {...register(`paymentMethod.account.${index}.branch`, {
              required: true,
            })}
          />
          <FormErrorMessage>Hãy nhập tên chi nhánh</FormErrorMessage>
        </FormControl>
      </HStack>
    </>
  );
};

export default BankAccountForm;
