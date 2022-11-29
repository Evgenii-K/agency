<template>
  <div :class="['send-us', {'send-us--open': isOpen}]">
    <div class="send-us__wrapper">
      <div class="send-us__title">
        <h2 class="send-us__header">Send us a message</h2>
        <div class="send-us__article">
          We move with make a Creative Strategy for help your business goal
        </div>
      </div>
      <div class="send-us__fields">
        <base-field
          v-model="form.name.value"
          placeholder="Your name"
          :is-errored="!form.name.valid"
          unique-id="name"
          error-message="Введите имя"
          full-size
        />
        <base-field
          v-model="form.email.value"
          placeholder="Email"
          :is-errored="!form.email.valid"
          unique-id="email"
          error-message="Введите email"
          full-size
        />
        <base-field
          v-model="form.message.value"
          placeholder="Your Message"
          :is-errored="!form.message.valid"
          unique-id="message"
          error-message="Добавьте сообщение"
          full-size
          :is-textarea="true"
          :height="188"
        />
      </div>
      <div class="send-us__file">
        <q-icon
          name="eva-attach-outline"
          style="font-size: 18px;"
        />
        <span>Attach file</span>
      </div>
      <base-button
        :click-handler="contactUs"
        text="Send message"
        full-size
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'
  import './style.scss'
  import BaseButton from 'src/components/ui/baseButton/BaseButton.vue'
  import BaseField from 'src/components/ui/baseField/BaseField.vue'
  import { UseForm } from 'src/components/models'
  import { useForm } from 'src/hooks/form/form'
  import checkIsRequired from 'src/helpers/validators/checkIsRequired'
  import checkMinLength from 'src/helpers/validators/checkMinLength'

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

  defineProps({
    isOpen: { type: Boolean, required: true },
  })

  const contactUs = () => {
    console.log('on contact us click');
  }
</script>
