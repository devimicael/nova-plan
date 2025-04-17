import { loadPage } from "./spa-loadpage.js";

export function navigation(page) {
    loadPage(page);
    history.pushState({page}, "", `#${page}`);
}