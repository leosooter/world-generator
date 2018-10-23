export const getInitialGrid = (xSquares, ySquares) => {
    console.log('creating grid', xSquares, ySquares);

    let gridArray = [];
    let linearArray = [];
    let index = 0;

    for (let x = 0; x < xSquares; x++) {
        let row = [];
        for (let y = 0; y < ySquares; y++) {
            const square = newSquare(index);
            if(y > 0) {
                square.w = row[y - 1];
                square.w.e = square;

                if (x > 0) {
                    square.nw = gridArray[x - 1][y - 1];
                    square.nw.se = square;
                }
            }
            if(x > 0) {
                square.n = gridArray[x - 1][y];
                square.n.s = square;

                if (y < ySquares - 1) {
                    square.ne = gridArray[x - 1][y + 1];
                    square.ne.sw = square;
                }
            }

            row.push(square);
            linearArray.push(square);
            index ++;
        }
        gridArray.push(row);
    }

    return linearArray
}

function newSquare(index) {
    return {
        elevation: 100,
        index,
        n: null,
        s: null,
        e: null,
        w: null,
        nw: null,
        ne: null,
        sw: null,
        se: null
    }
}

export const rainFrom = (start, length = 1, direction, grid) => {
    console.log('rainFrom', start, length, direction);

    const startLine = [];
    let current = start;
    while (length > 0) {
        console.log('loop', length);

        length --;
        current.elevation -= 50;
        if(current[direction]) {
            current = current[direction];
        }
    }

    return grid;

}
