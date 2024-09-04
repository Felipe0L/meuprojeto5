import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import { Botao } from '../../styles'

export const Card = styled.div`
  background-color: #eee;
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`
export const DadosC = styled.div`
  margin-bottom: 8px;
`
export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  paddingtop: 16px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
export const Contato = styled.form`
  max-width: 480px;
  input {
    width: 85%;
  }

  label {
    display: inline;
  }
`
export const Dados = styled.input`
  background-color: transparent;
  border: none;
`
