import outsideclick from "../util/outsideclick.js";

export default function menu() {
    const button = document.querySelector('[data-button="menu"]');
    const menu = document.querySelector("#menu");
    const events = ["click", "touchstart"];

    function handleOpenMenu() {
        button.classList.add("active");
        menu.classList.add("active");

        outsideclick(menu, events, () => {
            button.classList.remove("active");
            menu.classList.remove("active");
        });
    }

    events.forEach(event => {
        button.addEventListener(event, handleOpenMenu);
    });
}