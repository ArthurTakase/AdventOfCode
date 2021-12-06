const div = document.getElementById('result')
const max = 989

function generateTab() {
    result = []

    for (var i = 0; i != max + 1; i++) {
        var temp = []
        for (var j = 0; j != max + 1; j++) { temp.push(0) }
        result.push(temp)
    }

    return result
}

function changeAxis(result, start, end, fixe, axe) {
    var sens = start < end ? "plus" : "moins"

    while (start != end) {
        if (axe == "x") { result[fixe][start] += 1 }
        if (axe == "y") { result[start][fixe] += 1 }
        start = sens == "plus" ? start + 1 : start - 1
    }
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
        var x1 = input[k][0][0],
            y1 = input[k][0][1],
            x2 = input[k][1][0],
            y2 = input[k][1][1]

        if (x1 == x2 || y1 == y2) {
            result[y2][x2] += 1
            changeAxis(result, y1, y2, x1, "y")
            changeAxis(result, x1, x2, y1, "x")
        }
    }

    div.innerHTML += "Part 1<br>"
    div.innerHTML += "Result: " + getMax(result)
}

function part02(input, result) {
    for (var k in input) {
        var x1 = input[k][0][0],
            y1 = input[k][0][1],
            x2 = input[k][1][0],
            y2 = input[k][1][1]

        if (x1 == x2 || y1 == y2) {
            result[y2][x2] += 1
            changeAxis(result, y1, y2, x1, "y")
            changeAxis(result, x1, x2, y1, "x")
        } else { drawDiag(x1, y1, x2, y2, result) }
    }

    div.innerHTML += "<br><br>Part 2<br>"
    div.innerHTML += "Result: " + getMax(result)
}


function day(input) {
    part01(input, generateTab())
    part02(input, generateTab())
}

fetch("./input.json")
    .then(response => {
        return response.json();
    })
    .then(data => day(data));