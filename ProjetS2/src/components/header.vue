<script setup lang="ts">
import logo from '../../public/img/Icones-interface/icones/Logo.vue'
import menuIcon from '../../public/img/Icones-interface/icones/menu.vue'
</script>
<template>
    <header class="bg-Black border-b-2 border-Gold grid grid-row-2 grid-cols-[350px_minmax(0,_1fr)_0px] grid-flow-col">
        <div>
            <logo class="ml-12 mt-3"/>
        </div>
        <div>
            <!--<button>
                <menuIcon/>
            </button>-->
            <nav class="text-center">
                <ul class="grid gap-5 my-10 grid-flow-col">
                    <li class="text-White h-10 leading-10 w-44"><button>QUI SOMMES NOUS ?</button></li>
                    <li class="text-White h-10 leading-10 w-44"><button>CONTACT</button></li>
                    <li class="text-White h-10 leading-10 w-44"><button>PREMIUM</button></li>
                    <li class="text-Black bg-Gold h-10 leading-10 w-44"><button>Connexion</button></li>
                </ul>
            </nav>
        </div>
    </header>
</template>