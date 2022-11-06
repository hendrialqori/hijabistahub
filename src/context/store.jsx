import { createContext, useReducer, useContext } from 'react'

const appContext = createContext({
  state: {},
  dispatch: () => {}
})

const initialState = {
  isShow: false,
  cartShow : false
}

const Reducer = (state, action) => {
  switch (action.type) {
    case 'showBar':
      return {
        ...state,
        isShow: action.payload
      }
    case 'showCart':
      return {
          ...state,
          cartShow: action.payload
      }
  }
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
        <appContext.Provider value={{ state, dispatch }}>
            {children}
        </appContext.Provider>
  )
}

export const useStoreContext = () => useContext(appContext)
