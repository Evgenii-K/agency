<template>
  <q-page class="row items-center justify-evenly">
    <div class="page">
      <p class="text-center">
        I am Demo.vue
      </p>
      <Button
        :click-handler="changeModalState"
        text="Click me to Open"
      />
      <Modal v-if="isOpenModal">
        <p>  I am modal window!</p>
        <Field
          v-model="form.email.value"
          label="Test label"
          placeholder="Type smth, please"
          :is-errored="!form.email.valid"
        />
        <Button
          :click-handler="changeModalState"
          text="Click me to Close"
        />
      </Modal>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Modal from '../components/modal/Modal.vue'
import Button from '../components/ui/button/Button.vue'
import Field from '../components/ui/field/Field.vue'
import { useForm } from '../hooks/form/form'
import checkIsRequired from '../helpers/validators/checkIsRequired'
import checkMinLength from '../helpers/validators/checkMinLength'
import { Form } from '../components/models'

export default defineComponent({
  name: 'PageIndex',
  components: { Modal, Button, Field },
  setup () {
    const isOpenModal = ref(false)
    const changeModalState = () => {
      isOpenModal.value = !isOpenModal.value
    }
    const PASSWORD_MIN_LENGTH = 8
    const form: Form = useForm({
      email: {
        value: '12',
        validators: {
          checkIsRequired
        }
      },
      password: {
        value: '',
        validators: {
          checkIsRequired, minLength: checkMinLength(PASSWORD_MIN_LENGTH)
        }
      }
    })
    return { changeModalState, isOpenModal, form }
  }
})
</script>
