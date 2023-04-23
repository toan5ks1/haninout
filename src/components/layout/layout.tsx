import { Box, type BoxProps, useColorModeValue } from "@chakra-ui/react";
import { type ReactNode } from "react";
import Navbar from "../navbar/navbar";
import { useTranslation } from "next-i18next";
import Footer from "../footer";

export function Layout({
  children,
  boxProps,
}: {
  children?: ReactNode;
  boxProps?: BoxProps;
}) {
  const { t } = useTranslation("common");

  return (
    <Box
      {...boxProps}
      bg={useColorModeValue("gray.50", "gray.700")}
      height="100vh"
      display="flex"
      flexDirection="column"
    >
      {/* minHeight equals to 100vh minus header height */}
      <Navbar t={t} />
      <Box minH="calc(100vh - 60px)">
        <main id="main">{children}</main>
      </Box>
      <Footer />
    </Box>
  );
}
