"use client";

import { Link } from "@chakra-ui/next-js";
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  DrawerHeader,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { AuthButtonLink, NavLinks } from "../navigation";
import { HamburgerIcon } from "@chakra-ui/icons";

export function Drawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton aria-label='drawer' onClick={onOpen}>
        <HamburgerIcon boxSize={6} />
      </IconButton>
      <ChakraDrawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>
          <DrawerBody>
            <Stack spacing='2'>
              <NavLinks />
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <AuthButtonLink />
          </DrawerFooter>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
}
