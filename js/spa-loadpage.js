import { updatesumary } from "./ui/updatesumary.js";

export function loadPage(page) {
    updatesumary();
    const container = document.querySelector("[data-container='dynamic']");
    
    const files = page === "home" ? "../index":  page;

    fetch(`./pages/${files}.html`)
        .then(res => {
            if(!res.ok) {
                throw new Error(`Página ${files} não encontrada!`);
            }

            return res.text();
        }).then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
           
            const newContainer = doc.querySelector("[data-container='dynamic']");
            if(!newContainer) {
                container.innerHTML = `<p class="err">Página não encontrada!</p>`;
                return null;
            }

            container.innerHTML = newContainer.innerHTML;

            if(page === "projects") {
                import("./forms/projects-form.js").then(module => {
                    module.projectForm();
                });
            }

        }).catch(err => {
            container.innerHTML = `<p class="err">Erro: ${err.message}</p>`;
        });
}