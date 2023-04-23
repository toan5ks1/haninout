import { RepeatIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  ModalOverlay,
  Flex,
  Box,
  FormControl,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MyButton from "../common/button/MyButton";

const VerifyOTPModal = ({ isOpen, onClose }: any) => {
  const [timeLeft, setTimeLeft] = useState(0); // Start with 60 seconds
  const [action, setAction] = useState("Gửi mã");

  useEffect(() => {
    // Exit early when timeLeft reaches 0
    if (!timeLeft) return;

    // Save intervalId to clear the interval when the component unmounts
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // Clear interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleResendCode = () => {
    setAction("Gửi lại");
    setTimeLeft(60);
  };

  return (
    <Box>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size={"lg"}
        preserveScrollBarGap={true}
      >
        <ModalOverlay
          bg="blackAlpha.400"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader textAlign="center">Verify your phone number</ModalHeader>
          <ModalBody>
            <Flex gap={8} direction={"column"}>
              <Text fontSize={"sm"} textAlign="center">
                Hãy nhập mã xác minh 6 số đã được gửi đến{" "}
                <strong>033***22333</strong>
                .
                <br />
                Mã này chỉ có giá trị trong vòng 30 phút.
              </Text>

              <FormControl>
                <HStack justify="center">
                  <PinInput>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalCloseButton />
          <ModalFooter>
            <HStack justify="space-between" w="full">
              <Button
                variant="link"
                isDisabled={timeLeft > 0}
                colorScheme={timeLeft > 0 ? "" : "maybank"}
                leftIcon={<RepeatIcon mt="-0.5" />}
                onClick={handleResendCode}
                w="fit-content"
              >
                {action}
                {timeLeft > 0 ? ` (${timeLeft}s)` : ""}
              </Button>
              <MyButton onClick={onClose}>Tiếp tục</MyButton>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default VerifyOTPModal;
