import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contatos'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      descricao: 'Rafael do trabalho',
      telefone: '213415',
      email: 'rafaelsoares@gemail.com',
      nome: 'Rafael'
    },
    {
      id: 2,
      descricao: 'Eletricista',
      telefone: '123455',
      email: 'joserodrigues@gemail.com',
      nome: 'José'
    },
    {
      id: 3,
      descricao: '',
      telefone: '213415',
      email: 'robertinho@gemail.com',
      nome: 'Roberto'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    removerContato: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editarContato: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrarContato: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe uma tarefa com esse nome')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { removerContato, editarContato, cadastrarContato } =
  contatosSlice.actions

export default contatosSlice.reducer
