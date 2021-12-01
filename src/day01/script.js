function day01_part01(input) {
    var nbIncreased = 0
    var nbDecreased = 0

    for (var i in input) {
        i = parseInt(i)
        if (i == 0) { continue }
        if (input[i] > input[i - 1]) { nbIncreased += 1; continue }
        if (input[i] < input[i - 1]) { nbDecreased += 1; continue }
    }

    document.body.innerHTML += "<br>Part 01<br>"
    document.body.innerHTML += "Increased -> " + nbIncreased + "<br>"
    document.body.innerHTML += "Decreased -> " + nbDecreased + "<br>"
}

function day01_part02(input) {
    var nbIncreased = 0
    var nbDecreased = 0
    var lastSum = undefined
    var sum = 0

    for (var i in input) {
        i = parseInt(i)
        sum = input[i - 1] + input[i] + input[i + 1]
        if (sum > lastSum) { nbIncreased += 1 }
        if (sum < lastSum) { nbDecreased += 1 }
        lastSum = sum
    }

    document.body.innerHTML += "<br>Part 02<br>"
    document.body.innerHTML += "Increased -> " + nbIncreased + "<br>"
    document.body.innerHTML += "Decreased -> " + nbDecreased + "<br>"
}

function day01(input) {
    day01_part01(input)
    day01_part02(input)
}

fetch("./input.json")
    .then(response => {
        return response.json();
    })
    .then(data => day01(data));