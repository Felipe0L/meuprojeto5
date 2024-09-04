import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { MainContainer } from '../../styles'

import { RootReducer } from '../../store'
import { Lista } from './styles'

const ListaDeContatos = () => {
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  const filtraContatos = () => {
    let contatosFiltrados = itens
    if (termo !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      return contatosFiltrados
    } else {
      return itens
    }
  }

  const contatos = filtraContatos()

  return (
    <MainContainer>
      <Lista>
        {contatos.map((t) => (
          <li key={t.nome}>
            <Contato
              id={t.id}
              descricao={t.descricao}
              nome={t.nome}
              telefone={t.telefone}
              email={t.email}
            />
          </li>
        ))}
      </Lista>
    </MainContainer>
  )
}

export default ListaDeContatos
