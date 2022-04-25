<template>
  <div class="bg-zinc-200 dark:bg-gray-800 h-screen">
    <NavBar @toggletheme="toggleTheme" />
    <div class="flex justify-center pt-20">
      <div>
        <img
          class="w-auto ml-auto mr-auto mb-3 drop-shadow-2xl"
          src="/godeapp.webp"
        />
        <div class="mr-auto mb-5">
          <p
            id="h2"
            class="text-stone-900 dark:text-white justify-center text-center"
          >
            ลืมเปลี่ยนภาษา? ให้ g;ode เปลี่ยนให้สิ!
          </p>
          <p
            id="display"
            v-if="showAnswer"
            class="text-stone-900 dark:text-white justify-center text-center"
          >
            {{ display }}
          </p>
          <div class="justify-center text-center">
            <select
              v-model="EngLayout"
              class="
                rounded
                shadow-lg
                bg-slate-200
                dark:bg-gray-600 dark:text-white
              "
            >
              <option value="QWERTY">QWERTY <i>(Default)</i></option>
              <option value="Dvorak">Dvorak</option>
            </select>
            <select
              v-model="ThaLayout"
              class="
                rounded
                shadow-lg
                bg-slate-200
                dark:bg-gray-600 dark:text-white
              "
            >
              <option value="Kedmanee">Kedmanee <i>(Default)</i></option>
              <option value="Manoonchai">Manoonchai</option>
            </select>
          </div>
        </div>

        <div
          class="
            flex
            border
            drop-shadow-lg
            bg-slate-300
            border-transparent
            dark:bg-gray-600
            border-4
            rounded-full
            p-4
            shadow
            text-xl
          "
        >
          <input
            id="input"
            v-model="input"
            type="text"
            placeholder="ใส่ข้อความตรงนี้..."
            class="
              placeholder:italic placeholder:text-stone-900/50
              dark:placeholder:text-white/50
              w-full
              dark:text-white
              bg-slate-300
              dark:bg-gray-600
              outline-none
              px-3
            "
          />
        </div>
        <div class="mt-8 text-center drop-shadow-xl">
          <button
            id="button"
            @click="getData"
            class="
              mr-3
              bg-gray-300
              pointer-events-auto
              py-3
              px-4
              rounded-full
              w-auto
              hover:bg-gray-400 hover:border-gray-500
            "
          >
            g;ode!
          </button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      input: '',
      display: '',
      showAnswer: false,
      EngLayout: 'QWERTY',
      ThaLayout: 'Kedmanee',
    }
  },
  methods: {
    getData() {
      this.$axios
        .$post('https://api.gode.app/v2/raw', {
          engLayout: this.EngLayout,
          thaLayout: this.ThaLayout,
          message: this.input,
        })
        .then((x) => {
          console.log(x)
          let ans = x.results
          this.showAnswer = true
          this.display = `คุณพิมพ์ว่า: ${ans}`
        })
    },
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
