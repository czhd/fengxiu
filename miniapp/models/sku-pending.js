class SkuPending {
    pending = []

    constructor() {
    }

    insertCell(cell, x) {
        this.pending[x] = cell
    }

    removeCell(x) {
        this.pending[x] = null
    }
}

export {
    SkuPending
}