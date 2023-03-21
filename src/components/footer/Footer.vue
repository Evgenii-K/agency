<template>
  <div class="footer">
    <div class="footer__wrapper q-page-container">
      <div class="footer__main">
        <div class="footer__logo-wrapper">
          <img
            class="footer__logo"
            :src="imageSrc"
          />
        </div>
        <div class="footer__contact">
          <div class="footer__contact-title">{{ $t('footer.term') }}</div>
          <div class="footer__contact-content">
            <a href="#">{{ $t('footer.service') }}</a>
          </div>
          <div class="footer__contact-content">
            <a href="#">{{ $t('footer.privacy') }}</a>
          </div>
        </div>
        <div class="footer__contact">
          <div class="footer__contact-title">{{ $t('footer.company') }}</div>
          <router-link
            to="/"
            class="footer__contact-content"
            >{{ $t('nav.home') }}</router-link
          >
          <router-link
            to="/"
            class="footer__contact-content"
            >{{ $t('nav.about') }}</router-link
          >
          <router-link
            to="/"
            class="footer__contact-content"
            >{{ $t('nav.contactUs') }}</router-link
          >
        </div>
        <div class="footer__contact">
          <div class="footer__contact-title">{{ $t('footer.contact') }}</div>
          <div class="footer__contact-content">
            <a href="tel:(+62) 893912392190">(+62) 893912392190</a>
          </div>
          <div class="footer__contact-content">
            <a href="mailto:agecnycr@gmail.comy">agecnycr@gmail.com</a>
          </div>
        </div>
        <div class="footer__contact">
          <div class="footer__contact-title">{{ $t('footer.location') }}</div>
          <div class="footer__contact-content">
            PT Osiris Real Estate Internasional
          </div>
          <div class="footer__contact-content">
            Jl. KH. Wahid Hasyim Kel No.10D
          </div>
          <div class="footer__contact-content">Jakarta, Indonesia</div>
          <div class="footer__contact-content">team@OsirisRealEstate.com</div>
        </div>
      </div>
      <div class="footer__bottom">
        <social-block />
        <div class="footer__copyright">
          Copyright @ {{ year }} Agency Creative. All Right Reserved
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import './style.scss'
  import SocialBlock from 'src/components/socialBlock/SocialBlock.vue'

  const year = new Date().getFullYear()

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
  const imageSrc = require('src/assets/img/Logo.png')
</script>
