"use client";

import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
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
            <NavLinks />
          </DrawerBody>
          <DrawerFooter>
            <AuthButtonLink />
          </DrawerFooter>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
}
