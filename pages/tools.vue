<script setup lang="ts">
    import { Separator } from '@/components/ui/separator'
    import { Button } from '@/components/ui/button'
    import Npm from '@/assets/svg/npm.svg'

    function openInNewTab(link: string){
        window.open(link)
    }
</script>

<template>
    <title>Tools - g;ode</title>
    <div class="body">
        <NavBar />
        <div class="flex flex-col mb-auto justify-center pt-5 md:pt-6 lg:pt-10 xl:pt-15 2xl:pt-20">
            <h1 class="text-4xl mx-auto mb-4">Tools and Application</h1>
            <div class="mx-auto w-[81%] mb-10">
                <Separator class="w-full bg-slate-900 dark:bg-gray-100 opacity-40" />
            </div>
            <section class="w-[80%] mx-auto flex flex-col lg:flex-row">
                <div class="flex flex-col gap-4">
                    <h3 class="text-3xl">gode.app</h3>
                    <p class="text-lg">Web application for Thai user that forgot to change their keyboard layout.</p>
                </div>
                <div class="flex flex-row gap-x-2 lg:ml-auto mt-2 lg:mt-auto">
                    <Button class="w-20 gap-1" @click="$router.push('/')">
                        Go to gode.app
                    </Button>
                    <Button class="w-20 gap-1" @click="openInNewTab('https://github.com/godeProject/gode.app')">
                        <i class="bi bi-github"></i> GitHub
                    </Button>
                </div>
                
            </section>
            <div class="mx-auto w-[80%] my-5">
                <Separator class="w-full bg-slate-900 dark:bg-gray-100 opacity-20" />
            </div>
            <section class="w-[80%] mx-auto flex flex-col lg:flex-row">
                <div class="flex flex-col gap-4">
                    <h3 class="text-3xl">gode.js</h3>
                    <p class="text-lg">Node.js package for Thai-English keyboard layout switching.</p>
                </div>
                <div class="flex flex-row gap-x-2 lg:ml-auto mt-2 lg:mt-auto">
                    <Button class="w-20 gap-1" @click="openInNewTab('https://npmjs.com/package/gode.js')">
                        <Npm class="w-4 h-4" /> NPM
                    </Button>
                    <Button class="w-20 gap-1" @click="openInNewTab('https://github.com/godeProject/gode.js')">
                        <i class="bi bi-github"></i> GitHub
                    </Button>
                </div>
                
            </section>
            <div class="mx-auto w-[80%] my-5">
                <Separator class="w-full bg-slate-900 dark:bg-gray-100 opacity-20" />
            </div>
            <section class="w-[80%] mx-auto flex flex-col lg:flex-row">
                <div class="flex flex-col gap-4">
                    <h3 class="text-3xl">pygode</h3>
                    <p class="text-lg">Python package for Thai-English keyboard layout switching.</p>
                </div>
                <div class="flex flex-row gap-x-2 lg:ml-auto mt-2 lg:mt-auto">
                    <Button class="w-20 gap-1" @click="openInNewTab('https://pypi.org/project/pygode/')">
                        Pypi
                    </Button>
                    <Button class="w-20 gap-1" @click="openInNewTab('https://github.com/godeProject/pygode')">
                        <i class="bi bi-github"></i> GitHub
                    </Button>
                </div>
                
            </section>
            <div class="mx-auto w-[80%] my-5">
                <Separator class="w-full bg-slate-900 dark:bg-gray-100 opacity-20" />
            </div>
            <section class="w-[80%] mx-auto flex flex-col lg:flex-row">
                <div class="flex flex-col gap-4">
                    <h3 class="text-3xl">godeAPI</h3>
                    <p class="text-lg">REST API for Thai-English keyboard layout switching.</p>
                </div>
                <div class="flex flex-row gap-x-2 lg:ml-auto mt-2 lg:mt-auto">
                    <Button class="w-20 gap-1" @click="openInNewTab('https://github.com/godeProject/godeAPI/blob/main/ENDPOINTS.md')">
                        <i class="bi bi-journal-code"></i> Docs
                    </Button>
                    <Button class="w-20 gap-1" @click="openInNewTab('https://github.com/godeProject/godeAPI')">
                        <i class="bi bi-github"></i> GitHub
                    </Button>
                </div>
                
            </section>
            <div class="mx-auto w-[80%] my-5">
                <Separator class="w-full bg-slate-900 dark:bg-gray-100 opacity-20" />
            </div>
            <section class="w-[80%] mx-auto flex flex-col lg:flex-row">
                <div class="flex flex-col gap-4">
                    <h3 class="text-3xl">g;ode Discord bot</h3>
                    <p class="text-lg">Discord bot for Thai user that forgot to change their keyboard layout.</p>
                </div>
                <div class="flex flex-row gap-x-2 lg:ml-auto mt-2 lg:mt-auto">
                    <Button class="w-20 gap-1" @click="openInNewTab('https://gode.app/dbot')">
                        <i class="bi bi-discord"></i> Invite
                    </Button>
                    <Button class="w-20 gap-1" @click="openInNewTab('https://github.com/godeProject/gode-discordjs')">
                        <i class="bi bi-github"></i> GitHub
                    </Button>
                </div>
                
            </section>
            <div class="mx-auto w-[80%] my-5">
                <Separator class="w-full bg-slate-900 dark:bg-gray-100 opacity-20" />
            </div>
            
        </div>
        <Footer />
    </div>
</template>