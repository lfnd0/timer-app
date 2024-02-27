import { Play } from '@phosphor-icons/react'
import { useState } from 'react'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles'

export function Home() {
  const [task, setTask] = useState('')

  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <datalist id="task-suggestions">
            <option value="Ignite ReactJS" />
            <option value="Full Cycle 3.0" />
            <option value="Rabiscando Padrões de Projeto" />
            <option value="Arquitetura Limpa na Prática" />
          </datalist>

          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            id="minutesAmount"
            type="number"
            step={5}
            min={5}
            max={60}
            placeholder="00"
          />

          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>

        <StartCountDownButton disabled={!task} type="submit">
          <Play />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
