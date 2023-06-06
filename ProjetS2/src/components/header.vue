<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import logo from '../../public/img/Icones-interface/icones/Logo.vue'
import menuIcon from '../../public/img/Icones-interface/icones/menu.vue'
import Croix from '../../public/img/Icones-interface/icones/croix.vue'
import { RouterLink } from 'vue-router'

const activeMenu = ref(false)

</script>
<template>
    <header class="z-50 fixed w-full bg-Black h-32 border-b-2 border-Gold justify-between items-stretch flex -translate-y-32 ">
        <RouterLink to="/" class="flex items-center">
            <logo class="ml-6"/>
        </RouterLink>
        <button class="z-10 lg:invisible" @click="activeMenu = !activeMenu">
        <menuIcon class="mr-5 w-24 visible lg:invisible" :class="{ 'invisible': activeMenu }"/>
        <Croix class="mr-5 w-24 opacity-0 absolute -mt-6" :class="{ 'opacity-100': activeMenu }"/>
        </button>
        <nav class="invisible opacity-0 fixed inset-0 h-screen w-screen bg-Black text-2xl text-Blanc transition-all duration-300 ease-in-out
    lg:!visible lg:opacity-100 lg:h-12 lg:mt-16 lg:ml-32"
            :class="{ '!visible opacity-100': activeMenu }"
            v-scroll-lock="activeMenu">
            <ul class="mt-[25vh] lg:w-full justify-end lg:flex lg:-mt-6 lg:text-center text-Blanc">
                <li class="text-White h-14 leading-10 w-44 lg:mr-12"><RouterLink to="/Classement" ><button class="text-3xl">CLASSEMENT</button></RouterLink></li>
                <li class="text-White h-14 leading-10 w-44 lg:mr-12"><RouterLink to="/Tournois-dispo" ><button class="text-3xl">TOURNOIS</button></RouterLink></li>
                <li class="text-White h-14 leading-10 w-44 lg:mr-12"><RouterLink to="/Premium" ><button class="text-3xl">PREMIUM</button></RouterLink></li>
                <li class="text-White lg:text-Black bg-Black lg:bg-Gold h-14 leading-10 w-44 lg:mr-44"><RouterLink to="/Connection" ><button class="text-3xl">MON COMPTE</button></RouterLink></li>
            </ul>
        </nav>
    </header>
</template>
<!-- <template>
    <header class="z-20 h-32 bg-Black border-b-2 border-Gold flex w-full items-stretch justify-between fixed -translate-y-32">
        <RouterLink to="/" class="flex items-center">
            <logo/>
        </RouterLink>
        <div class="flex items-center">
            <button class="lg:invisible" @click="activeMenu = !activeMenu">
                <menuIcon class="visible lg:invisible" :class="{'invisible' : activeMenu }"/>
                <Croix class="opacity-0 absolute" :class="{ 'opacity-100': activeMenu }"/>
            </button>
            <nav class="text-center invisible opacity-0 fixed insert-0 h-screen w-screen bg-Black text-White transition-all duration-300 ease-in-out
            lg:!visible lg:opacity-100"
            :class="{'!visible opacity-100': activeMenu}">
                <ul class="lg:flex">
                    <li class="text-White h-10 leading-10 w-44"></li>
                    <li class="text-White h-10 leading-10 w-44"></li>
                    <li class="text-White h-10 leading-10 w-44"></li>
                    <li class="text-Black bg-Gold h-10 leading-10 w-44 ml-20"></li>
                </ul>
            </nav>
            </div>
    </header>
</template> -->