<script setup lang="ts">
    const runtimeConfig = useRuntimeConfig()
    interface Ver {
        branch: string,
        hash: string
    }
    let ver = {branch: runtimeConfig.public.CFPAGES_BRANCH as string, hash: runtimeConfig.public.CFPAGES_HASH as string}

    if (process.env.NODE_ENV == 'development'){
        ver.branch = 'local'
        ver.hash = '0'
    }

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
            <p>Currently on {{ ver.branch }} at <a class="underline" :href="getGitHubCommitURL(ver.hash)">{{ truncateGitHash(ver.hash) }}</a> | gode.js v{{ $config.public.GODEJS_VERSION.replace('^', '') }} </p>
        </div>
        <div class="flex justify-center">
            <a href="https://github.com/gxjakkap" target="_blank" class="block px-3"
                >Made with ❤️ by GuntxJakka</a
            >
        </div>
        <div class="flex justify-center">
            <a
                href="https://github.com/godeProject/gode.app/blob/main/LICENSE.md"
                class="block px-3 py-1"
                >Copyright © 2023 g;ode Project.</a
            >
        </div>
    </div>
</template>

<style scoped>
    .footer {
        @apply mb-2 bg-transparent w-full justify-center text-stone-900 dark:text-slate-300 text-sm h-auto;
    }
</style>