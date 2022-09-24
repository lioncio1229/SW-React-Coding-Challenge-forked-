

const getRandomizeIndixes = (max, outputCount) => {
    const indixes = []

    while(indixes.length < outputCount)
    {
        const v = Math.floor(Math.random() * max)
        if(!indixes.includes(v)) indixes.push(v)
    }
    return indixes
}
 
export default getRandomizeIndixes;