<script setup lang="ts">
import { RouterView } from 'vue-router'
import TournoisHero from '@/components/Tournois-Hero.vue';
import ProfilCard from '@/components/Profil-Card.vue'
</script>
<template>
        <TournoisHero/>
            <img>
            <button>REJOINDRE</button>
        <div>
            <h2>Informations générales</h2>
            <div>
                <h3>Date</h3>
                <p>Début du tournois</p>
                <p>Dimanche 25 juin 2023, 10h00</p>
            </div>
            <div>
                <h3>Nombre d’équipe</h3>
                <p>Inscrit(e)   5</p>
                <p>Emplacements    24</p>
            </div>
            <div>
                <h3>Inscription</h3>
                <div>
                    <p>Début d’incription</p>
                    <p>24 avril 2023</p>
                </div>
                <div>
                    <p>Fin d’incription</p>
                    <p>20 juin 2023</p>
                </div>
                <div><div></div></div>
            </div>
            <div>
                <h3>Description</h3>
                <div>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </div>
            <div>
                <h3>Règles</h3>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                </ul>
            </div>
        </div>
        <div>
            <h2>Format</h2>
            <div>
                <img>
                <h3>Jeux</h3>
                <p>League of legends, EUNE</p>
            </div>
            <div>
                <img>
                <h3>Date</h3>
                <p>25 juin 2023, 10h00</p>
            </div>
            <div>
                <img>
                <h3>Taille d'équipe</h3>
                <p>5v5</p>
            </div>
            <div>
                <img>
                <h3>Rang</h3>
                <p>Unranked - challenger</p>
            </div>
            <div>
                <img>
                <h3>Format</h3>
                <p>Élimination directe</p>
            </div>
            <div>
                <img>
                <h3>Inscription</h3>
                <p>Accès gratuit</p>
            </div>
            <div>
                <img>
                <h3>Récompenses</h3>
                <p>1er 200€</p>
                <p>2éme 100€</p>
                <p>3éme 50€</p>
            </div>
        </div>
        <div>
            <h2>Inscrivez vous à d’autres tournois</h2>
            <ProfilCard/>
            <ProfilCard/>
            <ProfilCard/>
            <ProfilCard/>
            <button>VOIR PLUS</button>
        </div>
</template>