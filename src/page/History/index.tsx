import { HistoryContainer, HistoryList, Status } from './styles'

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
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Assistir as aulas do Ignite ReactJS</td>
              <td>30 minutos</td>
              <td>Há 1 hora atrás</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Assistir as aulas do Full Cycle 3</td>
              <td>30 minutos</td>
              <td>Há 2 horas atrás</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
            <tr>
              <td>Fazer exercícios físicos</td>
              <td>30 minutos</td>
              <td>Há 2 semanas atrás</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
