import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './modules/rootReducer';

interface IButtonPaginationProps {
  limit: number;
  offset: number;
}

interface IHandleSearchHeros {
  name: string;
}


export interface IState {
  buttonPagination: IButtonPaginationProps,
  handleSearchHeroes: IHandleSearchHeros
}

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store