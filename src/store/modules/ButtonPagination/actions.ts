
interface IHandleNextPageProps {
  limit: number;
  offset: number;
}

export function handleClickNextPage({ limit, offset }: IHandleNextPageProps) {
  return {
    type: 'CLICK_NEXT_PAGE',
    payload: {
      limit, offset
    }
  }
}

export function handlePreviouPages({ limit, offset }: IHandleNextPageProps) {
  return {
    type: 'CLICK_PREVIOUS_PAGE',
    payload: {
      limit, offset
    }
  }
}