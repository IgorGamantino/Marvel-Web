import { Flex,Img,Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import api from "../services";

interface heroeProps {
  name: string;
  description?: string;
  thumbnail: {
    path: string,
    extension: string
  }
}
export default function EditHeroi(){
  const [heroes, setHeroes] = useState<heroeProps>({} as heroeProps)
  useEffect(() => {
    async function getHeroe() {
      const id = localStorage.getItem('@id_Heroes')
      const { data } = await api.get(`/v1/public/characters/${id}?ts=11&apikey=${process.env.NEXT_PUBLIC_PUBLIC_KEY}&hash=${process.env.NEXT_PUBLIC_HASH}`)
      setHeroes(data.data.results[0])
    }
    getHeroe()
  }, [])

  console.log(heroes)
  return (
   <Flex bg='#312e38' w='100vw' h='100vh' flexDir='column' align='center'>
      <Header />

      <Text textAlign='center' mt='8' fontFamily='Comfortaa' color='#F4EDE8' fontSize='24px' fontWeight='bold' >Editar seu Herói</Text>
      <Flex w='100%' maxW='960px' justify='center'  mt='10' bg='#3e3b47' borderRadius='8' >
        <Flex as='form' flexDir='column'>
            <Img maxW='200px'  src={`${heroes.thumbnail?.path}.${heroes.thumbnail?.extension}`}/>

          <Input />
        </Flex>
      </Flex>
   </Flex>
  )
}