const PROJECT_PAGE = {
    qtd: 2,
    current: 1,
    totalPage: function(qtdpages) {
        if (this.current > qtdpages) {
            this.current = qtdpages || 1;
        }
        
        return Math.ceil(qtdpages / this.qtd);
    },
    start: function() {
        return (this.current - 1) * this.qtd;
    },
    end: function() {
        return this.start() + this.qtd;
    },
    visible: function(projects) {
        return projects.slice(this.start(), this.end());
    }
};

export { PROJECT_PAGE };