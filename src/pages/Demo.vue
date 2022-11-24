<template>
  <q-page class="row items-center justify-evenly">
    <div class="page">
      <p class="text-center">I am Demo.vue</p>
      <base-button
        :click-handler="changeModalState"
        text="Click me to Open"
      />
      <Modal v-if="isOpenModal">
        <p>I am modal window!</p>
        <base-field
          v-model="form.email.value"
          placeholder="Type smth, please"
          :is-errored="!form.email.valid"
          unique-id="email"
        />
        <base-field
          v-model="form.password.value"
          placeholder="Type smth, please"
          :is-errored="!form.password.valid"
          unique-id="password"
        />
        <base-button
          :click-handler="changeModalState"
          text="Click me to Close"
        />
      </Modal>
    </div>
  </q-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Modal from '../components/modal/Modal.vue'
  import BaseButton from '../components/ui/baseButton/BaseButton.vue'
  import BaseField from '../components/ui/baseField/BaseField.vue'
  import { useForm } from '../hooks/form/form'
  import checkIsRequired from '../helpers/validators/checkIsRequired'
  import checkMinLength from '../helpers/validators/checkMinLength'
  import { UseForm } from '../components/models'

  const isOpenModal = ref(false)
  const changeModalState = () => {
    isOpenModal.value = !isOpenModal.value
  }
  const PASSWORD_MIN_LENGTH = 8
  const form: UseForm = useForm({
    email: {
      value: '12',
      validators: {
        checkIsRequired,
      },
    },
    password: {
      value: '',
      validators: {
        checkIsRequired,
        minLength: checkMinLength(PASSWORD_MIN_LENGTH),
      },
    },
  })
</script>
