'use client';

import { Flex, Heading, Highlight, chakra } from '@chakra-ui/react';
import { Drawer } from './drawer';
import { AuthButtonLink, NavLinks } from '../navigation';
import Link from 'next/link';

export function Navbar() {
  return (
    <Flex w="100vw" px={8} h={16} shadow="md" align="center">
      <Heading size="md" as={Link} href="/">
        <Highlight
          query="Next Shop"
          styles={{ py: 2, px: 3, mr: 8, rounded: 'full', bg: 'blue.100' }}
        >
          Next Shop
        </Highlight>
      </Heading>
      <chakra.div
        display={['block', 'block', 'none']}
        flexGrow={1}
      ></chakra.div>
      <chakra.nav display={['none', 'none', 'block']} flexGrow={1}>
        <NavLinks direction="row" />
      </chakra.nav>
      <chakra.div display={['none', 'none', 'block']}>
        <AuthButtonLink />
      </chakra.div>
      <chakra.div display={['block', 'block', 'none']}>
        <Drawer />
      </chakra.div>
    </Flex>
  );
}
