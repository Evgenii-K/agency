<template>
  <div
    class="dots"
    :style="dotsStyle"
  >
    <div
      v-for="x in props.pointsInHeight"
      :key="'height' + x"
      class="dots__line"
    >
      <div
        v-for="y in props.pointsInWidth"
        :key="'width' + y"
        class="dots__point"
        :style="pointStyle"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'
  import './style.scss'

  const props = defineProps({
    pointsInHeight: { type: Number, required: false, default: 4 },
    pointsInWidth: { type: Number, required: false, default: 6 },
    width: { type: Number, require: false, default: 100 },
    height: { type: Number, require: false, default: 70 },
    color: { type: String, require: false, default: '#377DFF' },
    size: { type: Number, required: false, default: 5 },
  })

  const pointStyle = {
    width: `${props.size/10}rem`,
    height: `${props.size/10}rem`,
    backgroundColor: `${props.color}`
  }

  const dotsStyle = {
    width: `${props.width/10}rem`,
    height: `${props.height/10}rem`,
  }
</script>
