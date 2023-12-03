<script setup lang="ts">
    interface Ver {
        branch: string,
        hash: string
    }
    defineProps<{ver: Ver}>()

    function truncateGitHash(hash: string) {
        return hash.substring(0, 7)
    }

    function getGitHubCommitURL(hash: string){
        return `https://github.com/godeProject/gode.app/commit/${hash}`
    }
</script>

<template>
    <div class="footer">
        <div class="flex justify-center">
            <p>Currently on {{ ver.branch }} at <a :href="getGitHubCommitURL(ver.hash)">{{ truncateGitHash(ver.hash) }}</a> </p>
        </div>
        <div class="flex justify-center">
            <a href="https://github.com/gxjakkap" target="_blank" class="block px-3"
                >Made with ❤️ by GuntxJakka</a
            >
        </div>
        <div class="flex justify-center">
            <a
                href="./about#:~:text=Read%20more%20here.-,License,-MIT%20License"
                class="block px-3 py-1"
                >Copyright © 2023 g;ode Project.</a
            >
        </div>
    </div>
</template>

<style scoped>
    .footer {
        @apply sticky bottom-0 bg-transparent w-full justify-center text-stone-900 dark:text-slate-300 text-sm h-auto;
    }
</style>