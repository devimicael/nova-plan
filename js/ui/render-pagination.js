import { PROJECT_PAGE } from "../util/pageControl.js";
import { renderProjects } from "./render-projects.js";


function renderPaginationControls(container, totalPage) {
    const oldNav = container.querySelector(".nav-pagination-controls");
    if (oldNav) oldNav.remove();

    const nav = document.createElement("nav");
    nav.classList.add("nav-pagination-controls");

    for (let i = 1; i <= totalPage; i++) {
        const button = document.createElement("button");
        button.dataset.buttonPage = i;
        button.textContent = i;

        if (i === PROJECT_PAGE.current) {
            button.disabled = true;
        }

        button.addEventListener("click", () => {
            if (PROJECT_PAGE.current !== i) {
                PROJECT_PAGE.current = i;
                renderProjects();
            }
        });

        nav.appendChild(button);
    }
    container.appendChild(nav);
}


export { renderPaginationControls };