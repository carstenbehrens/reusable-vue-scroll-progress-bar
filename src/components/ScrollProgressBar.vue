<template>
  <div :style="containerStyle">
    <div data-testid="scroll-progress-bar" v-if="width > 0" :style="{width: `${width}%`}">
      <slot :width="width">
        <div :style="{ height: `${height}px`, background: color}"></div>
      </slot>
    </div>
  </div>
</template>


<script setup>
import {ref, onMounted, onBeforeUnmount, defineProps} from 'vue'
import throttle from 'lodash.throttle'

defineProps({
  containerStyle: {
    type: String,
    default: 'width: 100%; top: 0; left: 0; position: fixed; z-index: 99'
  },
  height: {
    type: Number,
    default: 5
  },
  color: {
    type: String,
    default: '#42b883'
  }
})

const width = ref(0)

function handleScrollEvent() {
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  width.value = Math.ceil((window.scrollY / height) * 100)
}

onMounted(async () => {
  window.addEventListener('scroll', throttle(handleScrollEvent, 15))
})

onBeforeUnmount(async () => {
  window.removeEventListener('scroll', handleScrollEvent)
})
</script>
