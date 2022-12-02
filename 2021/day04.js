const order = [4, 77, 78, 12, 91, 82, 48, 59, 28,
    26, 34, 10, 71, 89, 54, 63, 66, 75,
    15, 22, 39, 55, 83, 47, 81, 74, 2,
    46, 25, 98, 29, 21, 85, 96, 3, 16,
    60, 31, 99, 86, 52, 17, 69, 27, 73,
    49, 95, 35, 9, 53, 64, 88, 37, 72,
    92, 70, 5, 65, 79, 61, 38, 14, 7,
    44, 43, 8, 42, 45, 23, 41, 57, 80,
    51, 90, 84, 11, 93, 40, 50, 33, 56,
    67, 68, 32, 6, 94, 97, 13, 87, 30,
    18, 76, 36, 24, 19, 20, 1, 0, 58, 62
]

function removeNumberFromArray(array, number) {
    for (var line in array) {
        for (var col in array[line]) {
            if (array[line][col] == number) { array[line][col] = null }
        }
    }
    return array
}

function checkLine(array) {
    for (var col = 0; col != 5; col++) { if (array[col] != null) { return false } }
    return true
}

function checkCol(array, i) {
    for (line = 0; line != 5; line++) { if (array[line][i] != null) { return false } }
    return true
}

function checkVictory(array) {
    for (var i = 0; i != 5; i++) {
        if (checkLine(array[i])) { return true }
        if (checkCol(array, i)) { return true }
    }
    return false
}

function bingo(input) {
    for (var draw in order) {
        for (var array in input) {
            input[array] = removeNumberFromArray(input[array], order[draw])
            if (checkVictory(input[array])) { return [input[array], order[draw], array] }
        }
    }
    return false
}

function score(best) {
    var somme = 0

    for (var line in best[0]) {
        for (var col in best[0][line]) {
            somme += best[0][line][col] == null ? 0 : best[0][line][col]
        }
    }

    return [somme, somme * best[1]]
}

function part01(input) {
    var best = bingo(input)
    var result = score(best)

    console.log(`Part 1: Somme: ${result[0]}, Result: ${result[1]}`)
}


function part02(input) {
    while (input.length != 0) {
        var best = bingo(input)
        input.splice(parseInt(best[2]), 1)
    }

    var result = score(best)

    console.log(`Part 2: Somme: ${result[0]}, Result: ${result[1]}`)
}

fetch("./docs/day04.json")
    .then(response => { return response.json(); })
    .then(data => {
        part01(data)
        part02([...data])
    });