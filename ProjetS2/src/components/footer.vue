<script setup lang="ts">
import logo from '../../public/img/Icones-interface/icones/Logo.vue'
</script>
<template>
    <footer class="bg-Black border-t-2 border-Gold h-">
        <div class="flex items-center justify-center h-32">
            <logo/>
        </div>
        <nav class="text-Gold grid grid-cols-3 justify-items-center px-52 mt-6">
            <div class="col-span-1 w-44">
                <h2>JEUX</h2>
                <p>League of legend</p>
                <p>Super smash bors ultimate</p>
                <p>Valorant</p>
                <p>Street fighter</p>
                <p>Overwatch 2</p>
            </div>
            <div class="col-span-1 w-44">
                <h2>STATISTIQUES</h2>
                <p>Classement</p>
                <p>Trouver un tournois</p>
            </div>
            <div class="col-span-1 w-44">
                <h2>PREMIUM</h2>
                <p>Abonnement</p>
            </div>
            <div class="flex gap-56 col-span-3 justify-center mt-12">
                <p>Nous contacter</p>
                <p>Politique de confidentialité</p>
                <p>Qui somme nous ?</p>
            </div>
            <div class="col-span-3 justify-center mt-9">
                <p>@ 2023 Stadion. Tous droits réservés.</p>
            </div>
        </nav>
        <p>test</p>
    </footer>
</template>