const div = document.getElementById('result')

const input = [
    ["[", "(", "{", "(", "<", "(", "(", ")", ")", "[", "]", ">", "[", "[", "{", "[", "]", "{", "<", "(", ")", "<", ">", ">"],
    ["[", "(", "(", ")", "[", "<", ">", "]", ")", "]", "(", "{", "[", "<", "{", "<", "<", "[", "]", ">", ">", "("],
    ["{", "(", "[", "(", "<", "{", "}", "[", "<", ">", "[", "]", "}", ">", "{", "[", "]", "{", "[", "(", "<", "(", ")", ">"],
    ["(", "(", "(", "(", "{", "<", ">", "}", "<", "{", "<", "{", "<", ">", "}", "{", "[", "]", "{", "[", "]", "{", "}"],
    ["[", "[", "<", "[", "(", "[", "]", ")", ")", "<", "(", "[", "[", "{", "}", "[", "[", "(", ")", "]", "]", "]"],
    ["[", "{", "[", "{", "(", "{", "}", "]", "{", "}", "}", "(", "[", "{", "[", "{", "{", "{", "}", "}", "(", "[", "]"],
    ["{", "<", "[", "[", "]", "]", ">", "}", "<", "{", "[", "{", "[", "{", "[", "]", "{", "(", ")", "[", "[", "[", "]"],
    ["[", "<", "(", "<", "(", "<", "(", "<", "{", "}", ")", ")", ">", "<", "(", "[", "]", "(", "[", "]", "(", ")"],
    ["<", "{", "(", "[", "(", "[", "[", "(", "<", ">", "(", ")", ")", "{", "}", "]", ">", "(", "<", "<", "{", "{"],
    ["<", "{", "(", "[", "{", "{", "}", "}", "[", "<", "[", "[", "[", "<", ">", "{", "}", "]", "]", "]", ">", "[", "]", "]"]
]

function checkCurrentState(checkValue, input) {
    if (input == "[" || input == "{" || input == "(" || input == "<") { return true }
    // console.log(checke, input)
    switch (input) {
        case ">":
            console.log(checkValue["<"], checkValue[">"], input)
            if (checkValue["<"] < checkValue[">"]) { return false }
            break
        case ")":
            console.log(checkValue["("], checkValue[")"], input)
            if (checkValue["("] < checkValue[")"]) { return false }
            break
        case "]":
            console.log(checkValue["["], checkValue["]"], input)
            if (checkValue["["] < checkValue["]"]) { return false }
            break
        case "}":
            console.log(checkValue["{"], checkValue["}"], input)
            if (checkValue["{"] < checkValue["}"]) { return false }
            break
        default:
            return true
    }
    return true
}

function day10(input) {
    console.log(input)
    var checkValue = { "[": 0, "(": 0, "{": 0, "<": 0, "]": 0, ")": 0, "}": 0, ">": 0 }


    for (var y = 0; y != input.length; y++) {
        console.log("nouvelle ligne")
        for (var x = 0; x != input[y].length; x++) {
            checkValue[input[y][x]] += 1
            if (!checkCurrentState(checkValue, input[y][x])) { console.log("il y a une erreur ici"); break }
        }
        // console.log(checkValue)
        checkValue = { "[": 0, "(": 0, "{": 0, "<": 0, "]": 0, ")": 0, "}": 0, ">": 0 }
    }
    // var lowPoints = searchLow(input)

    // div.innerHTML = "Part 1<br>"
    // div.innerHTML += checkRisk(lowPoints)
}


day10(input)

// fetch("./input.json")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => day10(data));