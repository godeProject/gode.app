<template>
  <div class="bg-gray-200 h-screen">
    <NavBar />
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
            <select v-model="EngLayout" class="rounded shadow-lg">
              <option value="QWERTY">QWERTY <i>(Default)</i></option>
              <option value="Dvorak">Dvorak</option>
            </select>
            <select v-model="ThaLayout" class="rounded shadow-lg">
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
              bg-gray-200
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
        .$get(
          `https://api.gode.app/v2/convert/${this.EngLayout}/${this.ThaLayout}?message=${this.input}`
        )
        .then((data) => {
          console.log(data)
          let ans = data.results
          this.showAnswer = true
          this.display = `คุณพิมพ์ว่า: ${ans}`
        })
    },
  },
})
</script>
