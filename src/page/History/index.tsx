import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ler o livro Ultra-Aprendizado</td>
              <td>30 minutos</td>
              <td>Há 1 dia atrás</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Assistir as aulas do Ignite ReactJS</td>
              <td>30 minutos</td>
              <td>Há 1 hora atrás</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Assistir as aulas do Full Cycle 3</td>
              <td>30 minutos</td>
              <td>Há 2 horas atrás</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Fazer exercícios físicos</td>
              <td>30 minutos</td>
              <td>Há 2 dias atrás</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
