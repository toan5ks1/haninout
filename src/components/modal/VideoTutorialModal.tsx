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
  useDisclosure,
  TabPanel,
  TabPanels,
  Tabs,
  List,
  ListIcon,
  ListItem,
  Image,
  Flex,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

const PhotoTutorialModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Text
        onClick={() => {
          onOpen();
        }}
        as="i"
        fontSize={{ base: "sm", md: "md" }}
        color={"blue.600"}
        cursor="pointer"
        className="hover:underline"
      >
        Xem hướng dẫn quay video xác thực gương mặt
      </Text>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
        preserveScrollBarGap={true}
      >
        <ModalOverlay
          bg="blackAlpha.400"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <Tabs align={"center"}>
            <TabPanels>
              <TabPanel>
                <ModalHeader>Lưu ý khi chụp hình mặt trước</ModalHeader>
                <ModalBody>
                  <Flex gap={3} direction={"column"}>
                    <Image
                      src={"/assets/images/popup-mo-tk.png"}
                      alt={"Picture of CMND/CCCD tutorial"}
                      rounded="md"
                    />
                    <List spacing={3}>
                      <ListItem textAlign={"left"}>
                        <ListIcon
                          verticalAlign="middle"
                          as={MdCheckCircle}
                          color="green.500"
                        />
                        Đảm bảo thiết bị đã được cấp quyền truy cập máy ảnh
                      </ListItem>
                      <ListItem textAlign={"left"}>
                        <ListIcon
                          verticalAlign="middle"
                          as={MdCheckCircle}
                          color="green.500"
                        />
                        Giấy tờ tùy thân chính chủ và còn hạn sử dụng. Là hình
                        gốc, không scan và photocopy
                      </ListItem>
                    </List>
                    <Text textAlign={"left"} as="i">
                      Đảm bảo hình ảnh CMND/CCCD nằm hoàn toàn bên trong khung,
                      không bị cắt góc và có thể xoay phải, xoay trái hình ảnh
                      để vừa với khung hình
                    </Text>
                    <Flex justifyContent={"space-between"}>
                      <Image
                        src={"/assets/images/popup-mo-tk-01.png"}
                        alt={"Picture of CMND/CCCD tutorial"}
                        rounded="md"
                        w={40}
                      />
                      <Image
                        src={"/assets/images/popup-mo-tk-02.png"}
                        alt={"Picture of CMND/CCCD tutorial"}
                        rounded="md"
                        w={40}
                      />
                      <Image
                        src={"/assets/images/popup-mo-tk-03.png"}
                        alt={"Picture of CMND/CCCD tutorial"}
                        rounded="md"
                        w={40}
                      />
                    </Flex>
                  </Flex>
                </ModalBody>
              </TabPanel>
              <TabPanel>
                <ModalHeader>Lưu ý khi chụp hình mặt sau</ModalHeader>
              </TabPanel>
            </TabPanels>
          </Tabs>

          <ModalCloseButton />
          <ModalFooter>
            <Button onClick={onClose}>Đã hiểu</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PhotoTutorialModal;
