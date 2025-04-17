import { navigation } from "./navigation.js";
import { loadPage } from "./spa-loadpage.js";

export function initRouter() {
    const page = window.location.hash.replace("#", "") || "home";
    loadPage(page);

    window.addEventListener("hashchange", () => {
        const newPage = window.location.hash.replace("#", "") || "home";
        loadPage(newPage);
        navigation(newPage);
    });

    document.querySelectorAll("[data-page]").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            window.location.hash = page;
        });
    });

    window.addEventListener("popstate", (e) => {
        const page = e.state?.page || 'home';
        loadPage(page);
    });
}
