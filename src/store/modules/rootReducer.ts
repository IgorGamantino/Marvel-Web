import { combineReducers } from "redux";
import { buttonPagination } from './ButtonPagination/reducer'
import { handleSearchHeroes } from './CardHeroes/reducer'

export default combineReducers({
  buttonPagination,
  handleSearchHeroes
})