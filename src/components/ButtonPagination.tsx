import { Button, Flex } from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleClickNextPage, handlePreviouPages } from "../store/modules/ButtonPagination/actions";
import { IState } from "../store";
import { IButtonPaginationProps } from "../store/modules/ButtonPagination/reducer";


export function ButtonPagination() {
  const dispatch = useDispatch()
  const { offset } = useSelector<IState, IButtonPaginationProps>(state => state.buttonPagination)

  const handleNextPage = useCallback(() => {
    dispatch(handleClickNextPage({
      limit: 12,
      offset: 12
    }))

  }, [dispatch])

  const handlePreviousPage = useCallback(() => {
    dispatch(handlePreviouPages({
      limit: 12,
      offset: 12
    }))
  }, [dispatch])

  return (
    <Flex w='100%' justify='space-around' mt='20px'>
      {offset > 0 && (<Button onClick={handlePreviousPage} fontFamily='Comfortaa' h='45px' bg='#FF9000' color='#312E38' _hover={{ backgroundColor: '#ec8600 ' }}>Pagina Anterior</Button>)}
      <Button onClick={handleNextPage} fontFamily='Comfortaa' h='45px' bg='#FF9000' color='#312E38' _hover={{ backgroundColor: '#ec8600 ' }}>Proxima Pagina</Button>
    </Flex>
  )
}