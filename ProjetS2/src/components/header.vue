<script setup lang="ts">
import logo from '../../public/img/Icones-interface/icones/Logo.vue'
import menuIcon from '../../public/img/Icones-interface/icones/menu.vue'
import { RouterLink } from 'vue-router'
</script>
<template>
    <header class="z-20 grille h-32 bg-Black border-b-2 border-Gold flex w-full items-stretch justify-between fixed -translate-y-32">
        <RouterLink to="/" class="flex items-center">
            <logo/>
        </RouterLink>
        <div class="flex items-center">
            <!--<button>
                <menuIcon/>
            </button>-->
            <nav class="text-center">
                <ul class="flex">
                    <li class="text-White h-10 leading-10 w-44"><RouterLink to="/Classement" ><button>CLASSEMENT</button></RouterLink></li>
                    <li class="text-White h-10 leading-10 w-44"><RouterLink to="/Tournois-dispo" ><button>TOURNOIS</button></RouterLink></li>
                    <li class="text-White h-10 leading-10 w-44"><RouterLink to="/Premium" ><button>PREMIUM</button></RouterLink></li>
                    <li class="text-Black bg-Gold h-10 leading-10 w-44 ml-20"><RouterLink to="/" ><button>MON COMPTE</button></RouterLink></li>
                </ul>
            </nav>
            </div>
    </header>
</template>