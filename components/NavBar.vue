<script setup lang="ts">
  import { ref } from 'vue'

  const colorMode = useColorMode()
  const darkmodeButtonIsDark = ref((colorMode.value === 'dark'))

  function themeSwitch() {
    if (colorMode.preference === 'system'){
      if (colorMode.value === 'dark'){
        colorMode.preference = 'light'
        darkmodeButtonIsDark.value = false
      }
      else {
        colorMode.preference = 'dark'
        darkmodeButtonIsDark.value = true
      }
    }
    else if (colorMode.preference === 'dark' || colorMode.value === 'dark'){
      colorMode.preference = 'light'
      darkmodeButtonIsDark.value = false
    }
    else {
      colorMode.preference = 'dark'
      darkmodeButtonIsDark.value = true
    }
  }
  
</script>

<template>
  <div
    class="
      flex
      justify-between
      text-base text-black
      bg-[#c2cbcf]
      dark:text-white dark:bg-slate-900
      drop-shadow-2xl
    "
  >
    <div class="flex items-center justify-end">
      <NuxtLink href="/" class="block px-3 py-2">Home</NuxtLink>
      <NuxtLink href="/blog" class="block px-3 py-2">Blog</NuxtLink>
      <NuxtLink href="/tools" class="block px-3 py-2">Tools</NuxtLink>
      <NuxtLink href="/about" class="block px-3 py-2">About</NuxtLink>
      <a
        href="https://twitter.com/godeProject"
        target="_blank"
        class="block px-3 py-2"
        >Twitter</a
      >
      <a
        href="https://github.com/godeProject/godeapi"
        target="_blank"
        class="block px-3 py-2"
        >API</a
      >
      <a
        href="https://gode.app/discordbot"
        target="_blank"
        class="block px-3 py-2"
        >Discord bot</a
      >
    </div>
    <button
      @click="themeSwitch"
      id="theme-toggle"
      type="button"
      class="
        text-gray-500
        dark:text-gray-400
        hover:bg-gray-100
        dark:hover:bg-gray-700
        focus:outline-none focus:ring-4 focus:ring-gray-200
        dark:focus:ring-gray-700
        rounded-lg
        text-sm
        px-5
        py-1
      "
      :class="{
        hoverblue: darkmodeButtonIsDark,
        hoverpink: !darkmodeButtonIsDark,
      }"
    >
      <!-- <font-awesome-icon
        icon="fa-solid fa-moon"
        class="cursor-pointer text-xl"
        v-if="darkmodeButtonIsDark"
      />
      <font-awesome-icon
        icon="fa-solid fa-sun"
        class="cursor-pointer text-xl"
        v-else
      /> -->
      <span class="cursor-pointer text-xl" v-if="darkmodeButtonIsDark"><i class="bi bi-moon-stars-fill"></i></span>
      <span class="cursor-pointer text-xl" v-else><i class="bi bi-brightness-high-fill"></i></span>
    </button>
  </div>
</template>
  
  <style scoped>
  .hoverblue {
    @apply hover:text-sky-600;
  }
  
  .hoverpink {
    @apply hover:text-pink-400;
  }
  </style>