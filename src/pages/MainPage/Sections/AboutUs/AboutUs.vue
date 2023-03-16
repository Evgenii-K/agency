<template>
  <section class="about-us__wrapper">
    <h3 class="about-us__subtitle">About Us</h3>
    <h2 class="about-us__title">Our Teammate</h2>
    <div class="about-us__content">
      <div class="about-us__articles">
        <div class="about-us__article">
          We move with make a Creative Strategy for help your business goal, we help to improve your income by a services
          we have. make your content look interesting and make people look for your business2
        </div>
        <div class="about-us__article">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu neque tempor at ut auctor maecenas,Lorem ipsum d
        </div>
        <div class="about-us__buttons">
          <base-button :click-handler="clickHandler" text="About Us" />
          <base-button :click-handler="clickHandler" text="About Us" outline>
            <q-icon name="play_circle_outline" />
          </base-button>
        </div>
      </div>
      <div class="about-us__image about-us-image">
        <img src="../../../../assets/img/MainPage/AboutUs.png" alt="about-us project" />
        <dots class="about-us-image__dots about-us-image__dots--pink" color="#EB00FF" />
        <dots class="about-us-image__dots about-us-image__dots--red" color="#FF5C00" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import './style.scss'
import BaseButton from 'src/components/ui/baseButton/BaseButton.vue'
import Dots from 'src/components/ui/dots/Dots.vue'

const clickHandler = () => {
  console.log('About-us');
}
</script>
