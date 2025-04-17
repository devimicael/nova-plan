import { genereteID } from "../util/generete-id.js";
import { getItem, setItem } from "./storage.js";

function addProject(project) {
    const data = getItem();
    
    if(!data) return;
    if(!data.projects) {
        data.projects = [];
    }

    data.projects.push(
        {
            id: genereteID(), 
            ...project, 
            status: "pending"
        }
    );
    setItem(data);
}

function getProjects() {
    const data = getItem();
    
    if(!data) return;

    return data;
}

export {
    addProject,
    getProjects
};