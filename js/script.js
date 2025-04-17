import { initRouter } from "./router.js";
import { initStorage } from "./storage/storage.js";
import { updatesumary } from "./ui/updatesumary.js";


import menu from "./components/menu.js";

menu();

document.addEventListener("DOMContentLoaded", () => {
    initStorage();
    initRouter();
    updatesumary()
});