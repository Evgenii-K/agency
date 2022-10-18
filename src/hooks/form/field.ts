import { ref, reactive, watch } from 'vue'
import { FieldForm, ErrorForm, UseField } from '../../components/models'

export function useField(field: FieldForm): UseField {

  const valid = ref(true)
  const value = ref(field.value)

  const errors = reactive({} as ErrorForm)

  const reassign = (val: string) => {
    valid.value = true
    Object.keys(field.validators ?? {}).forEach(name => {
      const isValid = field.validators[name](val)
      errors[name] = !isValid
      if (!isValid) valid.value = false
    })
  }

  watch(value, newValue => {
    reassign(newValue)
  })

  reassign(field.value)

  return { value, valid, errors }
}
