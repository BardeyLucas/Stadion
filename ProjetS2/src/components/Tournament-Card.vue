<script setup lang="ts">
import Calendrier from '../../public/img/Icones-interface/icones/Calendrier.vue'
import Point from '../../public/img/Icones-interface/icones/Point.vue'
import Coupe from '../../public/img/Icones-interface/icones/Coupe.vue'
import { pb } from '@/backend';
import type { TournoisResponse, SectionResponse } from "@/pocketbase-types"
const props = defineProps<TournoisResponse>()
const img0 = props.img
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })
const url = `/Tournois/${props.id}`
</script>
<template>
  <div class="lg:col-span-3 col-span-12 bg-LightGray text-Black rounded-xl lg:grid flex">
    <img class="w-1/2 lg:w-auto" src="../../public/img/Images/AllPlatform/Img-card-Lol.png" />
    <div class="ml-5 my-auto lg:m-5">
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