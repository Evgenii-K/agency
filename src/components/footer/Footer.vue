<template>
  <div class="footer">
    <div class="footer__wrapper">
      <div class="footer__main">
        <div class="footer__logo-wrapper">
          <img
            class="footer__logo"
            src="../../assets/img/Logo.png"
          />
        </div>
        <div class="footer__contact">
          <div class="footer__contact-title">Terms & policies</div>
          <div class="footer__contact-content">
            <a href="#">Terms of Service</a>
          </div>
          <div class="footer__contact-content">
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div class="footer__contact">
          <div class="footer__contact-title">Company</div>
          <router-link to="/" class="footer__contact-content">Home</router-link>
          <router-link to="/" class="footer__contact-content">About Us</router-link>
          <router-link to="/" class="footer__contact-content">Contact Us</router-link>
        </div>
        <div class="footer__contact">
          <div class="footer__contact-title">Contact</div>
          <div class="footer__contact-content">
            <a href="tel:(+62) 893912392190">(+62) 893912392190</a>
          </div>
          <div class="footer__contact-content">
            <a href="mailto:agecnycr@gmail.comy">agecnycr@gmail.com</a>
          </div>
        </div>
        <div class="footer__contact">
          <div class="footer__contact-title">Location</div>
          <div class="footer__contact-content">PT Osiris Real Estate Internasional</div>
          <div class="footer__contact-content">Jl. KH. Wahid Hasyim Kel No.10D</div>
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
</script>
