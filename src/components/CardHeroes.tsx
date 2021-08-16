import { Button, Text, Img, Flex, Spinner } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import router from 'next/router'
import { useSelector } from "react-redux";
import api from "../services";
import { IState } from "../store";
import { IButtonPaginationProps } from "../store/modules/ButtonPagination/reducer";
import { IHandleSearchHeros } from "../store/modules/CardHeroes/reducer";

interface HeroesCard {
  id: number;
  name: string;
  thumbnail: {
    path: string,
    extension: string
  }
}


export function CardHeroes() {
  const { limit, offset } = useSelector<IState, IButtonPaginationProps>(state => state.buttonPagination)
  const { name } = useSelector<IState, IHandleSearchHeros>(state => state.handleSearchHeroes)
  const [heroes, setHeroes] = useState<HeroesCard[]>([])


  useEffect(() => {
    async function getHeroes() {
      if (!name) {
        const { data } = await api.get(`/v1/public/characters?orderBy=name&ts=11&apikey=${process.env.NEXT_PUBLIC_PUBLIC_KEY}&hash=${process.env.NEXT_PUBLIC_HASH}&limit=${limit}&offset=${offset}`)
        setHeroes(data.data.results)
      } else {
        const { data } = await api.get(`/v1/public/characters?nameStartsWith=${name}&orderBy=name&limit=${limit}&offset=${offset}&ts=11&apikey=${process.env.NEXT_PUBLIC_PUBLIC_KEY}&hash=${process.env.NEXT_PUBLIC_HASH}`)
        setHeroes(data.data.results)
      }
    }
    getHeroes()
  }, [limit, offset, name])


  const handleSelectHeroes = useCallback((id) => {
    localStorage.setItem('@id_Heroes', id)

    router.push('/details')

  }, [])



  if (heroes.length === 0) {
    return (
      <Flex w='100%' h='100%' justify='center' align='center'>
        <Spinner size='xl' />
      </Flex>
    )
  }


  return (
    <>
      {heroes.map(heroes => (
        <Button key={heroes.id} w='100%' maxw='300px' onClick={() => handleSelectHeroes(heroes.id)} h='400px' display='flex' flexDir='column' borderRadius='4px' bg='#3e3b47' _hover={{ transform: 'scale(1.05)' }}>
          <Text fontFamily='Open Sans' fontSize='20px' color='#F4EDE8' mb='3'>{heroes.name}</Text>
          <Img maxW='200px' src={`${heroes.thumbnail.path}.${heroes.thumbnail.extension}`} />
        </Button>
      ))}
    </>
  )
}