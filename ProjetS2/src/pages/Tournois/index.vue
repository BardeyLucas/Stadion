<script setup lang="ts">
import { RouterView } from 'vue-router'
import Hero from '@/components/Hero.vue';
import ClassCardTournois from '@/components/Class-Card-Tournois.vue';
import Loupe from '../../../public/img/Icones-interface/icones/Loupe.vue';
import Autre from '../../../public/img/Icones-interface/icones/Pages.vue';
</script>
<template>
    <Hero />
    <div class="grille pb-5">
        <div class="col-span-12 text-left leading-10 text-White">
            <button class="w-1/6 h-12 bg-DarkGray">Tous les jeux</button>
            <button class="w-1/6 h-12 bg-DarkGray">League of legends</button>
            <button class="w-1/6 h-12 bg-DarkGray">sUPER sMASH brOS</button>
            <button class="w-1/6 h-12 bg-DarkGray">Overwatch 2</button>
            <button class="w-1/6 h-12 bg-DarkGray">sTREET FIGHTER</button>
            <button class="w-1/6 h-12 bg-DarkGray">vALORANT</button>
            <button class="w-1/6 h-12 bg-none border-2 border-Gray">Format</button>
            <button class="w-1/6 h-12 bg-none border-2 border-Gray">Frais d'inscription</button>
            <form class="ml-auto -mt-12 w-2/6 h-12 bg-none border-2 border-Gray"><input class="h-full w-full bg-Black px-12"
                    placeholder="Recherche joueur" type="search"></form>
        </div>
        <Loupe class="col-start-9 -mt-[3.25rem] " />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <ClassCardTournois />
        <Autre class="col-span-12 mt-12 mb-24 mx-auto" />
    </div>
</template>