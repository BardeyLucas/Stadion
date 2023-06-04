<script setup lang="ts">
import logo from '../../public/img/Icones-interface/icones/Logo.vue'
import menuIcon from '../../public/img/Icones-interface/icones/menu.vue'
</script>
<template>
    <header class="z-20 grille h-32 bg-Black border-b-2 border-Gold flex w-full items-stretch justify-between fixed -translate-y-32">
        <div class="flex items-center">
            <logo/>
        </div>
        <div class="flex items-center">
            <!--<button>
                <menuIcon/>
            </button>-->
            <nav class="text-center">
                <ul class="flex gap-10">
                    <li class="text-White h-10 leading-10 w-44"><button>CLASSEMENT</button></li>
                    <li class="text-White h-10 leading-10 w-44"><button>TOURNOIS</button></li>
                    <li class="text-White h-10 leading-10 w-44"><button>PREMIUM</button></li>
                    <li class="text-Black bg-Gold h-10 leading-10 w-44 ml-20"><button>MON COMPTE</button></li>
                </ul>
            </nav>
            </div>
    </header>
</template>