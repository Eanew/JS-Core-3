Array.prototype.myFilter = function(callback, ctx = null) {
    const result = []

    for (let i = 0; i < this.length; i++) {
        if (callback.call(ctx, this[i], i, this)) result.push(this[i])
    }

    return result
}


const createDebounceFunction = (callback, ms) => {
    let timeout = null

    return () => {
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(callback, ms)
    }
}

module.exports = {
    myFilter: Array.prototype.myFilter,
    createDebounceFunction,
}
