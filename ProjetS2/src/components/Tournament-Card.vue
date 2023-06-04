<script setup lang="ts">
import Calendrier from '../../public/img/Icones-interface/icones/Calendrier.vue'
import Point from '../../public/img/Icones-interface/icones/Point.vue'
import Coupe from '../../public/img/Icones-interface/icones/Coupe.vue'
</script>
<template>
  <div class="col-span-3 bg-LightGray text-Black rounded-xl	">
    <img src="../../public/img/Images/AllPlatform/Img-card-Lol.png" />
    <div class="absolute z-1 text-White bg-Blue text-center h-4 w-32 rounded ml-2.5 -mt-7">
      <legend class="leading-4">Inscription ouverte</legend>
    </div>
    <div class="m-5">
      <h4 class="font-bold text-base">Battle Royale Championship</h4>
      <div class="flex gap-14 mb-6">
        <legend>League of legends</legend>
        <legend>5V5</legend>
      </div>
      <div class="flex h-6 items-center gap-4 mb-2.5">
      <Calendrier/>
      <legend>23 Juin 2023</legend>
      </div>
      <div class="flex h-6 items-center gap-4 mb-2.5">
      <Point/>
      <legend>Lille</legend>
      </div>
      <div class="flex h-6 items-center gap-4">
      <Coupe/>
      <legend>200€</legend>
      </div>
    </div>
  </div>
</template>