<template>
  <div class="body">
    <NavBar @toggletheme="toggleTheme" />
    <div class="flex justify-center pt-5 md:pt-6 lg:pt-10 xl:pt-15 2xl:pt-20">
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
            ลืมเปลี่ยนภาษา? ให้ g;ode เปลี่ยนให้สิ
          </p>
          <p
            id="display"
            v-if="showErrorMessage"
            v-html="errorMessage"
            class="text-stone-900 dark:text-white justify-center text-center"
          />
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
            @keyup.enter="
              getData()
              toggleFocus(false)
              blurTarget($event)
            "
            @focus="toggleFocus(true)"
            @blur="toggleFocus(false)"
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
        <div class="mt-4 text-center drop-shadow-xl">
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
              dark:bg-gray-600 dark:text-white
              hover:bg-gray-400 hover:border-gray-500
            "
          >
            g;ode!
          </button>
        </div>
        <div class="justify-center text-center">
          <p
            id="display"
            v-if="showAnswer"
            v-html="display"
            class="
              text-stone-900
              dark:text-white
              justify-center
              text-[2rem]
              mt-4
              text-center
            "
          />
        </div>
        <br />
      </div>
    </div>
    <Footer class="mt-5" v-if="!inputFocused" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      isOnMobile: false,
      input: '', //input var
      inputFocused: false,
      display: '', // display var
      showAnswer: false, // show answer state
      errorMessage: '', // error message var
      showErrorMessage: false, // show error state
      EngLayout: 'QWERTY', // eng layout var
      ThaLayout: 'Kedmanee', // tha layout var
    }
  },
  mounted() {
    //check if user is on mobile device
    if (
      this.$device.isMobile ||
      this.$device.isSamsung ||
      this.$device.isIos ||
      this.$device.isAndroid
    ) {
      this.isOnMobile = true
    }
  },
  methods: {
    getData() {
      let now: number = Date.now()
      let lastclick: number | null = null
      if (localStorage.getItem('lastclick')) {
        lastclick = parseInt(localStorage.getItem('lastclick') as string)
      }
      if (lastclick && now - lastclick < 5000) {
        // querydelay
        this.errorMessage = `คุณกดเร็วเกินไป! (delay: 5s)`
        this.showErrorMessage = true
      } else if (this.input === '') {
        //preventblankinput
        this.errorMessage = `ใส่ข้อความก่อน!`
        this.showErrorMessage = true
      } else {
        //query
        localStorage.setItem('lastclick', now.toString()) // save latest query time in cookies
        this.$axios
          .$post('https://api.gode.app/v2/raw', {
            // send a post request
            engLayout: this.EngLayout,
            thaLayout: this.ThaLayout,
            message: this.input,
          })
          .then((x) => {
            // display an answer
            let ans = x.results
            this.showErrorMessage = false
            this.showAnswer = true
            this.display = `<b>คุณพิมพ์ว่า:</b> ${ans}`
          })
          .catch((err) => {
            // display an error message
            this.showErrorMessage = true
            this.errorMessage = `<b>Error:</b> ${err.message}`
            console.log(err.message)
          })
      }
    },
    toggleTheme() {
      // darkmode-lightmode toggle
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
    toggleFocus(state: boolean) {
      //sync input focus state when on mobile for hiding/showing footer
      if (this.isOnMobile) {
        this.inputFocused = state
      }
    },
    blurTarget(event: any) {
      // blur/unfocus element
      event.target.blur()
    },
  },
})
</script>
