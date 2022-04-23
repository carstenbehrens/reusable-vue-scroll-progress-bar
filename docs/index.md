# Reusable Vue Scroll Progress Bar for Vue 3

## Introduction

This is a simple and easy-to-use scroll progress bar for Vue 3.

## Installation

```shell
npm install reusable-vue-scroll-progress-bar
```

## Usage

```vue
<template>
  <scroll-progress-bar></scroll-progress-bar>
</template>
```

## Props

| Id               | Type     | Default                                            | Description                            |
|------------------|----------|----------------------------------------------------|----------------------------------------|
| `containerStyle` | `String` | `'width: 100%; top: 0; left: 0; position: fixed;'` | Style attribute of the outer container |
| `height`         | `Number` | `5`                                                | Height of the progress bar             |
| `color`          | `String` | `'#42b883'`                                        | Color of the progress bar              |

## Examples



<style>
/* Hide the default nav-bar from VitePress to show the progress bar correctly */
.nav-bar {
  display: none!important;
}

/* Custom CSS used for the custom example */
.custom-style {
  background: aliceblue;
  display: flex;
  flex-direction: row-reverse;
  background: rgb(254,0,0);
  background: linear-gradient(0deg, rgba(254,0,0,1) 0%, rgba(254,0,0,1) 18%, rgba(254,153,0,1) 19%, rgba(254,153,0,1) 34%, rgba(255,255,1,1) 34%, rgba(255,255,1,1) 50%, rgba(51,255,0,1) 50%, rgba(51,255,0,1) 66%, rgba(0,153,255,1) 67%, rgba(0,153,255,1) 83%, rgba(103,52,253,1) 84%, rgba(103,52,253,1) 100%);
}

.custom-image {
  transform: translateX(28px);
}
</style>

<script setup>
import ScrollProgressBar from '../src/components/ScrollProgressBar.vue';
import { withBase } from 'vitepress';
import { ref } from 'vue';
const DEFAULT = 'Default';
const RED = 'Red';
const CUSTOM = 'Custom';

const styles = ref([DEFAULT, RED, CUSTOM]);
const picked = ref(styles.value[0]);
</script>

<div style="padding-bottom: 1rem;"> 
  <div v-for="style in styles" style="padding-bottom: 1rem">
    <input type="radio" :id="style" :value="style" v-model="picked">
    <label :for="style">{{style}}</label>
    <br>
  </div>
</div>

<template v-if="picked === DEFAULT">
  <scroll-progress-bar />
</template>

<template v-if="picked === RED">
  <scroll-progress-bar color="red" :height="20" />
</template>

<template v-if="picked === CUSTOM">
  <scroll-progress-bar v-slot="{width}">
    <div :width="width" class="custom-style">
      <img class="custom-image" src="./images/cat.png" />
    </div>
  </scroll-progress-bar>
</template>

#### Default:
```vue
<template>
  <scroll-progress-bar />
</template>
```

#### Red:
```vue
<template>
  <scroll-progress-bar color="red" :height="20" />
</template>
```

#### Custom:

```vue
<template>
  <scroll-progress-bar v-slot="{width}">
    <div :width="width" class="custom-style">
      <img class="custom-image" src="./assets/cat.png" />
    </div>
  </scroll-progress-bar>
</template>
```

Using scoped slots like in the example above allows you to have 
full control over how the progress bar should look like.

<div style="padding-bottom: 50vh"></div>
