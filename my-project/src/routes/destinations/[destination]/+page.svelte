<script>
    import {goto} from "$app/navigation"
    export let data
    const destinations = data.destinations
    $: destination = data.destination
</script>


<section class="flex flex-col justify-center items-center gap-5 p-2 ||
                tablet:grid tablet:grid-cols-2 ||
                 mobile:flex-col-reverse ||
                 desktop:px-10
                ">
    <div class="flex justify-center items-center"> 
        <img class="h-[180px] tablet:h-[250px] desktop:h-[350px]" src={destination.images.webp} alt={destination.name}>
    </div>
    <div class="px-16 flex flex-col mobile:flex-col-reverse || tablet:flex-col || desktop:px-20">
        <div class="flex justify-start gap-5 || tablet:mb-5 || mobile:mt-5">
            {#each destinations as destination }
                <button on:click={() => goto(`/destinations/${destination.name}`)} class="uppercase mobile:text-2x || laptop:text-xl">{destination.name}</button>
            {/each}
        </div>
        <div class="laptop:flex laptop:flex-col">
            <h1 class="ff-primary font-bold uppercase text-4xl text-center || mobile:mb-2 || laptop:text-left laptop:text-5xl">{destination.name}</h1>
            <p class="text-xs text-center || tablet:mb-5 || laptop:text-left laptop:leading-6 || desktop:text-lg">{destination.description}</p>
            <div class="h-[1px] w-full bg-slate-300 opacity-20 mb-2"></div>
           <div class="flex justify-evenly">
               <div>
                   <h2 class="text-slate-400 text-center uppercase || laptop:text-left laptop:mb-1 tracking-wider">Avg. distance</h2>
                   <h2 class="text-center upppercase ff-primary laptop:text-2xl laptop:text-left">{destination.distance}</h2>
                </div>
                <div>
                    <h2 class="text-slate-400 text-center uppercase || laptop:text-left laptop:mb-1 tracking-wider">Est. travel time</h2>
                    <h2 class="text-center upppercase ff-primary laptop:text-2xl laptop:text-left">{destination.travel}</h2>
                </div>
            </div>
        </div>
    </div> 
</section>