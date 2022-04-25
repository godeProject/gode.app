<template>
  <div
    class="
      flex
      justify-between
      text-base text-black
      bg-gray-300
      dark:text-white dark:bg-gray-900
      shadow-2xl
    "
  >
    <div class="flex items-center justify-end">
      <a href="/" class="block px-3 py-2">Home</a>
      <a href="/about" class="block px-3 py-2">About</a>
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
      @click="toggleDarkMode"
    >
      <font-awesome-icon
        icon="fa-solid fa-moon"
        class="cursor-pointer text-xl"
        v-if="darkmodeButtonIsDark"
      />
      <font-awesome-icon
        icon="fa-solid fa-sun"
        class="cursor-pointer text-xl"
        v-else
      />
      <!--Dark Mode-->
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      darkmodeButtonIsDark: true,
    }
  },
  methods: {
    darkmodeButtonUpdate() {
      switch (this.$colorMode.preference) {
        case 'light':
          this.darkmodeButtonIsDark = true
          break
        case 'dark':
          this.darkmodeButtonIsDark = false
          break
        case 'system':
          switch (this.$colorMode.value) {
            case 'light':
              this.darkmodeButtonIsDark = true
              break
            case 'dark':
              this.darkmodeButtonIsDark = false
              break
          }
        default:
          this.darkmodeButtonIsDark = true
          break
      }
    },
    toggleDarkMode() {
      this.$emit('toggletheme')
      this.darkmodeButtonUpdate()
    },
  },
  mounted() {
    this.darkmodeButtonUpdate()
  },
})
</script>