<script setup lang="ts">
import { RouterView } from 'vue-router'
import ClassCardTournois from '@/components/Class-Card-Tournois.vue';
import Loupe from '../../public/img/Icones-interface/icones/Loupe.vue';
import Autre from '../../public/img/Icones-interface/icones/Pages.vue';
</script>
<template>
    <img class="w-full h-[496px] lg:h-[35vw]" src="../../public/img/Images/AllPlatform/TournoisHero.webp"/>
    <div class="grille">
        <h1 class="col-span-12 -mt-[398px] text-White text-center">Tournois Lol Championship</h1>
        <h3 class="-mt-52 col-span-12 text-White">Retrouvez tous les tournois disponible en France.</h3>
        <h3 class="-mt-40 col-span-12 text-White">De League of legends, Super Smash Bros Ultimate, Valorant, Street Fighter à Overwatch 2</h3>
    </div>
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