import React, {createContext, useReducer} from 'react';

export const BookmarkContext = createContext();

export const BookmarkReducer = (state, action) => {
  switch (action.type) {
    case 'ADD BOOKMARK':
      return {Bookmarks: [...state, action.payload]};
    default:
      return state;
  }
};

export const BookmarkContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(BookmarkReducer, {
    Bookmarks: [],
  });

  return (
    <BookmarkContext.Provider value={{...state, dispatch}}>
      {children}
    </BookmarkContext.Provider>
  );
};
