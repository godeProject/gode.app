<script setup lang="ts">
    import { convert } from 'gode.js'
    import { useClipboard } from '@vueuse/core'
    import { ref, h } from 'vue'
    import type { Ref } from 'vue'

    import { useToast } from '@/components/ui/toast/use-toast'
    import { Button } from '@/components/ui/button'

    const engLayout: Ref<'QWERTY' | 'Dvorak'> = ref('QWERTY')
    const thaLayout: Ref<'Kedmanee'| 'Manoonchai'> = ref('Kedmanee')

    const userInput = ref('')
    const godeResult = ref('')

    const errorMsg = ref('')
    const errorIsShown = ref(false)

    const clipboard = useClipboard({ legacy: true })
    const { toast } = useToast()

    function getResult() {
        godeResult.value = convert(engLayout.value, thaLayout.value, userInput.value)
    }

    async function copyToClipboard(){
        if (clipboard.isSupported.value){
            await clipboard.copy(godeResult.value)
            toast({
                title: 'Copied!',
                description: h('span', [h('span', {class: 'font-bold'}, `'${godeResult.value}'`), h('span', ' has been copied to your clipboard!')])
            })
        }
        else {
            toast({
                title: 'Error!',
                description: `Cannot copy to clipboard.`,
                variant: 'destructive'
            })
        }
    }
</script>

<template>
    <title>g;ode - เวนกำ</title>
    <div class="body">
        <NavBar />
        <div class="mb-auto justify-center pt-5 md:pt-6 lg:pt-10 xl:pt-15 2xl:pt-20">
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
                        v-if="errorIsShown"
                        v-text="errorMsg"
                        class="text-stone-900 dark:text-white justify-center text-center"
                    />
                    <div class="justify-center text-center">
                        <select 
                            v-model="engLayout"
                            class="rounded shadow-lg bg-slate-200 dark:bg-gray-600 dark:text-white"
                        >
                            <option value="QWERTY">QWERTY <i>(Default)</i></option>
                            <option value="Dvorak">Dvorak</option>
                        </select>
                        <select 
                            v-model="thaLayout"
                            class="rounded shadow-lg bg-slate-200 dark:bg-gray-600 dark:text-white"
                        >
                            <option value="Kedmanee">Kedmanee <i>(Default)</i></option>
                            <option value="Manoonchai">Manoonchai</option>
                        </select>
                    </div>
                </div>

                <div class="w-4/5 lg:w-1/2 mx-auto">
                    <div class="flex drop-shadow-lg bg-slate-300 border-transparent dark:bg-gray-600 border-4 rounded-full p-4 shadow text-xl">
                        <input 
                            v-model="userInput"
                            type="text"
                            placeholder="ใส่ข้อความตรงนี้..."
                            @keyup.enter="
                                getResult()
                            "
                            class="placeholder:italic placeholder:text-stone-900/50 dark:placeholder:text-white/50 w-full dark:text-white bg-slate-300 dark:bg-gray-600 outline-none  px-3"
                        />
                    </div>
                </div>
                <div class="mt-4 text-center drop-shadow-xl">
                    <Button
                        @click="getResult()"
                        class="rounded-full bg-gray-300 dark:bg-gray-600 text-black dark:text-white hover:bg-gray-400 hover:border-gray-500"
                    >
                        g;ode!
                    </Button>
                </div>
                <div class="justify-center text-center">
                    <p
                        v-if="godeResult !== ''"
                        class="mt-4"
                    >
                        <span
                            v-html="`<b>คุณพิมพ์ว่า:</b> ${godeResult}`"
                            class="
                            text-stone-900
                            dark:text-white
                            justify-center
                            text-[2rem]
                            text-center
                        "
                        >
                            
                        </span>
                        <button @click="copyToClipboard">
                            <font-awesome-icon
                                class="
                                text-[2rem] text-[#d47f82]
                                dark:text-[#1e9fc9]
                                hover:text-[#f1b2b4]
                                dark:hover:text-[#80d0eb]
                                drop-shadow-xl
                                ml-2
                                mr-2
                                "
                                icon="fa-solid fa-clipboard"
                            /> 
                        </button>
                    </p>
                </div>
                <br />
            </div>
        </div>
        <Footer />
    </div>
</template>