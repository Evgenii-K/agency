import { reactive } from 'vue'
import { useField } from './field'
import { Form, UseForm } from '../../components/models'


export function useForm (init:Form = {}) {
  const form = reactive({} as UseForm)

  for (const [key, value] of Object.entries(init)) {
    form[key] = useField(value)
  }
  return form
}
