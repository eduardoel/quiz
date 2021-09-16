export function shuffle(element: any[]): any[] {
    return element
    .map(value => ({value, random: Math.random()}))
    .sort((objA, objB) => objA.random - objB.random)
    .map(obj => obj.value)
}