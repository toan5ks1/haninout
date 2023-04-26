import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import React from "react";
import MyButton from "./MyButton";

const NavigateButton = ({ methods, activeStep, prevStep, onSubmit }: any) => {
  return (
    <Flex justify="space-between" bottom={0} w="full" position="absolute">
      <MyButton
        visibility={activeStep === 0 ? "hidden" : "visible"}
        onClick={prevStep}
        variant="outline"
        size={{ base: "sm", md: "md" }}
        leftIcon={<ChevronLeftIcon />}
      >
        Trở lại
      </MyButton>

      <MyButton
        onClick={methods.handleSubmit(onSubmit)}
        size={{ base: "sm", md: "md" }}
        rightIcon={<ChevronRightIcon />}
        isLoading={methods.formState.isSubmitting}
      >
        Tiếp tục
      </MyButton>
    </Flex>
  );
};

export default NavigateButton;
