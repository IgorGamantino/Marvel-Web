import { Flex, Image, Img } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex as='header' w='100%' h='20' p='10px' bg='#202020' justify='center' boxShadow='0px 2px 16px rgba(52, 52, 52, 0.1)'>
      <Img src='/marvel.svg' />
    </Flex>
  )
}