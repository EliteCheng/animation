
export function generateRandom(start = 0, end = 1) {
    if (end <= start) return Math.random()
    return Math.random() * (end - start) + start
}