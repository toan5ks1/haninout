import {
  ModalOverlay,
  useDisclosure,
  Modal,
  Text,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Circle,
  Image,
  Flex,
  AspectRatio,
  Center,
  IconButton,
  CircularProgress,
} from "@chakra-ui/react";
import Webcam from "react-webcam";
import React, { useRef, useState, useCallback } from "react";
import { GiCircle } from "react-icons/gi";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import styles from "asset/css/Card.module.css";
import MyButton from "../common/button/MyButton";
import { EditIcon } from "@chakra-ui/icons";

import CameraFilter from "../common/filter/CameraFilter";
import PhotoEditorModal from "./PhotoEditorModal";

interface MyProps {
  isOpen: boolean;
  title: string;
  setImageData: (img: any) => void;
  onClose: () => void;
  devices: any;
}

const CameraModal = ({
  title,
  setImageData,
  isOpen,
  onClose,
  devices,
}: MyProps) => {
  const [currentImg, setCurrentImg] = useState(null);
  const [isloadingCamera, setIsLoadingCamera] = useState(true);
  const [deviceId, setDeviceId] = useState<string | undefined>(undefined);
  const [facingMode, setFacingMode] = useState<"user" | "environment">("user");

  const webcamRef = useRef<any>(null);

  const {
    isOpen: isOpenEditor,
    onOpen: onOpenEditor,
    onClose: onCloseEditor,
  } = useDisclosure();

  const handleRetake = useCallback(() => {
    setIsLoadingCamera(true);
    onCloseEditor();
    setCurrentImg(null);
  }, [onCloseEditor]);

  const capture = () => {
    if (webcamRef.current) {
      const screenshot = webcamRef.current.getScreenshot();
      setCurrentImg(screenshot);
    }
  };

  const handleSubmit = (src: any) => {
    setImageData(src);
    onClose();
  };

  const handleChangeDevice = () => {
    if (devices.length < 2) {
      alert(`num: ${devices.length}`);
      return;
    }
    const [dev1, dev2] = devices;

    setFacingMode((prevFacingMode) =>
      prevFacingMode === "user" ? "environment" : "user"
    );

    setDeviceId((prevDeviceId) =>
      prevDeviceId === dev1.deviceId ? dev1.deviceId : dev2.deviceId
    );
  };

  return (
    <>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        size={{ base: "2xl", md: "2xl", lg: "2xl" }}
        preserveScrollBarGap={true}
      >
        <ModalOverlay
          bg="blackAlpha.400"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />

        <ModalContent bg={"gray.800"} rounded={"2xl"}>
          <Box roundedTop="2xl" overflow="hidden" position="relative">
            {!currentImg ? (
              <>
                <AspectRatio ratio={4 / 3}>
                  <>
                    {isloadingCamera && (
                      <Center
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                      >
                        <CircularProgress isIndeterminate color="maybank.500" />
                      </Center>
                    )}
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      onUserMedia={() => {
                        setIsLoadingCamera(false);
                      }}
                      videoConstraints={{ deviceId: deviceId, facingMode }}
                    />
                  </>
                </AspectRatio>
                <CameraFilter boxShadow />
              </>
            ) : (
              <>
                <AspectRatio ratio={4 / 3}>
                  <Box>
                    <Image alt="CCCD-mat-truoc" src={currentImg} />
                  </Box>
                </AspectRatio>
                <CameraFilter boxShadow />
                <Center
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  rounded="20"
                >
                  <IconButton
                    aria-label="edit image"
                    variant="unstyled"
                    icon={
                      <EditIcon
                        boxSize={[10, 12]}
                        color="white"
                        className={styles["camera-icon"] as string}
                      />
                    }
                    onClick={onOpenEditor}
                  />
                </Center>
              </>
            )}
          </Box>
          <ModalCloseButton
            color={"gray.50"}
            onClick={() => setIsLoadingCamera(true)}
            top={[0, 2]}
            right={[0, 2]}
          />
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
              {!currentImg ? (
                <Box position="relative">
                  <Circle
                    size="50px"
                    bg="gray.50"
                    color="gray.800"
                    className={styles["camera-button"] as string}
                    onClick={capture}
                  >
                    <GiCircle size="50" />
                  </Circle>
                  {devices.length > 1 && (
                    <Center
                      position="absolute"
                      top="0"
                      right="-14"
                      h="full"
                      color="gray.50"
                    >
                      <MdOutlineFlipCameraAndroid
                        size="24"
                        onClick={handleChangeDevice}
                        className={styles["camera-icon"] as string}
                      />
                    </Center>
                  )}
                </Box>
              ) : (
                <Flex w={"94%"} justifyContent="space-between" gap={4}>
                  <MyButton
                    variant="outline"
                    flex={5}
                    color="maybank.400"
                    onClick={handleRetake}
                    _hover={{ bg: "rgba(255, 198, 0, 0.1)" }}
                  >
                    Chụp lại
                  </MyButton>
                  <MyButton
                    variant="solid"
                    bg="maybank.400"
                    color="gray.800"
                    flex={5}
                    _hover={{ bg: "maybank.300" }}
                    onClick={() => handleSubmit(currentImg)}
                  >
                    Tiếp tục
                  </MyButton>
                </Flex>
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <PhotoEditorModal
        title={title}
        imgSrc={currentImg}
        isOpen={isOpenEditor}
        onClose={onCloseEditor}
        onSubmitImg={setCurrentImg}
      />
    </>
  );
};

export default CameraModal;
