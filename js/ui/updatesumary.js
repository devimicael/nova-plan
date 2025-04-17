import { getProjects } from "../storage/project-storage.js";

function updatesumary() {
    const summaryContainer = document.querySelector('[data-sumary]');
    const data = getProjects();
    if(!data.projects) return;
    
    const filter = extractingData(data.projects);

    render(summaryContainer, filter);
}

function extractingData(object) {
    return {
        total: object.length,
        completed: object.filter(d => d.status === "completed"),
        pending: object.filter(d => d.status === "pending"),
        inProgress: object.filter(d => d.status === "in-progress")
    };
}

function render(container, data) {
    container.innerHTML = "";
    const parser = new DOMParser();

    const html = `
        <div class="summary-card">
            <h3>Total Projects</h3>
            <p data-total="total-projects">${data.total}</p>
         </div>

         <div class="summary-card">
            <h3>Completed</h3>
            <p data-total="completed-projects">${data.completed.length}</p>
          </div>

         <div class="summary-card">
            <h3>Pending</h3>
            <p data-total="pending-projects">${data.pending.length}</p>
        </div>

         <div class="summary-card">
            <h3>In Progress</h3>
            <p data-total="in-progress-projects">${data.inProgress.length}</p>
         </div>    
    `;

    const newDOM = parser.parseFromString(html, "text/html");
    const elements = newDOM.body.children;
    Array.from(elements).forEach(el => {
        container.appendChild(el);
    });
}


export { updatesumary };