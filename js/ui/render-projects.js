import { getProjects } from "../storage/project-storage.js";
import { PROJECT_PAGE } from "../util/pageControl.js";
import { renderPaginationControls } from "./render-pagination.js";

function renderProjects() {
    const projectsContainer = document.querySelector(".projects-grid");
    const parser = new DOMParser();
    const projectsList = getProjects();
    const projectsRender = PROJECT_PAGE.visible(projectsList);
   
    projectsContainer.innerHTML = "";
    if(projectsList.length < 1) {
        projectsContainer.innerHTML = "<p>Projetos não encontrados!</p>";
        return;
    }

    projectsRender.forEach(project => {
        const projectCards = document.createElement("div");
        projectCards.classList.add("project-card");

        const html = `
        <h3 class="project-title">${project.name}</h3>
        <p class="task-count">Tasks: <span>${project.tasks.length}</span></p>
        <p class="status">Status: <span>${project.status}</span></p>
        <p class="project-description"><span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="12" viewBox="0 0 2 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
        </span>${project.description}</p>
        <div class="card-actions">
            <button class="btn-view-details" data-project-id="${project.id}">Details</button>
            <button class="btn-delete-project" data-project-id="${project.id}">Delete</button>
        </div>
        `;

        const doc = parser.parseFromString(html, "text/html");
        const elements = doc.body.children;
        Array.from(elements).forEach(element => {
            projectCards.appendChild(element);
        });
        projectsContainer.appendChild(projectCards);
    });

    renderPaginationControls(document.querySelector(".dashboard-container"), PROJECT_PAGE.totalPage(projectsList.length));
}

export { renderProjects };