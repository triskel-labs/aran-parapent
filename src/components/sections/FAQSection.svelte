<script>
	import ContactModal from "../ContactModal.svelte";

    let showModal = $state(false);

    const recomendations = [
        {description: "Tener entre 15 y 65 años preferiblemente, no obligatorio", icon: "/svg/id.svg"},
        {description: "Ropa cómoda para actividad deportiva en la montaña", icon: "/svg/mountain.svg"},
        {description: "Recomendado abrigo y manga larga, incluso en verano", icon: "/svg/clothes.svg"},
        {description: "Nosotros te proporcionamos casco y material de seguridad", icon: "/svg/safety.svg"},
        {description: "Ganas de disfrutar y ver todo desde otra perspectiva", icon: "/svg/perspective.svg"},
        {description: "Practicar tu mejor graznido de buitre pirenaico", icon: "/svg/bird.svg"}
    ];
</script>

<section id="faq-section" class="bg-neutral-200 w-full h-full flex flex-col justify-center items-center pt-16 lg:pt-26 pb-20 gap-8">
    <div class="w-full max-w-6xl flex flex-col px-4 gap-8">
        <h1 class="sifon text-center  text-3xl lg:text-4xl text-neutral-900 pt-8 lg:pt-0">
            ¿QUÉ NECESITAS PARA VOLAR?
        </h1>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 py-6">
            {#each recomendations as { description, icon }}
                <div class="group card flex flex-col bg-neutral-50 shadow-lg rounded-lg p-6 gap-4 transition-all">
                    <img src={icon} alt="Recomendation to fly" class="size-8 lg:size-10 opacity-80 mx-auto group-hover:invert transition-all">
                    <p class="font-sans text-md lg:text-lg text-neutral-800 group-hover:text-neutral-50 text-center transition-all">{description}</p>
                </div>
            {/each}
        </div>
    </div>
    <button onclick={() => showModal = true} class="cta-button-secondary w-fit self-center px-8 py-1" aria-label="Quiero Volar">Quiero Volar</button>
</section>

{#if showModal}
    <ContactModal bind:showModal={showModal} title="Reserva tu Vuelo"/>
{/if}
<style>
    .card:hover {
        background: var(--ctaSecondaryGradient);
    }
</style>