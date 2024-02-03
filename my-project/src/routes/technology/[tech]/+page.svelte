<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    export let data;
    $: tech = data.tech;
    const { technology } = data;
    $: TechImage = ""
    $: width = 1280
    
    onMount(() => {
        width = window.outerWidth 
        function handleResize(){
            width = window.outerWidth;
        }
        window.addEventListener("resize", handleResize)
    })
    $: if(width < 768){TechImage = tech.images.landscape}
        else{TechImage = tech.images.portrait}
</script>

<section>
    <div class="laptop:flex laptop:flex-row-reverse laptop:justify-evenly laptop:items-center laptop:mt-10 laptop:pl-20 || desktop:pl-20">
        <div>
            <img class="desktop:h-96" src={TechImage} alt={tech.name}>
        </div>
        <div class="laptop:flex laptop:flex-row">
            <div class="flex-center gap-10 my-2 laptop:flex-col">
                {#each technology as tech, i}
                    <button class="flex-center rounded-full bg-black text-white border-solid border-white border-[1px] h-8 w-8 hover:bg-white hover:text-black || desktop:h-12 desktop:w-12" on:click={() => goto(`/technology/${tech.name}`)}>{i + 1}</button>
                {/each}
            </div>
            <div class="laptop:px-20 desktop:text-start">
                <h2 class="font-light uppercase text-center tracking-widest || desktop:text-start">The terminology...</h2>
                <h1 class="ff-primary text-lg uppercase text-center tracking-widest py-5 || laptop:text-3xl desktop:text-start desktop:text-4xl">{tech.name}</h1>
                <p class="text-xs font-normal text-center || laptop:text-md laptop:leading-5 laptop:pr-20 laptop:text-sm laptop:text-start || desktop:leading-10 para">{tech.description}</p>
            </div>
        </div>
    </div>
</section>

<style>
    .para{
        max-width: 400px;
        overflow-wrap: break-word;
        word-wrap: break-word;
    }
</style>