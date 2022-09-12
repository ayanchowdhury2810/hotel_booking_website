const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

// const SearchReducer = (state, action) => {
//     switch(action.type){
//         case 'NEW_SEARCH'
//     }
// }
