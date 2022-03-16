<template>
    <form @submit.prevent="handleSubmit" class="flex flex-col mb-2 w-full  p-4">
        <div class="flex-wrap flex flex-col">
            <!-- Title -->
            <div class="md:block md:items-center">
                <div class="md:w-1/3 flex-inline mb-4">
                    <input 
                    class="input-fields-create"
                    type="text" required 
                    placeholder="Title"
                    v-model="title"
                    >
                    <!-- Kieze dropdown -->
                    
                    <Listbox v-model="selectedKiez">
                        <div class="relative mt-2">
                            <ListboxButton
                            class="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
                            >
                            <span class="block truncate">{{ selectedKiez.name }}</span>
                            <span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
                            </span>
                            </ListboxButton>

                            <transition
                            leave-active-class="transition duration-100 ease-in"
                            leave-from-class="opacity-100"
                            leave-to-class="opacity-0"
                            >
                            <ListboxOptions
                                class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                            >
                                <ListboxOption
                                v-slot="{ active, selected }"
                                v-for="kiez in kieze"
                                :key="kiez.name"
                                :value="kiez"
                                as="template"
                                >
                                <li
                                    :class="[
                                    active ? 'text-onprimary bg-primary' : 'text-gray-900',
                                    'cursor-default select-none relative py-2 pl-10 pr-4',
                                    ]"
                                >
                                    <span
                                    :class="[
                                        selected ? 'font-medium' : 'font-normal',
                                        'block truncate',
                                    ]"
                                    >{{ kiez.name }}</span
                                    >
                                    <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon class="w-5 h-5" aria-hidden="true" />
                                    </span>
                                </li>
                                </ListboxOption>
                            </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>
                </div>
            </div>
            <!-- Description -->
            <div class="md:block md:items-center mb-4">
                <textarea class="input-fields-create"
                v-model="description"
                rows="8"
                placeholder="Description / Additional information about the location"
                ></textarea>
            </div>
            <!-- Image upload -->
            <div class="bg-onprimary100 flex flex-row p-2 items-center rounded mb-4">
                <label for="File" class="m-2">Upload Image of Location</label>
                <input type="file" class="hover:file:bg-violet-100" @change="handleChange">
                <div class="error">{{ fileError }}</div>
            </div>
            
            <div class="error"></div>
            <button v-if="!isLoading" class="md:w-1/3 font-heading border-2 border-secondary border-solid hover:border-onprimary">Create</button>
        <button v-else disabled class="md:w-1/3 font-heading border-2 border-secondary border-solid hover:border-onprimary">Creating...</button>
        </div>   
    </form>
</template>

<script>

import useStorage from '@/composables/useStorage.js'
import useCollection from '@/composables/useCollection.js'
import getUser from '../../composables/getUser'

import { ref } from 'vue'
import { timestamp } from '@/firebase/config.js'
import { useRouter } from 'vue-router'

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'


export default {
    components: { CheckIcon, SelectorIcon, Listbox, ListboxButton, ListboxOptions, ListboxOption },
    setup(){
        const { filePath, url, addImg } = useStorage()
        const { error, addDoc} = useCollection('locations')
        const { user } = getUser()
        const title = ref('')
        // Dropdown
        const kieze = [
             {name: 'Charlottenburg'},
             {name: 'Friedrichshain'},
             {name: 'Hellersdorf'},
             {name: 'Hohenschönhausen'},
             {name: 'Kreuzberg'},
             {name: 'Köpenick'},
             {name: 'Lichtenberg'},
             {name: 'Marzahn'},
             {name: 'Mitte'},
             {name: 'Neukölln'},
             {name: 'Pankow'},
             {name: 'Prenzlauer Berg'},
             {name: 'Reinickendorf'},
             {name: 'Schöneberg'},
             {name: 'Spandau'},
             {name: 'Steglitz'},
             {name: 'Tempelhof'},
             {name: 'Tiergarten'},
             {name: 'Treptow'},
             {name: 'Wedding'},
             {name: 'Weißensee'},
             {name: 'Wilmersdorf'},
             {name: 'Zehlendorf'}   
        ]
        const selectedKiez = ref(kieze[0])
        const description = ref('')
        const file = ref(null)
        const fileError = ref(null)
        const isLoading = ref(false)
        const router = useRouter()

        const handleSubmit = async () => {
            if(file.value) {
                isLoading.value = true
                await addImg(file.value)
                const res = await addDoc({
                    title: title.value,
                    kiez: selectedKiez.value,   // not sure if correct
                    description: description.value,
                    userId: user.value.uid,
                    userName: user.value.displayName,
                    locationUrl: url.value,
                    filePath: filePath.value,
                    locations: [],
                    createdAt: timestamp()
                })
                if(!error.value){
                    router.push({ name: 'LocationDetails', params: { id: res.id }})
                }
                isLoading.value = false
            }
        }

        const types = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp']
        

        const handleChange = (e) => {
            const selected = e.target.files[0]
            if(selected && types.includes(selected.type)){
                file.value = selected
            } else {
                file.value = null
                fileError.value = 'Files allowed: PNG, JPG, WebP'
            }
            console.log(e.target.files)
        }

        return {handleSubmit,
                title, 
                selectedKiez,
                kieze, 
                description, 
                handleChange, 
                fileError, 
                isLoading,
                }
    }
    
}
</script>

<style>

</style>