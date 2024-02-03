<script>
    import { goto } from "$app/navigation";
    export let data
    $: person = data.person
    const crew = data.crew;

   
</script>

<main class="flex flex-col-reverse tablet:grid tablet:grid-cols-2 p-2 mobile:p-4 tablet:px-20 desktop:items-center">  
    <div class="flex flex-col-reverse laptop:flex-col">        
        <div>
            <h1 class="ff-primary text-center uppercase text-slate-500 mobile:text-2xl mobile:p-2 laptop:text-left">{person.role}</h1>
            <h2 class="ff-primary text-center uppercase text-xl mobile:text-3xl mobile:p-2 laptop:text-left">{person.name}</h2>
            <h3 class="para mobile:p-2 text-sm mobile:mt-2 || desktop:text-lg laptop:text-left">{person.bio}</h3>
        </div>
        <div class="flex justify-evenly items-center w-1/2 my-5 mx-auto || laptop:justify-start laptop:gap-5 laptop:mx-0">
            {#each crew as element}
                <button
                    on:click={() => goto(`/crew/${element.name}`)}
                    class="w-2 h-2 rounded-full bg-slate-500 hover:bg-white crew_buttons"
                ></button>
            {/each}
        </div>
    </div>
    <div>
        <img class="h-[150px] tablet:h-[250px] desktop:h-[350px] object-fit mx-auto" src={person.images.webp} alt={person.name}>
    </div>    
</main>

<style>
    .para{
        max-width: 400px;
        overflow-wrap: break-word;     
    }
</style>