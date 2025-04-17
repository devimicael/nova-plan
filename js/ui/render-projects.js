import { getItem } from "../storage/storage.js";

function renderProjects() {
    const parser = new DOMParser();
    const projectsContainer = document.querySelector(".projects-grid");
    const data = getItem();

    projectsContainer.innerHTML = "";

    if(data.projects.length < 1) {
        projectsContainer.innerHTML = "<p>Projetos não encontrados!</p>";
        return;
    }

    data.projects.forEach(project => {
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
}

export { renderProjects };