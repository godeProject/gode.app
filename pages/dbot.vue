<template>
  <div>
    <span
      >redirecting you to
      "https://discord.com/api/oauth2/authorize?client_id=893021470169632829&permissions=76800&scope=bot"</span
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    window.location =
      'https://discord.com/api/oauth2/authorize?client_id=893021470169632829&permissions=76800&scope=bot' as any
  },
})
</script>