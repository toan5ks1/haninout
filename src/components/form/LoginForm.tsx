import { PhoneIcon, AtSignIcon, LinkIcon } from "@chakra-ui/icons";
import { Stack, FormControl, FormLabel, InputGroup, InputLeftElement, Icon, FormErrorMessage, Accordion, useColorModeValue, AccordionItem, AccordionButton, Center, HStack, AccordionIcon, Badge, AccordionPanel, Checkbox } from "@chakra-ui/react";
import { Box } from "framer-motion";
import { Input } from "postcss";
import React from "react";
import { FaUser } from "react-icons/fa";
import MyButton from "../common/button/MyButton";
import MyHeading from "../common/heading/heading";

const LoginForm = () => {
  return (
    <Stack textAlign="left" spacing={4}>
        <MyHeading>Thông tin cá nhân</MyHeading>

        <Stack spacing={4}>
          <FormControl isRequired isInvalid={Boolean(errors.name)}>
            <FormLabel htmlFor="name">Họ tên</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Icon as={FaUser} color="gray.300" />
              </InputLeftElement>
              <Input
                id="name"
                placeholder="Họ tên"
                type="text"
                {...register("name", { required: true })}
              />
            </InputGroup>
            <FormErrorMessage>Hãy nhập họ tên của bạn</FormErrorMessage>
          </FormControl>

          <Stack direction={{ base: "column", md: "row" }}>
            <FormControl isRequired isInvalid={Boolean(errors.phone)}>
              <FormLabel htmlFor="phone">Số điện thoại</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <PhoneIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  id="phone"
                  placeholder="Số điện thoại"
                  type="tel"
                  {...register("phone", {
                    required: true,
                    minLength: {
                      value: 10,
                      message: "Số điện thoại không hợp lệ",
                    },
                  })}
                />
              </InputGroup>
              {errors.phone && (
                <FormErrorMessage>
                  {errors.phone.type === "required" &&
                    "Hãy nhập số điện thoại của bạn"}
                  {errors.phone.type === "minLength" &&
                    errors.phone.message?.toString()}
                </FormErrorMessage>
              )}
            </FormControl>

            <FormControl isRequired isInvalid={Boolean(errors.email)}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <AtSignIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  id="email"
                  placeholder="Email"
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
          </Stack>

          <Stack direction={{ base: "column", md: "row" }}>
            <FormControl>
              <Stack>
                <FormLabel></FormLabel>
                <Accordion
                  allowMultiple
                  borderX="1px solid"
                  borderColor={useColorModeValue("gray.200", "gray.700")}
                  rounded={"sm"}
                  w="100%"
                >
                  <AccordionItem>
                    <AccordionButton p={0}>
                      <Center pointerEvents="none" w={10} h={10}>
                        <LinkIcon color="gray.300" />
                      </Center>
                      <HStack justify="space-between">
                        <Box as="span" textAlign="left">
                          Mã giới thiệu
                          <AccordionIcon />
                        </Box>
                        <Badge
                          variant="outline"
                          colorScheme="maybank"
                          hidden={!refCode}
                        >
                          {refCode}
                        </Badge>
                      </HStack>
                    </AccordionButton>
                    <AccordionPanel>
                      <HStack>
                        <Input type="text" />
                        <MyButton
                          isDisabled={false}
                          variant="outline"
                          w="fit-content"
                          onClick={() => {
                            setRefCode("Nguyen Thi Huong");
                          }}
                        >
                          Kiểm tra
                        </MyButton>
                      </HStack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Stack>
            </FormControl>
          </Stack>

          <FormControl isRequired isInvalid={Boolean(errors.isAgree)}>
            <Checkbox
              alignItems="flex-start"
              colorScheme={"maybank"}
              {...register("isAgree", { required: true })}
              name="isAgree"
            >
              <Text textAlign="justify" mx={1}>
                Tôi cam kết thông tin cung cấp là chính xác, hợp pháp và hoàn
                toàn chịu trách nhiệm. Tôi đồng ý nhận các thông tin từ Maybank
                gửi đến số điện thoại, email, địa chỉ đã đăng ký và cho phép
                Maybank sử dụng hoặc cung cấp các thông tin của tôi.
              </Text>
            </Checkbox>
            <FormErrorMessage>
              Để tạo tài khoản, bạn phải chấp nhận các điều khoản và chính sách
              bảo mật của MSVN.
            </FormErrorMessage>
          </FormControl>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LoginForm;
