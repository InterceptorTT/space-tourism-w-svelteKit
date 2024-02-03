<script>
    import "../app.css";
    import {onMount} from "svelte"
    import Header from "$lib/components/Header.svelte";
    import bgHomeDesktop from "$lib/assets/home/background-home-desktop.jpg"
    import bgHomeTablet from "$lib/assets/home/background-home-tablet.jpg"
    import bgHomeMobile from "$lib/assets/home/background-home-mobile.jpg"
    import bgDestinationDesktop from "$lib/assets/destination/background-destination-desktop.jpg"
    import bgDestinationTablet from "$lib/assets/destination/background-destination-tablet.jpg"
    import bgDestinationMobile from "$lib/assets/destination/background-destination-mobile.jpg"
    import bgTechDesktop from "$lib/assets/technology/background-technology-desktop.jpg"
    import bgTechTablet from "$lib/assets/technology/background-technology-tablet.jpg"
    import bgTechMobile from "$lib/assets/technology/background-technology-mobile.jpg"
    import bgCrewDesktop from "$lib/assets/crew/background-crew-desktop.jpg"
    import bgCrewTablet from "$lib/assets/crew/background-crew-tablet.jpg"
    import bgCrewMobile from "$lib/assets/crew/background-crew-mobile.jpg"
    import {page} from "$app/stores"
    
    let backGroundImage = ""
    let width = 1280
    
    
    onMount(() => {
        width = window.outerWidth
        
        function handleResize(){
            width = window.outerWidth;
        }
        window.addEventListener("resize", handleResize)
    })

    
    $: {
        const pageID = $page.route.id
        switch(pageID){
        case "/":
            backGroundImage = width < 376 ? `url(${bgHomeMobile})`:
                              width >= 376 && width < 767 ? `url(${bgHomeTablet})`:
                              width >= 768 ? `url(${bgHomeDesktop})`: "";
                                break;
        case "/technology/[tech]":
            backGroundImage = width < 376 ? `url(${bgTechMobile})`:
                              width >= 376 && width < 767 ? `url(${bgTechTablet})`:
                              width >= 768 ? `url(${bgTechDesktop})`: "";
                                break;
        case "/destinations/[destination]":
            backGroundImage = width < 376 ? `url(${bgDestinationMobile})`:
                              width >= 376 && width < 767 ? `url(${bgDestinationTablet})`:
                              width >= 768 ? `url(${bgDestinationDesktop})`: "";
                                break;
        case "/crew/[name]" :
            backGroundImage = width < 376 ? `url(${bgCrewMobile})`:
                              width >= 376 && width < 767 ? `url(${bgCrewTablet})`:
                              width >= 768 ? `url(${bgCrewDesktop})`: "";
                                break;

    }
}
</script>

<main class='bg-black text-white h-full p-8' style="background-image:{backGroundImage} ">
    <Header/>
    <section class="flex justify-center items-center flex-col mobile:text-sm">
        <slot/>
    </section>
</main>

