import { useToast, Flex, Stack, Button, Box } from "@chakra-ui/react";
import MyHeading from "../heading/heading";

interface CustomProgressBarProp {
  step: number;
  setStep: Function;
}

const Item = ({
  title,
  step,
  currentStep,
}: {
  title: string;
  step: number;
  currentStep: number;
}) => {
  return (
    <Stack direction={"column"} spacing={[0, 1]} justify="flex-end" h="100%">
      <Button
        variant="link"
        colorScheme={currentStep >= step ? "maybank" : "gray"}
        w={"100%"}
      >
        <MyHeading fontSize={{ base: 12, md: 14 }}>{title}</MyHeading>
      </Button>
      <Box
        h={1.5}
        rounded="md"
        bg={currentStep >= step ? "maybank.500" : "gray.200"}
      />
    </Stack>
  );
};

const CustomProgressBar = ({ step, setStep }: CustomProgressBarProp) => {
  const toast = useToast();

  return (
    <Flex w="100%" justify="space-between">
      <Box
        w={`31.5%`}
        onClick={() => {
          setStep(1);
        }}
      >
        <Item title={"Thông tin cá nhân"} step={1} currentStep={step} />
      </Box>
      <Box
        w={`31.5%`}
        onClick={() => {
          setStep(2);
        }}
      >
        <Item title={"Đăng ký dịch vụ"} step={2} currentStep={step} />
      </Box>
      <Box
        w={`31.5%`}
        onClick={() => {
          setStep(3);
        }}
      >
        <Item title={"Ký hợp đồng"} step={3} currentStep={step} />
      </Box>
    </Flex>
  );
};

export default CustomProgressBar;
