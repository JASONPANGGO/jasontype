function type(o) {
    if (o === null) return 'null'
    if (typeof o !== 'object') return typeof o
    return Object.prototype.toString.call(o).slice(8, -1)
}

module.exports = type