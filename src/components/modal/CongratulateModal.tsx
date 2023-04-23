import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  ModalOverlay,
  List,
  ListIcon,
  ListItem,
  Flex,
  Box,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle } from "react-icons/md";
import MyButton from "../common/button/MyButton";

const CongratulateModal = ({ isOpen, onClose }: any) => {
  return (
    <Box>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size={"3xl"}
        preserveScrollBarGap={true}
      >
        <ModalOverlay
          bg="blackAlpha.400"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader textAlign="center">
            Chúc mừng quý khách đã mở tài khoản thành công tại MSVN!
          </ModalHeader>
          <ModalBody>
            <Flex direction={"column"} justify="center" align="center">
              <List spacing={3} w="full">
                <ListItem textAlign={"left"}>
                  <HStack>
                    <ListIcon
                      as={MdCheckCircle}
                      verticalAlign="middle"
                      color="green.500"
                      mt={-0.5}
                    />
                    <Text w="40">Tên khách hàng: </Text>
                    <Text>Lê Văn An An</Text>
                  </HStack>
                </ListItem>
                <ListItem textAlign={"left"}>
                  <HStack>
                    <ListIcon
                      as={MdCheckCircle}
                      verticalAlign="middle"
                      color="green.500"
                      mt={-0.5}
                    />
                    <Text w="40">Số tài khoản:</Text>
                    <Text>079C000201</Text>
                  </HStack>
                </ListItem>
                <ListItem textAlign={"left"}>
                  <HStack>
                    <ListIcon
                      as={MdCheckCircle}
                      verticalAlign="middle"
                      color="green.500"
                      mt={-0.5}
                    />
                    <Text w="40">Số lưu ký:</Text>
                    <Text>079C000201</Text>
                  </HStack>
                </ListItem>
              </List>
            </Flex>
          </ModalBody>

          <ModalCloseButton />
          <ModalFooter>
            <MyButton onClick={onClose}>Quay lại trang chủ</MyButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CongratulateModal;
