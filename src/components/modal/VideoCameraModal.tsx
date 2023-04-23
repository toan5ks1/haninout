import {
  ModalOverlay,
  useDisclosure,
  Modal,
  Text,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Box,
  Circle,
  Image,
  Flex,
  AspectRatio,
  useBreakpointValue,
  CircularProgress,
  Center,
} from "@chakra-ui/react";
import Webcam from "react-webcam";
import React, { useRef, useEffect, useState } from "react";
import styles from "asset/css/Card.module.css";
import MyButton from "../common/button/MyButton";

interface MyProps {
  children: JSX.Element;
  title: string;
  // setImageData: (img: any) => void;
}

const CameraModal = ({ children, title }: MyProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const webcamRef = useRef(null);
  const [currentImg, setCurrentImg] = useState(null);
  const [isSquare, setIsSquare] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isloadingCamera, setIsLoadingCamera] = useState(true);

  const capture = () => {
    setIsSquare(!isSquare);
    // if (webcamRef.current) {
    //   const screenshot = webcamRef.current.getScreenshot();
    //   // setImageData(screenshot);
    //   setCurrentImg(screenshot);
    //   console.log(screenshot);
    // }
  };

  useEffect(() => {
    let interval: any = null;

    if (isSquare) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval);
            setIsSquare(false);
            return 100;
          } else {
            return prevProgress + 20;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
      setProgress(0);
    }

    return () => clearInterval(interval);
  }, [isSquare]);

  const handleSubmit = () => {
    onClose();
  };

  const countdown = isSquare ? (
    <Flex
      position="absolute"
      top="4"
      left="50%"
      transform="translateX(-50%)"
      zIndex={1000}
      direction="row"
    >
      <Circle size="10px" mt="1.5" ml="-2.5" mr="1" bg="red.500" />
      <Text p={0} color={"gray.50"}>
        00:0{5 - Math.floor(progress / 20)}
      </Text>
    </Flex>
  ) : null;

  return (
    <>
      <Box onClick={onOpen}>{children}</Box>
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
        <ModalContent bg={"gray.800"} pb={2} rounded={"2xl"}>
          <Box roundedTop="2xl" overflow="hidden" position="relative">
            {!currentImg ? (
              <AspectRatio ratio={{ base: 1 / 1, md: 4 / 3 }}>
                <>
                  {isloadingCamera && (
                    <Center
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                    >
                      <CircularProgress
                        isIndeterminate
                        color="maybank.500"
                        zIndex={1000}
                      />
                    </Center>
                  )}
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    onUserMedia={() => {
                      setIsLoadingCamera(false);
                    }}
                  />
                </>
              </AspectRatio>
            ) : (
              <Image alt="CCCD-mat-truoc" src={currentImg} />
            )}
            {countdown}
            <Circle
              position="absolute"
              size={useBreakpointValue({
                base: "78vw",
                md: "25rem",
              })}
              top={{ base: 10, sm: 14, md: 10 }}
              left="50%"
              transform="translateX(-50%)"
              boxShadow="0px 0px 0px 900px rgba(0, 0, 0, 0.8)"
            >
              <CircularProgress
                value={progress}
                rounded={"full"}
                size={useBreakpointValue({
                  base: "91vw",
                  md: "30rem",
                })}
                thickness="2px"
                color="maybank.500"
              />
            </Circle>
          </Box>
          <ModalCloseButton
            color={"gray.50"}
            onClick={() => setIsLoadingCamera(true)}
          />
          <ModalBody>
            <Flex
              alignItems="center"
              direction="column"
              minH={{ base: 32, md: 24 }}
              gap={4}
            >
              <Text color={"gray.50"} textAlign="center">
                Vui lòng căn chỉnh cho khuôn mặt của bạn nằm giữa khung hình
              </Text>
              {!currentImg ? (
                <Circle
                  size="50px"
                  onClick={capture}
                  boxShadow="0px 0px 0px 3px white"
                >
                  <Box
                    w={isSquare ? "24px" : "46px"}
                    h={isSquare ? "24px" : "46px"}
                    rounded={isSquare ? "2" : "full"}
                    bg="red.500"
                    transition="0.05s ease-in-out"
                    className={styles["video-button"] as string}
                  />
                </Circle>
              ) : (
                <Flex w={"94%"} justifyContent="space-between" gap={4}>
                  <MyButton
                    variant="outline"
                    flex={5}
                    onClick={() => {
                      setCurrentImg(null);
                    }}
                  >
                    Chụp lại
                  </MyButton>
                  <MyButton flex={5} onClick={handleSubmit}>
                    Tiếp tục
                  </MyButton>
                </Flex>
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CameraModal;
