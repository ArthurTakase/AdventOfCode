function compare(a, b, type) {
    a = a.split("")
    b = b.split("")
    if (type == "strict" && a.length != b.length) { return false }
    for (var i in b) { if (!a.includes(b[i])) { return false } }
    return true
}

function difference(str1, str2) {
    let diff = [];

    str2.split('').forEach(function(val, i) { if (!str1.includes(val)) { diff.push(val) } })
    str1.split('').forEach(function(val, i) { if (!str2.includes(val)) { diff.push(val) } })
    return diff.join('');
}

function findNumber(pattern) {
    var response = ["", "", "", "", "", "", "", "", "", ""],
        len6 = [],
        len5 = []

    for (var i in pattern) {
        if (pattern[i].length == 3) { response[7] = pattern[i] }
        if (pattern[i].length == 4) { response[4] = pattern[i] }
        if (pattern[i].length == 2) { response[1] = pattern[i] }
        if (pattern[i].length == 7) { response[8] = pattern[i] }
        if (pattern[i].length == 5) { len5.push(pattern[i]) }
        if (pattern[i].length == 6) { len6.push(pattern[i]) }
    }

    for (var j in len5) {
        if (compare(len5[j], response[1])) {
            response[3] = len5[j];
            len5.splice(j, 1);
            break
        }
    }

    for (var k in len6) {
        if (!compare(len6[k], response[1])) {
            response[6] = len6[k];
            len6.splice(k, 1);
            break
        }
    }

    var is2 = compare(len5[0], response[1])
    response[2] = is2 ? len5[0] : len5[1]
    if (is2) { len5.splice(0, 1) } else { len5.splice(1, 1) }
    response[5] = len5[0]
    var is9 = compare(len6[0], response[5] + response[1])
    response[9] = is9 ? len6[0] : len6[1]
    if (is9) { len6.splice(0, 1) } else { len6.splice(1, 1) }
    response[0] = len6[0]

    return response
}

function getDigit(pattern, digits) {
    var result = ""

    for (var i in digits) {
        for (var j in pattern) {
            if (compare(digits[i], pattern[j], "strict")) {
                result += j
                break
            }
        }
    }

    return parseInt(result)
}

fetch("./docs/day08.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        var pattern
        var result = 0

        for (var i in data) {
            pattern = findNumber(data[i][0])
            var temp = getDigit(pattern, data[i][1])
            result += temp
            console.log(data[i][1], temp)
        }

        console.log(`Part 2: ${result}`)
    });