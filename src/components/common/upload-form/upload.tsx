import { useState } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Dropzone from "react-dropzone";
import { ImFolderUpload } from "react-icons/im";
import MyButton from "../button/MyButton";

function FileUpload({ onFileSelect, w }: any) {
  const [file, setFile] = useState<string | ArrayBuffer | null>(null);

  const handleFileDrop = (acceptedFiles: any) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      if (
        selectedFile.type === "image/png" ||
        selectedFile.type === "image/jpeg"
      ) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = () => {
          setFile(reader.result);
          onFileSelect(reader.result);
        };
      } else {
        alert("Please upload a valid image file (PNG or JPEG).");
      }
    }
  };

  return (
    <Dropzone onDrop={handleFileDrop}>
      {({ getRootProps, getInputProps }) => (
        <Box {...getRootProps()} w={w}>
          <input {...getInputProps({ multiple: false })} />

          <Flex align="center" justify="center" direction="column" w={w}>
            <MyButton
              leftIcon={<ImFolderUpload />}
              variant="outline"
              size="sm"
              w={w}
            >
              Tải lên
            </MyButton>
          </Flex>
        </Box>
      )}
    </Dropzone>
  );
}

export default FileUpload;
