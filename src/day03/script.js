const div = document.getElementById('result')

function part01(input) {
    var resultBit = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        len = input.length,
        gamma = "",
        epsilon = ""

    for (var i in input) {
        for (var j in input[i]) { resultBit[j] += parseInt(input[i][j]) }
    }

    for (var k in resultBit) {
        if (resultBit[k] > len / 2) {
            gamma += "1"
            epsilon += "0"
        } else {
            gamma += "0"
            epsilon += "1"
        }
    }

    div.innerHTML += "Part 1<br>"
    div.innerHTML += "Gamma: " + gamma + "<br>"
    div.innerHTML += "Epsilon: " + epsilon + "<br>"
    div.innerHTML += "Result: " + parseInt(gamma, 2) * parseInt(epsilon, 2)
}

function getMax(input, colNb) {
    var col = "",
        nb1 = 0,
        nb0 = 0

    for (var i in input) { col += input[i][colNb] }
    for (var j in col) { if (col[j] == "0") { nb0++ } else { nb1++ } }

    return nb0 > nb1 ? "0" : "1"
}

function part02(input) {
    var oxygen = [...input],
        co2 = [...input],
        max

    for (var i = 0; i != 12; i++) {
        if (oxygen.length != 1) {
            max = getMax(oxygen, i)
            for (var j in oxygen) { if (oxygen[j][i] != max) { oxygen[j] = null } }
            oxygen = oxygen.filter(x => x !== null)
        }

        if (co2.length != 1) {
            max = getMax(co2, i)
            for (var k in co2) { if (co2[k][i] == max) { co2[k] = null } }
            co2 = co2.filter(x => x !== null)
        }
    }

    div.innerHTML += "<br><br>Part 2<br>"
    div.innerHTML += "Co2: " + co2[0] + "<br>"
    div.innerHTML += "Oxygen: " + oxygen[0] + "<br>"
    div.innerHTML += "Result: " + parseInt(co2[0], 2) * parseInt(oxygen[0], 2)
}


function day(input) {
    part01(input)
    part02(input)
}

fetch("./input.json")
    .then(response => {
        return response.json();
    })
    .then(data => day(data));