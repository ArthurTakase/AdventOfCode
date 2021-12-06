const div = document.getElementById('result')
const max = 989
    // const max = 9

// var input = [
//     [
//         [0, 9],
//         [5, 9]
//     ],
//     [
//         [8, 0],
//         [0, 8]
//     ],
//     [
//         [9, 4],
//         [3, 4]
//     ],
//     [
//         [2, 2],
//         [2, 1]
//     ],
//     [
//         [7, 0],
//         [7, 4]
//     ],
//     [
//         [6, 4],
//         [2, 0]
//     ],
//     [
//         [0, 9],
//         [2, 9]
//     ],
//     [
//         [3, 4],
//         [1, 4]
//     ],
//     [
//         [0, 0],
//         [8, 8]
//     ],
//     [
//         [5, 5],
//         [8, 2]
//     ]
// ]

function generateTab() {
    result = []

    for (var i = 0; i != max + 1; i++) {
        var temp = []
        for (var j = 0; j != max + 1; j++) { temp.push(0) }
        result.push(temp)
    }

    return result
}

function changeY(result, start, end, x) {
    var y = start
    var sens = start < end ? "plus" : "moins"

    while (start != end) {
        y = start
        result[y][x] += 1
        start = sens == "plus" ? start + 1 : start - 1
    }
}

function changeX(result, start, end, y) {
    var x = start
    var sens = start < end ? "plus" : "moins"

    while (start != end) {
        x = start
        result[y][x] += 1
        start = sens == "plus" ? start + 1 : start - 1
    }
}

function getMax(result) {
    var myCount = 0

    for (var i = 0; i != max + 1; i++) {
        for (var j = 0; j != max + 1; j++) {
            if (result[j][i] >= 2) { myCount++ }
        }
    }

    return myCount
}

function part01(input, result) {
    for (var k in input) {
        if (input[k][0][0] == input[k][1][0] || input[k][0][1] == input[k][1][1]) {
            result[input[k][1][1]][input[k][1][0]] += 1
            changeY(result, input[k][0][1], input[k][1][1], input[k][0][0])
            changeX(result, input[k][0][0], input[k][1][0], input[k][0][1])
        }
    }

    div.innerHTML += "Part 1<br>"
    div.innerHTML += "Result: " + getMax(result)
}

function drawDiag(x1, y1, x2, y2, result) {
    var xsens = x1 < x2 ? "plus" : "moins",
        ysens = y1 < y2 ? "plus" : "moins",
        len = xsens == "plus" ? x2 - x1 + 1 : x1 - x2 + 1

    for (var i = 0; i != len; i++) {
        result[y1][x1] += 1
        x1 = xsens == "plus" ? x1 + 1 : x1 - 1
        y1 = ysens == "plus" ? y1 + 1 : y1 - 1
    }
}


function part02(input, result) {

    console.log("part 02")

    for (var k in input) {
        var x1 = input[k][0][0],
            y1 = input[k][0][1],
            x2 = input[k][1][0],
            y2 = input[k][1][1]

        if (x1 == x2 || y1 == y2) {
            console.log("line")
            result[input[k][1][1]][input[k][1][0]] += 1
            changeY(result, y1, y2, x1)
            changeX(result, x1, x2, y1)
        } else { drawDiag(x1, y1, x2, y2, result) }
    }

    div.innerHTML += "<br><br>Part 2<br>"
    div.innerHTML += "Result: " + getMax(result)
}


function day(input) {
    part01(input, generateTab())
    part02(input, generateTab())
}

// day(input)

fetch("./input.json")
    .then(response => {
        return response.json();
    })
    .then(data => day(data));