import type { NextPage } from 'next'
import { Text, Flex, Stack, HStack, Grid, SimpleGrid, GridItem } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { InputSearch } from '../components/InputSearch'
import { CardHeroes } from '../components/CardHeroes'
import { ButtonPagination } from '../components/ButtonPagination'


const Home: NextPage = () => {

  return (
    <Flex h='100vh' bg='#312e38' w='100%' flexDir='column'>
      <Header />
      <Flex bg='#312e38' flexDir='column' align='center'>
        <InputSearch />

        <ButtonPagination />

        <SimpleGrid columns={4} spacing='20px' maxW='1200' pb='20' mt='50px'>
          <CardHeroes />
        </SimpleGrid>
      </Flex>

    </Flex>
  )
}

export default Home
