<template>
    <div class="grille">
        <img class="mt-14 mb-24 col-span-2 h-[229px] w-full col-start-6" />

        <h3 class="text-Gold col-start-3 col-span-8">Nationalité</h3>
        <form class="col-start-3 col-span-8 mb-7">
            <input class="pl-10 text-White w-full h-16 bg-Black border-2 border-DarkGray" type="text" placeholder="France">
        </form>

        <h3 class="text-Gold col-start-3 col-span-8">Date de naissance</h3>
        <form class="col-start-3 col-span-8 mb-7">
            <input class="pl-10 text-White w-full h-16 bg-Black border-2 border-DarkGray" type="date">
        </form>

        <h3 class="text-Gold col-start-3 col-span-8">Prénom</h3>
        <form class="col-start-3 col-span-8 mb-7">
            <input class="pl-10 text-White w-full h-16 bg-Black border-2 border-DarkGray" type="text" placeholder="Prénom">
        </form>

        <h3 class="text-Gold col-start-3 col-span-8">Nom</h3>
        <form class="col-start-3 col-span-8 mb-7">
            <input class="pl-10 text-White w-full h-16 bg-Black border-2 border-DarkGray" type="text" placeholder="Nom">
        </form>

        <h3 class="text-Gold col-start-3 col-span-8">Adresse e-mail</h3>
        <form class="col-start-3 col-span-8 mb-7">
            <input class="pl-10 text-White w-full h-16 bg-Black border-2 border-DarkGray" type="email"
                placeholder="Adresse e-mail">
        </form>

        <h3 class="text-Gold col-start-3 col-span-8">Nom d'utilisateur</h3>
        <form class="col-start-3 col-span-8 mb-7">
            <input class="pl-10 text-White w-full h-16 bg-Black border-2 border-DarkGray" type="text" placeholder="Pseudo">
        </form>

        <h3 class="text-Gold col-start-3 col-span-8">Numéro de téléphone</h3>
        <form class="col-start-3 col-span-8 mb-7">
            <input class="pl-10 text-White w-full h-16 bg-Black border-2 border-DarkGray" type="tel"
                placeholder="(Facultatif) Numéro de téléphone">
        </form>

        <h3 class="text-Gold col-start-3 col-span-8">Mot de passe</h3>
        <form class="col-start-3 col-span-8 mb-7">
            <input class="pl-10 text-White w-full h-16 bg-Black border-2 border-DarkGray" type="password"
                placeholder="Mot de passe">
        </form>

        <button class="mt-12 h-10 col-span-2 col-start-6 bg-Gold">S'INSCRIRE</button>
        <div class="col-span-4 col-start-5 flex flex- mt-12 mb-7 gap-x-1 mx-auto text-center">
            <p><a class="text-White">En cliquant sur “s’inscrire gratuitement”, vous acceptez les</a>
                <RouterLink to="/Politique-confidentiel" class="text-Gold px-1">conditions d’utilisation</RouterLink>
                <a class="text-White">et la</a>
                <RouterLink to="/Politique-confidentiel" class="text-Gold px-1">politique de confidentialité</RouterLink>
                <a class="text-White">de Stadion</a>
            </p>
        </div>
        <div class="flex flex-col text-center col-span-12 mb-24">
            <h3 class="text-center text-White">Vous avez déjà un compte ?</h3>
            <RouterLink to="/Connection" ><h3 class="text-Gold">Connexion</h3></RouterLink>
        </div>
    </div>
</template>