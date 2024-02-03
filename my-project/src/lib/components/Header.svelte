<script>
    import logo from "../assets/shared/logo.svg";
    import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
    import { base } from "$app/path";

    function handleHamburger() {
        const nav = document.getElementsByClassName("nav")[0];
        const hamburger = document.getElementsByClassName("hamburger")[0];
        const x = document.getElementsByClassName("x")[0];
        nav.style.display = "block";
        hamburger.style.display = "none";
        x.style.display = "block";
    }
    function handleExit() {
        const hamburger = document.getElementsByClassName("hamburger")[0];
        const nav = document.getElementsByClassName("nav")[0];
        nav.style.display = "none";
        hamburger.style.display = "block";
    }
</script>

<header
    class="flex justify-between items-center mb-5 tablet:mb-16 bg-transparent relative"
>
    <a href="/">
        <img src={logo} alt={logo} />
    </a>
    <div
        class="h-[1px] w-1/3 bg-white hidden desktop:block desktop:-translate-x-32 z-20"
    ></div>
    <nav class="px-10 nav hidden tablet:block">
        <ul
            class="flex flex-col justify-center items-center h-screen blurred absolute right-0 top-0 z-10 gap-4 p-5 || tablet:flex-row tablet:justify-between tablet:h-20 tablet:-translate-y-4 tablet:w-[35rem] tablet:px-20"
        >
            <button
                class="hidden x absolute top-5 right-5"
                on:click={handleExit}>X</button
            >
            <li>
                <a
                    class="py-5 hover:border-b-2 hover:border-white hover:border-solid transition-all text-sm w-[100px]"
                    href="/"><strong>00</strong> HOME</a
                >
            </li>
            <li>
                <a
                    class="py-5 hover:border-b-2 hover:border-white hover:border-solid transition-all text-sm w-[100px]"
                    href="/destinations/Moon"
                    ><strong>01</strong> DESTINATIONS</a
                >
            </li>
            <li>
                <a
                    class="py-5 hover:border-b-2 hover:border-white hover:border-solid transition-all text-sm w-[100px]"
                    href="/crew/Douglas%20Hurley"><strong>02</strong> CREW</a
                >
            </li>
            <li>
                <a
                    class="py-5 hover:border-b-2 hover:border-white hover:border-solid transition-all text-sm w-[100px]"
                    href="/technology/Launch%20vehicle"
                    ><strong>03</strong> TECHNOLOGY</a
                >
            </li>
        </ul>
    </nav>
    <button class="tablet:hidden hamburger" on:click={handleHamburger}>
        <img src={hamburgerIcon} alt={hamburgerIcon} />
    </button>
</header>

<style>
    .blurred {
        background-color: hsl(0, 0%, 100%, 0.1);
        backdrop-filter: blur(10px);
    }
</style>
