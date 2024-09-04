import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { Botao, BotaoSalvar } from '../../styles'
import { editarContato, removerContato } from '../../store/reducers/contatos'
import ContatosClass from '../../models/Contatos'

type Props = ContatosClass

const Contato = ({
  nome,
  telefone,
  email,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')
  const [nomeInput, setNomeInput] = useState('')
  const [telInput, setTelInput] = useState('')
  const [emailInput, setEmailInput] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>{estaEditando && <em>Editando </em>}</S.Titulo>
      <S.Contato>
        <S.DadosC>
          <label htmlFor="nome">Nome: </label>
          <S.Dados
            disabled={!estaEditando}
            value={nome}
            onChange={(evento) => setNomeInput(evento.target.value)}
            id="nome"
            type="text"
          />
        </S.DadosC>
        <S.DadosC>
          <label htmlFor="telefone">Telefone: </label>
          <S.Dados
            disabled={!estaEditando}
            value={telefone}
            onChange={(evento) => setTelInput(evento.target.value)}
            id="telefone"
            type="number"
          />
        </S.DadosC>
        <S.DadosC>
          <label htmlFor="email">E-mail: </label>
          <S.Dados
            disabled={!estaEditando}
            value={email}
            onChange={(evento) => setEmailInput(evento.target.value)}
            id="email"
            type="email"
          />
        </S.DadosC>
      </S.Contato>

      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editarContato({
                    descricao,
                    nome,
                    telefone,
                    email,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover
              onClick={() => dispatch(removerContato(id))}
            >
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
