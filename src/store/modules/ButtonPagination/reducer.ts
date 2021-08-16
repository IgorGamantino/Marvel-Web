import { Reducer } from "redux"

export interface IButtonPaginationProps {
  limit: number;
  offset: number;
}

const INITIAL_STATE: IButtonPaginationProps = {
  limit: 12,
  offset: 0
}

export const buttonPagination: Reducer<IButtonPaginationProps> = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'CLICK_NEXT_PAGE': {
      const { offset } = action.payload

      return {
        ...state,
        offset: state.offset + offset
      }
    }
    case 'CLICK_PREVIOUS_PAGE': {
      const { offset } = action.payload
      return {
        ...state,
        offset: state.offset - offset
      }
    }
    default: {
      return state
    }
  }

}
