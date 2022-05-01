<template>
  <div class="body">
    <NavBar @toggletheme="toggleTheme" />
        <div class="flex justify-center pt-20">
            <div>
                <h1 class="text-black dark:text-white text-center drop-shadow-lg text-5xl">About</h1>
                <div class="mr-auto w-5/6 justify-center items-center ml-auto mb-20">
                    <br>
                    <p class="text-black dark:text-white justify-center drop-shadow-sm text-left px-10">“l;ylfu” is what you get for typing “สวัสดี” on QWERTY/Kedmanee keyboard without switching your layout. Also “้ำสสน” and “hello” when you’re on Thai keyboard and typing English.</p>
                    <br>
                    <p class="text-black dark:text-white justify-center drop-shadow-sm text-left px-10"><a class="text-cyan-700 dark:text-cyan-300 underline" href=https://lullar-de-3.appspot.com/>Lullar’s de = กำ</a> has been around for years and that’s what Thais use most when they forget to change their layout. The story began when I saw my girlfriend’s tweet in the wrong layout and I want to do something about that. What came to my mind immediately is Twitter bot that reply to you when got mentioned in the replies with the converted phrase. I go back to Lullar’s website to see if there’s an API that I can use and there isn’t one. That’s why I decided to make my own.</p>
                    <br>
                    <p class="text-black dark:text-white justify-center drop-shadow-sm text-left px-10">Read more <a class="text-cyan-700 dark:text-cyan-300 underline" href="https://www.guntxjakka.me/blog/gode-ep1/">here.</a></p>
                </div>
            </div>
        </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'About',
  methods: {
    toggleTheme() {
      switch (this.$colorMode.preference) {
        case 'light':
          this.$colorMode.preference = 'dark'
          break
        case 'dark':
          this.$colorMode.preference = 'light'
          break
        case 'system':
          switch (this.$colorMode.value) {
            case 'light':
              this.$colorMode.preference = 'dark'
              this.$colorMode.value = 'dark'
              break
            case 'dark':
              this.$colorMode.preference = 'light'
              this.$colorMode.value = 'light'
              break
          }
        default:
          this.$colorMode.preference = 'dark'
          break
      }
    },
  },
})
</script>
