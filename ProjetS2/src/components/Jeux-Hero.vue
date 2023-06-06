<!-- <script setup lang="ts">
import { pb } from '@/backend';
import type { JeuxResponse } from "@/pocketbase-types"
const props = defineProps<JeuxResponse>()
const img0 = props.image_tournament
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })
const img1 = props.image_main
const urlImg1 = img1 && pb.getFileUrl(props, img1, { thumb: '100x200' })
const url = `/Jeux/${props.id}`

</script>

 <script setup lang="ts">
import { pb } from '@/backend';
import type { JeuxResponse } from "@/pocketbase-types"
const props = defineProps<JeuxResponse>()
const img0 = props.image_main
const urlImg0 = img0 && pb.getFileUrl(props, img0, { thumb: '100x200' })
const url = `/artiste/${props.id}`
</script>
<template>
    <RouterLink class="w-96" :to="{name: 'Jeux-id', params: {id}}">
        <img :src="urlImg0"/>
        <h5 class="mt-3">{{Game}}</h5>
    </RouterLink>
</template>-->