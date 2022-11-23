import { FormContainer, TaskInput, MinutesAmountInput } from './styles'

export function NewCycleForm() {
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="projeto-1" />
        <option value="projeto-2" />
        <option value="projeto-3" />
        <option value="review " />
      </datalist>

      <label htmlFor="durationInMinutes">durante</label>
      <MinutesAmountInput
        id="durationInMinutes"
        type="number"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('durationInMinutes', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
