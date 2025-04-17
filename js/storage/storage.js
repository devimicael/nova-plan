const PROJECTS_KEY = "novaplan";

function initStorage() {
    const existing = getItem(PROJECTS_KEY);
    
    if(typeof existing !==  "object" || existing === null) {
        localStorage.setItem(PROJECTS_KEY, JSON.stringify({}));
    }
}

function getItem() {
    const item = localStorage.getItem(PROJECTS_KEY);
    if(!item) {
        return null;
    }

    try {
        return item ? JSON.parse(item): {};
    } catch (err) {
        console.warn(`ERROR: storege.getItem > Falha  ao fazer um parse de JSON para a chave (${key}): ${err}`);
        return {};
    }
}

function setItem(value) {
    try {
        localStorage.setItem(PROJECTS_KEY, JSON.stringify(value));
    } catch (err) {
        console.warn(`ERROR: storage.setItem > Falha ao serializar valor para a chave (${key}):`, err);
    }
}

export {
    initStorage,
    getItem,
    setItem
};