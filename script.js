const canvas = document.querySelector(`.container`)

for (let rowIndex = 0; rowIndex < 16; rowIndex++) {
    const row = document.createElement(`div`)
    row.classList.add(`row`)
    row.classList.add(`row-${rowIndex+1}`)
    canvas.appendChild(row)
    let currentRowIndex = `row-${rowIndex+1}`
    for (let index = 0; index < 16; index++) {
        const grid = document.createElement(`div`)
        grid.classList.add(`grid`)
        grid.classList.add(`grid-${index+1}`)
        console.log(grid)
        row.appendChild(grid)
        console.log(row)
    }
    
}
