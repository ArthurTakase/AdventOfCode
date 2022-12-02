function searchLow(input) {
    var lowValue = []

    for (var y = 0; y != input.length; y++) {
        for (var x = 0; x != input[y].length; x++) {
            var thisCase = []
            var temp = 0

            try { thisCase.push(input[y - 1][x]) } catch (e) {}
            try { thisCase.push(input[y + 1][x]) } catch (e) {}
            try { thisCase.push(input[y][x - 1]) } catch (e) {}
            try { thisCase.push(input[y][x + 1]) } catch (e) {}
            thisCase = thisCase.filter(x => x !== undefined)
            for (var i = 0; i != thisCase.length; i++) { if (thisCase[i] > input[y][x]) { temp += 1 } }
            if (temp == thisCase.length) { lowValue.push(input[y][x]) }
        }
    }

    return lowValue
}

function checkRisk(lowValue) {
    var result = 0
    for (var i = 0; i != lowValue.length; i++) { result += parseInt(lowValue[i]) + 1 }
    return result
}

fetch("./input.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        var lowPoints = searchLow(input)
        console.log(`Part 1: ${checkRisk(lowPoints)}`)
    });