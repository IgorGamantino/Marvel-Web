interface IHandleSearchHeroes {
  name: string;
}
export function handleSearchHeroes({ name }: IHandleSearchHeroes) {
  return {
    type: 'HANDLE_SEARCH_HEROES',
    payload: {
      name
    }
  }
}
