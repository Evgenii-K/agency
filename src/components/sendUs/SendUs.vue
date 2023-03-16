<template>
  <pop-up :is-popup-show="isOpen" @close="clickHandler">
    <div class="send-us__content-wrapper">
      <div class="send-us__content">
        <h2 class="send-us__title">Send us a message</h2>
        <div class="send-us__article">
          We move with make a Creative Strategy for help your business goal
        </div>
      </div>
      <div class="send-us__fields">
        <base-field v-model="form.name.value" placeholder="Your name"
          :is-errored="!!(!form.name.valid && form.name.value.length)" unique-id="name" error-message="Введите имя"
          full-size />
        <base-field v-model="form.email.value" placeholder="Email" :is-errored="!form.email.valid" unique-id="email"
          error-message="Введите email" full-size />
        <base-field v-model="form.message.value" class="send-us__textarea" placeholder="Your Message"
          :is-errored="!!(!form.message.valid && form.email.value.length)" unique-id="message"
          error-message="Добавьте сообщение" full-size :is-textarea="true" />
      </div>
      <div class="send-us__file">
        <q-icon name="eva-attach-outline" style="font-size: 1.8rem;" />
        <span>Attach file</span>
      </div>
      <div class="send-us__button-block">
        <base-button class="send-us__button" :click-handler="contactUs" text="Send message" />
      </div>
    </div>
  </pop-up>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import './style.scss'
import BaseButton from 'src/components/ui/baseButton/BaseButton.vue'
import BaseField from 'src/components/ui/baseField/BaseField.vue'
import { UseForm } from 'src/components/models'
import { useForm } from 'src/hooks/form/form'
import checkIsRequired from 'src/helpers/validators/checkIsRequired'
import checkMinLength from 'src/helpers/validators/checkMinLength'
import PopUp from 'src/components/modal/Modal.vue'

const emit = defineEmits(['close'])

const clickHandler = () => {
  emit('close')
}

defineProps({
  isOpen: { type: Boolean, required: true },
})

const NAME_MIN_LENGTH = 2

const form: UseForm = useForm({
  email: {
    value: '',
    validators: {
      checkIsRequired,
    },
  },
  name: {
    value: '',
    validators: {
      checkIsRequired,
      minLength: checkMinLength(NAME_MIN_LENGTH),
    },
  },
  message: {
    value: '',
    validators: {
      checkIsRequired,
    },
  },
})

const contactUs = () => {
  emit('close')
}
</script>
