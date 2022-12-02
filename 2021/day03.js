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

    console.log(`Part 1: Gamma: ${gamma}, Epsilon: ${epsilon}, Result: ${parseInt(gamma, 2) * parseInt(epsilon, 2)}`)
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

    console.log(`Part 2: Oxygen: ${oxygen[0]}, CO2: ${co2[0]}, Result: ${parseInt(oxygen[0], 2) * parseInt(co2[0], 2)}`)
}

fetch("./docs/day03.json")
    .then(response => { return response.json(); })
    .then(data => {
        part01(data)
        part02(data)
    });