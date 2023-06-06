<template>
    <div class="grille text-center">
        <img class="mt-14 mb-24 col-span-2 h-[229px] w-full col-start-6" />
        <h2 class="col-span-12 text-White">Mot de passe oublié</h2>
        <h3 class="col-start-4 col-span-6 text-White">Saisissez votre adresse e-mail afin de recevoir un lien pour
            réinitialiser votre mot de passe</h3>
        <form class="col-start-3 col-span-8 my-12">
            <input class="pl-10 text-White w-full h-16 bg-Black border-2 border-DarkGray" type="email"
                placeholder="Adresse e-mail">
        </form>
        <button class="col-span-2 col-start-6 h-10 bg-Gold mt-12 mb-7">Envoi du lien</button>
        <RouterLink to="/mail" class="col-span-12 mb-80 text-center"><h3 class="text-Gold">adresse e-mail oublié</h3></RouterLink>
    </div>
</template>