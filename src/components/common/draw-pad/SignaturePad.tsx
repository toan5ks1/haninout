import SignaturePad from "signature_pad";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { useRef, useEffect } from "react";

const Signature = ({ signaturePadRef, setSignature }: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  //TODO: write a debounce function to save the signature
  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvas = canvasRef.current;
    const signaturePad = new SignaturePad(canvas);
    signaturePadRef.current = signaturePad;

    const box = canvas.parentElement;
    canvas.width = box?.offsetWidth || 300;
    canvas.height = box?.offsetHeight || 150;
  }, [signaturePadRef]);

  return (
    <Box bg="gray.500" w="full">
      <canvas ref={canvasRef}></canvas>
    </Box>
  );
};

export default Signature;
