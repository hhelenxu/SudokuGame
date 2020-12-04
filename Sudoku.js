// improvement- check if valid answer (backtracking) if doesn't match answer key
// more efficient way of randomly generating boards
const GRIDSIZE = 9;
const SUBGRIDSIZE = 3;
var nums = [1,2,3,4,5,6,7,8,9];
var board, answer, byGrid, numBlank, numLeft;
var numSelected;

//generate valid Sudoku board
export const generatePuzzle = (numMissing) => {
    numLeft = numBlank = numMissing;
    board = [0,0,0,0,0,0,0,0,0];  // might be unnecessary
    answer = [];
    byGrid = [[],[],[],[],[],[],[],[],[]];

    for (var i=0;i<GRIDSIZE;i++) {
        answer.push([0,0,0,0,0,0,0,0,0]);
    }

    fillDiagonals();
    fillRemaining(0,SUBGRIDSIZE);

    convertToGrid(answer);
    //assignMissingValues();
}

function fillDiagonals() {
    for (var i=0;i<GRIDSIZE;i+=SUBGRIDSIZE) {
        var frequency = [0,0,0,0,0,0,0,0,0];
        for (var r=0;r<SUBGRIDSIZE;r++) {
            for (var c=0;c<SUBGRIDSIZE;c++) {
                var n = Math.floor(Math.random()*9)+1;
                while (frequency[n-1]!=0)
                    n = Math.floor(Math.random()*9)+1;
                answer[i+r][i+c] = n;
                frequency[n-1]++;
            }
        }
    }
}

function fillRemaining(row, col) {
    //board is completely filled
    if (row>=GRIDSIZE && col>=GRIDSIZE)
        return true;

    //if at end of row, move to next one
    if (col>=GRIDSIZE && row<GRIDSIZE-1) {
        row++;
        col=0;
    }

    if (row<SUBGRIDSIZE) {
        if (col<SUBGRIDSIZE)
            col=SUBGRIDSIZE;
    }
    else if (row<GRIDSIZE-SUBGRIDSIZE) {
        if (col==Math.floor(row/SUBGRIDSIZE)*SUBGRIDSIZE)
            col+=SUBGRIDSIZE;
    }
    else {
        if (col==GRIDSIZE-SUBGRIDSIZE) {
            row++;
            col = 0;
            if (row>=GRIDSIZE)
                return true;
        }
    }

    // recursively fill in missing values
    for (var i=1;i<=GRIDSIZE;i++) {
        if (isSafe(row, col, i)) {
            answer[row][col] = i;
            if (fillRemaining(row, col+1))
                return true;
            
            answer[row][col] = 0;
        }
        
    }
    return false;
}

function isSafe(row, col, num) {
    var inRow = true;
    var inCol = true;
    var inGrid = true;

    //check in row and column
    for (var i=0;i<GRIDSIZE && (inRow||inCol);i++) {
        if (answer[row][i]===num)
            inRow = false;
        if (answer[i][col]===num)
            inCol = false;
    }

    //check in grid
    var rowStart = row-row%SUBGRIDSIZE;
    var colStart = col-col%SUBGRIDSIZE;
    for (var i=0;i<SUBGRIDSIZE && inGrid;i++) {
        for (var j=0;j<SUBGRIDSIZE && inGrid;j++) {
            if (answer[rowStart+i][colStart+j]===num)
                inGrid = false;
        }
    }

    return inRow && inCol && inGrid;
}

//organizes values in arrays of 3 by 3 squares
function convertToGrid(array) {
    // byGrid = answer;
    for (var i=0;i<GRIDSIZE;i++) {
        for (var j=0;j<GRIDSIZE;j++) {
            var row = i < 3 ? 0 : (i < 6 ? 1 : 2);
            var col = j < 3 ? 0 : (j < 6 ? 1 : 2);
            byGrid[row*SUBGRIDSIZE+col].push(array[i][j]);
        }
    }
}

//get function for numbers by Grid
export const getGrid = (gridNum) => {
    return byGrid[gridNum];
}

//choose spots to be filled in by user
function assignMissingValues() {
    
}

//each time user inputs number
export const update = (row, col) => {
    numLeft--;

    //update value in board
    byGrid[row][col] = numSelected;
    if (numLeft===0)
        finished();
}

//checks if the game is over
function finished() {
    //check if answers are valid then use Modal for popup
    
}

//if new value selected
export const changeSelected = (num) => {
    numSelected = num;
}

export const getSelectedNumber = () => {
    return numSelected;
}