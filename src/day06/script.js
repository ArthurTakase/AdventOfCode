const div = document.getElementById('result')
const input = [5, 1, 1, 1, 3, 5, 1, 1, 1, 1, 5, 3, 1, 1, 3, 1, 1, 1, 4, 1, 1, 1, 1, 1, 2, 4, 3, 4, 1, 5, 3, 4, 1, 1, 5, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 4, 2, 3, 2, 1, 4, 1, 1, 4, 2, 1, 4, 5, 5, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 5, 5, 1, 1, 4, 4, 5, 1, 1, 1, 3, 1, 5, 1, 2, 1, 5, 1, 4, 1, 3, 2, 4, 2, 1, 1, 4, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 3, 5, 4, 1, 1, 3, 1, 1, 1, 2, 1, 1, 1, 1, 5, 1, 1, 1, 4, 1, 4, 1, 1, 1, 1, 1, 2, 1, 1, 5, 1, 2, 1, 1, 2, 1, 1, 2, 4, 1, 1, 5, 1, 3, 4, 1, 2, 4, 1, 1, 1, 1, 1, 4, 1, 1, 4, 2, 2, 1, 5, 1, 4, 1, 1, 5, 1, 1, 5, 5, 1, 1, 1, 1, 1, 5, 2, 1, 3, 3, 1, 1, 1, 3, 2, 4, 5, 1, 2, 1, 5, 1, 4, 1, 5, 1, 1, 1, 1, 1, 1, 4, 3, 1, 1, 3, 3, 1, 4, 5, 1, 1, 4, 1, 4, 3, 4, 1, 1, 1, 2, 2, 1, 2, 5, 1, 1, 3, 5, 2, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 5, 4, 1, 1, 1, 1, 1, 2, 1, 2, 1, 5, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 3, 1, 5, 3, 3, 1, 1, 2, 4, 4, 1, 1, 2, 1, 1, 3, 1, 1, 1, 1, 2, 3, 4, 1, 1, 2]

function setFishValue(school) {
    var newSchool = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (var type in school) {
        type = parseInt(type)
        newSchool[type] = school[type + 1]
    }
    newSchool[6] += school[0]
    newSchool[8] = school[0]

    return newSchool
}

function parseFish(input) {
    var school = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (poisson in input) { school[input[poisson]] += 1 }
    return school
}

function day06(school) {
    var total = 0,
        part1 = undefined,
        totalPart1 = 0

    for (var day = 1; day <= 256; day++) {
        school = setFishValue(school)
        if (day == 80) { part1 = [...school] }
    }
    for (var i in school) { total += school[i] }
    for (var j in part1) { totalPart1 += part1[j] }

    div.innerHTML += "Part 1<br>Result: " + totalPart1
    div.innerHTML += "<br><br>Part 2<br>Result: " + total
}

day06(parseFish([...input]))