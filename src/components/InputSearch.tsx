import { Button, Input, InputGroup, } from "@chakra-ui/react";
import { FormEvent, useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { handleSearchHeroes } from "../store/modules/CardHeroes/actions";

export function InputSearch({ ...rest }) {
  const dispatch = useDispatch()


  const [search, setSearch] = useState('')

  const handleSearch = useCallback((event: FormEvent) => {
    event.preventDefault()

    if (!search.trim()) {
      return;
    }

    dispatch(handleSearchHeroes({
      name: search
    }))


  }, [dispatch, search])

  return (
    <InputGroup as='form' onSubmit={handleSearch} display='flex' alignItems='center' justifyContent='center' w='100%'>
      <Input
        as='input'
        w='100%'
        maxW='600px'
        h='40px'
        mt='5'
        variant="filled"
        color='white'
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder='Pesquise pelo nome do seu heroi'
        bg='#232129'
        fontFamily='Comfortaa'
        fontSize='14px'
        _hover={{ background: '#232129' }}
        _focus={{ background: '#232129', borderColor: '#FF9000' }}
        _placeholder={{ color: '#adadad' }}
        {...rest}
      />
      <Button fontFamily='Comfortaa' mt='5' bg='#FF9000' color='#312E38' _hover={{ backgroundColor: '#ec8600 ' }} ml='10px' type='submit'>Pesquisar</Button>
    </InputGroup>
  )
}