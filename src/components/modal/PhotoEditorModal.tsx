import {
  ModalOverlay,
  Modal,
  Text,
  ModalContent,
  ModalHeader,
  ModalBody,
  Box,
  Flex,
  AspectRatio,
} from "@chakra-ui/react";
import React, { useState } from "react";
import MyButton from "../common/button/MyButton";
import ImageEditor from "@/components/common/image-editor/editor";

interface MyProps {
  title: string;
  isOpen: boolean;
  onClose: any;
  onSubmitImg: any;
  imgSrc: any;
}

const EditorModal = ({
  title,
  onClose,
  isOpen,
  onSubmitImg,
  imgSrc,
}: MyProps) => {
  const [croppedImg, setCroppedImg] = useState(imgSrc);

  const handleSubmit = () => {
    onSubmitImg(croppedImg);
    onClose();
  };

  return (
    <Modal
      isCentered
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "full", md: "2xl", lg: "2xl" }}
      preserveScrollBarGap={true}
    >
      <ModalOverlay
        bg="blackAlpha.400"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
      <ModalContent bg={"gray.800"} rounded={"2xl"}>
        <Box roundedTop="2xl" overflow="hidden">
          <AspectRatio ratio={4 / 3}>
            <ImageEditor srcImg={imgSrc} setCroppedImage={setCroppedImg} />
          </AspectRatio>
        </Box>
        <ModalHeader textAlign="center" color={"gray.50"}>
          {title}
        </ModalHeader>
        <ModalBody>
          <Flex
            alignItems="center"
            direction="column"
            gap={4}
            minH={{ base: 32, md: 24 }}
          >
            <Text color={"gray.50"} textAlign="center">
              Vui lòng căn chỉnh cho {title} giấy tờ của bạn nằm trong khung
              hình
            </Text>

            <Flex w={"94%"} justifyContent="space-between" gap={4}>
              <MyButton
                variant="outline"
                flex={5}
                color="maybank.400"
                onClick={onClose}
                _hover={{ bg: "rgba(255, 198, 0, 0.1)" }}
              >
                Hủy
              </MyButton>
              <MyButton
                variant="solid"
                bg="maybank.400"
                color="gray.800"
                flex={5}
                _hover={{ bg: "maybank.300" }}
                onClick={handleSubmit}
              >
                Cắt
              </MyButton>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditorModal;
