import { Reducer } from "redux"

export interface IHandleSearchHeros {
  name: string
}

const INITIAL_STATE: IHandleSearchHeros = {
  name: ''
}

export const handleSearchHeroes: Reducer<IHandleSearchHeros> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'HANDLE_SEARCH_HEROES': {
      console.log(action)
      return {
        ...state,
        name: action.payload.name
      }
    }
    default: {
      return state
    }
  }

}
