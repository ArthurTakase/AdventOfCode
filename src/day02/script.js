const div = document.getElementById('result')

function day02_part01(input) {
    var y = 0,
        x = 0

    for (var i in input) {
        i = parseInt(i)
        var data = input[i].split(" ")
        var value = parseInt(data[1])

        switch (data[0]) {
            case "forward":
                x += value
                break
            case "up":
                y -= value
                break
            case "down":
                y += value
                break
        }
    }

    div.innerHTML += "Part 1<br>"
    div.innerHTML += "X: " + x + ", Y: " + y + "<br>"
    div.innerHTML += "Result: " + x * y
}

function day02_part02(input) {
    var y = 0,
        x = 0,
        aim = 0

    for (var i in input) {
        i = parseInt(i)
        var data = input[i].split(" ")
        var value = parseInt(data[1])

        switch (data[0]) {
            case "forward":
                x += value;
                y += aim * value
                break
            case "up":
                aim -= value;
                break
            case "down":
                aim += value;
                break
        }
    }

    div.innerHTML += "<br><br>Part 2<br>"
    div.innerHTML += "X: " + x + ", Y: " + y + "<br>"
    div.innerHTML += "Result: " + x * y
}


function day02(input) {
    day02_part01(input)
    day02_part02(input)
}

fetch("./input.json")
    .then(response => {
        return response.json();
    })
    .then(data => day02(data));