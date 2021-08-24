import { Flex, Text, Img, Box, Button } from "@chakra-ui/react";
import router from "next/router";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import api from "../services";

interface IHeroesProps {
  id: number;
  name: string;
  description?: string;
  thumbnail: {
    path: string,
    extension: string
  }
}
interface ISeriesProps {
  id: number;
  title: string;
  description?: string;
  thumbnail: {
    path: string,
    extension: string
  }
}

export default function Details() {
  const [heroes, setHeroes] = useState<IHeroesProps>({} as IHeroesProps)
  const [series, setSeries] = useState<ISeriesProps[]>([])

  useEffect(() => {
    async function getHeroe() {
      const id = localStorage.getItem('@id_Heroes')
      const { data } = await api.get(`/v1/public/characters/${id}?ts=11&apikey=${process.env.NEXT_PUBLIC_PUBLIC_KEY}&hash=${process.env.NEXT_PUBLIC_HASH}`)
      setHeroes(data.data.results[0])
    }
    getHeroe()
  }, [])

  useEffect(() => {
    async function getSeriesHeroe() {
      const id = localStorage.getItem('@id_Heroes')
      const { data } = await api.get(`/v1/public/characters/${id}/series?ts=11&apikey=${process.env.NEXT_PUBLIC_PUBLIC_KEY}&hash=${process.env.NEXT_PUBLIC_HASH}`)
      setSeries(data.data.results)
    }
    getSeriesHeroe()
  }, [])

  return (
    <Flex bg='#312e38' h={series.length === 0 ? '100vh' : '100%'} w='100%' flexDir='column'>
      <Header />
      <Flex w='100%' justify='center' flexDir='column' align='center'>
      <Flex maxW='960px'w='100%' align='center' justifyContent='space-around' >
      <Button onClick={()=>router.back()} fontFamily='Comfortaa' mt='5' bg='#FF9000' color='#312E38' _hover={{ backgroundColor: '#ec8600 ' }} >voltar para home</Button>
      <Button onClick={()=>router.push('/editHeroi')} fontFamily='Comfortaa' mt='5' bg='#FF9000' color='#312E38' _hover={{ backgroundColor: '#ec8600 ' }} >Editar Herói</Button>

      </Flex>
        <Text textAlign='center' mt='8' fontFamily='Comfortaa' color='#F4EDE8' fontSize='24px' fontWeight='bold' >Detalhes do(a) {heroes.name}</Text>

        <Flex maxW='960px' mt='10' bg='#3e3b47' borderRadius='8' >

          <Box p='20px' alignItems='center'>
            <Flex>
              <Img w='100%' maxW='250px' src={`${heroes.thumbnail?.path}.${heroes.thumbnail?.extension}`} />
              <Box ml='2'>
                <Text fontFamily='Open Sans' fontSize='20px' fontWeight='bold' color='#F4EDE8'>NAME:</Text>
                <Text ml='2' fontFamily='Comfortaa' fontSize='18px' color='#F4EDE8'>{heroes.name}</Text>
                {heroes.description && (
                  <>
                    <Text fontFamily='Open Sans' fontSize='20px' fontWeight='bold' mt='2' color='#F4EDE8'>Description:</Text>
                    <Text ml='2' fontFamily='Comfortaa' fontSize='18px' color='#F4EDE8'>{heroes.description}</Text>
                  </>
                )}
              </Box>
            </Flex>

            {series.length !== 0 && <Text fontFamily='Open Sans' fontSize='24px' fontWeight='bold' mt='8' color='#F4EDE8'>Series:</Text>}
            <Flex flexDir='column' mt='10px'>
              {series.map(serie => (
                <Box key={serie.id} >
                  <Flex>
                    <Img mb='20px' key={serie.id} maxW='150px' src={`${serie.thumbnail?.path}.${serie.thumbnail?.extension}`} />
                    <Box ml='2'>
                      <Text fontFamily='Open Sans' fontSize='20px' fontWeight='bold' color='#F4EDE8'>NAME SERIE:</Text>
                      <Text ml='2' mt='2' fontFamily='Comfortaa' fontSize='18px' color='#F4EDE8'>{serie.title}</Text>
                      {serie.description && (
                        <>
                          <Text fontFamily='Open Sans' fontSize='20px' fontWeight='bold' mt='2' color='#F4EDE8'>Description:</Text>
                          <Text ml='2' mb='20px' fontFamily='Comfortaa' fontSize='18px' color='#F4EDE8'>{serie.description}</Text>
                        </>
                      )}
                    </Box>
                  </Flex>
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}