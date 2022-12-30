<template>
  <div class="social-block">
    <div class="social-block__wrapper">
      <social-icon
        v-for="icon, idx in icons"
        :key="idx"
      >
        <q-icon
          :name="icon"
          style="font-size: 2.4rem;"
        />
      </social-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
  import './style.scss'
  import SocialIcon from 'src/components/ui/social/Social.vue'

  const icons = ['eva-facebook-outline', 'fa-brands fa-instagram', 'eva-linkedin-outline', 'eva-email-outline','eva-twitter-outline']
</script>
