import { addProject } from "../storage/project-storage.js";
import { updatesumary } from "../ui/updatesumary.js";

function projectForm() {
    const form = document.querySelector(".project-form");

    if(!form) {
        return;
    }

    function handleSubmit(e) {
        e.preventDefault();        
        
        const data = new FormData(this);
        const responseData = Object.fromEntries(data);
        addProject(responseData);
        updatesumary();
    }

    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);

    newForm.addEventListener("submit", handleSubmit, {once: true});
}

export {
    projectForm
};