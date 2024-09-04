import { configureStore } from '@reduxjs/toolkit'

import filtroReducer from './reducers/filtro'
import contatosReducer from './reducers/contatos'

const store = configureStore({
  reducer: {
    filtro: filtroReducer,
    contatos: contatosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
