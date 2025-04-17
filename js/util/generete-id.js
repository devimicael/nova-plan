function genereteID() {
    return `project-${crypto.randomUUID()}`;
}

export { genereteID };