<template>
  <div class="social-block">
    <div class="social-block__wrapper">
      <social-icon
        v-for="(icon, idx) in icons"
        :key="idx"
        :name="icon.name"
        :link="icon.link"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import './style.scss'
  import SocialIcon from 'src/components/ui/social/Social.vue'

  const icons = [
    { name: 'eva-facebook-outline', link: '/' },
    { name: 'fa-brands fa-instagram', link: '/' },
    { name: 'eva-linkedin-outline', link: '/' },
    { name: 'eva-email-outline', link: '/' },
    { name: 'eva-twitter-outline', link: '/' },
  ]
</script>
